//1. Basic Testing with @Test and Assertions
package com.example;

import org.testng.annotations.Test;

import junit.framework.Assert;

public class BankAccountTest {
    @Test
    public void testDeposit() {
        BankAccount account = new BankAccount(100.0);
        int depositAmount = 50;
        double  expectedAmount = 150;
        
        account.deposit(depositAmount);
        double realAmount = account.getBalance();

        Assert.assertEquals(expectedAmount, realAmount);
    }

    @Test
    public void testWithdraw() {
        BankAccount account = new BankAccount(100.0);
        int withdrawAmount = 50;
        double expectedAmount = 50;

        account.withdraw(withdrawAmount);
        double realAmount = account.getBalance();

        Assert.assertEquals( expectedAmount, realAmount);
    }
    
}
