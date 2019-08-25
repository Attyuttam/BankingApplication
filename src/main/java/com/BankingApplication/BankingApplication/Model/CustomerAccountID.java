package com.BankingApplication.BankingApplication.Model;

import javax.persistence.*;

@Embeddable
public class CustomerAccountID {
    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "customer_id_fk", referencedColumnName ="customer_id")
    private String CustomerID;
    
    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "account_id_fk", referencedColumnName ="account_id")
    private String accountID;


    public CustomerAccountID(String customerID, String accountID) {
        CustomerID = customerID;
        this.accountID = accountID;
    }
    public String getCustomerID() {
        return CustomerID;
    }

    public void setCustomerID(String customerID) {
        CustomerID = customerID;
    }

    public String getAccountID() {
        return accountID;
    }

    public void setAccountID(String accountID) {
        this.accountID = accountID;
    }
}
