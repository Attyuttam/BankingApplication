package com.BankingApplication.BankingApplication.Service;

import com.BankingApplication.BankingApplication.Model.Account;
import com.BankingApplication.BankingApplication.Model.AccountType;
import com.BankingApplication.BankingApplication.Repository.AccountTypeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class AccountTypeService {

    @Autowired
    private AccountTypeRepository accountTypeRepository;
    public List<AccountType> findAll() {
        List<AccountType> accountTypes = new ArrayList<>();
        accountTypeRepository.findAll().forEach(e -> accountTypes.add(e));
        return accountTypes;
    }
    public Long count() {
        return accountTypeRepository.count();
    }

    public void deleteById(String accountTypeId) {
        accountTypeRepository.deleteById(accountTypeId);
    }

    public AccountType findByAccountType(String accountType) {
        return accountTypeRepository.findByAccountType(accountType);
    }
}
