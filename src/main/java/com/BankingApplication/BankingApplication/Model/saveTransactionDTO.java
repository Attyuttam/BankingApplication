package com.BankingApplication.BankingApplication.Model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Builder
@Getter
@Setter
@AllArgsConstructor
public class saveTransactionDTO {
    public String transactionID;
    public String transactionAmount;
    public String accountID;
    public String acaID;
}
