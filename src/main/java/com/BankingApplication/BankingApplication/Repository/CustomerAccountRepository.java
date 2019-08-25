package com.BankingApplication.BankingApplication.Repository;

import com.BankingApplication.BankingApplication.Model.CustomerAccount;
import com.BankingApplication.BankingApplication.Model.CustomerAccountID;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CustomerAccountRepository extends CrudRepository<CustomerAccount, CustomerAccountID> {}
