/**
 * FunPage 1.0
 * MIT License 2023 By Jaydee Guedes
 **/

/**
 * 
 * JavaScript do aplicativo.
 * Depende de "jQuery" (https://jquery.com/).
 *
 * OBS 1: Este é o aplicativo principal, para que o tema (template) do site
 * opere. Posteriormente, quando necessário, cada página (conteúdo) terá seu
 * próprio JavaScript, assim, somente o JavaScript necessário será carregado.
 *
 * OBS 2: Todas as instruções que iniciam com um cifrão ($) são da biblioteca
 * jQuery, ou seja, não são JavaScript "puro" (ou vanilla 😉).
 *
 * Para saber mais:
 *  • https://www.w3schools.com/js/
 *  • https://www.w3schools.com/jsref/
 *  • https://www.w3schools.com/jquery/
 **/

/**
 * Algumas configurações do aplicativo.
 * Dica: você pode acrescentar novas configurações aqui se precisar.
 **/
const app = {
    siteName: 'FunPage Star Wars',
    siteSlogan: 'Somos fãs, somos StarsFan',
    //apiBaseURL: 'http://localhost/'
    apiBaseURL: 'https://swapi.dev/api/'
}

/**
 * jQuery → Quando o documento estiver pronto, executa a função principal,
 * 'runApp()'.
 * 
 * Referências:
 *  • https://www.w3schools.com/jquery/jquery_syntax.asp
 **/
$(document).ready(myApp)
// lista personagens na lista na area de seleção
function myApp() {

    var listaPer = '<select class="listP" name="select"> <option value="0">Escolha um personagem</option>';

    $.get(app.apiBaseURL + 'people/', {
        _order: 'desc'
    })
        .done((data) => {
            data.results.forEach((art, i) => {
                var nId = rastreaId(art.url)
                listaPer += `
                    <option value="${nId}">${art.name}</option>                   
                `
            })
            listaPer += '</select>';
            $('#artList').html(listaPer)

            //getMostViewed()
            //getLastComments()
        })
        .fail((error) => {
            $('#artList').html('<p class="center">Oooops! Não encontramos nenhum personagem...</p>')
        })

}
// busca dados de um unico personagem
function umPerson(id) {

    var person = '';

    $.get(app.apiBaseURL + 'people/' + id + '/')
        .done((data) => {
            person += `
                <div class="article art-item" data-id="${data.id}">
                <h3>Nome: ${data.name}, 
                Altura: ${data.height}, 
                Peso: ${data.mass}, 
                Cor do cabelo: ${data.hair_color}, 
                Cor da pele: ${data.skin_color}, 
                Cor dos olhos: ${data.eye_color}, 
                Data de nascimento: ${data.birth_year}, 
                Sexo: ${data.gender}, 
                Planeta natal:  ${data.homeworld =! "n/a" ? planet(rastreaId(data.homeworld)) : "n/a"}, 
                ${data.films}: [
                "https://swapi.dev/api/films/1/", 
                "https://swapi.dev/api/films/2/", 
                "https://swapi.dev/api/films/3/", 
                "https://swapi.dev/api/films/6/"
                ], 
                ${"species"}: [], 
                ${"vehicles"}: [
                "https://swapi.dev/api/vehicles/14/", 
                "https://swapi.dev/api/vehicles/30/"
                ], 
                ${"starships"}: [
                "https://swapi.dev/api/starships/12/", 
                "https://swapi.dev/api/starships/22/"</h3>
                </div>                    
            `
            $('#artList').html(person)
        })
        .fail((error) => {
            $('#artList').html('<p class="center">Oooops! Não encontramos nada sobre esse personagem...</p>')
        })

}

function planet(id) {

    var planetName = '';

    $.get(app.apiBaseURL + 'planets/' + id + '/')
        .done((data) => {
            planetName = data.name
            return planetName
        })
        .fail((error) => {
            $('#artList').html('<p class="center">Oooops! Não encontramos nada sobre o planeta...</p>')
        })

}
// base pra uso
function planet(id) {

    var planetName = '';

    $.get(app.apiBaseURL + 'people/' + id + '/')
        .done((data) => {
            planetName = data.name
            data.results.forEach((art) => {
                person += `
                    <div class="article art-item" data-id="${art.id}">
                    <h3>Nome: ${art.name}, 
            Altura: ${art.height}, 
            Peso: ${art.mass}, 
            Cor do cabelo: ${art.hair_color}, 
            Cor da pele: ${art.skin_color}, 
            Cor dos olhos: ${art.eye_color}, 
            Data de nascimento: ${art.birth_year}, 
            Sexo: ${art.gender}, 
            "homeworld": "https://swapi.dev/api/planets/1/", 
            "films": [
                "https://swapi.dev/api/films/1/", 
                "https://swapi.dev/api/films/2/", 
                "https://swapi.dev/api/films/3/", 
                "https://swapi.dev/api/films/6/"
            ], 
            "species": [], 
            "vehicles": [
                "https://swapi.dev/api/vehicles/14/", 
                "https://swapi.dev/api/vehicles/30/"
            ], 
            "starships": [
                "https://swapi.dev/api/starships/12/", 
                "https://swapi.dev/api/starships/22/"</h3>
                    </div>                    
                `
            })
            person += '';
            $('#artList').html(person)

            getMostViewed()
            getLastComments()
        })
        .fail((error) => {
            $('#artList').html('<p class="center">Oooops! Não encontramos nenhum artigo...</p>')
        })

}
// base fimm

// formata id
function rastreaId(urrl) {

    var part = urrl.split('/')
    var restId = part[5]
    return restId
}


// lança letra por letra
function typeWriter(elemento){
    var textoArray = elemento.innerhtml.split('')
    elemento.innerhtml = ''
    textoArray.forEach((letra,i) => {
        if(letra == ',') letra = '<br>'
        setTimeout(() => elemento.innerhtml += letra, 75 * i)
    });
}
var descricao = document.querySelector('.digited');
console.log(descricao)
typeWriter(descricao);

/**
 * funcao pra achar n itens name
 * altura
 * peso
 * tipo de cabelo
 * cor da pele
 * aniversário
 * genero
 * funcao pra achar 1 item planeta natal
 * funcao pra achar n itens filmes que participou
 * funcao pra achar n itens espécie
 * funcao pra achar n itens veiculos
 * funcao pra achar n itens naves
 */
