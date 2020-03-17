package com.BankingApplication.BankingApplication.Repository;

import com.BankingApplication.BankingApplication.Model.AccountType;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AccountTypeRepository extends CrudRepository<AccountType,String> {
    AccountType findByAccountType(String accountType);
}
