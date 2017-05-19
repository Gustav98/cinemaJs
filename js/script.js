window.onload = main;

function main(){
    
    // variavel dos filmes
    var filme = [{"codigo":"1","nome":"Guardiões da Galaxia vol.2","cartaz":"cartaz/cartaz.jpg","classificacao":"12","genero":"Aventura","duracao":"137","diretor":"James Gunn","elenco":"Chris Pratt, Vin Diesel, Zoe Saldana, Dave Batista, Bradley Cooper, Karen Gillan, Pom Klementieff, Michael Rooker","sinopse":"Os Guardiões precisam lutar para manter sua recém descoberta família unida, enquanto descobrem os mistérios sobre o verdadeiro pai de Peter Quill. Antigos inimigos se tornam aliados e personagens conhecidos e amados dos quadrinhos virão ao auxílio dos nossos heróis, enquanto o Universo Cinematográfico da Marvel continua se expandindo."},
                 {"codigo":"2","nome":"Kingsman - O circulo dourado","cartaz":"cartaz/kingsman-cartaz.jpg","classificacao":"16","genero":"Acao","duracao":"?","diretor":"Matthew Vaughn","elenco":"Taron Egerton, Colin Firth, Julianne Moore","sinopse":"Quando o quartel general Kingsman é destruído, uma jornada os leva à descoberta de uma organização de espionagem nos EUA. Essas duas corporações secretas de elite devem se unir para derrotar um inimigo comum."},
                 {"codigo":"3","nome":"Alien Covenant","cartaz":"cartaz/alien-cartaz.jpg","classificacao":"16","genero":"Ficcao/Suspense/Terror","duracao":"122","diretor":"Ridley Scott","elenco":"Michael Fassbender, James Franco, Katherine Waterston, Noomi Rapace, Guy Pearce","sinopse":"2104. Viajando pela galáxia, os tripulantes da nave colonizadora Covenant encontram um planeta remoto com ares de paraíso inexplorado. Encantados, eles acreditam na sorte e ignoram a realidade do local: uma terra sombria que guarda terríveis segredos e tem o sobrevivente David como habitante solitário."},
                 {"codigo":"4","nome":"Star Wars - Os Ultimos Jedi","cartaz":"cartaz/poster-swviii.jpg","classificacao":"12","genero":"Acao/Aventura/Ficcao","duracao":"?","diretor":" Rian Johnson","elenco":"Daisy Ridley , Adam Driver , Oscar Isaac , Domhnall Gleeson , Mark Hamill , Lupita Nyong'o","sinopse":"Após encontrar o mítico e recluso Luke Skywalker (Mark Hammil) em uma ilha isolada, a jovem Rey (Daisy Ridley) busca entender o balanço da Força a partir dos ensinamentos do mestre jedi. Paralelamente, o Primeiro Império de Kylo Ren (Adam Driver) se reorganiza para enfrentar a Aliança Rebelde."},
                 {"codigo":"5","nome":"Velozes e Furiosos 8","cartaz":"cartaz/vf8-cartaz.jpg","classificacao":"14","genero":"Acao","duracao":"136","diretor":"F. Gary Gray","elenco":"Vin Diesel, Jason Statham, Jordana Brewster, Charlize Theron, Dwayne Johnson, Scott Eastwood, Kurt Russell, Helen Mirren","sinopse":"Depois que Brian e Mia se aposentaram, e o resto da equipe foi exonerado, Dom e Letty estão em lua de mel e levam uma vida pacata e completamente normal. Mas a adrenalina do passado acaba voltando com tudo quando uma mulher misteriosa faz com que Dom retorne ao mundo do crime e da velocidade."},
                 {"codigo":"6","nome":"Logan Noir","cartaz":"cartaz/loganbw-cartaz.jpg","classificacao":"16","genero":"Acao","duracao":"137","diretor":"James Mangold","elenco":" Boyd Holbrook , Hugh Jackman , Patrick Stewart , Elizabeth Rodriguez","sinopse":"Única exibição no Brasil da versão em preto e branco feita para um dos maiores filmes de super herói de todos os tempos!"},
                 {"codigo":"7","nome":"Mulher Maravilha","cartaz":"cartaz/wonderwoman-cartaz.jpg","classificacao":"14","genero":"Acao/Aventura/Fantasia","duracao":"?","diretor":"Patty Jenkins","elenco":"Gal Gadot, Robin Wright, Chris Pine, David Thewlis, Elena Anaya, Danny Huston, Lucy Davis, Ewen Bremner, Saïd Taghmaoui.","sinopse":"Antes de ser Mulher-Maravilha, ela era Diana, princesa das Amazonas, treinada para ser uma guerreira imbatível. Criada numa ilha paraíso protegida e escondida, tudo muda quando um piloto americano chega em seu território e avisa sobre um grande conflito tomando forma no mundo. Diana deixa seu lar convencida de que pode impedir a ameaça crescente. Lutando ao lado dos homens em uma guerra para dar fim a todas as outras, Diana descobre seus poderes… e seu destino."},
                 {"codigo":"8","nome":"Rei Arthur: A Lenda da Espada","cartaz":"cartaz/reiarthur-cartaz.jpg","classificacao":"14","genero":"Acao/Aventura/Drama","duracao":"130","diretor":"Guy Ritchie","elenco":"Charlie Hunnam, Jude Law, Eric Bana, Annabelle Wallis, Djimon Hounsou, Eline Powell, David Beckham","sinopse":"Arthur é um jovem das ruas que controla os becos de Londonium e desconhece sua predestinação até o momento em que entra em contato pela primeira vez com a Excalibur. Desafiado pela espada, ele precisa tomar difíceis decisões, enfrentar seus demônios e aprender a dominar o poder que possui para conseguir, enfim, unir seu povo e partir para a luta contra o tirano Vortigern, que destruiu sua família."},];
    
    // constroi tabela de assentos
    var divTable = document.createElement("div");
    var table = document.createElement("table");
    var thead = document.createElement("thead");
    var tbody = document.createElement("tbody");
    var theadTr = document.createElement("tr");
    
    divTable.setAttribute("class", "table-responsive");
    table.setAttribute("class", "table");
    
    // FOR para o THEAD da tabela, numerando a primeira linha de 0 a 10
    for(var i = 0; i <= 10; i++){
        var theadTh = document.createElement("th");
        theadTh.innerHTML = i;
        theadTr.appendChild(theadTh);
    }
    thead.appendChild(theadTr);
    
    // GERANDO O RESTO DA TABELA
    
    // "alfabeto" cria um array de "A" á "J"
    var alfabeto = "ABCDEFGHIJ".split("");
    // percorre todas as letras de "alfabeto" usando forEach()
    alfabeto.forEach(function(x){
        var tr = document.createElement("tr");
        var thRow = document.createElement("th");
        thRow.setAttribute("scope","row");
        thRow.innerHTML = x;
        tr.appendChild(thRow);
        for(var j = 1; j <= 10; j++){
            var td = document.createElement("td");
            td.setAttribute("id", x+""+j);
            td.innerHTML = x+""+j;
            tr.appendChild(td);
            tbody.appendChild(tr);
        }
    });
    
    divTable.appendChild(table)
    table.appendChild(thead);
    table.appendChild(tbody);
    document.getElementById("tabelaLugares").appendChild(divTable);
    
    // CLICK DOS LUGARES
    
    var lugares = document.querySelectorAll("#tabelaLugares table tr td");
    var lugaresArr = Array.prototype.slice.call(lugares);
    lugaresArr.forEach(function(x){
        x.addEventListener("click", function(e){
            var ul = document.getElementById("lugaresEscolhidos");
            if(x.title === "escolhido"){
                x.style.backgroundColor = "black";
                x.style.color = "white";
                x.removeAttribute("title");
                var li = document.getElementById("l"+x.id);
                ul.removeChild(li);
            }
            else{
                var li = document.createElement("li");
                li.setAttribute("id", "l"+x.id);
                li.innerHTML = x.id;
                ul.appendChild(li);
                x.style.backgroundColor = "red";
                x.setAttribute("title", "escolhido");
            }
        });
    });
    
    // FINALIZAR
    
    var btnCartao = document.getElementById("btnCartao");
    var btnBoleto = document.getElementById("btnBoleto");
    var divCartao = document.getElementById("cartao");
    var divBoleto = document.getElementById("boleto");
    
    btnCartao.addEventListener("click", function(e){
        divBoleto.style.display = "none"; 
        divCartao.style.display = "block";
    });
    
    btnBoleto.addEventListener("click", function(e){
        divCartao.style.display = "none"; 
        divBoleto.style.display = "block";
    });
    
    
    // FORMAS DE PAGAMENTO
    
    var mesCartao = document.getElementById("mesCartao");
    var anoCartao = document.getElementById("anoCartao");
    var meses = ["mês",1,2,3,4,5,6,7,8,9,10,11,12];
    var ano = ["ano",2017,2018,2019,2020,2021,2022,2023,2024,2025];
    options(meses, mesCartao);
    options(ano, anoCartao);
    
    function options(array, target){
       array.forEach(function(x){
           var option = document.createElement("option");
           option.setAttribute("value", x);
           option.innerHTML = x;
           target.appendChild(option);
        }); 
    }
}


