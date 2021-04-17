/*eslint-disable*/
var masterLock = false;
var output, input, zplOutput, help;
var singleInput;
var profile;
var username, badgeNumber;
var leftScroll, rightScoll, scroll, scrollShow;
var use1tMult, use9dMult
var dataBaseCounter;
var subzplOutput1,subzplOutput2;

var nextLine;
var labelNumber = 0;
            
function onLoadBody() {
    output = document.getElementById("output");
    input = document.getElementById("input");
    zplOutput = document.getElementById("zplOutput");
    help = document.getElementById("help");
    singleInput = document.getElementById("singelInput");
    profile = document.getElementById("profile");
    username = document.getElementById("username");
    badgeNumber = document.getElementById("badgeNumber");
    use1tMult = document.getElementById("use1tMult");
    use9dMult = document.getElementById("use9dMult");
    dataBaseCounter = document.getElementById("dataBaseCounter");
    scroll = document.getElementById("scroll");
    scrollShow = document.getElementById("scrollShow");
    leftScroll =document.getElementById("leftScroll");
    rightScroll = document.getElementById("rightScroll");
    subzplOutput1 = document.getElementById("subzplOutput1");
    subzplOutput2 = document.getElementById("subzplOutput2");
    
    updateSplit();
    
    //output.readOnly = true;
    help.readOnly = true;
    dataBaseCounter.readOnly = true;
    dataBaseCounter.value = "0 Lables";
    updateScrollButtons();
    
    
    //For locking the web page
    username.innerHTML = localStorage.user;
    bageNumber.innerHTML = localStorage.bageNum;
    if (masterLock)
        if (username.innerHTML == "Null" || bageNumber.innerHTML == "Null")
            window.open("index.html", "_self"); 
        
}

function unload(){
    localStorage.user = "Null";
    localStorage.bageNum = "Null";
}
            
function copyToOutput() {
    output.value = input.value;
}
            
function copyStringToClipboard(str) {
    document.getElementById(str).select();
    document.execCommand("copy");
    //window.alert("ZplOutput copied to clipboard");
    switch (str){
        case "zplOutput"     : document.getElementById("CopiedLabel").style.display =                         'inline'; break;
        case "subzplOutput1" : document.getElementById("CopiedLabel1").style.display                       = 'inline'; break;
        case "subzplOutput2" : document.getElementById("CopiedLabel2").style.display                       = 'inline'; break;
    }
    
}
            
function print(n) {
    output.value = output.value + n;
    output.scrollTop = output.scrollHeight;
}

function println(n) {
    output.value = output.value + n + "\n";
    output.scrollTop = output.scrollHeight;
}
			
function clearOutput() {
    output.value = "";
    output.scrollTop = output.scrollHeight;
    document.getElementById("output").focus();
}

function clearSingeLabelFeilds(){
    document.getElementById("pSL").value = "";
    document.getElementById("tSL").value = "";
    document.getElementById("dSL").value = "";
    document.getElementById("qSL").value = "";
    document.getElementById("vSL").value = "";
	document.getElementById("sSL").value = "";
}

function leftOne(){
    var temp = scroll.value;
    if (scroll.value > 0){
        scroll.value--;
        rightScroll.style.cssText = "opacity: 1;";
    }else
        leftScroll.style.cssText = "opacity: 0.5; background-color: gray;";
    diplayLabelData(scroll.value,temp); 
    updateScrollShow();
}
function rightOne(){
    var temp = scroll.value;
    if (scroll.value < labelData.length-1){
        scroll.value++;
        leftScroll.style.cssText = "opacity: 1;";
    }else
        rightScroll.style.cssText = "opacity: 0.5; background-color: gray;";
    diplayLabelData(scroll.value,temp);
    updateScrollShow();
}

function updateScrollShow(){
    scrollShow.value = (parseInt(scroll.value) + 1);
    
}

function updateScrollButtons(){
    rightScroll.style.cssText = "opacity: 1;";
    leftScroll.style.cssText = "opacity: 1;";
    if (scroll.value == labelData.length)
        rightScroll.style.cssText = "opacity: 0.5; background-color: gray;";
    if (scroll.value == 0)
        leftScroll.style.cssText = "opacity: 0.5; background-color: gray;";
}

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
}

