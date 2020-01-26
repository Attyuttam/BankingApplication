package com.BankingApplication.BankingApplication.Model;

import lombok.*;

import javax.persistence.*;

@Entity
@Table(name = "AccountType")
@Getter
@Setter
@NoArgsConstructor
public class AccountType {
    @Id
    @Column(name = "account_type_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private String accountTypeID;

    @Column(name = "account_type")
    private  String accountType;

    public AccountType(String accountType){
        this.accountType = accountType;
    }
}
