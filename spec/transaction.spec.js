import Transaction from "../src/Transaction.js";

describe("transaction class", () => {
    it("should have accurate properties of amount, date, balance and type (credit/debit)", () => {
        // Arrange
        const transaction = new Transaction(100, 1000, "credit");
        // Assert
        expect(transaction.getAmount()).toEqual(100);
        expect(transaction.getDate()).toEqual(new Date().toLocaleDateString("en-GB"));
        expect(transaction.getBalance()).toEqual(1000);
        expect(transaction.getType()).toEqual("credit");
        expect(transaction.getId()).toEqual(1000);
    });
});
