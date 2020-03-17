package com.BankingApplication.BankingApplication.Service;

import com.BankingApplication.BankingApplication.Model.*;
import com.BankingApplication.BankingApplication.Repository.ACARepository;
import com.BankingApplication.BankingApplication.Repository.AccountRepository;
import com.BankingApplication.BankingApplication.Repository.AccountTransactionRepository;
import com.BankingApplication.BankingApplication.Repository.CustomerRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.time.LocalDateTime;
import java.time.YearMonth;
import java.time.ZoneId;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;

@Service
@Slf4j
public class AccountTransactionService {
    @Autowired
    private AccountTransactionRepository accountTransactionRepository;
    @Autowired
    private ACARepository acaRepository;
    @Autowired
    private CustomerRepository customerRepository;
    @Autowired
    private AccountRepository accountRepository;

    public List<AccountTransaction> findAll() {
        List<AccountTransaction> accountTransactions = new ArrayList<>();
        accountTransactionRepository.findAll().forEach(accountTransactions::add);
        return accountTransactions;
    }
    public List<ViewAllDetailsDTO> findAllDetailedAccountTransactions(){
        List<AccountTransaction> accountTransactions = new ArrayList<>();
        accountTransactionRepository.findAll().forEach(accountTransactions::add);
        List<ViewAllDetailsDTO> viewAllDetailsDTOList = new ArrayList<>();
        for (AccountTransaction accountTransaction : accountTransactions) {
            viewAllDetailsDTOList.add(ViewAllDetailsDTO.builder()
                    .acaID(accountTransaction.getAca().getAcaID())
                    .acaName(accountTransaction.getAca().getAcaName())
                    .acaBirthDate(accountTransaction.getAca().getAcaBirthDate())
                    .acaPhoneNum(accountTransaction.getAca().getAcaPhoneNum())
                    .acaEmail(accountTransaction.getAca().getAcaEmail())
                    .acaAddress(accountTransaction.getAca().getAcaAddress())
                    .customerID(accountTransaction.getAccount().getCustomer().getCustomerID())
                    .customerName(accountTransaction.getAccount().getCustomer().getCustomerName())
                    .customerDob(accountTransaction.getAccount().getCustomer().getDob())
                    .customerEmailId(accountTransaction.getAccount().getCustomer().getEmailId())
                    .customerGuardianName(accountTransaction.getAccount().getCustomer().getGuardianName())
                    .customerFatherName(accountTransaction.getAccount().getCustomer().getFatherName())
                    .customerMotherName(accountTransaction.getAccount().getCustomer().getMotherName())
                    .accountID(accountTransaction.getAccount().getAccountID())
                    .accountBalance(accountTransaction.getAccount().getAccountBalance())
                    .interestRate(accountTransaction.getAccount().getInterestRate())
                    .lastAccessTimeStamp(accountTransaction.getAccount().getLastAccessTimeStamp())
                    .accountTypeID(accountTransaction.getAccount().getAccountTypeID().getAccountTypeID())
                    .accountType(accountTransaction.getAccount().getAccountTypeID().getAccountType())
                    .transactionID(accountTransaction.getTransactionID())
                    .transactionAmount(accountTransaction.getTransactionAmount())
                    .transactionTimeStamp(accountTransaction.getTransactionTimeStamp())
                    .build());
        }
        log.info(viewAllDetailsDTOList.get(0)+"YE RAHA LIST");
        return viewAllDetailsDTOList;
    }
    public Long count() {
        return accountTransactionRepository.count();
    }

    public void deleteById(String accountTransactionId) {
        accountTransactionRepository.deleteById(accountTransactionId);
    }

    public String save(AccountTransaction accountTransaction) {
        return accountTransactionRepository.save(accountTransaction).getTransactionID();
    }

    public List<ViewAccountTransactionsDTO> findAllAccountTransactionByAca(String acaId) {
        Optional<ACA> aca = acaRepository.findById(acaId);
        return getAccountTransactions(aca.map(value -> accountTransactionRepository.findByAca(value)).orElse(null));
    }

    public List<ViewAccountTransactionsDTO> findAllAccountTransactionByCustomer(String customerId) {
        Customer customer = customerRepository.findByCustomerID(customerId);
        List<Account> accounts = accountRepository.findAllByCustomer(customer);
        List<AccountTransaction> accountTransactions = new ArrayList<>();

        for (Account account : accounts) {
            List<AccountTransaction> accountTransactionList = accountTransactionRepository.findAllByAccount(account);
            accountTransactions.addAll(accountTransactionList);
        }
        return getAccountTransactions(accountTransactions);
    }


