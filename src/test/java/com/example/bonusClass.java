/*Bonus Challenge.
Add a new feature to the BankAccount class 
(e.g., transfer to another account) and write full TestNG test coverage.
 */

package com.example;

import org.testng.annotations.AfterMethod;
import org.testng.annotations.BeforeMethod;
import org.testng.annotations.DataProvider;
import org.testng.annotations.Test;

import junit.framework.Assert;

public class bonusClass {

    BankAccount accountRaquel;
    BankAccount accountKen;

    //hooks
    @BeforeMethod(groups = {"transfer"})
    public void setup(){
        accountRaquel =  new BankAccount(1000);
        accountKen = new BankAccount(1000);
    }

    //basic test
    @Test(groups = {"transfer"})
    public void transferToSome(){
        double transferAmount = 200;
        double expectedAmount = 1200;

        accountKen.transfer(accountRaquel, transferAmount);
        double real = accountRaquel.getBalance();

        Assert.assertEquals(expectedAmount, real);

    }
    //exceptions
    @Test(groups = {"transfer"}, expectedExceptions = IllegalArgumentException.class)
    public  void accountNullTest(){
        accountRaquel = null;
        accountKen.transfer(accountRaquel, 50);

    }

    @Test(groups = {"transfer"}, expectedExceptions = IllegalArgumentException.class)
    public void negativeTest(){
        double transferAmount = -500;

        accountRaquel.transfer(accountKen, transferAmount);

    }

    @Test(groups = {"transfer"}, expectedExceptions = IllegalArgumentException.class)
    public void insufficientBalance(){
        double transferAmount = 1001;
        accountRaquel.transfer(accountKen, transferAmount);
    }

    //data provider
    @DataProvider(name= "TransferAmount")
    public Object[][] transferData(){
        return new Object[][]{
            {100, 1100},
            {200, 1200},
            {45, 1045}

        };
    }

    @Test(groups = {"transfer"}, dataProvider= "TransferAmount")
    public void getDataTransfer(double inicialamount, double finalAmount){
        accountKen.transfer(accountRaquel, inicialamount);
        Assert.assertEquals(finalAmount, accountRaquel.getBalance());
        
    }

    //Dependency 
    @Test(groups = {"transfer"})
    public void firstDeposit(){
        double depositAmount = 50;
        accountKen.deposit(depositAmount);
    }

    @Test(dependsOnMethods = {"firsDeposit"})
    public void secondTransfer(){
        double transferAmount = 50;
        double real = 1000;

        accountKen.transfer(accountRaquel, transferAmount);

        Assert.assertEquals(real, accountKen.getBalance());
    }

    //hook
    @AfterMethod(groups = {"transfer"})
    public void teardown(){
        accountKen = null;
        accountRaquel = null;
    }

    
}
