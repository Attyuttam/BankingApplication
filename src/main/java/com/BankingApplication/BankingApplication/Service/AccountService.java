package com.BankingApplication.BankingApplication.Service;

import com.BankingApplication.BankingApplication.Model.*;
import com.BankingApplication.BankingApplication.Repository.*;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import static java.lang.Double.parseDouble;

@Service
@Slf4j
public class AccountService {
    @Autowired
    private AccountRepository accountRepository;
    @Autowired
    private CustomerService customerService;
    @Autowired
    private AccountTypeService accountTypeService;

    public List<Account> findAll() {
        List<Account> accounts = new ArrayList<>();
        // accountRepository.findAll().forEach(e -> Logger.getAnonymousLogger().info(e.getAccountID()));
        accountRepository.findAll().forEach(accounts::add);
        //log.info("ACCOUNTS: "+accounts);
        return accounts;
    }
    public Long count() {
        return accountRepository.count();
    }

    public void deleteById(String accountId) {
        accountRepository.deleteById(accountId);
    }

    public ViewAccountDTO save(saveAccountDTO accountDTO) {
        Customer customer = customerService.findByCustomerID(accountDTO.getCustomer());
        AccountType accountType = accountTypeService.findByAccountType(accountDTO.getAccountType());
        Account account = accountRepository.save(new Account(parseDouble(accountDTO.getAccountBalance()),accountType,parseDouble(accountDTO.getInterestRate()),new Timestamp(new Date().getTime()),customer));
        return ViewAccountDTO.builder()
                .accountBalance(account.getAccountBalance())
                .accountType(account.getAccountTypeID().getAccountType())
                .accountTypeID(account.getAccountTypeID().getAccountTypeID())
                .lastAccessTimeStamp(account.getLastAccessTimeStamp())
                .interestRate(account.getInterestRate())
                .accountID(account.getAccountID())
                .customerName(account.getCustomer().getCustomerName())
                .build();
    }

    public List<ViewAccountDTO> findAccounts() {
        List<Account> accounts = findAll();
        List<ViewAccountDTO> viewAccountDTOList = new ArrayList<>();
        for(Account account:accounts){
            viewAccountDTOList.add(
            ViewAccountDTO.builder()
                    .accountID(account.getAccountID())
                    .accountBalance(account.getAccountBalance())
                    .interestRate(account.getInterestRate())
                    .lastAccessTimeStamp(account.getLastAccessTimeStamp())
                    .accountTypeID(account.getAccountTypeID().getAccountTypeID())
                    .accountType(account.getAccountTypeID().getAccountType())
                    .customerName(account.getCustomer().getCustomerName())
                    .build());
        }
        return viewAccountDTOList;
    }

    public Account findByAccountID(String account) {
        return accountRepository.findAllByAccountID(account);
    }
}
