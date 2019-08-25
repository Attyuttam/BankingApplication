package com.BankingApplication.BankingApplication.Model;

import javax.persistence.Embeddable;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import java.io.Serializable;

@Embeddable
public class CustomerAccountID implements Serializable {
    @OneToOne
    @JoinColumn(name = "customer_id_fk", referencedColumnName = "customer_id")
    private Customer customerID;

    @OneToOne
    @JoinColumn(name = "account_id_fk", referencedColumnName = "account_id")
    private Account accountID;

    public CustomerAccountID(){}
    public CustomerAccountID(Customer customerID, Account accountID) {
        this.customerID = customerID;
        this.accountID = accountID;
    }

    public Account getAccountID() {
        return accountID;
    }

    public Customer getCustomerID() {
        return customerID;
    }

    public void setAccountID(Account accountID) {
        this.accountID = accountID;
    }

    public void setCustomerID(Customer customerID) {
        this.customerID = customerID;
    }
    @Override
    public boolean equals(Object object) {
        if (this == object) return true;
        if (!(object instanceof CustomerAccountID)) return false;
        CustomerAccountID that = (CustomerAccountID) object;

        return getCustomerID()==that.getCustomerID() &&
                getAccountID()==that.getAccountID();
    }
}
