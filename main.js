/*eslint-disable*/
var divLine = "----------------------------------";
var intProfile = 0;
//var dataBase = [1];
var labelData = new Array();
var singleLabel;
//-----------------------------------------------------------------------------------
//Comand Line stuff
function runCommand(n){
   //localStorage.lastname = n;

    n.toLowerCase();
    if (n.startsWith("/")){
        switch (n.substring(0,2)){
            case "/h" : helpCommand(); break;
            //case "/d" : enterData(); break;
            //case "/z" : convertToZPL(n); break;
            /*case "/a" : println("pa"); printArray(dataBase); break;
            case "/l" : printLabel(labelData); break;
            case "/z" : convertToZPL(input, labelData,n); break;
            case "/c" : changeAll(labelData,n); break;
            case "/s" : subStringAll(input, labelData,n); break;
            case "/t" : LinkedList tempList2 = createTro(input); 
                        dataBase = new String[tempList2.size()];
                        for (int i = 0; i < dataBase.length; i++){
                            dataBase[i] = (String)(tempList2.get(i));
                        }
                        labelData = convertToLabels(dataBase);*/
            default : System.err.println("Error: UnknownCommand"); 
        }
    }else{
        //System.err.println("Error: Not a command, plese use '/'");
    }
    output.scrollTop = output.scrollHeight;
}

function helpCommand(){
    println("----------------------------------");
    println("Warning: Command  line has been disabled");
    println("----------------------------------");
    println("[List of commands]----------------");
    println("/p : Profile, select a label profile.");
    println("/d : Enter new data");
    println("/a : Prints out the contents of the array");
    println("/l : Prints out the contents of the label dataBase");
    println("/z : Fomats the the ZPL output");
    println("/a : Changes the contents of that feild");
    println("/s : SubStrings the given feild");
    println("/q : Takes in ints | 0 restarts program, 1 clears console");
    println("----------------------------------");
    println("Warning: Command  line has been disabled");
    println("----------------------------------");   
}
//-----------------------------------------------------------------------------------
//Data base formatting 
function enterData(){
    var n = output.value.split("\n");
    for (var i = 0; i < n.length; i++){
       labelData.push(new label(n[i])) 
    }
    println(n.length + " possiable lables detected");
    for (var i = 0; i < labelData.length; i++) {
        if (labelData[i].checkForNull()) {         
            labelData.splice(i, 1);
            i--;
        }
    }
    println(labelData.length + " correct labels created");
    dataBaseCounter.value = labelData.length + " Lables";
    diplayLabelData(0,-1);
    updateScrollButtons();
}    

function convertToZPL(){
    if (username.value === ""){
        getUsername();
    }
    var temp = "";
    temp += "${\n";
    for (var i = 0; i < labelData.length; i++){
        temp += labelData[i].formatZPL(username.value,i);
    }
    temp += "\n}$";
    zplOutput.value = temp;
}

function CreateLabelsAndconvertToZPL(){
    enterData();
    convertToZPL();
}

function claerDatabase(){
    labelData =[];
    dataBaseCounter.value = labelData.length + " Lables";
    zplOutput.value = "";
    clearSingeLabelFeilds();
}


//-----------------------------------------------------------------------------------
function diplayLabelData(i,temp){
    scroll.value = i;
    if (temp != -1)
        savePreivousLabel(temp);
    document.getElementById("pSL").value = labelData[i].getP();
    document.getElementById("tSL").value = labelData[i].getT();
    document.getElementById("dSL").value = labelData[i].getD();
    document.getElementById("qSL").value = labelData[i].getQ();
    document.getElementById("vSL").value = labelData[i].getV();
    
    //document.getElementById("SideV").value = SearchVerderList(labelData[i].getV());
    updateScrollButtons();
}

function savePreivousLabel(i){
    labelData[i].setP(document.getElementById("pSL").value);
    labelData[i].setT(document.getElementById("tSL").value);
    labelData[i].setD(document.getElementById("dSL").value);
    labelData[i].setQ(document.getElementById("qSL").value);
    labelData[i].setV(document.getElementById("vSL").value);
}

