window.onload = main;

function main(){
    
    // variavel dos filmes
    var filmes = [{"codigo":"1","nome":"Guardiões da Galaxia vol.2","cartaz":"cartaz/gotg-cartaz.jpg","classificacao":"12","genero":"Aventura","duracao":"137","diretor":"James Gunn","elenco":"Chris Pratt, Vin Diesel, Zoe Saldana, Dave Batista, Bradley Cooper, Karen Gillan, Pom Klementieff, Michael Rooker","sinopse":"Os Guardiões precisam lutar para manter sua recém descoberta família unida, enquanto descobrem os mistérios sobre o verdadeiro pai de Peter Quill. Antigos inimigos se tornam aliados e personagens conhecidos e amados dos quadrinhos virão ao auxílio dos nossos heróis, enquanto o Universo Cinematográfico da Marvel continua se expandindo."},
                 {"codigo":"2","nome":"Kingsman - O circulo dourado","cartaz":"cartaz/kingsman-cartaz.jpg","classificacao":"16","genero":"Ação","duracao":"?","diretor":"Matthew Vaughn","elenco":"Taron Egerton, Colin Firth, Julianne Moore","sinopse":"Quando o quartel general Kingsman é destruído, uma jornada os leva à descoberta de uma organização de espionagem nos EUA. Essas duas corporações secretas de elite devem se unir para derrotar um inimigo comum."},
                 {"codigo":"3","nome":"Alien Covenant","cartaz":"cartaz/alien-cartaz.jpg","classificacao":"16","genero":"Ficção/Suspense/Terror","duracao":"122","diretor":"Ridley Scott","elenco":"Michael Fassbender, James Franco, Katherine Waterston, Noomi Rapace, Guy Pearce","sinopse":"2104. Viajando pela galáxia, os tripulantes da nave colonizadora Covenant encontram um planeta remoto com ares de paraíso inexplorado. Encantados, eles acreditam na sorte e ignoram a realidade do local: uma terra sombria que guarda terríveis segredos e tem o sobrevivente David como habitante solitário."},
                 {"codigo":"4","nome":"Star Wars - Os Ultimos Jedi","cartaz":"cartaz/poster-swviii.jpg","classificacao":"12","genero":"Ação/Aventura/Ficção","duracao":"?","diretor":" Rian Johnson","elenco":"Daisy Ridley , Adam Driver , Oscar Isaac , Domhnall Gleeson , Mark Hamill , Lupita Nyong'o","sinopse":"Após encontrar o mítico e recluso Luke Skywalker (Mark Hammil) em uma ilha isolada, a jovem Rey (Daisy Ridley) busca entender o balanço da Força a partir dos ensinamentos do mestre jedi. Paralelamente, o Primeiro Império de Kylo Ren (Adam Driver) se reorganiza para enfrentar a Aliança Rebelde."},
                 {"codigo":"5","nome":"Velozes e Furiosos 8","cartaz":"cartaz/vf8-cartaz.jpg","classificacao":"14","genero":"Acao","duracao":"136","diretor":"F. Gary Gray","elenco":"Vin Diesel, Jason Statham, Jordana Brewster, Charlize Theron, Dwayne Johnson, Scott Eastwood, Kurt Russell, Helen Mirren","sinopse":"Depois que Brian e Mia se aposentaram, e o resto da equipe foi exonerado, Dom e Letty estão em lua de mel e levam uma vida pacata e completamente normal. Mas a adrenalina do passado acaba voltando com tudo quando uma mulher misteriosa faz com que Dom retorne ao mundo do crime e da velocidade."},
                 {"codigo":"6","nome":"Logan Noir","cartaz":"cartaz/loganbw-cartaz.jpg","classificacao":"16","genero":"Ação","duracao":"137","diretor":"James Mangold","elenco":" Boyd Holbrook , Hugh Jackman , Patrick Stewart , Elizabeth Rodriguez","sinopse":"Única exibição no Brasil da versão em preto e branco feita para um dos maiores filmes de super herói de todos os tempos!"},
                 {"codigo":"7","nome":"Mulher Maravilha","cartaz":"cartaz/wonderwoman-cartaz.jpg","classificacao":"14","genero":"Ação/Aventura/Fantasia","duracao":"?","diretor":"Patty Jenkins","elenco":"Gal Gadot, Robin Wright, Chris Pine, David Thewlis, Elena Anaya, Danny Huston, Lucy Davis, Ewen Bremner, Saïd Taghmaoui.","sinopse":"Antes de ser Mulher-Maravilha, ela era Diana, princesa das Amazonas, treinada para ser uma guerreira imbatível. Criada numa ilha paraíso protegida e escondida, tudo muda quando um piloto americano chega em seu território e avisa sobre um grande conflito tomando forma no mundo. Diana deixa seu lar convencida de que pode impedir a ameaça crescente. Lutando ao lado dos homens em uma guerra para dar fim a todas as outras, Diana descobre seus poderes… e seu destino."},
                 {"codigo":"8","nome":"Rei Arthur: A Lenda da Espada","cartaz":"cartaz/reiarthur-cartaz.jpg","classificacao":"14","genero":"Ação/Aventura/Drama","duracao":"130","diretor":"Guy Ritchie","elenco":"Charlie Hunnam, Jude Law, Eric Bana, Annabelle Wallis, Djimon Hounsou, Eline Powell, David Beckham","sinopse":"Arthur é um jovem das ruas que controla os becos de Londonium e desconhece sua predestinação até o momento em que entra em contato pela primeira vez com a Excalibur. Desafiado pela espada, ele precisa tomar difíceis decisões, enfrentar seus demônios e aprender a dominar o poder que possui para conseguir, enfim, unir seu povo e partir para a luta contra o tirano Vortigern, que destruiu sua família."},];
    
   
    var resultado = [{"filme":"","img":"","sessao":"","assentos":[],"total":""}];
    
    /**************** DIV FILMES ****************/
    
    var rowFilmes = document.getElementById("rowFilmes");
    filmes.forEach(function(x){
        var a = document.createElement("a");
        var col = document.createElement("div");
        var infoFilme = document.createElement("div");
        var classif = document.createElement("span");
        var nomeFilme = document.createElement("p");
        var imgFilme = document.createElement("img");
        
        a.setAttribute("href", "#sessao");
        col.setAttribute("class", "col-lg-3 col-sm-4 col-xs-6 filme");
        col.setAttribute("id", x.codigo);
        col.addEventListener("click", function(e){
            sessao(this.id);
            var img = this.querySelector("img");
            resultado[0].filme = img.alt; // resultado -> filme
            resultado[0].img = img.src; // resultado -> img
        });
        infoFilme.setAttribute("class", "info-filme","a","#sessao");
        classif.setAttribute("class", "classification-"+x.classificacao);
        imgFilme.setAttribute("src", "img/"+x.cartaz);
        imgFilme.setAttribute("class", "img-responsive poster");
        imgFilme.setAttribute("alt", x.nome);
        
        classif.innerHTML = x.classificacao;
        nomeFilme.innerHTML = x.nome;
        
        infoFilme.appendChild(classif);
        infoFilme.appendChild(nomeFilme);
        col.appendChild(infoFilme);
        col.appendChild(imgFilme);
        a.appendChild(col);
        rowFilmes.appendChild(a);
        scroll();
    });
    
    
    /**************** DIV SESSAO ****************/
    
    function sessao(id){
        var infos = document.getElementById("infos");
        filmes.forEach(function(x){
            if(x.codigo === id){
                var img = document.createElement("img");
                var tituloFilme = document.createElement("h1");
                var genero = document.createElement("span");
                var classif = document.createElement("span");
                var duracao = document.createElement("span");
                var description = document.createElement("div");
                var sinopse = document.createElement("p");
                var diretor = document.createElement("p");
                var elenco = document.createElement("p");
                var horario = document.createElement("div");
                
                img.setAttribute("src", "img/"+x.cartaz);
                img.setAttribute("alt", x.nome);
                img.setAttribute("class", "img-responsive");
                tituloFilme.setAttribute("class", "titulo-filme");
                genero.setAttribute("class", "genero-filme");
                classif.setAttribute("class", "classificacao-filme");
                duracao.setAttribute("class", "duracao-filme");
                description.setAttribute("class", "description");
                
                tituloFilme.innerHTML = x.nome;
                genero.innerHTML = x.genero;
                classif.innerHTML = x.classificacao;
                classif.style.color = "#fff"
                duracao.innerHTML = x.duracao+" min.";
                sinopse.innerHTML = x.sinopse;
                diretor.innerHTML = "<strong class='d-block'>Diretor </strong>"+x.diretor;
                elenco.innerHTML = "<strong class='d-block'>Elenco </strong>"+x.elenco;
                horario.innerHTML = "<strong>Sessões: </strong><a href='#lugares' id='hr1' class='hvr-bounce-to-right'>10:30</a> <a href='#lugares' id='hr2' class='hvr-bounce-to-right'>16:15</a> <a href='#lugares' id='hr3' class='hvr-bounce-to-right'>21:15</a> ";
                
                document.getElementById("sessaoImg").innerHTML = "";
                document.getElementById("sessaoInfo").innerHTML = "";
                
                document.getElementById("sessaoImg").appendChild(img);
                document.getElementById("sessaoInfo").appendChild(tituloFilme);
                document.getElementById("sessaoInfo").appendChild(genero);
                document.getElementById("sessaoInfo").appendChild(classif);
                document.getElementById("sessaoInfo").appendChild(duracao);
                document.getElementById("sessaoInfo").appendChild(description);
                document.getElementById("sessaoInfo").appendChild(horario);
                description.appendChild(sinopse);
                description.appendChild(diretor);
                description.appendChild(elenco);
            }
        });
        
        // resultado -> sessao
        document.getElementById("hr1").addEventListener("click",function(e){resultado[0].sessao = '10:30';});
        document.getElementById("hr2").addEventListener("click",function(e){resultado[0].sessao = '16:15';});
        document.getElementById("hr3").addEventListener("click",function(e){resultado[0].sessao = '21:45';});
    
        scroll();
    }
    
    
    
    /**************** DIV LUGARES ****************/
    
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
    
    var contLugares = 0;
    var lugares = document.querySelectorAll("#tabelaLugares table tr td");
    var lugaresArr = Array.prototype.slice.call(lugares);
    lugaresArr.forEach(function(x){
        x.addEventListener("click", function(e){
            var ul = document.getElementById("lugaresEscolhidos");
            if(x.title === "escolhido"){
                x.style.backgroundColor = "#111";
                x.style.color = "#111";
                x.removeAttribute("title");
                var li = document.getElementById("l"+x.id);
                ul.removeChild(li);
                contLugares--;
                resultado[0].assentos.splice(contLugares, 1); // resultado -> assentos
                /*for(var i = 0; i <= resultado[0].assentos; i++){
                    if(i === x.id){
                        resultado[0].assentos.splice(i, 1); // resultado -> assentos
                    }
                }*/
            }
            else{
                var li = document.createElement("li");
                li.setAttribute("id", "l"+x.id);
                li.innerHTML = x.id;
                ul.appendChild(li);
                x.style.backgroundColor = "black";
                x.style.color = "white";
                x.setAttribute("title", "escolhido");
                resultado[0].assentos[contLugares] = x.id; // resultado -> assentos
                contLugares++;
            }
        });
    });
    
    
    /**************** DIV INGRESSOS ****************/
    
    document.getElementById("goIngressos").addEventListener("click", function(e){
        var tbody = document.getElementById("qtdIngressos");
        tbody.innerHTML = "";
        for(var i = 1; i <= contLugares; i++){
            var tr = document.createElement("tr");
            var tdTipo = document.createElement("td");
            var tdRa = document.createElement("td");
            var tdValor = document.createElement("td");
            var select = document.createElement("select");
            var inteira = document.createElement("option");
            var meia = document.createElement("option");
            
            select.setAttribute("class", "form-control");
            inteira.setAttribute("value", "inteira");
            meia.setAttribute("value", "meia");
            
            inteira.innerHTML = "Inteira";
            meia.innerHTML = "Meia";

            tdRa.innerHTML = "<span class='invi'>ahusasuhhasuasuhsahusausah</span>";
            tdValor.innerHTML = "R$ <span class='vl'>20,00</span>";
            
            select.appendChild(inteira);
            select.appendChild(meia);
            tdTipo.appendChild(select);
            tr.appendChild(tdTipo);
            tr.appendChild(tdRa);
            tr.appendChild(tdValor);
            tbody.appendChild(tr);
        }
        ingressos();
        //alert(resultado[0].assentos);
    });
    
    // onChange R.A
    
    function ingressos(){
        var select = document.querySelectorAll("#ingresso select");
        var selectArr = Array.prototype.slice.call(select);
        selectArr.forEach(function(x){
            x.addEventListener("change", function(){
                if(x.value === "meia"){
                    var getTr = x.parentNode.parentNode;
                    var getSpan = getTr.querySelector("span");
                    var getVl = getTr.querySelector("span.vl"); 
                    var inputRa = document.createElement("input");
                    
                    inputRa.setAttribute("class", "form-control");
                    inputRa.setAttribute("placeholder", "Insira o R.A");
                    getSpan.parentNode.replaceChild(inputRa, getSpan);  
                    getVl.innerHTML = "10,00";
                }
                else{
                    var getTr = x.parentNode.parentNode;
                    var getInput = getTr.querySelector("input");
                    var getVl = getTr.querySelector("span.vl");
                    var span = document.createElement("span");
                    getVl.innerHTML = "20,00";
                    
                    span.setAttribute("class", "invi");
                    span.innerHTML = "ahusasuhhasuasuhsahusausah";
                    getInput.parentNode.replaceChild(span, getInput);
                }
            });
        });
    }
    
    
    /**************** DIV FINALIZAR ****************/
    
    document.getElementById("goFinalizar").addEventListener("click", function(){
        var vlTotal = 0;
        var tbody = document.getElementById("qtdIngressos");
        var trs = tbody.querySelectorAll("tr");
        var trsArr = Array.prototype.slice.call(trs);
        trsArr.forEach(function(x){
          var td = x.childNodes;
          var vl = parseFloat(td[2].querySelector("span.vl").innerHTML);
          vlTotal = vlTotal + vl;
        });
        document.getElementById("finalizarImg").innerHTML = "<img src='"+resultado[0].img+"' alt='"+resultado[0].filme+"' class='img-responsive'>";
        document.getElementById("finalizarFilme").innerHTML = resultado[0].filme;
        document.getElementById("finalizarSessao").innerHTML = resultado[0].sessao;
        document.getElementById("finalizarTotal").innerHTML = "R$ "+vlTotal.toFixed(2);
        document.getElementById("finalizarAssentos").innerHTML = resultado[0].assentos;
        
        
    });
    
    var btnCartao = document.getElementById("btnCartao");
    var btnBoleto = document.getElementById("btnBoleto");
    var divCartao = document.getElementById("cartao");
    var divBoleto = document.getElementById("boleto");
    var toSpan = divBoleto.querySelector("span");
    
    btnCartao.addEventListener("click", function(e){
        divBoleto.style.display = "none"; 
        divCartao.style.display = "block";
        btnCartao.setAttribute("class", "btn btn-default btn-lg glyphicon glyphicon-credit-card active");
        btnBoleto.setAttribute("class", "btn btn-default btn-lg glyphicon glyphicon-barcode");
    });
    
    btnBoleto.addEventListener("click",  function(e){
        divCartao.style.display = "none"; 
        divBoleto.style.display = "block";
        btnBoleto.setAttribute("class", "btn btn-default btn-lg glyphicon glyphicon-barcode active");
        btnCartao.setAttribute("class", "btn btn-default btn-lg glyphicon glyphicon-credit-card");
    });
    
    btnImprimir.addEventListener("click",  function(e){
        divCartao.style.display = "none"; 
        divBoleto.style.display = "block";
        btnBoleto.setAttribute("class", "btn btn-default btn-lg glyphicon glyphicon-barcode active");
        btnCartao.setAttribute("class", "btn btn-default btn-lg glyphicon glyphicon-credit-card");
        btnImprimir.setAttribute("class", "btn btn-default btn-lg glyphicon glyphicon-print active");
        toSpan.innerHTML = "<hr> <a href='img/boletoembranco.jpg' target='_blank'><img src='img/boletoembranco.jpg' width= '100%' height='auto' alt='Boleto' target='_blank'></a>";
        
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
    
    // VALIDAÇÃO DOS CAMPOS
    var valida = false;
    // numero do cartão
    document.getElementById("numCartao").addEventListener("blur", function(e){
        var campo = this.value;
        if(campo.length < 19 || campo.length > 19){
            this.style.backgroundColor = "#d9534f";
            valida = false;
        }
        else{
            this.style.backgroundColor = "white";
            valida = true;
        }
    });
    // nome do cartão
    document.getElementById("nomeCartao").addEventListener("blur", function(e){
        var campo = this.value;
        if(campo.length > 50 || campo.length === 0){
            this.style.backgroundColor = "#d9534f";
            valida = false;
        }
        else{
            this.style.backgroundColor = "white";
            valida = true;
        }
    });
    // mes validade
    document.getElementById("mesCartao").addEventListener("blur", function(e){
        var campo = this.value;
        if(campo.length > 2 || campo > 12 || campo < 1){
            this.style.backgroundColor = "#d9534f";
            valida = false;
        }
        else{
            this.style.backgroundColor = "white";
            valida = true;
        }
    });
    // ano validade
    document.getElementById("anoCartao").addEventListener("blur", function(e){
        var campo = this.value;
        if(campo.length > 4 || campo.legth < 4 || campo > 2025 || campo < 2017){
            this.style.backgroundColor = "#d9534f";
            valida = false;
        }
        else{
            this.style.backgroundColor = "white";
            valida = true;
        }
    });
    // CVV
    document.getElementById("cvv").addEventListener("blur", function(e){
        var campo = this.value;
        if(campo.length > 3 || campo.length < 3){
            this.style.backgroundColor = "#d9534f";
            valida = false;
        }
        else{
            this.style.backgroundColor = "white";
            valida = true;
        }
    });
    // btn finalizar
    document.getElementById("cartaoFinalizar").addEventListener("click", function(e){
        var cartao = document.getElementById("cartao");
        var inputs = cartao.querySelectorAll("input");
        var selects = cartao.querySelectorAll("select");
        var inputsArr = Array.prototype.slice.call(inputs);
        var selectsArr = Array.prototype.slice.call(selects);
        inputsArr.map(function(x){
            if(x.value === 0){return valida=false}
        });
        selectsArr.map(function(x){
            if(x.value === "mes" || x.value === "ano"){return valida=false}
        });
        if(valida === false){
            alert("Preencha os campos corretamente!")
        }
        else{
            window.location = "finalizado.html";
        }
    });
}





/********** API DO FACEBOOK ************/




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
        document.getElementById("btncomecar").innerHTML = "<a class='btn btn-lg' id='goFilmes' href='#filmes' alt='botão iniciar'>Clique aqui para começar</a>";
        document.getElementById("facalogin").innerHTML = 'Os melhores lançamentos de filmes';
        scroll();
    });
}

