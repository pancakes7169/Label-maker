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
            case "/u" : username.innerHTML = n.substr(3); break;
            case "/t" : printTripodHelp(); break;
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
    println("[List of commands]----------------");
    println("/t : Prints tripod data entering guide");
     println("----------------------------------");
    /*println("----------------------------------");
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
    println("----------------------------------"); */  
}

function printTripodHelp(){
    clearOutput();
    println("PartNumber");
    println("Vender");
    println("Default Quanity");
    println("First entry of key [Date/Lot]");
    println("/n");
    println("Start of array data [Index/Partial.Index/Partial]");
    println("/n");
}
//-----------------------------------------------------------------------------------
//Data base formatting 
function enterData(){
    if (document.getElementById("tripodEntry").checked){
        enterTripodData();
    }else{
        var n = output.value.split("\n");
        for (var i = 0; i < n.length; i++){
        labelData.push(new label(n[i])) 
        }
        println(n.length-1 + " possiable lables detected");
        for (var i = 0; i < labelData.length; i++) {
            if (labelData[i].checkForNull()) {         
                labelData.splice(i, 1);
                i--;
            }
        }
        println(labelData.length + " correct labels created");
    }
    
    dataBaseCounter.value = labelData.length + " Lables";
    diplayLabelData(0,-1);
    updateScrollButtons();
    updateSidePartNum();
    upadateSideVender();
}   

function enterTripodData(){
    //console.log("Entering Tripod Data");
    var n = output.value.split("\n");
    var firstStop = n.indexOf("/n");
    var secondStop = n.indexOf("/n",firstStop+1);
    //console.log("F/S : " + firstStop + " " + secondStop);
    var key = n.slice(3,firstStop);
    var rawData = n.slice(firstStop+1);
    var listData = new Array();

    //console.log("K: " + key.length);
    

    
    //console.log("RD: " + rawData.length);
    for (var i = 0; i < rawData.length; i++){
        var temp = rawData[i].split(".");
        for (var j = 0; j < temp.length; j++){
            if (/\S/.test(temp[j])) {
                listData.push(temp[j]);
            }
           
        }
    }
    
    //for (var i = 0; i < listData.length; i++){
        //console.log(listData[i]);
    //}
    //console.log("LD: " + listData.length);
    for (var i = 0; i < listData.length; i++){
        var num = null;
        if (listData[i].includes("/")){
            num = parseInt(listData[i].substr(0,listData[i].indexOf("/")))-1;
        }else{
            num = parseInt(listData[i])-1;    
        }
        
        temp = "";
        temp += "[)>";
        temp += "@" + n[0]; //Part Number
        temp += "@1T" + key[num].substr(key[num].indexOf("/")+1);// lot
        temp += "@9D" + key[num].substr(0,key[num].indexOf("/"));// date
        console.log(listData[i]);
        if (listData[i].includes("/")){
            temp += "@Q" + listData[i].substr(listData[i].indexOf("/")+1);
        }else{
            temp += "@" + n[2];// quanity
        }
        temp += "@" + n[1]; //Vender
        temp += "@@";
        //console.log(i + " " + temp);
        
        
       labelData.push(new label(temp)); 
    }
    
   
    
    
}


function convertToZPL(){
    if (document.getElementById("split").checked){
        var splitValue = document.getElementById("splitAt");
        if (document.getElementById("splitAt").value == 0){
            splitValue.value = parseInt(labelData.length / 2);
        }
        subzplOutput1.value = getZPL(0,splitValue.value);
        subzplOutput2.value = getZPL(splitValue.value,labelData.length);
        document.getElementById("num1").innerHTML = "[" + parseInt(splitValue.value) + "]";
        document.getElementById("num2").innerHTML = "[" + parseInt(labelData.length - splitValue.value) + "]";
    }else{
        zplOutput.value = getZPL(0,labelData.length);
    }
}

