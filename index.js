<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Simple ATM App</title>
</head>
<body>
    <h1>ATM Simulation</h1>
    <button onclick="startATM()">Start ATM</button>

    <script>
        // Initial account balances
        let account1Balance = 1000; // Account 1 balance
        let account2Balance = 1000; // Account 2 balance

        function startATM() {
            let action = prompt("Enter the action you want to perform:\n1. Check Balance\n2. Withdraw Money\n3. Transfer Money");

            switch(action) {
                case "1":
                    checkBalance();
                    break;
                case "2":
                    withdrawMoney();
                    break;
                case "3":
                    transferMoney();
                    break;
                default:
                    alert("Invalid action selected.");
            }
        }

        function checkBalance() {
            let account = prompt("Enter the account number to check balance (1 or 2):");
            if (account === "1") {
                alert("Account 1 Balance: $" + account1Balance);
            } else if (account === "2") {
                alert("Account 2 Balance: $" + account2Balance);
            } else {
                alert("Invalid account number.");
            }
        }

        function withdrawMoney() {
            let account = prompt("Enter the account number to withdraw from (1 or 2):");
            let amount = parseFloat(prompt("Enter the amount to withdraw:"));

            if (isNaN(amount) || amount <= 0) {
                alert("Invalid amount.");
                return;
            }

            if (account === "1") {
                if (amount > account1Balance) {
                    alert("Insufficient funds in Account 1.");
                } else {
                    account1Balance -= amount;
                    alert("Withdrawal successful! New balance in Account 1: $" + account1Balance);
                }
            } else if (account === "2") {
                if (amount > account2Balance) {
                    alert("Insufficient funds in Account 2.");
                } else {
                    account2Balance -= amount;
                    alert("Withdrawal successful! New balance in Account 2: $" + account2Balance);
                }
            } else {
                alert("Invalid account number.");
            }
        }

        function transferMoney() {
            let fromAccount = prompt("Enter the account number to transfer from (1 or 2):");
            let toAccount = prompt("Enter the account number to transfer to (1 or 2):");
            let amount = parseFloat(prompt("Enter the amount to transfer:"));

            if (isNaN(amount) || amount <= 0) {
                alert("Invalid amount.");
                return;
            }

            if (fromAccount === "1" && toAccount === "2") {
                if (amount > account1Balance) {
                    alert("Insufficient funds in Account 1.");
                } else {
                    account1Balance -= amount;
                    account2Balance += amount;
                    alert("Transfer successful! New balance in Account 1: $" + account1Balance + " and in Account 2: $" + account2Balance);
                }
            } else if (fromAccount === "2" && toAccount === "1") {
                if (amount > account2Balance) {
                    alert("Insufficient funds in Account 2.");
                } else {
                    account2Balance -= amount;
                    account1Balance += amount;
                    alert("Transfer successful! New balance in Account 1: $" + account1Balance + " and in Account 2: $" + account2Balance);
                }
            } else {
                alert("Invalid account number(s) for transfer.");
            }
        }
    </script>
</body>
</html>