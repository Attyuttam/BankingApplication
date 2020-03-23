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
    public String transactionAmount;
    public String account;
    public String aca;
}
