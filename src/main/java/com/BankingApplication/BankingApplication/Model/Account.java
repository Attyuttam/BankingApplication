package com.BankingApplication.BankingApplication.Model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "Account")
public class Account {
    @Id
    @Column(name = "account_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private String accountID;

    @Column(name = "account_balance")
    private Double accountBalance;

    @JsonBackReference
    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "account_type_id_fk", referencedColumnName ="account_type_id")
    private AccountType accountTypeID;

    @Column(name = "interest_rate")
    private Double interestRate;

    @Column(name = "last_access_time_stamp")
    private Date lastAccessTimeStamp;

    public Account(){}

    public Account(Double accountBalance, AccountType accountTypeID, Double interestRate, Date lastAccessTimeStamp) {

        this.accountBalance = accountBalance;
        this.accountTypeID = accountTypeID;
        this.interestRate = interestRate;
        this.lastAccessTimeStamp = lastAccessTimeStamp;
    }

    public String getAccountID() {
        return accountID;
    }

    public void setAccountID(String accountID) {
        this.accountID = accountID;
    }

    public Double getAccountBalance() {
        return accountBalance;
    }

    public void setAccountBalance(Double accountBalance) {
        this.accountBalance = accountBalance;
    }

    public AccountType getAccountTypeID() {
        return accountTypeID;
    }

    public void setAccountTypeID(AccountType accountTypeID) {
        this.accountTypeID = accountTypeID;
    }

    public Double getInterestRate() {
        return interestRate;
    }

    public void setInterestRate(Double interestRate) {
        this.interestRate = interestRate;
    }

    public Date getLastAccessTimeStamp() {
        return lastAccessTimeStamp;
    }

    public void setLastAccessTimeStamp(Date lastAccessTimeStamp) {
        this.lastAccessTimeStamp = lastAccessTimeStamp;
    }
}
