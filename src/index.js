import Account from "./Account.js";
import Transaction from "./Transaction.js";

const account = new Account();
account.setOverdraft(100);

const deposit1 = new Transaction(100, account.getBalance(), `credit`);
account.deposit(deposit1);

const withdrawal1 = new Transaction(50, account.getBalance(), `debit`);
account.withdraw(withdrawal1);

const withdrawal2 = new Transaction(110.55, account.getBalance(), `debit`);
account.withdraw(withdrawal2);

const deposit2 = new Transaction(200, account.getBalance(), `credit`);
account.deposit(deposit2);

account.printStatement();
