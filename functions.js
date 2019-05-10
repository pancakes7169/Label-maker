/*eslint-disable*/
var output, input, zplOutput, help;
var profile;
var username, badgeNumber;
var leftScroll, rightScoll, scroll;
var use1tMult, use9dMult
var dataBaseCounter;

var nextLine;
var labelNumber = 0;
            
function onLoadBody() {
    output = document.getElementById("output");
    input = document.getElementById("input");
    zplOutput = document.getElementById("zplOutput");
    help = document.getElementById("help");
    profile = document.getElementById("profile");
    username = document.getElementById("username");
    badgeNumber = document.getElementById("badgeNumber");
    use1tMult = document.getElementById("use1tMult");
    use9dMult = document.getElementById("use9dMult");
    dataBaseCounter =document.getElementById("dataBaseCounter");
    scroll = document.getElementById("scroll");
    leftScroll =document.getElementById("leftScroll");
    rightScroll =document.getElementById("rightScroll");
    
    
    //output.readOnly = true;
    help.readOnly = true;
    dataBaseCounter.readOnly = true;
    dataBaseCounter.value = "0 Lables";
    updateScrollButtons();
    
    print ("Program Start [Use '/h' for help]"); 
    //output.value = localStorage.lastname;
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
    output.value = output.value + "\n" + n;
    output.scrollTop = output.scrollHeight;
}
			
function clearOutput() {
    output.value = "";
    output.scrollTop = output.scrollHeight;
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
}
function rightOne(){
    var temp = scroll.value;
    if (scroll.value < labelData.length){
        scroll.value++;
        leftScroll.style.cssText = "opacity: 1;";
    }else
        rightScroll.style.cssText = "opacity: 0.5; background-color: gray;";
    diplayLabelData(scroll.value,temp);
}

function updateScrollButtons(){
    if (scroll.value == labelData.length)
        rightScroll.style.cssText = "opacity: 0.5; background-color: gray;";
    if (scroll.value == 0)
        leftScroll.style.cssText = "opacity: 0.5; background-color: gray;";
}





            
function testFuction(){
    //var testLabel = new label("[)>@06@12S0001@1P5500038641@PA2C02517500@31PA2C02517500@20P@2PE  @Q60@16K0@V8327468@3SSp0000000ef73    @20T0101@15D19122025@9DD20190115@1T19A14EG@ZN @1Z000000163@@");
    //console.log(testLabel.toStringC());
    console.log("Start of 'testFucntion()'");
    var temp = document.getElementById("use9dMult").checked;
    console.log(temp);
    
    
    
    
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
    extractedDataFromSinleLabel();   
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


