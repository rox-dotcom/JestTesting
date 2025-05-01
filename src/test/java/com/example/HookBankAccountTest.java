//2.Test Lifecycle Hooks
package com.example;

import org.testng.annotations.AfterClass;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.Test;

import junit.framework.Assert;

public class HookBankAccountTest {

    BankAccount account;

    @BeforeClass
    public void setUp(){ //initialices the account
        account = new BankAccount(100); 
               
    }

     @Test
    public void testDeposit() {
        int depositAmount = 50;
        double  expectedAmount = 150;
        
        account.deposit(depositAmount);
        double realAmount = account.getBalance(); //the real amount is 150

        Assert.assertEquals(expectedAmount, realAmount);
    }

    @Test
    public void testWithdraw() {
        int withdrawAmount = 50;
        double expectedAmount = 100; //here the expected amount changes to 100 
                                    // because the tearDown happens after all tests 

        account.withdraw(withdrawAmount);
        double realAmount = account.getBalance();

        Assert.assertEquals( expectedAmount, realAmount);
    }

    @AfterClass //if we wanted it for each test we should use @AfterMethod
    public void tearDown(){

        account = null;
    }



    
}
