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
        customerRepository.findAll().forEach(customers::add);
        return customers;
    }
    public Long count() {
        return customerRepository.count();
    }

    public void deleteById(String customerId) {
        customerRepository.deleteById(customerId);
    }

    public String save(Customer customer) {
        List<Customer> customerList = new ArrayList<>();
        customerRepository.findAll().forEach(customerList::add);
        for (Customer value : customerList) {
            if (value.getCustomerName().equals(customer.getCustomerName()) &&
                    value.getDob().compareTo(customer.getDob()) == 0 &&
                    value.getEmailId().equals(customer.getEmailId()) &&
                    value.getFatherName().equals(customer.getFatherName()) &&
                    value.getGuardianName().equals(customer.getGuardianName()) &&
                    value.getMotherName().equals(customer.getMotherName())) {
                return "Customer already exists with Id: " + value.getCustomerID();
            }
        }
        return customerRepository.save(customer).getCustomerID();
    }
}
