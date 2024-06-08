let ft_list = document.getElementById("ft_list");

function criar() {
    let txt = prompt("Preencha uma tarefa :").trim();

    if (txt !== "") {
        const name = new Date().getTime();
        document.cookie = `${name}=${txt}`;
        addtarefa(name, txt);
    } else {
            alert("Por favor, insira um nome válido para a tarefa.");
    }
} 

function addtarefa (name, txt) {
    let node = document.createElement("div");
    node.innerHTML = txt;
    node.onclick = () => removertaf(node, name);
    ft_list.prepend(node);
}


function removertaf(node, name){
    const check = confirm("Você deseja deletar a tarefa?");
    if (check) {
        node.remove();
        document.cookie = `${name}=; expires=Mon, 03 jun 2024 00:00:00 UTC;`;
    }
}

function loadTasksFromCookies(){
    const cookies = document.cookie.split(";");
    cookies.forEach(loadTaskFromCookie);
}

function loadTaskFromCookie(cookie){
    const [name, txt] = cookie.split("=").map(item => item.trim());
    addtarefa(name, txt);
}

window.onload = loadTasksFromCookies;