function updateSplit(){
    //console.log
    if (labelData.length == 0){
        subzplOutput1.value = "";
        subzplOutput2.value = "";
    }else{
        convertToZPL();
    }
    document.getElementById("CopiedLabel").style.display = 'none';
    document.getElementById("CopiedLabel1").style.display = 'none';
    document.getElementById("CopiedLabel2").style.display = 'none';
    if (document.getElementById("split").checked){
        document.getElementById("nonSplit").style.display = 'none';
        document.getElementById("splitOutput").style.display = 'block';
    }else{
        document.getElementById("splitOutput").style.display = 'none';
        document.getElementById("nonSplit").style.display = 'block';
    }
}



            
function testFuction(){
    //var testLabel = new label("[)>@06@12S0001@1P5500038641@PA2C02517500@31PA2C02517500@20P@2PE  @Q60@16K0@V8327468@3SSp0000000ef73    @20T0101@15D19122025@9DD20190115@1T19A14EG@ZN @1Z000000163@@");
    //console.log(testLabel.toStringC());
    console.log("Start of 'testFucntion()'");
    
    var n = "|251|TRANSIT-C1|A2-C733-1280-0-00   |2054|      720 |      720 |        0 |        0 |USEG000170429  | |K|353382    |      | 140648175|06/20/2019|3108870768|10:31:07|";
    var stringArr = n.split('|');
     for (var j = 0; j < stringArr.length; j++){
            console.log(stringArr[j]);
        }
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    var n = zplOutput.value;
    var key = n.split("\n");              //console.log("k:" + key.length);
    var dataP = new Array();
    var dataQ = new Array();
    for (var i = 7; i < key.length; i++){
        var temp = key[i].split("|");
         for (var j = 0; j < temp.length; j++){
            //console.log(temp[i]);
        }
        //var p = temp[2].replaceAll("-","");
        var p = temp[2].split("-").join("")
        var q = temp[4];
        if (!p.includes("empty")){
            dataP.push(p);
            dataQ.push(q);
        }
    }
    //formatBill(dataP,dataQ);
    

    console.log("--------------");
    for (var i = 0; i < dataP.length; i++){
        //console.log(dataP[i] + " " + dataQ[i]);
    }
}
/*
function formatBill(dataP, dataQ){
    println("Bill of landing");
    //Search for dupe partNums
    for (var i = 0; i < dataP.length; i++){
        var n = dataP[i];
        var count = 1;
        for (var j = i+1; j < dataP.length; j++){
            if (dataP[j] === n){
                count++;
                i = j;
            }
        }
        //Search for dup partnums 1
        //console.log("i:" + i + " Count: " + count)
        print("[" + count + "]" + "\t" + n);
        var n2 = dataQ[i];
        var count2 = 0;
        var otherNums = new Array();
        for (var j = i-count+1; j < i+1; j++){
            //console.log("j:" + j);
            if (dataQ[j] === n2){
                count2++;
            }else{
                otherNums.push(dataQ[j]);
            }
        }
        println("\t[" + count2 + "]" + "\t" + n2 + "\t| " + lookUpWeight(n,n2,count2));
        for (var k = 0; k < otherNums.length; k++){
            var num = otherNums[k];
            var count3 = 0;
            for (var a = i+1-count; a < count+i; a++){
                if (dataQ[a] === num){
                    count3++;
                    k = a;
                }
            }
            println("\t\t\t[" + count3 + "]\t" + num + "\t| " + lookUpWeight(n,num,count3));
        }
    }
    
    

}

function lookUpWeight(p,q,c){
    console.log(">" + p + " " + q + " " + c);
    for (var i = 0; i < weightList.length; i++){
        if (weightList[i][1] === p){
            console.log("Part Num found" + weightList[i][2]);
            if (weightList[i][2] == q){
                console.log("Quanity found");
                return "Wegith: " + weightList[i][4] + " Total: " + weightList[i][4]*c + " " + weightList[i][3];
            }
        }
    }
    return "Not on weight chart";
}
    
                
     */         


