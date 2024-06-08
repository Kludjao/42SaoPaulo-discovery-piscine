$(document).ready(function() {
    const ft_list = $("#ft_list");

    function criar() {
        const txt = prompt("Preencha uma tarefa:").trim();

        if (txt !== "") {
            const name = new Date().getTime();
            document.cookie = `${name}=${txt}`;
            addTarefa(name, txt);
        } else {
            alert("Por favor, insira um nome válido para a tarefa.");
        }
    }

    function addTarefa(name, txt) {
        const node = $("<div></div>").html(txt);
        node.click(function() {
            removerTarefa(node, name);
        });
        ft_list.prepend(node);
    }

    function removerTarefa(node, name) {
        const check = confirm("Você deseja deletar a tarefa?");
        if (check) {
            node.remove();
            document.cookie = `${name}=; expires=Mon, 03 jun 2024 00:00:00 UTC;`;
        }
    }

    function loadTasksFromCookies() {
        const cookies = document.cookie.split(";");
        cookies.forEach(function(cookie) {
            loadTaskFromCookie(cookie);
        });
    }

    function loadTaskFromCookie(cookie) {
        const [name, txt] = cookie.split("=").map(function(item) {
            return item.trim();
        });
        addTarefa(name, txt);
    }

    $(window).on("load", loadTasksFromCookies);

    $("button").on("click", criar);
});
