package com.BankingApplication.BankingApplication.Repository;

import com.BankingApplication.BankingApplication.Model.CustomerDetails;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.util.List;

@Repository
public class CustomerDetailsRepository {
    @PersistenceContext
    private EntityManager em;
    public List findCustomerDetails() {
        List l = em.createNativeQuery(
                "SELECT c.customer_id AS customerID,c.customer_name AS customerName,c.email_id AS customerEmailID,c.guardian_name " +
                        "AS customerGuardianName,a.account_id " +
                        "AS customerAccountID,a.account_balance AS customerAccountBalance,a.last_access_time_stamp " +
                        "AS customerAccountLastAccessTimeStamp,at.account_type" +
                        " AS customerAccountType,ca.customer_account_creation_time_stamp" +
                        " AS customerAccountCreationTimeStamp FROM Customer c,account a,account_type at,customer_account ca " +
                        "WHERE c.customer_id = ca.customer_id_fk " +
                        " AND ca.account_id_fk = a.account_id AND a.account_type_id_fk = at.account_type_id ")
                .getResultList();
        return l;
    }
}
