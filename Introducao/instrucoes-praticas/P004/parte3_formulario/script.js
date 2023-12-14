const id_form = "#form-viagens";
const id_roteiro = ".roteiros-viagens";
const id_destinos = ".container-destinos";
const lista_classes = ["postal", "roteiro-destino", "roteiro-incluso", "roteiro-preco", "roteiro-obs", "roteiro-parcelamento"];
const chaves_obj = ["image-url", 'cidade', 'aereo', 'diarias', 'cafe_manha', 'preco', 'taxas', 'vezes_sem_juros'];

let TESTEZAO = document.querySelector(id_destinos);
console.dir(TESTEZAO)

// Definir o código para o evento de click
document.getElementById("teste").addEventListener("click", function(event) {
    clonarElemento(event, lista_classes, "#ultimo-roteiro", id_form, chaves_obj);
});


/* FUNÇÕES */

function clonarElemento(event, classes_elementos, id_roteiro, id_form, chaves_obj) 
{
    event.preventDefault();

    let card_roteiro = document.querySelector(id_roteiro);
    let teste_clone = document.querySelector("#teste-clone");
    let novo_card = card_roteiro.cloneNode(true);

    card_roteiro.id = ""

    // Pegar nós filhos do card de roteiro e transformá-los em uma lista
    let elementos_card = Array.from(card_roteiro.childNodes); 

    // Filtrar elementos cuja classe se encontra presente nas classes requeridas
    elementos_card = elementos_card.filter(item => classes_elementos.indexOf(item.className) != -1);

    let valores_formulario = pegarValoresFormulario(id_form, chaves_obj);

    modificarValoresCardClonado(elementos_card, valores_formulario);

    // Inserir no final do elemento pai 
    console.dir(card_roteiro)
    TESTEZAO.innerHTML += novo_card.innerHTML
    teste_clone.parentNode.appendChild(novo_card);
}

function tratarValoresFormulario(valores)
{
    valores['aereo'] = (valores['aereo'] == 'sim' ? 'Aéreo ida e volta' : 'Aéreo ida');
    valores['diarias'] = valores['diarias'] + " diárias";
    valores['cafe_manha'] = (valores['cafe_manha'] == 'sim' ? 'Café da manhã' : 'Sem café da manhã');
    valores['taxas'] = (valores['taxas'] == 'sim' ? 'Taxas inclusas' : 'Taxas não inclusas');
    valores['vezes_sem_juros'] = ["Em até", valores['vezes_sem_juros'] + "x", "sem juros"].join(" ");
    valores['preco'] = ["R$", valores['preco'] + ",00"].join(" ");
}

function pegarValoresFormulario(id_form, chaves_obj) 
{
    let lista_elementos = pegarInputsFormulario(id_form).map((item) => item.value);
    let objeto_elementos_valores = new Object();
    
    for (let i = 0; i < chaves_obj.length; i++) 
    {
        objeto_elementos_valores[chaves_obj[i]] = lista_elementos[i];
    }

    return objeto_elementos_valores;
}

function pegarInputsFormulario(id_form) 
{
    let form = Array.from(document.querySelector(id_form));
    let lista_elementos = form.filter((item) => item.type != "radio" || (item.type == "radio" && item.checked));
                         
    return lista_elementos;
}


function modificarValoresCardClonado(lista_elementos, lista_valores) 
{
    // Tratamento de dados vindo do formulário
    tratarValoresFormulario(lista_valores);

    let lista_valores_incluso = [lista_valores['aereo'], lista_valores['diarias'], lista_valores['cafe_manha']];

    lista_elementos[0].src = lista_valores['image-url'];
    lista_elementos[1].innerText = lista_valores['cidade'];

    for (let i = 0; i < lista_elementos[2].children.length; i++)
    {
        lista_elementos[2].children[i].innerText = lista_valores_incluso[i];
    }

    lista_elementos[3].innerText = lista_valores['preco'];
    lista_elementos[4].innerText = lista_valores['taxas'];
    lista_elementos[5].innerText = lista_valores['vezes_sem_juros'];
}