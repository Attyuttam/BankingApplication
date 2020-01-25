package com.BankingApplication.BankingApplication.Service;


import com.BankingApplication.BankingApplication.Model.CustomerDetails;
import com.BankingApplication.BankingApplication.Repository.CustomerDetailsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Service
public class CustomerDetailsService {
    @Autowired
    private CustomerDetailsRepository customerDetailsRepository;

    public ArrayList<CustomerDetails> findCustomerDetails() throws IOException {
        List l =  customerDetailsRepository.findCustomerDetails();
        ArrayList<CustomerDetails> customerDetailsArrayList= new ArrayList<>();
        for(int i=0;i<l.size();i++){
            Object[] objects=(Object[])l.get(i);
            CustomerDetails customerDetails = new CustomerDetails();
            customerDetails.setCustomerID((String) objects[0]);
            customerDetails.setCustomerName((String) objects[1]);
            customerDetails.setCustomerEmailID((String) objects[2]);
            customerDetails.setCustomerGuardianName((String) objects[3]);
            customerDetails.setCustomerAccountID((String) objects[4]);
            customerDetails.setCustomerAccountBalance((Double) objects[5]);
            customerDetails.setCustomerAccountLastAccessTimeStamp((Date) objects[6]);
            customerDetails.setCustomerAccountType((String) objects[7]);
            customerDetails.setCustomerAccountCreationTimeStamp((Date) objects[8]);
            customerDetailsArrayList.add(customerDetails);
        }
        return customerDetailsArrayList;
    }
}
