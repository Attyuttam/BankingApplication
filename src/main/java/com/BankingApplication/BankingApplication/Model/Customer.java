package com.BankingApplication.BankingApplication.Model;

import javax.persistence.*;

@Entity
@Table(name = "Customer")
public class Customer {
    @Id
    @Column(name = "customer_id")
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private String customerID;
    @Column(name = "customer_name")
    private String customerName;
    @Column(name = "email_id")
    private String emailId;
    @Column(name = "guardian_name")
    private String guardianName;
    @Column(name = "father_name")
    private String fatherName;
    @Column(name = "mother_name")
    private String motherName;


    public Customer(String customerID, String customerName, String emailId, String guardianName, String fatherName, String motherName) {
        this.customerID = customerID;
        this.customerName = customerName;
        this.emailId = emailId;
        this.guardianName = guardianName;
        this.fatherName = fatherName;
        this.motherName = motherName;
    }
    public String getCustomerID() {
        return customerID;
    }

    public void setCustomerID(String customerID) {
        this.customerID = customerID;
    }

    public String getCustomerName() {
        return customerName;
    }

    public void setCustomerName(String customerName) {
        this.customerName = customerName;
    }

    public String getEmailId() {
        return emailId;
    }

    public void setEmailId(String emailId) {
        this.emailId = emailId;
    }

    public String getGuardianName() {
        return guardianName;
    }

    public void setGuardianName(String guardianName) {
        this.guardianName = guardianName;
    }

    public String getFatherName() {
        return fatherName;
    }

    public void setFatherName(String fatherName) {
        this.fatherName = fatherName;
    }

    public String getMotherName() {
        return motherName;
    }

    public void setMotherName(String motherName) {
        this.motherName = motherName;
    }
}
