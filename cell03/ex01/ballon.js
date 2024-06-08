const ballon = document.querySelector(".ballon");
const cores = ["red", "green", "blue"];
let numcor = 0;

function aumentar() {
    let tamanho = ballon.clientHeight;

    if (tamanho > 420) {
        ballon.style.width = '200px';
        ballon.style.height = '200px';
    } else {
        tamanho += 10;
        ballon.style.width = tamanho + 'px';
        ballon.style.height = tamanho + 'px';
    }

    numcor = (numcor === cores.length - 1 ? 0 : numcor + 1);
    ballon.style.backgroundColor = cores[numcor];
}

function diminuir(){
    let tamanho = ballon.clientHeight;

    if (tamanho>200) {
        tamanho = tamanho - 5;
        ballon.style.width = tamanho + 'px';
        ballon.style.height = tamanho + 'px';
    }

    numcor = (numcor === 0 ? cores.length - 1 : numcor - 1);
    ballon.style.backgroundColor = cores[numcor];
}