/*
function searchWeights(){
    var n = document.getElementById("pSL").value;
    var temp = "";
    for (var i = 0; i < weightList.length; i++){
            if (parseInt(weightList[i][1]) == n.substr(1,n.length)){
                temp = getFormatedWeight(i);
                i++;
                while(weightList[i][0] == "1" && i < weightList.length-1){
                    if (parseInt(weightList[i][1]) == n.substr(1,n.length)){
                        temp+= "\n" + getFormatedWeight(i);
                    }
                    i++;
                }
                return temp;
            }
        }
    return "Weight not found"
}

function getFormatedWeight(i){
    return "V:" + weightList[i][3] + " Q:" + weightList[i][2] + " " + weightList[i][4] + "Lbs";
}
*/



//Key events
function enterKeyPressOnMainInput() {
    "use strict";
    nextLine = input.value;
    println(nextLine);
    input.value = "";
    
    

    runCommand(nextLine);
}

function enterKeyPressOnSingleInput(){
    if (singleInput.value.startsWith("/n")){
        addLabel();
        singleInput.value = "";
    }else{
        extractedDataFromSinleLabel();   
    }
    
}

function enterKeyPressOnOutput(){
    output.scrollLeft = 0;
}

function enterKeyPressOnScoll(){
    //scroll.value = (parseInt(scrollShow.value) - 1);
    diplayLabelData((parseInt(scrollShow.value) - 1),scroll.value);
    
   
}


//-------------------------------------------------------------------------------




//-------------------------------------------------------------------------------
function printIRL() {
    window.print("Test");
}
			
            
           

            
            
            
            
//Opens windown and print options
function PrintDoc() {
    var toPrint = document.getElementById('testDiv');
    //var popupWin = window.open('', '_blank', 'width=350,height=150,location=no,left=200px');
	var popupWin = window.open("about:blank", "", "_blank");
    //popupWin.document.open();
    //popupWin.document.write('<html><title>::Preview::</title><link rel="stylesheet" type="text/css" href="print.css" /></head><body onload="window.print()">')
    popupWin.document.write(toPrint.value);
    popupWin.document.write('</html>');
    popupWin.document.close();
    //popupWin.close();
}
    
function printZpl(zpl) {
  var printWindow = window.open();
  printWindow.document.open('text/plain')
  printWindow.document.write('${^XA^FO50,100^BXN,10,200^FDYourTextHere^FS^XZ}$');
  printWindow.document.close();
  printWindow.focus();
  printWindow.print();
  //printWindow.close();
}

function openWin() {
    var printWindow = window.open();
    printWindow.document.open('text/plain')
    printWindow.document.write('${^XA^FO50,100^BXN,10,200^FDYourTextHere^FS^XZ}$');
    printWindow.document.close();
    printWindow.focus();
    printWindow.print();
}

function downloadTxt(){
    var textToSave = 'this is a test';
    var hiddenElement = document.createElement('a');
    hiddenElement.href = 'data:attachment/text,' + encodeURI(textToSave);   hiddenElement.target = '_blank';
    hiddenElement.download = 'myFile.txt';
    hiddenElement.click();
}

function WriteToFile(){ 
    var fso = new ActiveXObject("Scripting.FileSystemObject"); 
    var s = fso.CreateTextFile("C:\\LogFile.txt", true); 
    s.WriteLine('<%=s1%>'); 
    s.WriteLine('***********************'); 
    s.WriteLine('<%=s1%>'); 
    s.WriteLine('<%=s1%>'); 
    s.Close(); 
} 



function loadFileAsText(){
    var fileToLoad = document.getElementById("fileToLoad").files[0];
 
    var fileReader = new FileReader();
    fileReader.onload = function(fileLoadedEvent) {
        var textFromFileLoaded = fileLoadedEvent.target.result;
        document.getElementById("output").value = textFromFileLoaded;
    };
    fileReader.readAsText(fileToLoad, "UTF-8");
}

/*
//Save objects to JSON file and then reads it back in, to be used for login system
var myObj, myJSON, text, obj;
    var products = [
  {
    name: "chair",
    inventory: 5,
    unit_price: 45.99
  },
  {
    name: "table",
    inventory: 10,
    unit_price: 123.75
  }
];


// Storing data:
//myObj = { name: "Dick", age: 31, city: "New York" };
myJSON = JSON.stringify(products);
localStorage.setItem("testJSON", myJSON);

// Retrieving data:
text = localStorage.getItem("testJSON");
obj = JSON.parse(text);
//document.getElementById("demo").innerHTML = obj[0].name;
    
  */


