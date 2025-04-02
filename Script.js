
function orders() {
    let val = prompt("To place the order, enter your name:");
    if (val) {
        alert("Your order is placed, " + val + "!");
    } else {
        alert("Please enter your name.");
    }
}
