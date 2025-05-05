package com.example;

import org.testng.annotations.AfterClass;
import org.testng.annotations.Test;

import junit.framework.Assert;

public class ScapeRoom2 {
    
    boolean loggedIn = false;
    double balance = 0.0;

    @Test(groups={"init"})
    public void loginTest() {
        loggedIn = true;
        System.out.println("Successful logged in");
        Assert.assertTrue(loggedIn);
    }

    @Test(dependsOnMethods = {"loginTest"})
    public void depositTest() {
        double deposit = 500.0;
        balance = deposit;
        System.out.println("Deposit successful");
        Assert.assertEquals(deposit,balance);
    }

    @Test(dependsOnMethods = {"depositTest"})
    public void withdrawTest() {
        double withdraw = 250.0;
        balance -= withdraw;
        System.out.println("Withdraw successful");
        Assert.assertEquals(withdraw,balance); 
    }

    //Bonus
    //Add a fourth method checkBalanceTest that depends on withdrawTest.
    @Test(dependsOnMethods = {"withdrawTest"})
    public void checkBalanceTest(){
        System.out.println("Balance is: "+ balance);
        Assert.assertTrue(loggedIn);

    }

    //Bonus 2
    @AfterClass(alwaysRun = true)
    public void tearDown(){
        loggedIn = false;
        balance = 0.0;
    }
}
