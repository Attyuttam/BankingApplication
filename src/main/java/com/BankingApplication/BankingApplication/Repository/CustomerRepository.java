package com.BankingApplication.BankingApplication.Repository;

import com.BankingApplication.BankingApplication.Model.Customer;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CustomerRepository extends CrudRepository<Customer,String> {
    Customer findByCustomerID(String customerId);
}
