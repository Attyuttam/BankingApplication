package com.BankingApplication.BankingApplication.Model;

import com.fasterxml.jackson.annotation.JsonBackReference;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "AccountTransaction")
public class AccountTransaction {
    @Id
    @Column(name = "transaction_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private String transactionID;

    @Column(name = "transaction_time_stamp")
    private Date transactionTimeStamp;

    @Column(name = "transaction_amount")
    private Double transactionAmount;

    @JsonBackReference
    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "account_id_fk", referencedColumnName = "account_id")
    private Account accountID;


    public AccountTransaction(){}
    public AccountTransaction(Date transactionTimeStamp, Double transactionAmount, Account accountID) {
        this.transactionTimeStamp = transactionTimeStamp;
        this.transactionAmount = transactionAmount;
        this.accountID = accountID;
    }
    public String getTransactionID() {
        return transactionID;
    }

    public void setTransactionID(String transactionID) {
        this.transactionID = transactionID;
    }

    public Date getTransactionTimeStamp() {
        return transactionTimeStamp;
    }

    public void setTransactionTimeStamp(Date transactionTimeStamp) {
        this.transactionTimeStamp = transactionTimeStamp;
    }

    public Double getTransactionAmount() {
        return transactionAmount;
    }

    public void setTransactionAmount(Double transactionAmount) {
        this.transactionAmount = transactionAmount;
    }

    public Account getAccountID() {
        return accountID;
    }

    public void setAccountID(Account accountID) {
        this.accountID = accountID;
    }
}
