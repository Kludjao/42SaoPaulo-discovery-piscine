setInterval(alert, 30000, "Please use me");

function calc(){
    var operacao = document.getElementById('operacao'); 
    var operador = operacao.value

    let a = parseFloat(document.getElementById('primeiro').value);
    let b = parseFloat(document.getElementById('segundo').value);
    let resultado = 0;


    if (Number.isInteger(a) && Number.isInteger(b) && a >= 0 && b >= 0) {
        if (operador === "soma"){
            resultado = a + b;
        }
        else if (operador === "sub"){
            resultado = a - b;
        }
        else if (operador === "mult"){
            resultado = a * b;
        }
        else if (operador === "div"){
            if (b === 0) {
                resultado = a / b;
                alert("It’s over 9000!")
                console.log("Resultado da Operacao: "+resultado);
                return;
            }
            else{
                resultado = a / b;
            }
        }
        else if (b === 0) {
            resultado = a % b;
            alert("It’s over 9000!")
            console.log("Resultado da Operacao: "+resultado);
            return;
        }
        console.log("Resultado da Operacao: "+resultado);
        alert(resultado);
    }
    else {
        alert("Error :(")
    }

    

    

}