    public List<ViewAccountTransactionsDTO> findAllAccountTransactionInRange(Date startDate, Date endDate) {
        LocalDateTime localStartDate = LocalDateTime.ofInstant(startDate.toInstant(), ZoneId.systemDefault());
        localStartDate = localStartDate.minusDays(1);
        startDate = Date.from(localStartDate.atZone(ZoneId.systemDefault()).toInstant());

        LocalDateTime localEndDate = LocalDateTime.ofInstant(endDate.toInstant(), ZoneId.systemDefault());
        localEndDate = localEndDate.plusDays(1);
        endDate = Date.from(localEndDate.atZone(ZoneId.systemDefault()).toInstant());

        List<AccountTransaction> accountTransactions = new ArrayList<>();
        accountTransactionRepository.findBytransactionTimeStampBetween(startDate, endDate).forEach(accountTransactions::add);

        return getAccountTransactions(accountTransactions);
    }

    private List<ViewAccountTransactionsDTO> getAccountTransactions(List<AccountTransaction> accountTransactions) {
        List<ViewAccountTransactionsDTO> viewAccountTransactionsDTOList = new ArrayList<>();
        for (AccountTransaction accountTransaction : accountTransactions) {
            viewAccountTransactionsDTOList.add(ViewAccountTransactionsDTO.builder()
                    .acaID(accountTransaction.getAca().getAcaID())
                    .acaName(accountTransaction.getAca().getAcaName())
                    .customerID(accountTransaction.getAccount().getCustomer().getCustomerID())
                    .customerName(accountTransaction.getAccount().getCustomer().getCustomerName())
                    .accountID(accountTransaction.getAccount().getAccountID())
                    .accountType(accountTransaction.getAccount().getAccountTypeID().getAccountType())
                    .transactionID(accountTransaction.getTransactionID())
                    .transactionAmount(accountTransaction.getTransactionAmount())
                    .transactionTimeStamp(accountTransaction.getTransactionTimeStamp())
                    .build());
        }
        return viewAccountTransactionsDTOList;
    }

    public List<AccountTransaction> findAllAccountTransationForMonth(Integer monthNumber, Integer year) throws ParseException {
        String pattern = "yyyy-MM-dd";
        SimpleDateFormat simpleDateFormat = new SimpleDateFormat(pattern);

        //Date startDate = simpleDateFormat.parse(monthNumber+"/01/"+year);
        Date startDate = simpleDateFormat.parse(year+"-"+monthNumber+"-01");

        LocalDateTime localStartDate = LocalDateTime.ofInstant(startDate.toInstant(), ZoneId.systemDefault());
        localStartDate = localStartDate.minusDays(1);
        startDate = Date.from(localStartDate.atZone(ZoneId.systemDefault()).toInstant());

        YearMonth yearMonthObject = YearMonth.of(year, monthNumber);
        int daysInMonth = yearMonthObject.lengthOfMonth();

        //Date endDate = simpleDateFormat.parse(monthNumber+"/"+daysInMonth+"/"+year);
        Date endDate = simpleDateFormat.parse(year+"-"+monthNumber+"-"+daysInMonth);

        LocalDateTime localEndDate = LocalDateTime.ofInstant(endDate.toInstant(), ZoneId.systemDefault());
        localEndDate = localEndDate.plusDays(1);
        endDate = Date.from(localEndDate.atZone(ZoneId.systemDefault()).toInstant());

        return accountTransactionRepository.findBytransactionTimeStampBetween(startDate,endDate);
    }

    public List<AccountTransaction> findAllAccountTransationForYear(String year) throws ParseException {
        String pattern = "yyyy-MM-dd";
        SimpleDateFormat simpleDateFormat = new SimpleDateFormat(pattern);

        Date startDate = simpleDateFormat.parse(year+"-01-01");

        LocalDateTime localStartDate = LocalDateTime.ofInstant(startDate.toInstant(), ZoneId.systemDefault());
        localStartDate = localStartDate.minusDays(1);

        startDate = Date.from(localStartDate.atZone(ZoneId.systemDefault()).toInstant());

        Date endDate = simpleDateFormat.parse(year+"-12-31");

        LocalDateTime localEndDate = LocalDateTime.ofInstant(endDate.toInstant(), ZoneId.systemDefault());
        localEndDate = localEndDate.plusDays(1);
        endDate = Date.from(localEndDate.atZone(ZoneId.systemDefault()).toInstant());

        return accountTransactionRepository.findBytransactionTimeStampBetween(startDate,endDate);
    }

    public List<ViewAccountTransactionsDTO> findAllAccountTransactionByAccount(String accountId) {
        Account account = accountRepository.findAllByAccountID(accountId);
        return getAccountTransactions(accountTransactionRepository.findAllByAccount(account));
    }
}
