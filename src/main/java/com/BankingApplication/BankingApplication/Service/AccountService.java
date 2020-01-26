package com.BankingApplication.BankingApplication.Service;

import com.BankingApplication.BankingApplication.Model.Account;
import com.BankingApplication.BankingApplication.Repository.*;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.logging.Logger;

@Service
@Slf4j
public class AccountService {
    @Autowired
    private AccountRepository accountRepository;
    public List<Account> findAll() {
        List<Account> accounts = new ArrayList<>();
        // accountRepository.findAll().forEach(e -> Logger.getAnonymousLogger().info(e.getAccountID()));
        accountRepository.findAll().forEach(accounts::add);
        return accounts;
    }
    public Long count() {
        return accountRepository.count();
    }

    public void deleteById(String accountId) {
        accountRepository.deleteById(accountId);
    }

    public String save(Account account) {
        return accountRepository.save(account).getAccountID();
    }
}
