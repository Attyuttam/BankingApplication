package com.BankingApplication.BankingApplication.Service;

import com.BankingApplication.BankingApplication.Model.ACA;
import com.BankingApplication.BankingApplication.Model.Account;
import com.BankingApplication.BankingApplication.Model.AccountTransaction;
import com.BankingApplication.BankingApplication.Model.Customer;
import com.BankingApplication.BankingApplication.Repository.ACARepository;
import com.BankingApplication.BankingApplication.Repository.AccountRepository;
import com.BankingApplication.BankingApplication.Repository.AccountTransactionRepository;
import com.BankingApplication.BankingApplication.Repository.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
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
    public Long count() {
        return accountTransactionRepository.count();
    }

    public void deleteById(String accountTransactionId) {
        accountTransactionRepository.deleteById(accountTransactionId);
    }

    public String save(AccountTransaction accountTransaction) {
        return accountTransactionRepository.save(accountTransaction).getTransactionID();
    }

    public List<AccountTransaction> findAllAccountTransactionByAca(String acaId) {
        Optional<ACA> aca = acaRepository.findById(acaId);
        return aca.map(value -> accountTransactionRepository.findByAca(value)).orElse(null);
    }

    public List<AccountTransaction> findAllAccountTransactionByCustomer(String customerId) {
        Customer customer = customerRepository.findByCustomerID(customerId);
        List<Account> accounts = accountRepository.findAllByCustomer(customer);
        List<AccountTransaction> accountTransactions = new ArrayList<>();

        for (Account account : accounts) {
            List<AccountTransaction> accountTransactionList = accountTransactionRepository.findAllByAccount(account);
            accountTransactions.addAll(accountTransactionList);
        }
        return accountTransactions;
    }


    public List<AccountTransaction> findAllAccountTransactionInRange(Date startDate, Date endDate) {
        LocalDateTime localStartDate = LocalDateTime.ofInstant(startDate.toInstant(), ZoneId.systemDefault());
        localStartDate = localStartDate.minusDays(1);
        startDate = Date.from(localStartDate.atZone(ZoneId.systemDefault()).toInstant());

        LocalDateTime localEndDate = LocalDateTime.ofInstant(endDate.toInstant(), ZoneId.systemDefault());
        localEndDate = localEndDate.plusDays(1);
        endDate = Date.from(localEndDate.atZone(ZoneId.systemDefault()).toInstant());

        return accountTransactionRepository.findBytransactionTimeStampBetween(startDate,endDate);
    }

    public List<AccountTransaction> findAllAccountTransationForMonth(Integer monthNumber, Integer year) throws ParseException {
        String pattern = "dd-MM-yyyy";
        SimpleDateFormat simpleDateFormat = new SimpleDateFormat(pattern);

        Date startDate = simpleDateFormat.parse("01-"+monthNumber+"-"+year);

        LocalDateTime localStartDate = LocalDateTime.ofInstant(startDate.toInstant(), ZoneId.systemDefault());
        localStartDate = localStartDate.minusDays(1);
        startDate = Date.from(localStartDate.atZone(ZoneId.systemDefault()).toInstant());

        YearMonth yearMonthObject = YearMonth.of(year, monthNumber);
        int daysInMonth = yearMonthObject.lengthOfMonth();

        Date endDate = simpleDateFormat.parse(daysInMonth+"-"+monthNumber+"-"+year);

        LocalDateTime localEndDate = LocalDateTime.ofInstant(endDate.toInstant(), ZoneId.systemDefault());
        localEndDate = localEndDate.plusDays(1);
        endDate = Date.from(localEndDate.atZone(ZoneId.systemDefault()).toInstant());

        return accountTransactionRepository.findBytransactionTimeStampBetween(startDate,endDate);
    }

    public List<AccountTransaction> findAllAccountTransationForYear(String year) throws ParseException {
        String pattern = "dd-MM-yyyy";
        SimpleDateFormat simpleDateFormat = new SimpleDateFormat(pattern);

        Date startDate = simpleDateFormat.parse("01-01-"+year);

        LocalDateTime localStartDate = LocalDateTime.ofInstant(startDate.toInstant(), ZoneId.systemDefault());
        localStartDate = localStartDate.minusDays(1);

        startDate = Date.from(localStartDate.atZone(ZoneId.systemDefault()).toInstant());

        Date endDate = simpleDateFormat.parse("31-12-"+year);

        LocalDateTime localEndDate = LocalDateTime.ofInstant(endDate.toInstant(), ZoneId.systemDefault());
        localEndDate = localEndDate.plusDays(1);
        endDate = Date.from(localEndDate.atZone(ZoneId.systemDefault()).toInstant());

        return accountTransactionRepository.findBytransactionTimeStampBetween(startDate,endDate);
    }

    public List<AccountTransaction> findAllAccountTransactionByAccount(String accountId) {
        Account account = accountRepository.findAllByAccountID(accountId);
        return accountTransactionRepository.findAllByAccount(account);
    }
}
