function OutputOnScreen(message) {
    alert(message);
    console.log(message);
}
function Calc() {
    let input1 = (prompt("Введите первое число"));
    let input2 = (prompt("Введите второе число"));
    let input3 = (prompt("Введите оператор(+, -, *, /)"));

    if (input1 == null || input2 == null || input3 == null) {
        OutputOnScreen("Wasted");
    } else{
        userNum1 = Number(input1);
        userNum2 = Number(input2);
        userOp = String(input3);

        let message;
        if (isNaN(userNum1) || input1.trim() === "" || isNaN(userNum2) || input2.trim() === "") {
            OutputOnScreen("Число не введено");
        } else if (!["+", "-", "*", "/"].includes(userOp)) {
            OutputOnScreen("Неверный оператор");
        } else if (userOp == "/" && userNum2 == 0) {
            OutputOnScreen("На ноль делить нельзя");
        } else {
            let result = 0;
            switch (userOp) {
                case '+': result = userNum1 + userNum2; break;
                case '-': result = userNum1 - userNum2; break;
                case '*': result = userNum1 * userNum2; break;
                case '/': result = userNum1 / userNum2; break;
                }
            message = result;
            OutputOnScreen(message);
        }
    }
}
Calc();