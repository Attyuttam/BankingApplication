package com.BankingApplication.BankingApplication.Model;

import java.io.Serializable;
import java.util.Date;

public class CustomerDetails implements Serializable{
    private String customerID;
    private String customerName;
    private String customerEmailID;
    private String customerGuardianName;
    private String customerAccountID;
    private Double customerAccountBalance;
    private Date customerAccountLastAccessTimeStamp;
    private String customerAccountType;
    private Date customerAccountCreationTimeStamp;

    public CustomerDetails(String customerID, String customerName, String customerEmailID, String customerGuardianName, String customerAccountID, Double customerAccountBalance, Date customerAccountLastAccessTimeStamp, String customerAccountType, Date customerAccountCreationTimeStamp) {
        this.customerID = customerID;
        this.customerName = customerName;
        this.customerEmailID = customerEmailID;
        this.customerGuardianName = customerGuardianName;
        this.customerAccountID = customerAccountID;
        this.customerAccountBalance = customerAccountBalance;
        this.customerAccountLastAccessTimeStamp = customerAccountLastAccessTimeStamp;
        this.customerAccountType = customerAccountType;
        this.customerAccountCreationTimeStamp = customerAccountCreationTimeStamp;
    }

    public CustomerDetails() {
    }

    public String getCustomerID() {
        return customerID;
    }

    public void setCustomerID(String customerID) {
        this.customerID = customerID;
    }

    public String getCustomerName() {
        return customerName;
    }

    public void setCustomerName(String customerName) {
        this.customerName = customerName;
    }

    public String getCustomerEmailID() {
        return customerEmailID;
    }

    public void setCustomerEmailID(String customerEmailID) {
        this.customerEmailID = customerEmailID;
    }

    public String getCustomerGuardianName() {
        return customerGuardianName;
    }

    public void setCustomerGuardianName(String customerGuardianName) {
        this.customerGuardianName = customerGuardianName;
    }

    public String getCustomerAccountID() {
        return customerAccountID;
    }

    public void setCustomerAccountID(String customerAccountID) {
        this.customerAccountID = customerAccountID;
    }

    public Double getCustomerAccountBalance() {
        return customerAccountBalance;
    }

    public void setCustomerAccountBalance(Double customerAccountBalance) {
        this.customerAccountBalance = customerAccountBalance;
    }

    public Date getCustomerAccountLastAccessTimeStamp() {
        return customerAccountLastAccessTimeStamp;
    }

    public void setCustomerAccountLastAccessTimeStamp(Date customerAccountLastAccessTimeStamp) {
        this.customerAccountLastAccessTimeStamp = customerAccountLastAccessTimeStamp;
    }

    public String getCustomerAccountType() {
        return customerAccountType;
    }

    public void setCustomerAccountType(String customerAccountType) {
        this.customerAccountType = customerAccountType;
    }

    public Date getCustomerAccountCreationTimeStamp() {
        return customerAccountCreationTimeStamp;
    }

    public void setCustomerAccountCreationTimeStamp(Date customerAccountCreationTimeStamp) {
        this.customerAccountCreationTimeStamp = customerAccountCreationTimeStamp;
    }
}
