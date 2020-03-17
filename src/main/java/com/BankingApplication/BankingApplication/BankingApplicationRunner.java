package com.BankingApplication.BankingApplication;

import com.BankingApplication.BankingApplication.Model.*;
import com.BankingApplication.BankingApplication.Repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.sql.Timestamp;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
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


        Customer C1 = new Customer("Attyuttam Saha", new Date(),"attyuttam@gmail.com", "Achintya Kumar Saha", "Achintya Kumar Saha", "Anita Saha");
        Customer C2 = new Customer("Anupam Saha", new Date(),"anup89@gmail.com", "Achintya Kumar Saha", "Achintya Kumar Saha", "Anita Saha");
        Customer C3 = new Customer("Sraddha Chakraborty",new Date(), "sraddha@gmail.com", "Subir Chakraborty", "Subir Chakraborty", "Jaba Chakraborty");
        Customer C4 = new Customer("Puskar Karmakar", new Date(),"puskarisgod@gmail.com", "Tapas Karmakar", "Tapas Karmakar", "Tulika Karmakar");

        customerRepository.save(C1);
        customerRepository.save(C2);
        customerRepository.save(C3);
        customerRepository.save(C4);

        Account A12341 = new Account( (double) 1000, Savings,12.5,new Timestamp(new Date().getTime()),C1);
        Account A12342 = new Account( (double) 2000, Savings,12.5,new Timestamp(new Date().getTime()),C1);
        Account A12343 = new Account( (double) 3000, Current,7.5,new Timestamp(new Date().getTime()),C2);
        Account A12344 = new Account( (double) 4000, Deposit,2.5,new Timestamp(new Date().getTime()),C3);
        Account A12345 = new Account( (double) 5000, Savings,12.5,new Timestamp(new Date().getTime()),C4);


        accountRepository.save(A12341);
        accountRepository.save(A12342);
        accountRepository.save(A12343);
        accountRepository.save(A12344);
        accountRepository.save(A12345);


        ACA aca1 = new ACA("Achintya Kumar Saha",new Date(),"Siliguri","8617033526","a@gmail.com");
        ACA aca2 = new ACA("Anupam Saha",new Date(),"Siliguri","8617033526","b@gmail.com");
        acaRepository.save(aca1);
        acaRepository.save(aca2);

        accountTransactionRepository.save(new AccountTransaction(new Date(),(double) 1000,A12341/*.getAccountID()*/,aca1/*.getAcaID()*/));
        accountTransactionRepository.save(new AccountTransaction(new Date(),(double) 1000,A12342/*.getAccountID()*/,aca1/*.getAcaID()*/));
        accountTransactionRepository.save(new AccountTransaction(new Date(),(double) 1000,A12343/*.getAccountID()*/,aca1/*.getAcaID()*/));
        accountTransactionRepository.save(new AccountTransaction(new Date(),(double) 1000,A12344/*.getAccountID()*/,aca1/*.getAcaID()*/));
        DateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
        String dateString = "2020-03-10";
        Date dateObject = sdf.parse(dateString);
        accountTransactionRepository.save(new AccountTransaction(dateObject,(double) 1000,A12341/*.getAccountID()*/,aca2/*.getAcaID()*/));

        dateString = "2020-03-26";
        dateObject = sdf.parse(dateString);
        accountTransactionRepository.save(new AccountTransaction(dateObject,(double) 1000,A12342/*.getAccountID()*/,aca2/*.getAcaID()*/));

        dateString = "2020-03-27";
        dateObject = sdf.parse(dateString);
        accountTransactionRepository.save(new AccountTransaction(dateObject,(double) 1000,A12343/*.getAccountID()*/,aca2/*.getAcaID()*/));
        accountTransactionRepository.save(new AccountTransaction(new Date(),(double) 1000,A12343/*.getAccountID()*/,aca2/*.getAcaID()*/));
    }
}