// API DO FACEBOOK
window.fbAsyncInit = function() {
    // FB JavaScript SDK configuration and setup
    FB.init({
      appId      : '1137381459740651', // FB App ID
      cookie     : true,  // enable cookies to allow the server to access the session
      xfbml      : true,  // parse social plugins on this page
      version    : 'v2.9' // use graph api version 2.8
    });
    
    // Check whether the user already logged in
    FB.getLoginStatus(function(response) {
        if (response.status === 'connected') {
            //display user data
            getFbUserData();
        }
    });
};

(function(d, s, id){
 var js, fjs = d.getElementsByTagName(s)[0];
 if (d.getElementById(id)) {return;}
 js = d.createElement(s); js.id = id;
 js.src = "//connect.facebook.net/en_US/sdk.js";
 fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

// Login pelo Facebook
function fbLogin() {
    FB.login(function (response) {
        if (response.authResponse) {
            // Pega e Mostra informações
            getFbUserData();
        } else {
            document.getElementById('status').innerHTML = 'Usuário não autorizado';
        }
    }, {scope: 'email'});
}

// Pega as informações do usuário
function getFbUserData(){
    FB.api('/me', {fields: 'id,first_name,last_name,picture'},
    function (response) {
        var img = document.createElement("img");
        img.setAttribute('class', 'img-responsive thumbnail');
        document.getElementById('fbLink').setAttribute("onclick","fbLogout()");
        document.getElementById('fbLink').innerHTML = 'Sair do Facebook';
        document.getElementById('status').innerHTML = 'Bem-vindo, ' + response.first_name + '!';
        document.getElementById('foto').innerHTML = '<img src="'+response.picture.data.url+'" class="img-responsive thumbnail"/>';
    });
}

// Logout from facebook
function fbLogout() {
    FB.logout(function() {
        document.getElementById('fbLink').setAttribute("onclick","fbLogin()");
        document.getElementById('fbLink').innerHTML = '<img src="img/loginfb.png"/>';
        document.getElementById('status').innerHTML = '';
        document.getElementById('foto').innerHTML = '';
    });
}