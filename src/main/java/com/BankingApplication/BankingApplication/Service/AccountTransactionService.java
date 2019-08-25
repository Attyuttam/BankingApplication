package com.BankingApplication.BankingApplication.Service;

import com.BankingApplication.BankingApplication.Model.Account;
import com.BankingApplication.BankingApplication.Model.AccountTransaction;
import com.BankingApplication.BankingApplication.Repository.AccountTransactionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class AccountTransactionService {
    @Autowired
    private AccountTransactionRepository accountTransactionRepository;
    public List<AccountTransaction> findAll() {
        List<AccountTransaction> accountTransactions = new ArrayList<>();
        accountTransactionRepository.findAll().forEach(e -> accountTransactions.add(e));
        return accountTransactions;
    }
    public Long count() {
        return accountTransactionRepository.count();
    }

    public void deleteById(String accountTransactionId) {
        accountTransactionRepository.deleteById(accountTransactionId);
    }
}
