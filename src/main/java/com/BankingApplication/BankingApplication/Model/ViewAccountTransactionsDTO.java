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
public class ViewAccountTransactionsDTO implements Serializable {
    //aca details
    private String acaID;
    private String acaName;

    //customer details
    private String customerID;
    private String customerName;

    //account details
    private String accountID;

    //account type details
    private  String accountType;

    //account transaction details
    private String transactionID;
    //@JsonFormat(shape=JsonFormat.Shape.STRING, pattern="yyyy-MM-dd")
    private  Date transactionTimeStamp;
    private  Double transactionAmount;
}
