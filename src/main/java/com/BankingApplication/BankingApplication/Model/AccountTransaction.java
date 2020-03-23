package com.BankingApplication.BankingApplication.Model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "AccountTransaction")
@NoArgsConstructor
@Getter
@Setter
public class AccountTransaction {
    @Id
    @Column(name = "transaction_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private String transactionID;

    @Column(name = "transaction_time_stamp")
    //@JsonFormat(shape=JsonFormat.Shape.STRING, pattern="yyyy-MM-dd")
    private  Date transactionTimeStamp;

    @Column(name = "transaction_amount")
    private  Double transactionAmount;


    @OneToOne(fetch = FetchType.LAZY,targetEntity = Account.class)
    @JoinColumn(name = "account_id_fk", referencedColumnName = "account_id")
    @JsonIgnore
    private  Account account;


    @JsonBackReference
    @ManyToOne(targetEntity = ACA.class)
    @JoinColumn(name = "aca_id", nullable = false)
    @OnDelete(action = OnDeleteAction.CASCADE)
    private  ACA aca;

    public AccountTransaction(Date transactionTimeStamp, Double transactionAmount, Account account, ACA aca){
        this.transactionTimeStamp = transactionTimeStamp;
        this.transactionAmount = transactionAmount;
        this.account = account;
        this.aca = aca;
    }
}
