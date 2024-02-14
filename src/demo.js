import readline from "readline";
import Account from "./Account.js";
import Transaction from "./Transaction.js";
import chalk from "chalk";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const account = new Account();

const mainMenu = () => {
    rl.question(
        `\nWelcome to Ben's Bank, please type an option: credit, debit, print or close: \n`,
        (answer) => {
            mainMenuSelector(answer);
        }
    );
};

const mainMenuSelector = (answer) => {
    switch (answer) {
        case `credit`:
            console.log(`\nSo you want to deposit money?\n`);
            creditMenu();
            break;
        case `debit`:
            console.log(`\nSo you want to withdraw money?\n`);
            debitMenu();
            break;
        case `print`:
            console.log(`\nSo you want to print your statement?\n`);
            printMenu();
            break;
        case `close`:
            console.log(`\nThanks for using our bank! Goodbye\n`);
            rl.close();
            break;
        default:
            console.log(`Please select a valid option\n`);
            mainMenu();
            break;
    }
};

const creditMenu = () => {
    rl.question(`How much would you like to deposit? \n`, (answer) => {
        try {
            const deposit = new Transaction(parseFloat(answer), account.getBalance(), `credit`);
            account.deposit(deposit);
            mainMenu();
        } catch (err) {
            console.log(chalk.red(err.message));
            console.log("\nLet's try that again...\n");
            creditMenu();
        }
    });
};

const debitMenu = () => {
    rl.question(`How much would you like to withdraw? \n`, (answer) => {
        try {
            const withdraw = new Transaction(parseFloat(answer), account.getBalance(), `debit`);
            account.withdraw(withdraw);
            mainMenu();
        } catch (err) {
            console.log(chalk.red(err.message));
            console.log("\nLet's try that again...\n");
            mainMenu();
        }
    });
};

const printMenu = () => {
    console.log(`\nHere is your statement:\n`);
    account.printStatement();
    console.log(`\nThank you for using Ben's Bank, goodbye!\n`);
    rl.close();
};

mainMenu();
