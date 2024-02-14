# Domain Models and Test Plan

## Benefits of this Software

This console banking application will be of great use to your business analyst team; it will provide clear, detailed information of deposit and withdrawals, along with the date they were conducted at. This data will then be saved in a file which the team can easily access, parse and enter into a database to properly analyse.

The ease of use means that users will know exactly what they can and can't do, with appropriate feedback being given when going into an overdraft or attempting to withdraw more money than they have.

With all this considered, the business should have a better idea of the spending habits of users. Including being able to track their overdraft if they have one, ensuring that they effectively and safely manage their finances. This would also give the business a better idea of the financial status of their customers, indicating what trajectory to take future ventures based on the financial capabilities of the customers.

## User Stories

As a user I want to be able to access my account, so that I can see my current balance.

As a user I want to be able to credit my account, so that I can debit it at a later date.

As a user I want to be able to debit my account, so that I can spend the money I have stored.

As a user I don't want to be able to debit money that I don't have in my account, so that I'm not overdrawn accidentally.

As a user I want to be able to see dates associated with my credit or debit actions, so that I can track my finances.

As a user I want to be able to print a statement of my transactions, so that I can keep track and save them for a later date.

As a user I want to be able to enable an overdraft on my account, so that I can withdraw more than I have.

As a user I want to be able to set the overdraft limit of my account, so that I can keep limit or free up my spending depending on my situation.

## Domain Models

| Object | Properties | Messages | Output |
| ---- | ---- | ---- | ---- |
| Account | id @Number |  |  |
|  | #balance @Float | getBalance() | @Float |
|  |  | deposit(@Float) | @String |
|  |  | withdraw(@Float) | @Float |
|  | #transactions @Array[@Transaction] | @getTransactions() | @Array[@Transactions] |
|  |  | printStatement() | @Console.log |
|  | #overdraft @Float<br> | getOverdraftLimit() | @Float |
|  | #overdraftEnabled @boolean | getOverdraftStatus() | @boolean |
| Transaction | id @Number |  |  |
|  | #date @Date | getDate() | @Date |
|  | #amount @Float | getAmount() | @Float |
|  | #type @String credit/debit | getType() | @String |
|  | #balance @Float | getTransBalance() | @Float |

## Kanban Board

![Kanban Board Screenshot](<Screenshot 2024-01-26 at 13.57.36.png>)