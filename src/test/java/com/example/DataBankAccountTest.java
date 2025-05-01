//Data-Driven Testing

package com.example;

import org.testng.annotations.DataProvider;
import org.testng.annotations.Test;

import junit.framework.Assert;

public class DataBankAccountTest {
    private BankAccount account;

    @DataProvider(name = "TestDeposit")
    public Object[][] depositData1(){
        return new Object[][]{
            {100, 50, 150}, //Saldo inicial, a depositar, saldo final
            {200, 150, 350},
            {250, 1, 251}
        };
        
    }

    @Test(groups={"data"},dataProvider = "TestDeposit")
    public void getDepositData(double initialBalance, double deposito, double finalAmount){
        account = new BankAccount(initialBalance);
        account.deposit(deposito);

        double realBalance = account.getBalance();

        Assert.assertEquals(realBalance, finalAmount);

    }
    
}
