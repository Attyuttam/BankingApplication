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
    @Autowired
    private ACARepository acaRepository;
    @Override
    public void run(String... args) throws Exception {
        Logger.getAnonymousLogger().info("initializing all tables");

        AccountType Savings = new AccountType("Savings");
        AccountType Deposit = new AccountType("Deposit");
        AccountType Current = new AccountType("Current");


        accountTypeRepository.save(Savings);
        accountTypeRepository.save(Current);
        accountTypeRepository.save(Deposit);

        Account A12341 = new Account( (double) 1000, Savings,12.5,new Date());
        Account A12342 = new Account( (double) 2000, Savings,12.5,new Date());
        Account A12343 = new Account( (double) 3000, Current,7.5,new Date());
        Account A12344 = new Account( (double) 4000, Deposit,2.5,new Date());
        Account A12345 = new Account( (double) 5000, Savings,12.5,new Date());

        accountRepository.save(A12341);
        accountRepository.save(A12342);
        accountRepository.save(A12343);
        accountRepository.save(A12344);
        accountRepository.save(A12345);

        Customer C1 = new Customer("Attyuttam Saha", "attyuttam@gmail.com", "Achintya Kumar Saha", "Achintya Kumar Saha", "Anita Saha");
        Customer C2 = new Customer("Anupam Saha", "anup89@gmail.com", "Achintya Kumar Saha", "Achintya Kumar Saha", "Anita Saha");
        Customer C3 = new Customer("Sraddha Chakraborty", "sraddha@gmail.com", "Subir Chakraborty", "Subir Chakraborty", "Jaba Chakraborty");
        Customer C4 = new Customer("Puskar Karmakar", "puskarisgod@gmail.com", "Tapas Karmakar", "Tapas Karmakar", "Tulika Karmakar");

        customerRepository.save(C1);
        customerRepository.save(C2);
        customerRepository.save(C3);
        customerRepository.save(C4);

        CustomerAccount CA1 = new CustomerAccount(new CustomerAccountID(C1,A12341), new Date());
        CustomerAccount CA2 = new CustomerAccount(new CustomerAccountID(C2,A12342),new Date());
        CustomerAccount CA3 = new CustomerAccount(new CustomerAccountID(C3,A12343),new Date());
        CustomerAccount CA4 = new CustomerAccount(new CustomerAccountID(C4,A12344),new Date());
        CustomerAccount CA5 = new CustomerAccount(new CustomerAccountID(C4,A12345),new Date());

        customerAccountRepository.save(CA1);
        customerAccountRepository.save(CA2);
        customerAccountRepository.save(CA3);
        customerAccountRepository.save(CA4);
        customerAccountRepository.save(CA5);

        accountTransactionRepository.save(new AccountTransaction(new Date(),(double) 1000,A12341));
        accountTransactionRepository.save(new AccountTransaction(new Date(),(double) 1000,A12342));
        accountTransactionRepository.save(new AccountTransaction(new Date(),(double) 1000,A12343));
        accountTransactionRepository.save(new AccountTransaction(new Date(),(double) 1000,A12344));
        accountTransactionRepository.save(new AccountTransaction(new Date(),(double) 1000,A12341));
        accountTransactionRepository.save(new AccountTransaction(new Date(),(double) 1000,A12342));
        accountTransactionRepository.save(new AccountTransaction(new Date(),(double) 1000,A12343));

        ACA aca1 = new ACA("101","Achintya Kumar Saha",new Date(),"Siliguri");
        ACA aca2 = new ACA("102","Anupam Saha",new Date(),"Siliguri");
        acaRepository.save(aca1);
        acaRepository.save(aca2);
    }
}
