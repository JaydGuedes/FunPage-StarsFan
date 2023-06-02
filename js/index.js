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

    var listaPer = '<option value="0">Escolha um personagem</option>';

    $.get(app.apiBaseURL + 'people/', {
        _order: 'desc'
    })
        .done((data) => {
            data.results.forEach((art) => {
                var nId = rastreaId(art.url)
                listaPer += `
                    <option value="${nId}">${art.name}</option>                   
                `
            })
            listaPer += '';
            console.log(listaPer)
            $('#listP').html(listaPer)

            var elTexto
            var persona;


                document.querySelector('#botao').addEventListener('click', function (e) {
                e.preventDefault();
                    elTexto = document.querySelectorAll('#listP');
                    persona = elTexto[0].value;
                    console.log(persona)
                    umPerson(persona)
                })

            
            //getMostViewed()
            //getLastComments()
        })
        .fail((error) => {
            $('#listP').html('<p class="center">Oooops! Não encontramos nenhum personagem...</p>')
        })

}
// busca dados de um unico personagem
function umPerson(id) {

    var person = '';

    $.get(app.apiBaseURL + 'people/' + id + '/')
        .done((data) => {
            plant = data.homeworld != "n/a" ? planet(data.homeworld) : "n/a";
            person += `
                <div data-id="${id}">
                <h3 id="digited">Nome: ${data.name}, 
                Altura: ${data.height}, 
                Peso: ${data.mass}, 
                Cor do cabelo: ${data.hair_color}, 
                Cor da pele: ${data.skin_color}, 
                Cor dos olhos: ${data.eye_color}, 
                Data de nascimento: ${data.birth_year}, 
                Sexo: ${data.gender}, 
                Planeta natal:  <span id="plant"></span>, 
                Participou dos filmes: ${data.films.length != 0 ? film(data.films) : "n/a"}, 
                Espécie: ${data.species.length != 0 ? especie(data.species) : "n/a"}, 
                Veículos: ${data.vehicles.length != 0 ? veiculo(data.vehicles) : "n/a"},
                Naves: ${data.starships.length != 0 ? nave(data.starships) : "n/a"} </h3>
                </div>                    
            `            
            console.log(person)
            $('#corpo').html(person)
            planet(data.homeworld)
        })
        .fail((error) => {
            $('#corpo').html('<p class="center">Oooops! Não encontramos nada sobre esse personagem...</p>')
        })

}

function planet(plant) {
    var id = "";
    var planetName = '';

    if(plant != "n/a"){
        id = rastreaId(plant);
        $.get(app.apiBaseURL + 'planets/' + id + '/')
        .done((data) => {
                planetName = data.name
                console.log(planetName)
                //return planetName
                
        })
        .fail((error) => {
            planetName += " Oooops! Não encontramos nada sobre o planeta..."
            return planetName
        })
    }
    else{
        var planetName = "n/a";
    }
    $('#plant').html(planetName)
}

// busca os filmes que participou
function film(listaFilmes) {

    var filmList = '';
    listaFilmes.forEach((art, i) => {    

        $.get(art)
            .done((data) => {
                if (i < listaFilmes.length-1){
                filmList += `${data.title} & `}
                else{
                    filmList += `${data.title} .`
                    console.log(filmList)
                    return filmList}           
            })
            
    
        .fail((error) => {
            filmList += "Oooops! Não encontramos filmes..."
            return filmList
        })
    })

}
// busca espécies
function especie(listEspecie) {

    var especieList = '';
    listEspecie.forEach((art, i) => {    

        $.get(art)
            .done((data) => {
                if (i < listEspecie.length-1){
                    especieList += `${data.title} & `}
                else{
                    especieList += `${data.title} .`
                    console.log(especieList)
                    return especieList}          
            })
            
   
        .fail((error) => {
            especieList += "Oooops! Não encontramos a espécie..."
            return especieList
        })
    })

}
// busca veiculos

function veiculo(listVeiculos) {

    var veiculoList = '';
    console.log(listVeiculos)
    listVeiculos.forEach((art, i) => {  
        console.log(art)  

        $.get(art)
            .done((data) => {
                if (i < listVeiculos.length-1){
                    veiculoList += `${data.title} & `}
                else{
                    veiculoList += `${data.title} .`
                    console.log(veiculoList)
                    return veiculoList}
            })
            
    
        .fail((error) => {
            veiculoList += "Oooops! Não encontramos veículos..."
            return veiculoList 
        })
    })

}
// Busca naves
function nave(listNaves) {

    var navesList = '';
    listNaves.forEach((art, i) => {   
        console.log(art) 

        $.get(art)
            .done((data) => {
                if (i < listNaves.length-1){
                    navesList += `${data.title} & `}
                else{
                    navesList += `${data.title} .`
                    console.log(navesList)
                    return navesList}             
            })
            
    
        .fail((error) => {
            navesList += "Oooops! Não encontramos naves..."
            return navesList
        })
    })
}

// formata id
function rastreaId(urrl) {

    var part = urrl.split('/')
    var restId = part[5]
    return restId
}


// lança letra por letra
//function typeWriter(elemento){
 //   var textoArray = elemento.innerhtml.split(' ')
  //  elemento.innerhtml = ''
  //  textoArray.forEach((letra,i) => {
  //      if(letra == ',') letra = '<br>'
   //     if(letra == '&') letra = '; <br> '
   //     setTimeout(() => elemento.innerhtml += letra, 75 * i)
  //  });
//}
//var descricao = document.querySelector('#digited');
//console.log(descricao)
//typeWriter(descricao);

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
