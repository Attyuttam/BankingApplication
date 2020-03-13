package com.BankingApplication.BankingApplication.Model;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.*;

import java.io.Serializable;
import java.util.Date;

@Builder
@Getter
@Setter
@AllArgsConstructor
public class ViewAllDetailsDTO implements Serializable {
    //aca details
    private String acaID;
    private String acaName;
    @JsonFormat(shape=JsonFormat.Shape.STRING, pattern="dd-MM-yyyy")
    private Date acaBirthDate;
    private String acaAddress;
    private String acaPhoneNum;
    private String acaEmail;

    //customer details
    private String customerID;
    private String customerName;
    @JsonFormat(shape=JsonFormat.Shape.STRING, pattern="dd-MM-yyyy")
    private Date customerDob;
    private String customerEmailId;
    private String customerGuardianName;
    private String customerFatherName;
    private String customerMotherName;

    //account details
    private String accountID;
    private Double accountBalance;
    private Double interestRate;
    @JsonFormat(shape=JsonFormat.Shape.STRING, pattern="dd-MM-yyyy")
    private Date lastAccessTimeStamp;

    //account type details
    private String accountTypeID;
    private  String accountType;

    //account transaction details
    private String transactionID;
    @JsonFormat(shape=JsonFormat.Shape.STRING, pattern="dd-MM-yyyy")
    private  Date transactionTimeStamp;
    private  Double transactionAmount;

    public ViewAllDetailsDTO(){}

}
