package com.BankingApplication.BankingApplication.Service;

import com.BankingApplication.BankingApplication.Model.Account;
import com.BankingApplication.BankingApplication.Model.Customer;
import com.BankingApplication.BankingApplication.Repository.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class CustomerService {
    @Autowired
    private CustomerRepository customerRepository;
    public List<Customer> findAll() {
        List<Customer> customers = new ArrayList<>();
        customerRepository.findAll().forEach(e -> customers.add(e));
        return customers;
    }
    public Long count() {
        return customerRepository.count();
    }

    public void deleteById(String customerId) {
        customerRepository.deleteById(customerId);
    }
}
