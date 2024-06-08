$(document).ready(function() {
    const $ballon = $(".ballon");
    const cores = ["red", "green", "blue"];
    let numcor = 0;

    function aumentar() {
        let tamanho = $ballon.height();

        if (tamanho > 420) {
            $ballon.css({
                width: '200px',
                height: '200px'
            });
        } else {
            tamanho += 10;
            $ballon.css({
                width: tamanho + 'px',
                height: tamanho + 'px'
            });
        }

        numcor = (numcor === cores.length - 1 ? 0 : numcor + 1);
        $ballon.css('backgroundColor', cores[numcor]);
    }

    function diminuir() {
        let tamanho = $ballon.height();

        if (tamanho > 200) {
            tamanho -= 5;
            $ballon.css({
                width: tamanho + 'px',
                height: tamanho + 'px'
            });
        }

        numcor = (numcor === cores.length - 1 ? 0 : numcor + 1);
        $ballon.css('backgroundColor', cores[numcor]);
    }

    $ballon.on("click", aumentar);
    $ballon.on("mouseover", diminuir);
});