//Kanban, weight, and vender info
//-----------------------------------------------------------------------------------
function updateSidePartNum(){
    var sideP = document.getElementById("SideP");
    var sideQ = document.getElementById("SideQ");
    var pSL   = document.getElementById("pSL").value;
    if (pSL.length == 14){
        sideP.innerHTML = searchKanban();
        updateSideQuanity();
    }else{
        sideP.innerHTML = "|";
        sideQ.innerHTML = "|";
    }
    //---------------------------------------
    cutoff(sideP);
}

function searchKanban(){
    var n = document.getElementById("pSL").value;
    for (var i = 0; i < kanban.length; i++){
            if (parseInt(kanban[i][0]) == n.substr(1,n.length)){
                return "V:" + kanban[i][1] + " " + kanban[i][2];
            }
        }
    return "Kanban not found"
}

function updateSideQuanity(){
    var sideQ = document.getElementById("SideQ");
    var pSL   = document.getElementById("pSL").value;
    if (pSL.length == 14){
        sideQ.innerHTML = searchWeights();
    }
    //---------------------------------------
    cutoff(sideQ);
}

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

function upadateSideVender(){
    var sideV = document.getElementById("SideV");
    var vSL   = document.getElementById("vSL").value;
    if (vSL.length == 7){
        sideV.innerHTML = searchVerderList();
    }else{
        sideV.innerHTML = "|";
    }
    cutoff(sideV);   
}

function searchVerderList(){
    var n = document.getElementById("vSL").value;
    for (var i = 0; i < venderList.length; i++){
            if (parseInt(venderList[i][1]) == n.substr(1,n.length)){
                return venderList[i][2];
            }
        }
    return "Vender not found"
}

function cutoff(feild){
    var width = window.innerWidth;
    var cutOffLenth = 0;
    feild.title = feild.innerHTML;
    if (width < 1000)
        cutOffLenth = 5;
    else 
        cutOffLenth = 17;
    if (feild.innerHTML.length > cutOffLenth){
        feild.innerHTML = feild.innerHTML.substr(0,cutOffLenth) + "...";
    } 
}

//-----------------------------------------------------------------------------------



 

function extractedDataFromSinleLabel(){
    var str = document.getElementById("singelInput");
    var n = str.value;
    singleLabel = new label(n);
    //Try to get contents from master Label
    //------------------------------------------------------------
    if (singleLabel.getP() != ""){
       document.getElementById("pSL").value = singleLabel.getP(); 
    }
    if (singleLabel.getT() != ""){
       document.getElementById("tSL").value = singleLabel.getT();
    }
    if (singleLabel.getD() != ""){
       document.getElementById("dSL").value = singleLabel.getD(); 
    }
    if (singleLabel.getQ() != ""){
       document.getElementById("qSL").value = singleLabel.getQ(); 
    }
    if (singleLabel.getV() != ""){
       document.getElementById("vSL").value = singleLabel.getV(); 
    }
    //Take in individual feilds
    //------------------------------------------------------------
    var intProfile = document.getElementById("profile").value;
    if (intProfile == 0){
        n = n.toLowerCase();
        if (n.startsWith("p")){
            document.getElementById("pSL").value = n.toUpperCase();
        }
        if (n.startsWith("1t")){
            document.getElementById("tSL").value = n.toUpperCase();
        }
        if (n.startsWith("9d")){
            document.getElementById("dSL").value = n.toUpperCase();
        }
        if (n.startsWith("q")){
            document.getElementById("qSL").value = n.toUpperCase();
        }
        if (n.startsWith("v")){
            document.getElementById("vSL").value = n.toUpperCase();
        }
    }else if (intProfile == 1){
        if (n.startsWith(document.getElementById('p').value.toLowerCase())){
            document.getElementById("pSL").value = correctPartNum(n.toUpperCase());
        }
        if (n.startsWith(document.getElementById('t').value.toLowerCase())){
            document.getElementById("tSL").value = n.toUpperCase();
        }
        if (n.startsWith(document.getElementById('d').value.toLowerCase())){
            document.getElementById("dSL").value = n.toUpperCase();
        }
        if (n.startsWith(document.getElementById('q').value.toLowerCase())){
            document.getElementById("qSL").value = n.toUpperCase();
        }
        if (n.startsWith(document.getElementById('v').value.toLowerCase())){
            document.getElementById("vSL").value = n.toUpperCase();
        } 
        console.log(document.getElementById('p').value.toLowerCase());
    }
    str.value = "";
    //Save it back to single label
    //------------------------------------------------------------
    setSingleLabel();
}

