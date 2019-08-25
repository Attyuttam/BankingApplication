package com.BankingApplication.BankingApplication.Model;

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

    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "account_id_fk", referencedColumnName = "account_id")
    private String accountID;


    public AccountTransaction(String transactionID, Date transactionTimeStamp, Double transactionAmount, String accountID) {
        this.transactionID = transactionID;
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

    public String getAccountID() {
        return accountID;
    }

    public void setAccountID(String accountID) {
        this.accountID = accountID;
    }
}
