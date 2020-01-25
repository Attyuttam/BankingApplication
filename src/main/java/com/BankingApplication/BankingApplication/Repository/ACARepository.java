package com.BankingApplication.BankingApplication.Repository;

import com.BankingApplication.BankingApplication.Model.ACA;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ACARepository extends CrudRepository<ACA,String> {}
