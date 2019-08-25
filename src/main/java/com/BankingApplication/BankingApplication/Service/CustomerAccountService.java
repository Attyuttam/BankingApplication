package com.BankingApplication.BankingApplication.Service;

import com.BankingApplication.BankingApplication.Model.Account;
import com.BankingApplication.BankingApplication.Model.CustomerAccount;
import com.BankingApplication.BankingApplication.Model.CustomerAccountID;
import com.BankingApplication.BankingApplication.Repository.CustomerAccountRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class CustomerAccountService {
    @Autowired
    private CustomerAccountRepository customerAccountRepository;
    public List<CustomerAccount> findAll() {
        List<CustomerAccount> customerAccounts = new ArrayList<>();
        customerAccountRepository.findAll().forEach(e -> customerAccounts.add(e));
        return customerAccounts;
    }
    public Long count() {
        return customerAccountRepository.count();
    }

    public void deleteById(CustomerAccountID customerAccountId) {
        customerAccountRepository.deleteById(customerAccountId);
    }
}
