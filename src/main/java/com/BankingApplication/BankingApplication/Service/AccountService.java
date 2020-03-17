package com.BankingApplication.BankingApplication.Service;

import com.BankingApplication.BankingApplication.Model.Account;
import com.BankingApplication.BankingApplication.Model.AccountTransaction;
import com.BankingApplication.BankingApplication.Model.ViewAccountDTO;
import com.BankingApplication.BankingApplication.Model.ViewAllDetailsDTO;
import com.BankingApplication.BankingApplication.Repository.*;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.swing.text.View;
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
        //log.info("ACCOUNTS: "+accounts);
        return accounts;
    }
    public Long count() {
        return accountRepository.count();
    }

    public void deleteById(String accountId) {
        accountRepository.deleteById(accountId);
    }

    public Account save(Account account) {
        return accountRepository.save(account);
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
                    .build());
        }
        return viewAccountDTOList;
    }
}
