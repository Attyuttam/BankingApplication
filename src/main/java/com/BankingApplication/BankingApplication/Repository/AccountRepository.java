package com.BankingApplication.BankingApplication.Repository;

import com.BankingApplication.BankingApplication.Model.Account;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AccountRepository extends CrudRepository<Account,String> {}
