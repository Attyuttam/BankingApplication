package com.BankingApplication.BankingApplication.Model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "Account")
@Getter
@Setter
@NoArgsConstructor
public class Account {
    @Id
    @Column(name = "account_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private String accountID;

    @Column(name = "account_balance")
    private Double accountBalance;

    @JsonIgnore
    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "account_type_id_fk", referencedColumnName ="account_type_id")
    private AccountType accountTypeID;

    @Column(name = "interest_rate")
    private Double interestRate;

    @Column(name = "last_access_time_stamp")
    @JsonFormat(shape=JsonFormat.Shape.STRING, pattern="dd-MM-yyyy")
    private Date lastAccessTimeStamp;

    @JsonBackReference
    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "customer_id", nullable = false)
    @OnDelete(action = OnDeleteAction.CASCADE)
    private Customer customer;

    public Account(Double accountBalance,AccountType accountTypeID,Double interestRate, Date lastAccessTimeStamp,Customer customer){
        this.accountBalance =accountBalance;
        this.accountTypeID = accountTypeID;
        this.interestRate = interestRate;
        this.lastAccessTimeStamp = lastAccessTimeStamp;
        this.customer = customer;
    }
}
