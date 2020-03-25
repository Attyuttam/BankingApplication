package com.BankingApplication.BankingApplication.Model;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import java.io.Serializable;
import java.util.Date;

@Builder
@Getter
@Setter
@AllArgsConstructor
public class ViewAccountDTO implements Serializable {
    //account details
    private String accountID;
    private Double accountBalance;
    private Double interestRate;
    //@JsonFormat(shape=JsonFormat.Shape.STRING, pattern="yyyy-MM-dd")
    private Date lastAccessTimeStamp;

    //account type details
    private String accountTypeID;
    private  String accountType;

    //customer details
    private String customerName;
    private String customerID;

    ViewAccountDTO(){}
}
