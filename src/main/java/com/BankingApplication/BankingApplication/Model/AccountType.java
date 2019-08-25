package com.BankingApplication.BankingApplication.Model;

import javax.persistence.*;

@Entity
@Table(name = "AccountType")
public class AccountType {
    @Id
    @Column(name = "account_type_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private String accountTypeID;

    @Column(name = "account_type")
    private String accountType;


    public AccountType(String accountTypeID, String accountType) {
        this.accountTypeID = accountTypeID;
        this.accountType = accountType;
    }
    public String getAccountTypeID() {
        return accountTypeID;
    }

    public void setAccountTypeID(String accountTypeID) {
        this.accountTypeID = accountTypeID;
    }

    public String getAccountType() {
        return accountType;
    }

    public void setAccountType(String accountType) {
        this.accountType = accountType;
    }
}
