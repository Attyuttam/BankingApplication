package com.BankingApplication.BankingApplication.Service;

import com.BankingApplication.BankingApplication.Model.ACA;
import com.BankingApplication.BankingApplication.Repository.ACARepository;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@Slf4j
public class ACAService {
        @Autowired
        private ACARepository acaRepository;
        public List<ACA> findAll() {
            List<ACA> aca = new ArrayList<>();
            // accountRepository.findAll().forEach(e -> Logger.getAnonymousLogger().info(e.getAccountID()));
            acaRepository.findAll().forEach(aca::add);
            return aca;
        }
        public String save(ACA aca){
            List<ACA> acaList = new ArrayList<>();
            acaRepository.findAll().forEach(acaList::add);
            for (ACA value : acaList) {
                //log.info(value.getAcaName()+" "+value.getAcaAddress()+" "+value.getAcaBirthDate()+" "+value.getAcaEmail()+" "+value.getAcaPhoneNum());
                //TODO: create a inbuilt function in ACA object to perform the comparison.
                if (value.getAcaName().equals(aca.getAcaName()) &&
                        value.getAcaAddress().equals(aca.getAcaAddress()) &&
                        value.getAcaBirthDate().compareTo(aca.getAcaBirthDate())==0 &&
                        value.getAcaEmail().equals(aca.getAcaEmail()) &&
                        value.getAcaPhoneNum().equals(aca.getAcaPhoneNum()))
                    return "ACA already exisits with ID: " + value.getAcaID();
            }
            return acaRepository.save(aca).getAcaID();
        }

        public Long count() {
            return acaRepository.count();
        }

        public void deleteById(String acaId) {
            acaRepository.deleteById(acaId);
        }


}