// Logout from facebook
function fbLogout() {
    FB.logout(function() {
        document.getElementById('fbLink').setAttribute("onclick","fbLogin()");
        document.getElementById('fbLink').innerHTML = '<img src="img/loginfb.png"/>';
        document.getElementById('status').innerHTML = '';
        document.getElementById('foto').innerHTML = '';
        document.getElementById("btncomecar").innerHTML = '';
        document.getElementById("facalogin").innerHTML = 'Faça Login para começar';
        window.location = "index.html";
    });
}

/********** SCROLL **********/
function scroll(){
    $(".intro-btn a, #filmes #rowFilmes a, #lugares a, #ingresso a, #sessao a").click(function(){

        document.getElementById("filmes").style.display = "block";
        
        var scrollLink = $($(this).attr("href")).offset().top;
        $('body').animate({
            scrollTop: scrollLink,
        });
    });    
}

    

/********** GO PAGINAS **********/

/*document.getElementById("goFilmes").addEventListener("click", function(e){
   var divFilmes = document.getElementById("filmes");
   divFilmes.style.display = "block";
   setTimeout(function(){ window.location = "index.html#filmes"; }, 3000);
});
*/

// JQUERY MASK

$(document).ready(function(){
   $('#numCartao').mask('0000 0000 0000 0000');
   $('#cvv').mask('000');
});