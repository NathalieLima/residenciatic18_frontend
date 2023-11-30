class Tarefa 
{
    constructor(task_name) {
        this.task_name = task_name;
    }
}

let tarefa = new Tarefa("Arrumar quarto");

let botao = document.querySelector("button");
console.log(botao);
botao.addEventListener("submit", adicionarTarefasDOM(tarefa));

function adicionarTarefasDOM(tarefa) {
    let elemento = document.getElementById("listaTarefas");
    var conteudoNovo = document.createText(tarefa);
    
    console.log(elemento);
    elemento.appendChild(conteudoNovo)
}

//elemento.createElement(li).content
