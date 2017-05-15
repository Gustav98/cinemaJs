window.onload = main;

function main(){
    
    // variavel dos filmes
    var filme = [{"codigo":"1","nome":"Guardiões da Galaxia vol.2","cartaz":"cartaz/gdg.jpg","classificacao":"12","genero":"Aventura","duracao":"137","diretor":"James Gunn","elenco":"Chris Pratt, Vin Diesel, Zoe Saldana, Dave Batista, Bradley Cooper, Karen Gillan, Pom Klementieff, Michael Rooker","sinopse":"Os Guardiões precisam lutar para manter sua recém descoberta família unida, enquanto descobrem os mistérios sobre o verdadeiro pai de Peter Quill. Antigos inimigos se tornam aliados e personagens conhecidos e amados dos quadrinhos virão ao auxílio dos nossos heróis, enquanto o Universo Cinematográfico da Marvel continua se expandindo."},
                 {"codigo":"2","nome":"Alien Covenant","cartaz":"cartaz/ac.jpg","classificacao":"18","genero":"Terror/Suspense","duracao":"137","diretor":"James Gunn","elenco":"Chris Pratt, Vin Diesel, Zoe Saldana, Dave Batista, Bradley Cooper, Karen Gillan, Pom Klementieff, Michael Rooker","sinopse":""},
                 {"codigo":"3","nome":"Guardiões da Galaxia vol.2","cartaz":"cartaz/gdg.jpg","classificacao":"12","genero":"Aventura","duracao":"137","diretor":"James Gunn","elenco":"Chris Pratt, Vin Diesel, Zoe Saldana, Dave Batista, Bradley Cooper, Karen Gillan, Pom Klementieff, Michael Rooker","sinopse":""},
                 {"codigo":"4","nome":"Guardiões da Galaxia vol.2","cartaz":"cartaz/gdg.jpg","classificacao":"12","genero":"Aventura","duracao":"137","diretor":"James Gunn","elenco":"Chris Pratt, Vin Diesel, Zoe Saldana, Dave Batista, Bradley Cooper, Karen Gillan, Pom Klementieff, Michael Rooker","sinopse":""},
                 {"codigo":"5","nome":"Guardiões da Galaxia vol.2","cartaz":"cartaz/gdg.jpg","classificacao":"12","genero":"Aventura","duracao":"137","diretor":"James Gunn","elenco":"Chris Pratt, Vin Diesel, Zoe Saldana, Dave Batista, Bradley Cooper, Karen Gillan, Pom Klementieff, Michael Rooker","sinopse":""}];
    
    // constroi tabela de assentos
    var divTable = document.createElement("div");
    var table = document.createElement("table");
    var thead = document.createElement("thead");
    var tbody = document.createElement("tbody");
    var theadTr = document.createElement("tr");
    
    divTable.setAttribute("class", "table-responsive");
    table.setAttribute("class", "table table-bordered");
    
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
}