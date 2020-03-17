package com.BankingApplication.BankingApplication.Model;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.Date;


@Entity
@Table(name = "Customer")
@Getter
@Setter
@NoArgsConstructor
public class Customer {
    @Id
    @Column(name = "customer_id")
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private String customerID;
    @Column(name = "customer_name")
    private String customerName;

    @JsonFormat(shape=JsonFormat.Shape.STRING, pattern="yyyy-MM-dd")
    @Column(name = "dob")
    private Date dob;

    @Column(name = "email_id")
    private String emailId;
    @Column(name = "guardian_name")
    private String guardianName;
    @Column(name = "father_name")
    private String fatherName;
    @Column(name = "mother_name")
    private String motherName;


    public Customer(String customerName, Date dob,String emailId, String guardianName, String fatherName, String motherName){
        this.customerName = customerName;
        this.dob = dob;
        this.emailId = emailId;
        this.guardianName = guardianName;
        this.fatherName = fatherName;
        this.motherName= motherName;
    }
}
