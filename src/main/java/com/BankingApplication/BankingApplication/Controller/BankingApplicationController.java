package com.BankingApplication.BankingApplication.Controller;

import com.BankingApplication.BankingApplication.Model.*;
import com.BankingApplication.BankingApplication.Service.*;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.web.bind.annotation.*;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.io.IOException;
import java.sql.Timestamp;
import java.text.ParseException;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import static java.lang.Double.parseDouble;

@RestController
@Slf4j
public class BankingApplicationController {
    @Autowired
    private AccountService accountService;
    @Autowired
    private AccountTransactionService accountTransactionService;
    @Autowired
    private AccountTypeService accountTypeService;
    @Autowired
    private CustomerService customerService;

    @Autowired
    private ACAService acaService;

    //ACA Controller
    @GetMapping("/getAllAca")
    public List<ACA> getAllACA() {
        return acaService.findAll();
    }
    @GetMapping("/aca/count")
    public Long countNumberOfACA() {
        return acaService.count();
    }
    @DeleteMapping("/aca/{acaId}")
    public void deleteACA(@PathVariable String acaId) {
        acaService.deleteById(acaId);
    }
    @PostMapping("/addAca")
    public ACA createACA(@RequestBody ACA aca){
        return acaService.save(aca);
    }


    //Account Controller
    @GetMapping("/accounts")
    public List<Account> getAllAccounts() {
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
    @PostMapping("/addAccount")
    public ViewAccountDTO createAccount(@RequestBody saveAccountDTO accountDTO){
        Customer customer = customerService.findByCustomerID(accountDTO.getCustomer());
        AccountType accountType = accountTypeService.findByAccountType(accountDTO.getAccountType());
        Account account = accountService.save(new Account(parseDouble(accountDTO.getAccountBalance()),accountType,parseDouble(accountDTO.getInterestRate()),new Timestamp(new Date().getTime()),customer));
        return ViewAccountDTO.builder()
                .accountBalance(account.getAccountBalance())
                .accountType(account.getAccountTypeID().getAccountType())
                .accountTypeID(account.getAccountTypeID().getAccountTypeID())
                .lastAccessTimeStamp(account.getLastAccessTimeStamp())
                .interestRate(account.getInterestRate())
                .accountID(account.getAccountID())
                .build();
    }
    @RequestMapping("/allAccounts")
    public List<ViewAccountDTO> getAccounts(){return accountService.findAccounts();}

    //AccountTransaction Controller
    @RequestMapping("/allDetailedAccountTransactions")
    public List<ViewAllDetailsDTO> getAllDetailedAccountTransactions() {
        return accountTransactionService.findAllDetailedAccountTransactions();
    }

    @GetMapping("/accountTransactions")
    public List<AccountTransaction> getAllAccountTransactions() {
        return accountTransactionService.findAll();
    }
    @GetMapping("/getTransactionByACA/{acaId}")
    public List<AccountTransaction> getAllAccountTransactionsByAca(@PathVariable String acaId){
        return accountTransactionService.findAllAccountTransactionByAca(acaId);
    }
    @GetMapping("/getTransactionByCustomer/{customerId}")
    public List<AccountTransaction> getAllAccountTransactionsByCustomer(@PathVariable String customerId){
        return accountTransactionService.findAllAccountTransactionByCustomer(customerId);
    }
    @GetMapping("/getTransactionByAccount/{accountId}")
    public List<AccountTransaction> getAllAccountTransactionsByAccount(@PathVariable String accountId){
        return accountTransactionService.findAllAccountTransactionByAccount(accountId);
    }


    @GetMapping("/getTransactionsInRange/From/{startDate}/To/{endDate}")
    public List<AccountTransaction> getAllAccountTransactionsInRange(@PathVariable @DateTimeFormat(pattern = "dd-MM-yyyy") Date startDate, @PathVariable @DateTimeFormat(pattern = "dd-MM-yyyy") Date endDate){
        return accountTransactionService.findAllAccountTransactionInRange(startDate,endDate);
    }
    @GetMapping("/getTransactionsForDate/{date}")
    public List<AccountTransaction> getAllAccountTransactionForDate(@PathVariable  @DateTimeFormat(pattern = "dd-MM-yyyy") Date date){
        return accountTransactionService.findAllAccountTransactionInRange(date,date);
    }
    @GetMapping("/getTransactionsFor/Month/{monthNumber}/Year/{year}")
    public List<AccountTransaction> getAllAccountTransactionForMonth(@PathVariable Integer monthNumber, @PathVariable Integer year) throws ParseException {
        return accountTransactionService.findAllAccountTransationForMonth(monthNumber,year);
    }
    @GetMapping("/getTransactionsForYear/{year}")
    public List<AccountTransaction> getAllAccountTransactionForYear(@PathVariable String year) throws ParseException {
        return accountTransactionService.findAllAccountTransationForYear(year);
    }


    @GetMapping("/accountTransactions/count")
    public Long countNumberOfAccountTransactions() {
        return accountTransactionService.count();
    }
    @DeleteMapping("/accountTransactions/{accountTransactionId}")
    public void deleteAccountTransaction(@PathVariable String accountTransactionId) {
        accountTransactionService.deleteById(accountTransactionId);
    }
    @PostMapping("/addTransaction")
    public String createTransaction(@RequestBody AccountTransaction accountTransaction){
        return accountTransactionService.save(accountTransaction);
    }

    //AccountTypeController
    @GetMapping("/accountTypes")
    public List<AccountType> getAllAccountTypes() {
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
    public List<Customer> getAllCustomers() {
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
    @PostMapping("/addCustomer")
    public Customer createCustomer(@RequestBody Customer customer){
        return customerService.save(customer);
    }
}
