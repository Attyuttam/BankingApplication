package com.BankingApplication.BankingApplication.Model;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;

@Entity
@Table(name = "CustomerAccount")
public class CustomerAccount implements Serializable {

    @EmbeddedId private CustomerAccountID customerAccountID;
    @Column(name = "customer_account_creation_time_stamp")
    private Date customerAccountCreationTimeStamp;


    public CustomerAccount(CustomerAccountID customerAccountID, Date customerAccountCreationTimeStamp) {
        this.customerAccountID = customerAccountID;
        this.customerAccountCreationTimeStamp = customerAccountCreationTimeStamp;
    }
    public Date getCustomerAccountCreationTimeStamp() {
        return customerAccountCreationTimeStamp;
    }

    public void setCustomerAccountCreationTimeStamp(Date customerAccountCreationTimeStamp) {
        this.customerAccountCreationTimeStamp = customerAccountCreationTimeStamp;
    }

    public CustomerAccountID getCustomerAccountID() {
        return customerAccountID;
    }

    public void setCustomerAccountID(CustomerAccountID customerAccountID) {
        this.customerAccountID = customerAccountID;
    }
}
