/*eslint-disable*/
var masterLock = false;
var output, input, zplOutput, help;
var singleInput;
var profile;
var username, badgeNumber;
var leftScroll, rightScoll, scroll, scrollShow;
var use1tMult, use9dMult
var dataBaseCounter;

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
    //var copyText = document.getElementById(str);
    zplOutput.select();
    document.execCommand("copy");
    window.alert("ZplOutput copied to clipboard");
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



            
function testFuction(){
    //var testLabel = new label("[)>@06@12S0001@1P5500038641@PA2C02517500@31PA2C02517500@20P@2PE  @Q60@16K0@V8327468@3SSp0000000ef73    @20T0101@15D19122025@9DD20190115@1T19A14EG@ZN @1Z000000163@@");
    //console.log(testLabel.toStringC());
    console.log("Start of 'testFucntion()'");
    
    
  
}






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


