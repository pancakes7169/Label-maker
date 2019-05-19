//https://shancarter.github.io/mr-data-converter/

var venderList = [
  ["Colored","Vender","Supplier","code","Buyer"],
  ["0","338925","4 Star Electronics","N/A","Distributor"],
  ["1","337033","ACI INDUSTRIES","s34","Diane Gonzales"],
  ["1","335654","ACUMENT (formelry CARMCAR LLC) (Belvedere)","s39","Glenn Grein"],
  ["1","369815","Advanced molding techonolgies Inc. (AMT)","s32","Zoomie Marcantel"],
  ["1","333740","Allegro Microsystems","s41","Todd Foltz"],
  ["1","337034","Allied Technology","s34","Diane Gonzales"],
  ["1","350975","Alupress AG","s36","Garrett Grein"],
  ["1","331184","Analog devices INC.","s41","Todd Foltz"],
  ["1","161624","Arnold Umformtechnik GmbH & Co. KG","s39","Glenn Grein"]
];

var weightList = [
  ["Same","Part Number","Qty","Vender","Weight"],
  ["0","2841053700100","162","Metal Technology","500"],
  ["1","2841074301100","128","Nedec","450"],
  ["1","2841074301100","192","Twin City","550"],
  ["1","2841074301100","1920","Delphi","400"]
];

var kanban = [
  ["Part Num","Vender","Locations"],
  ["2840359100100","JD Norman","*"],
  ["2840359200100","JD Norman","*"]
];



function createTable(tableData) {
    var table = document.createElement('table');
    var tableBody = document.createElement('tbody');

    tableData.forEach(function(rowData) {
        var row = document.createElement('tr');

        rowData.forEach(function(cellData) {
        var cell = document.createElement('td');
        cell.appendChild(document.createTextNode(cellData));
            row.appendChild(cell);
        });

        tableBody.appendChild(row);
    });

    table.appendChild(tableBody);
    document.body.appendChild(table);
    
    //table.style.backgroundColor = "red";

    
    var cells = tableBody.getElementsByTagName('td');
    
    for (var i=0, len=cells.length; i<len; i++){
        if (parseInt(cells[i].innerHTML,10) ==1){
            cells[i+1].style.backgroundColor = '#32CD32';
        }
    }

}
