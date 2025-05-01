/* 6. Test Dependencies
Write a test that depends on a successful deposit before withdrawal.
 */
package com.example;

import org.testng.annotations.Test;

import junit.framework.Assert;

public class DependencyTest {

    BankAccount account = new BankAccount(200);

    @Test(groups = {"init"})
    public void succesfulDeposit(){
        account.deposit(100);
        double real = account.getBalance();

        Assert.assertEquals(300.0, real);

    }

    @Test(dependsOnMethods = {"succesfulDeposit"})
    public void newWithdrawal(){
        account.withdraw(50);
        double real = account.getBalance();

        Assert.assertEquals(250.0, real);

    }
    
}
