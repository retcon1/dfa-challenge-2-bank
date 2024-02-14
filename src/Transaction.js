export default class Transaction {
    #amount;
    #balance;
    #type;
    #date;
    #id;

    static #nextTransactionId = 1000;

    constructor(amount, balance, type) {
        this.#amount = amount;
        this.#balance = balance;
        this.#type = type;
        this.#date = new Date().toLocaleDateString("en-GB");
        this.#id = Transaction.#nextTransactionId++;
    }

    getAmount() {
        return this.#amount;
    }

    getDate() {
        return this.#date;
    }

    getBalance() {
        return this.#balance;
    }

    getType() {
        return this.#type;
    }

    getId() {
        return this.#id;
    }
}