function getZPL(start, end){
    var temp = "";
    temp += "${\n";
    //for (var i = 0; i < labelData.length; i++){
    for (var i = start; i < end; i++){
        //temp += labelData[i].formatZPL(username.value,i);
       temp += labelData[i].formatZPL(localStorage.user,i,1); 
    }
    temp += "\n}$";
    return temp;
    //zplOutput.value = temp;
}

function CreateLabelsAndconvertToZPL(){
    enterData();
    convertToZPL();
}

function outputupdate(){
    if (labelData != 0){
        convertToZPL();
    }
}
function claerDatabase(){
    labelData =[];
    dataBaseCounter.value = labelData.length + " Lables";
    zplOutput.value = "";
    clearSingeLabelFeilds();
    scrollShow.value = 1;
    scroll.value = 0;
    document.getElementById('change').value = "";
    document.getElementById("CopiedLabel").style.display = 'none';
    document.getElementById("CopiedLabel1").style.display = 'none';
    document.getElementById("CopiedLabel2").style.display = 'none';
    updateSidePartNum();
    upadateSideVender();
    splitAt.value = 0;
    subzplOutput1.value = "";
    subzplOutput2.value = "";
}

function clearAll(){
    claerDatabase();
    clearOutput();
}


//-----------------------------------------------------------------------------------
function diplayLabelData(i,temp){
    scroll.value = i;
    scrollShow.value = parseInt(i)+1;
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
            if (kanban[i][0] == n.substr(1,n.length)){
                return "V:" + kanban[i][1] + " " + kanban[i][2] + "L";
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
            if (weightList[i][1] == n.substr(1,n.length)){
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
    /*if (vSL != null){
        if (vSL == document.getElementById("vSL").value){
            return;
        }
    }*/
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
//=============================================
function makeBill(){
    var n = output.value;
    var key = new Array();
    var key = n.split("\n");  
    
            for (var j = 0; j < key.length; j++){
            //console.log("Key: " + key[j]);
        }
    var dataP = new Array();
    var dataQ = new Array();
    for (var i = 7; i < key.length-1; i++){
        var temp = key[i].split("|");//key[i].split(/,?\s+/);
        for (var j = 0; j < temp.length; j++){
            //console.log(Temp:temp[j]);
        }
        console.log(temp[3]);
        var p = temp[3].split("-").join("").trim();
        var q = temp[5];
        if (!p.includes("empty")){
            dataP.push(p);
            dataQ.push(q);
        }
    }
    formatBill(dataP,dataQ);
}

function formatBill(dataP, dataQ){
    var totalPallets = 0;
    var totalWeight = 0;
    println("------------");
    println("\nBill of landing");
    //Search for dupe partNums
    for (var i = 0; i < dataP.length; i++){
        var n = dataP[i];
        console.log("N: " + n);
        var count = 1;
        for (var j = i+1; j < dataP.length; j++){
            if (dataP[j] === n){
                count++;
                i = j;
            }
        }
        //Search for dup partnums 1
        //console.log("i:" + i + " Count: " + count)
        totalPallets += count;
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
        //totalWeight += parseInt(lookUpWeight(n,n2,count2));
        println("\t\t[" + count2 + "]" + "\tQ:" + n2 + "\t| " + lookUpWeight(n,n2,count2));
        for (var k = 0; k < otherNums.length; k++){
            var num = otherNums[k];
            var count3 = 0;
            for (var a = i+1-count; a < count+i; a++){
                if (dataQ[a] === num){
                    count3++;
                    k = a;
                }
            }
            //totalWeight += parseInt(lookUpWeight(n,num,count3));
            println("\t\t\t\t[" + count3 + "]\tQ:" + num + "\t| " + lookUpWeight(n,num,count3));
        }
    }
    println("Total pallets: [" + totalPallets + "]    Total weight: [" + totalWeight +  "]");
    output.scrollLeft = 0;

}

function lookUpWeight(p,q,c){
    console.log(">" + p + " " + q + " " + c);
    for (var i = 0; i < weightList.length; i++){
        if (weightList[i][1] === p){
            console.log("Part Num found" + weightList[i][2]);
            if (weightList[i][2] == q){
                console.log("Quanity found");
                return "W: " + weightList[i][4] + "Lbs T: " + weightList[i][4]*c + "lbs V:" + weightList[i][3];
            }
        }
    }
    return "X";
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
    if (intProfile == 0){//Default
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
    }else if (intProfile == 1){//Custom
        if (n.startsWith(document.getElementById('p').value.toLowerCase())){
            document.getElementById("pSL").value = n.toUpperCase();
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
        var t = document.getElementById("tSL");
        var d = document.getElementById("dSL");
        if (document.getElementById("copy1t9d").checked){
            if(t.value == "" && d.value != "")
                t.value = d.value.substr(2);
            if(d.value == "" && t.value != "")
                d.value = t.value.substr(2); 
        }
        //console.log(document.getElementById('p').value.toLowerCase());
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
    singleLabel.fixLabel();
    document.getElementById("pSL").value = singleLabel.getP();
    document.getElementById("tSL").value = singleLabel.getT();
    document.getElementById("dSL").value = singleLabel.getD();
    document.getElementById("qSL").value = singleLabel.getQ();
    document.getElementById("vSL").value = singleLabel.getV();
}

function printSingleLabel(){
    singleLabel = new label("");
    singleLabel.setP(document.getElementById("pSL").value);
    singleLabel.setT(document.getElementById("tSL").value);
    singleLabel.setD(document.getElementById("dSL").value);
    singleLabel.setQ(document.getElementById("qSL").value);
    singleLabel.setV(document.getElementById("vSL").value);
    if (username.value === ""){
        //getUsername();
    }
    var temp = "";
    temp += "${\n";
    //temp += singleLabel.formatZPL(username.value,0); 
    temp += singleLabel.formatZPL(localStorage.user,-1,2); 
    temp += "\n}$";
    zplOutput.value = temp;
    //copyStringToClipboard();
}

function addLabel(){
    extractedDataFromSinleLabel();
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
    //var feild = document.getElementById("feild").value.toLowerCase();
    var feild = document.getElementById("change").value.charAt(0);
    var n = document.getElementById("change").value.toLowerCase();
    for (var i = 0; i < labelData.length; i++){
        switch(feild){
            case "p"  : if (!n.startsWith("p")) n = "P" + n;
                        labelData[i].setP(n); break;
            case "1t" : if (!n.startsWith("1t")) n = "1T" + n;
                        labelData[i].setT(n); break;
            case "9d" : if (!n.startsWith("9d")) n = "9D" + n;
                        labelData[i].setD(n); break;
            case "q"  : if (!n.startsWith("q")) n = "Q" + n;
                        labelData[i].setQ(n); break;
            case "v"  : if (!n.startsWith("v")) n = "V" + n;
                        labelData[i].setV(n); break;
            default   : console.log("Err: Chagne all defalut statement reached");
        }
    }
    diplayLabelData(scroll.value,-1);
    if (!zplOutput.value == "")
        convertToZPL();
    updateSidePartNum();
    upadateSideVender();
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

function clearAtSymbol(){
    document.getElementById("p").value = "P";
    document.getElementById("t").value = "1T";
    document.getElementById("2t").value = "2T";
    document.getElementById("d").value = "9D";
    document.getElementById("2d").value = "9D";
    document.getElementById("q").value = "Q";
    document.getElementById("v").value = "V";
    document.getElementById("p2").value = "";
    document.getElementById("t2").value = "";
    document.getElementById("2t2").value = "";
    document.getElementById("d2").value = "";
    document.getElementById("2d2").value = "";
    document.getElementById("q2").value = "";
    document.getElementById("v2").value = "";
    
}

