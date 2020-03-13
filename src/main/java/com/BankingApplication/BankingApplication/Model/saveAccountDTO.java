package com.BankingApplication.BankingApplication.Model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Builder
@Getter
@Setter
@AllArgsConstructor
public class saveAccountDTO {
    private String accountBalance;
    private String accountType;
    private String interestRate;
    private String customer;
}
