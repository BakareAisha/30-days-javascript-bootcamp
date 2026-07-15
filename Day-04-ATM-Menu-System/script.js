let option = 4;
let message;

switch (option) {
    case 1:
        message = "Check Balance";
        break;
    case 2:
        message = "Withdraw Money";
        break;
    case 3:
        message = "Deposit Money";
        break;
    case 4:
        message = "Transfer Money";
        break;
    case 5:
        message = "Change PIN";
        break;
    case 6:
        message = "EXIT";
        break;
    default:
        message = "Invalid Option";
}
document.getElementById("container").innerHTML = `
    <h1> ATM MENU</h1>

    <p><strong>Selected Option:</strong> ${option}</p>

    <p><strong>Service:</strong> ${message}</p>
`;
