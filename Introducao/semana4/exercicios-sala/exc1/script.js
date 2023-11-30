// criar classe: 4 propriedades e 2 métodos no mín.

class Computador
{
    constructor (qtd_ram, marca, estado, ano) {
        this.qtd_ram = qtd_ram;
        this.marca = marca;
        this.estado = estado;
        this.ano = ano;
        
    }

    ligar() {
        this.estado = "ligado";
    }

    desligar() {
        this.estado = "desligado";
    }
}

// Crie 3 objetos da classe Computador; 

let pc1 = new Computador(8, "Acer", "ligado", 2003);
let pc2 = new Computador(16, "Dell", "desligado", 2023);
let pc3 = new Computador(4, "Asus", "ligado", 2008);

// Crie uma função que receba um objeto Computador e retorne um mapdesse objeto

function getComputadorMap(pc) {
    return new Map(Object.entries(pc));
}

// Crie uma função que receba um map como parâmetro e altere o arquivohtml (utilizando o DOM) para criar uma lista desordenada de cada entrada do map. Cada linha da lista deve ter o seguinte formato: • Chave:valor

function changeHTMLFile(value) {
    let elemento = document.createElement("ul");

    for (const item of value) {
        elemento.innerHTML = "<li></li>";

    }

    let li = document.querySelector("li");
}

// Utilize os 3 objetos do Tipo Computador nas suas funções e visualize o resultado na página HTML