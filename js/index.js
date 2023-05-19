/**
 * FrontEndeiros 1.0
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

function listaPerson() {

    var listaPer = '<select class="listP" name="select"> <option value="0">Escolha um personagem</option>';

    $.get(app.apiBaseURL + 'people/', {
        _order: 'desc'
    })
        .done((data) => {
            data.forEach((art, i) => {
                listaPer += `
                    <div class="article art-item" data-id="${art.id}">
                    <option value="valor1">Valor 1</option>
                    </div>                    
                `
            })
            listaPer += '</select>';
            $('#artList').html(articleList)

            getMostViewed()
            getLastComments()
        })
        .fail((error) => {
            $('#artList').html('<p class="center">Oooops! Não encontramos nenhum artigo...</p>')
        })

}

function rastreaId(urrl) {

    var part = urrl.split('/')
    var restId = part[5]
    return restId
}


function typeWriter(elemento){
    var textoArray = elemento.innerhtml.split('')
    elemento.innerhtml = ''
    textoArray.forEach((letra,i) => {
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
