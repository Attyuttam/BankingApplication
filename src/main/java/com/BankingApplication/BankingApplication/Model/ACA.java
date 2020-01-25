package com.BankingApplication.BankingApplication.Model;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import java.util.Date;

@Entity
@Table(name = "ACA")
public class ACA {
    @Id
    @Column(name="aca_id")
    private String acaID;
    @Column(name = "aca_name")
    private String acaName;
    @Column(name = "aca_birth_date")
    private Date acaBirthDate;
    @Column(name = "aca_address")
    private String acaAddress;

    public ACA(){}
    public ACA(String acaID, String acaName, Date acaBirthDate, String acaAddress) {
        this.acaID = acaID;
        this.acaName = acaName;
        this.acaBirthDate = acaBirthDate;
        this.acaAddress = acaAddress;
    }
    public String getAcaID() {
        return acaID;
    }

    public void setAcaID(String acaID) {
        this.acaID = acaID;
    }

    public String getAcaName() {
        return acaName;
    }

    public void setAcaName(String acaName) {
        this.acaName = acaName;
    }

    public Date getAcaBirthDate() {
        return acaBirthDate;
    }

    public void setAcaBirthDate(Date acaBirthDate) {
        this.acaBirthDate = acaBirthDate;
    }

    public String getAcaAddress() {
        return acaAddress;
    }

    public void setAcaAddress(String acaAddress) {
        this.acaAddress = acaAddress;
    }
}
