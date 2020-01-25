package com.BankingApplication.BankingApplication.Service;

import com.BankingApplication.BankingApplication.Model.ACA;
import com.BankingApplication.BankingApplication.Repository.ACARepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class ACAService {
        @Autowired
        private ACARepository acaRepository;
        public List<ACA> findAll() {
            List<ACA> aca = new ArrayList<>();
            // accountRepository.findAll().forEach(e -> Logger.getAnonymousLogger().info(e.getAccountID()));
            acaRepository.findAll().forEach(e -> aca.add(e));
            return aca;
        }
        public Long count() {
            return acaRepository.count();
        }

        public void deleteById(String acaId) {
            acaRepository.deleteById(acaId);
        }


}
