//3. Exception Testing
package com.example;

import org.testng.annotations.Test;

public class ExceptionBankAccountTest {

    BankAccount account = new BankAccount(200);

    @Test(expectedExceptions = IllegalArgumentException.class)
    public void testNegativeDeposit(){
        account.deposit(-50);
        account.withdraw(-50);


    }

    @Test(expectedExceptions = IllegalArgumentException.class)
    public void testZeroDeposit(){
        account.deposit(0);
        account.withdraw(0);
        
    }

    
}
