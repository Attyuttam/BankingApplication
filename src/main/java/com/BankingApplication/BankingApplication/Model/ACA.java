package com.BankingApplication.BankingApplication.Model;


import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "ACA")
@Getter
@Setter
@NoArgsConstructor
public class ACA {
    @Id
    @Column(name="aca_id")
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private String acaID;

    @Column(name = "aca_name")
    private String acaName;
    @Column(name = "aca_birth_date")
    @JsonFormat(shape=JsonFormat.Shape.STRING, pattern="yyyy-MM-dd")
    private Date acaBirthDate;
    @Column(name = "aca_address")
    private String acaAddress;
    @Column(name = "aca_phno")
    private String acaPhoneNum;
    @Column(name = "aca_email")
    private String acaEmail;

    public ACA(String acaName,Date acaBirthDate,String acaAddress,String acaPhoneNum,String acaEmail){
        this.acaName = acaName;
        this.acaBirthDate = acaBirthDate;
        this.acaAddress = acaAddress;
        this.acaPhoneNum =acaPhoneNum;
        this.acaEmail = acaEmail;
    }
}
