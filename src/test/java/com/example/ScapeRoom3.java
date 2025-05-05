/*Test Grouping 
Parameterization (via @DataProvider or @Parameters)
Assertions  */

package com.example;

import org.testng.Assert;
import org.testng.annotations.DataProvider;
import org.testng.annotations.Test;

public class ScapeRoom3 {
    
    public int add(int a, int b) {
        return a + b;
    }

    public int divide(int a, int b) {
        if (b == 0) throw new IllegalArgumentException("Cannot divide by zero");
        return a / b;
    }

    public boolean isPositive(int number) {
        return number > 0;
    }

    @DataProvider(name = "addData")
    public Object[][] addData(){
        return new Object[][]{
            {4,5,9},
            {10,2,12},
            {45,23,68}
        };
    }

    @Test(groups = {"add"}, dataProvider = "addData")
    public void addTest(int num1, int num2, int expected){
        int result = add(num1, num2);
        Assert.assertEquals(result, expected);

    }

    @Test(groups = {"divide"})
    public void divideTest(){
        int result = divide(10, 2);
        Assert.assertEquals(result, 5);
    }

    @Test(groups = {"divide"}, expectedExceptions = IllegalArgumentException.class)
    public void divideZero(){
        divide(5, 0);
    }

    @Test(groups = {"validation"})
    public void positiveTest(){
        boolean result = isPositive(8);
        Assert.assertTrue(result);
    }

}
