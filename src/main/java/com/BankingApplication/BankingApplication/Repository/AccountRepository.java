package com.BankingApplication.BankingApplication.Repository;

import com.BankingApplication.BankingApplication.Model.Account;
import com.BankingApplication.BankingApplication.Model.Customer;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AccountRepository extends CrudRepository<Account,String> {
    List<Account> findAllByCustomer(Customer customer);

    Account findAllByAccountID(String accountId);
}
