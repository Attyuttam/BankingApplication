package com.BankingApplication.BankingApplication.Repository;

import com.BankingApplication.BankingApplication.Model.AccountTransaction;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AccountTransactionRepository extends CrudRepository<AccountTransaction,String> {
}
