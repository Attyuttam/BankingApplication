package com.BankingApplication.BankingApplication.Controller;

import com.BankingApplication.BankingApplication.Model.*;
import com.BankingApplication.BankingApplication.Service.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class BankingApplicationController {
    @Autowired
    private AccountService accountService;
    @Autowired
    private AccountTransactionService accountTransactionService;
    @Autowired
    private AccountTypeService accountTypeService;
    @Autowired
    private CustomerAccountService customerAccountService;
    @Autowired
    private CustomerService customerService;

    //Account Controller
    @CrossOrigin("http://localhost:3000")
    @GetMapping("/accounts")
    public List<Account> allAccounts() {
        return accountService.findAll();
    }
    @GetMapping("/accounts/count")
    public Long countNumberOfAccounts() {
        return accountService.count();
    }
    @DeleteMapping("/accounts/{accountId}")
    public void deleteAccount(@PathVariable String accountId) {
        accountService.deleteById(accountId);
    }
    //AccountTransaction Controller
    @GetMapping("/accountTransactions")
    public List<AccountTransaction> allAccountTransactions() {
        return accountTransactionService.findAll();
    }
    @GetMapping("/accountTransactions/count")
    public Long countNumberOfAccountTransactions() {
        return accountTransactionService.count();
    }
    @DeleteMapping("/accountTransactions/{accountTransactionId}")
    public void deleteAccountTransaction(@PathVariable String accountTransactionId) {
        accountTransactionService.deleteById(accountTransactionId);
    }
    //AccountTypeController
    @GetMapping("/accountTypes")
    public List<AccountType> allAccountTypes() {
        return accountTypeService.findAll();
    }
    @GetMapping("/accountTypes/count")
    public Long countNumberOfAccountTypes() {
        return accountTypeService.count();
    }
    @DeleteMapping("/accountTypes/{accountTypeId}")
    public void deleteAccountType(@PathVariable String accountTypeId) {
        accountTypeService.deleteById(accountTypeId);
    }
    //Customer Controller
    @GetMapping("/customers")
    public List<Customer> allCustomers() {
        return customerService.findAll();
    }
    @GetMapping("/customers/count")
    public Long countNumberOfCustomers() {
        return customerService.count();
    }
    @DeleteMapping("/customers/{customerId}")
    public void deleteCustomer(@PathVariable String customerId) {
        customerService.deleteById(customerId);
    }
    //CustomerAccount Controller
    @GetMapping("/customerAccounts")
    public List<CustomerAccount> allCustomerAccounts() {
        return customerAccountService.findAll();
    }
    @GetMapping("/customerAccounts/count")
    public Long countNumberOfCustomerAccounts() {
        return customerAccountService.count();
    }
    @DeleteMapping("/customerAccounts/{customerAccountID}")
    public void delete(@PathVariable CustomerAccountID customerAccountID) {
        customerAccountService.deleteById(customerAccountID);
    }
}
