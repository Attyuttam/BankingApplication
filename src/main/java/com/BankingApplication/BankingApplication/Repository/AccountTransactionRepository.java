package com.BankingApplication.BankingApplication.Repository;

import com.BankingApplication.BankingApplication.Model.ACA;
import com.BankingApplication.BankingApplication.Model.Account;
import com.BankingApplication.BankingApplication.Model.AccountTransaction;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.Date;
import java.util.List;

@Repository
public interface AccountTransactionRepository extends CrudRepository<AccountTransaction,String> {
    List<AccountTransaction> findByAca(ACA aca);

    List<AccountTransaction> findBytransactionTimeStampBetween(Date startDate, Date endDate);

    List<AccountTransaction> findAllByAccount(Account account);

    AccountTransaction findAllByTransactionID(String transactionID);
}