function get(n){
        return document.getElementById(n).value
    }

function setSingleLabel(){
    singleLabel = new label();
    singleLabel.setP(document.getElementById("pSL").value);
    singleLabel.setT(document.getElementById("tSL").value);
    singleLabel.setD(document.getElementById("dSL").value);
    singleLabel.setQ(document.getElementById("qSL").value);
    singleLabel.setV(document.getElementById("vSL").value);
}

function printSingleLabel(){
    singleLabel = new label("");
    singleLabel.setP(document.getElementById("pSL").value);
    singleLabel.setT(document.getElementById("tSL").value);
    singleLabel.setD(document.getElementById("dSL").value);
    singleLabel.setQ(document.getElementById("qSL").value);
    singleLabel.setV(document.getElementById("vSL").value);
    if (username.value === ""){
        getUsername();
    }
    var temp = "";
    temp += "${\n";
    temp += singleLabel.formatZPL(username.value,0);
    temp += "\n}$";
    zplOutput.value = temp;
    //copyStringToClipboard();
}

function addLabel(){
    print("[)>@");
    //if (singleLabel != null){
        print(singleLabel.getP() + "@");
        print(singleLabel.getT() + "@");
        print(singleLabel.getD() + "@");
        print(singleLabel.getQ() + "@");
        print(singleLabel.getV() + "@");  
    //}
    print("@");
    println("");
}

function getUsername(){
    var txt;
    var n = prompt("Please inter your name:");
    if (n == null || n == "") {
        txt = "";
    } else {
        txt = n;
    }
    username.value = txt;
}

function changeAll(){
    var feild = document.getElementById("feild").value.toLowerCase();
    var n = document.getElementById("change").value.toLowerCase();
    for (var i = 0; i < labelData.length; i++){
        switch(feild){
            case "p"  : if (!n.startsWith("p")) n = "P" + n;
                        labelData[i].setP(n); break;
            case "1t" : if (!n.startsWith("1t")) n = "1T" + n;
                        labelData[i].setT(n); break;
            case "9d" : if (!n.startsWith("9d")) n = "9D" + n;
                        labelData[i].setD(n); break;
            case "Q"  : if (!n.startsWith("q")) n = "Q" + n;
                        labelData[i].setQ(n); break;
            case "v"  : if (!n.startsWith("v")) n = "V" + n;
                        labelData[i].setV(n); break;
            default   : console.log("Err: Chagne all defalut statement reached");
        }
    }
    diplayLabelData(scroll.value,-1);
    if (!zplOutput.value == "")
        convertToZPL();
}


function resetCustomLabel(){
    document.getElementById("p").value = "@P";
    document.getElementById("t").value = "@1T";
    document.getElementById("2t").value = "@2T";
    document.getElementById("d").value = "@9D";
    document.getElementById("2d").value = "@9D";
    document.getElementById("q").value = "@Q";
    document.getElementById("v").value = "@V";
    document.getElementById("p2").value = "@";
    document.getElementById("t2").value = "@";
    document.getElementById("2t2").value = "@";
    document.getElementById("d2").value = "@";
    document.getElementById("2d2").value = "@";
    document.getElementById("q2").value = "@";
    document.getElementById("v2").value = "@";
    
}

