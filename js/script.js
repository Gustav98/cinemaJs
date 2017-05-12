window.onload = main;

function main(){
    
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
}