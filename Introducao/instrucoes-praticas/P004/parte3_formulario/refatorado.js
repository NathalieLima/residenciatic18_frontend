Object.defineProperty(String.prototype, 'capitalize', {
    value: function() {
      return this.charAt(0).toUpperCase() + this.slice(1);
    },
    enumerable: false
  });


const last_roadmap_element = document.querySelector('#ultimo-roteiro');
const destination_element = document.querySelector('.container-destinos');
const formulary_element = document.querySelector('#form-viagens')
const object_keys = ["image-url", 'cidade', 'aereo', 'diarias', 'cafe_manha', 'preco', 'taxas', 'vezes_sem_juros'];
const classes_list = ["postal", "roteiro-destino", "roteiro-incluso", "roteiro-preco", "roteiro-obs", "roteiro-parcelamento"];


document.getElementById("form-button").addEventListener("click", function(event) {
    cloneRoadmapInDestination(event, classes_list, last_roadmap_element, destination_element, formulary_element, object_keys);
});

function cloneRoadmapInDestination(event, classes_list, last_roadmap, destination, formulary, object_keys)
{
    event.preventDefault();

    let cloned_element = cloneElement(last_roadmap, destination);
    let form_inputs = getFormInputs(formulary);
    let inputs_values = getInputsValues(form_inputs);
    let object = transformInObject(object_keys, inputs_values)
    treatFormObject(object)
    
    // Filtrar na lista de nós filhos do card de roteiro elementos cuja classe se encontra presente nas classes requeridas
    let card_elements = Array.from(cloned_element.childNodes).filter(item => classes_list.indexOf(item.className) != -1); 

    replaceInClone(card_elements, object);
}

// Clonar elemento

function cloneElement(roadmap, destination)
{
    let cloned_element = roadmap.cloneNode(true);

    roadmap.id = ""; // Removendo id no agora penúltimo elemento que indicava que ele era o último
    destination.appendChild(cloned_element); // Inserindo o elemento na página

    return cloned_element;
}

// Pegar valores do formulário

function getFormInputs(formulary_element)
{
    let form_list = Array.from(formulary_element);
    let form_inputs = form_list.filter((item) => (item.tagName == "INPUT" && item.type != "radio") || (item.type == "radio" && item.checked));

    return form_inputs;
}

function getInputsValues(inputs)
{
    let inputs_values = inputs.map((item) => item.value);

    return inputs_values;
}

// Criar objeto a partir dos valores do formulário

function transformInObject(keys, values)
{
    let new_object = new Object();

    for (let i = 0; i < keys.length; i++)
    {
        new_object[keys[i]] = values[i];
    }

    return new_object;
}

// Tratar valores

function treatFormObject(object)
{
    object['cidade'] = object['cidade'].capitalize();
    object['aereo'] = (object['aereo'] == 'sim' ? 'Aéreo ida e volta' : 'Aéreo ida');
    object['diarias'] = object['diarias'] + " diárias";
    object['cafe_manha'] = (object['cafe_manha'] == 'sim' ? 'Café da manhã' : 'Sem café da manhã');
    object['taxas'] = (object['taxas'] == 'sim' ? 'Taxas inclusas' : 'Taxas não inclusas');
    object['vezes_sem_juros'] = ["Em até", object['vezes_sem_juros'] + "x", "sem juros"].join(" ");
    object['preco'] = ["R$", object['preco'] + ",00"].join(" ");
}

// Substituir valores no clone pelos valores do formulário

function replaceInClone(inputs, object)
{
    let object_values = Object.values(object);
    let values_to_set = [...object_values.slice(0, 2), object_values.slice(2, 5), ...object_values.slice(5)]

    inputs[0].src = values_to_set[0];

    for (let i = 1; i < (inputs.length - 1); i++)
    {
        let item = inputs[i];
        if (item.tagName == "UL")
        {
            for (let j = i; j < (item.children.length + i); j++)
            {
                inputs[i].children[i].innerText = values_to_set[j];
            }
        } 
        else
        {
            inputs[i].innerText = values_to_set[i];
        }
    }
    console.log("oi");
    console.log(inputs);
    console.log(values_to_set);
}