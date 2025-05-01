package com.example;

public class BankAccount {
    private double balance;

    public BankAccount(double initialBalance) {
        this.balance = initialBalance;
    }

    public void deposit(double amount) {
        if (amount <= 0) throw new IllegalArgumentException("Deposit must be positive");
        balance += amount;
    }

    public void withdraw(double amount) {
        if (amount <= 0) throw new IllegalArgumentException("Withdrawal must be positive");
        if (amount > balance) throw new IllegalArgumentException("Insufficient funds");
        balance -= amount;
    }

    public void transfer( BankAccount account, double amount){
        if(account == null)throw new IllegalArgumentException("Account cannot be null");
        if(amount <= 0)throw new IllegalArgumentException("Transfer must be positive");
        if(this.getBalance() < amount) throw new IllegalArgumentException("You don't have enough money");
        
        account.deposit(amount);
        this.withdraw(amount);

    }

    public double getBalance() {
        return balance;
    }
}