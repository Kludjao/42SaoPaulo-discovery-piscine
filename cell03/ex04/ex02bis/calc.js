$(document).ready(function() {
    setInterval(alert, 30000, "Please use me");

    $('#calcButton').click(function() {
        calc();
    });

    function calc() {
        var operador = $('#operacao').val();
        var a = parseFloat($('#primeiro').val());
        var b = parseFloat($('#segundo').val());
        var resultado = 0;

        if (Number.isInteger(a) && Number.isInteger(b) && a >= 0 && b >= 0) {
            if (operador === "soma") {
                resultado = a + b;
            } else if (operador === "sub") {
                resultado = a - b;
            } else if (operador === "mult") {
                resultado = a * b;
            } else if (operador === "div") {
                if (b === 0) {
                    alert("It’s over 9000!");
                    console.log("Resultado da Operacao: " + resultado);
                    return;
                } else {
                    resultado = a / b;
                }
            } else {
                if (b === 0) {
                    resultado = a % b;
                    alert("It’s over 9000!")
                    console.log("Resultado da Operacao: "+resultado);
                    return;
                }   
                else{
                    resultado = a % b;
                }
            }

            console.log("Resultado da Operacao: " + resultado);
            alert("Resultado: " + resultado);
        } else {
            alert("Error :(");
        }
    }
});
