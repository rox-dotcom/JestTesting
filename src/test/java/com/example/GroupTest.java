/*5. Test Groups
Create groups for "positive-tests" and "negative-tests".
Run only the negative tests using an XML configuration. */

package com.example;

import org.testng.annotations.AfterMethod;
import org.testng.annotations.BeforeMethod;
import org.testng.annotations.Test;

import junit.framework.Assert;

public class GroupTest {

    BankAccount account;
    
    @BeforeMethod(groups = {"positive-tests", "negative-tests"})
    public void setUp(){
        account = new BankAccount(200);
    }

    @Test(groups = {"positive-tests"})
    public void deposit1(){
        account.deposit(100);
        double real = account.getBalance();
        Assert.assertEquals(300.0, real);


    }

    @Test(groups = {"negative-tests"}, expectedExceptions = IllegalArgumentException.class)
    public void deposit2(){
        account.deposit(-100);
        double real = account.getBalance();
        Assert.assertEquals(200, real);

    }

    @Test(groups = {"positive-tests"})
    public void withdraw1(){
        account.withdraw(100);
        double real = account.getBalance();
        Assert.assertEquals(100.0, real);


    }
    @Test(groups = {"negative-tests"}, expectedExceptions = IllegalArgumentException.class)
    public void withdraw2(){
        account.withdraw(-100);
        double real = account.getBalance();
        Assert.assertEquals(300.0, real);

    }

    @AfterMethod(groups = {"positive-tests", "negative-tests"})
    public void tearDown(){
        account = null;
    }
    
    
}
