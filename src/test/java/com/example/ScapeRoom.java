package com.example;

import org.testng.annotations.DataProvider;
import org.testng.annotations.Parameters;
import org.testng.annotations.Test;

import junit.framework.Assert;

public class ScapeRoom {

    public boolean isEven(int number) {
        if(number <=0) throw new IllegalArgumentException("Number must be positive");
        return number % 2 == 0;
    }

    @DataProvider(name="numbers")
    public Object[][] provideNumbers() {
        return new Object[][] {
            {2, true},
            {5, false},
            {10, true}
        };
    }

   @Test(dataProvider = "numbers")
    public void testIsEven(int input, boolean expected) {
        boolean result = isEven(input);
        Assert.assertEquals(expected, result);
    }

    //Bonus 1:
    @Parameters({"number-positive"})
    @Test(groups = {"scapeRoom"})
    public void basicTest(int number){ 
        System.out.println("Number parameter:" + number);
        boolean result = isEven(number);
        Assert.assertTrue(result);
    }

    //Bonus 2:
    @Test(expectedExceptions = IllegalArgumentException.class)
    public void isNegative(){
        boolean result = isEven(-5);
        Assert.assertTrue(result);
    }

}