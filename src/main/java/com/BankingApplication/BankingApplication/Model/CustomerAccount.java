package com.BankingApplication.BankingApplication.Model;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;
import java.util.logging.Logger;


@Entity
@Table(name = "CustomerAccount")
public class CustomerAccount {
    @EmbeddedId
    public CustomerAccountID customerAccountID;

    @Column(name = "customer_account_creation_time_stamp")
    private Date customerAccountCreationTimeStamp;

    public CustomerAccount(){}
    public CustomerAccount(CustomerAccountID customerAccountID,Date customerAccountCreationTimeStamp){
        this.customerAccountCreationTimeStamp = customerAccountCreationTimeStamp;
        this.customerAccountID = customerAccountID;
    }

}
