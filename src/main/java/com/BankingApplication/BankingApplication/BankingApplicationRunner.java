package com.BankingApplication.BankingApplication;

import com.BankingApplication.BankingApplication.Model.*;
import com.BankingApplication.BankingApplication.Repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.util.Date;
import java.util.logging.Logger;

@Component
public class BankingApplicationRunner implements CommandLineRunner {
    @Autowired
    private AccountRepository accountRepository;
    @Autowired
    private AccountTransactionRepository accountTransactionRepository;
    @Autowired
    private AccountTypeRepository accountTypeRepository;
    @Autowired
    private CustomerAccountRepository customerAccountRepository;
    @Autowired
    private CustomerRepository customerRepository;
    @Override
    public void run(String... args) throws Exception {
        Logger.getAnonymousLogger().info("initializing all tables");
        accountRepository.save(new Account("A-12341", (double) 1000, "Savings",12.5,new Date()));
        accountRepository.save(new Account("A-12342", (double) 2000, "Current",13.5,new Date()));
        accountRepository.save(new Account("A-12343", (double) 3000, "Current",7.5,new Date()));
        accountRepository.save(new Account("A-12344", (double) 4000, "Savings",10.5,new Date()));

        accountTypeRepository.save(new AccountType("AT-11111", "Savings"));
        accountTypeRepository.save(new AccountType("AT-11112", "Current"));
        accountTypeRepository.save(new AccountType("AT-11113", "Deposit"));

        customerRepository.save(new Customer("C-12111", "Attyuttam Saha", "attyuttam@gmail.com", "Achintya Kumar Saha", "Achintya Kumar Saha", "Anita Saha"));
        customerRepository.save(new Customer("C-12112", "Anupam Saha", "anup89@gmail.com", "Achintya Kumar Saha", "Achintya Kumar Saha", "Anita Saha"));
        customerRepository.save(new Customer("C-12113", "Sraddha Chakraborty", "sraddha@gmail.com", "Subir Chakraborty", "Subir Chakraborty", "Jaba Chakraborty"));
        customerRepository.save(new Customer("C-12114", "Puskar Karmakar", "puskarisgod@gmail.com", "Tapas Karmakar", "Tapas Karmakar", "Tulika Karmakar"));

        customerAccountRepository.save(new CustomerAccount(new CustomerAccountID("C-12111", "A-12341"),new Date()));
        customerAccountRepository.save(new CustomerAccount(new CustomerAccountID("C-12112", "A-12342"),new Date()));
        customerAccountRepository.save(new CustomerAccount(new CustomerAccountID("C-12113", "A-12343"),new Date()));
        customerAccountRepository.save(new CustomerAccount(new CustomerAccountID("C-12114", "A-12344"),new Date()));

        accountTransactionRepository.save(new AccountTransaction("T-13111",new Date(),(double) 1000,"A-12341"));
        accountTransactionRepository.save(new AccountTransaction("T-13112",new Date(),(double) 1000,"A-12342"));
        accountTransactionRepository.save(new AccountTransaction("T-13113",new Date(),(double) 1000,"A-12343"));
        accountTransactionRepository.save(new AccountTransaction("T-13114",new Date(),(double) 1000,"A-12344"));
        accountTransactionRepository.save(new AccountTransaction("T-13115",new Date(),(double) 1000,"A-12341"));
        accountTransactionRepository.save(new AccountTransaction("T-13116",new Date(),(double) 1000,"A-12342"));
        accountTransactionRepository.save(new AccountTransaction("T-13117",new Date(),(double) 1000,"A-12343"));
    }
}
