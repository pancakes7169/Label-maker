/*eslint-disable*/
var divLine = "----------------------------------";
var intProfile = 0;
//var dataBase = [1];
var labelData = new Array();
var singleLabel;

function runCommand(n){
   //localStorage.lastname = n;

    
 
    //Entering Data
    //println("${^XA ^Fx");
    console.log("Profile: " + intProfile);
    n.toLowerCase();
    if (n.startsWith("/")){
        switch (n.substring(0,2)){
            case "/h" : helpCommand(); break;
            case "/d" : enterData(); break;
            case "/z" : convertToZPL(n); break;
                
            /*case "/d" : LinkedList tempList = enterData(input); 
                        dataBase = new String[tempList.size()];
                        for (int i = 0; i < dataBase.length; i++){
                            dataBase[i] = (String)(tempList.get(i));
                        }
                        labelData = convertToLabels(dataBase);
                        break;
            case "/a" : println("pa"); printArray(dataBase); break;
            case "/l" : printLabel(labelData); break;
            case "/z" : convertToZPL(input, labelData,n); break;
            case "/c" : changeAll(labelData,n); break;
            case "/s" : subStringAll(input, labelData,n); break;
            case "/t" : LinkedList tempList2 = createTro(input); 
                        dataBase = new String[tempList2.size()];
                        for (int i = 0; i < dataBase.length; i++){
                            dataBase[i] = (String)(tempList2.get(i));
                        }
                        labelData = convertToLabels(dataBase);
*/



            default : System.err.println("Error: UnknownCommand"); 
        }
    }else{
        //System.err.println("Error: Not a command, plese use '/'");
    }
    output.scrollTop = output.scrollHeight;
}
//-----------------------------------------------------------------------------------




//-----------------------------------------------------------------------------------
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
}

function diplayLabelData(i,temp){
    scroll.value = i;
    if (temp != -1)
        savePreivousLabel(temp);
    document.getElementById("pSL").value = labelData[i].getP();
    document.getElementById("tSL").value = labelData[i].getT();
    document.getElementById("dSL").value = labelData[i].getD();
    document.getElementById("qSL").value = labelData[i].getQ();
    document.getElementById("vSL").value = labelData[i].getV();
    updateScrollButtons();
}

function savePreivousLabel(i){
    labelData[i].setP(document.getElementById("pSL").value);
    labelData[i].setT(document.getElementById("tSL").value);
    labelData[i].setD(document.getElementById("dSL").value);
    labelData[i].setQ(document.getElementById("qSL").value);
    labelData[i].setV(document.getElementById("vSL").value);
}

function helpCommand(){
    println("----------------------------------");
    println("Warning: Comand line has been disabled");
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
    println("Warning: Comand line has been disabled");
    println("----------------------------------");
    
        
        
    
    
    
}

function createSingleLabel(){
    
}

function extractedDataFromSinleLabel(){
    var n = document.getElementById("singelInput");
    singleLabel = new label(n.value);
    n.value = "";
    
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
        getUsername();
    }
    var temp = "";
    temp += "${\n";
    temp += singleLabel.formatZPL(username.value,0);
    temp += "\n}$";
    zplOutput.value = temp;
    copyStringToClipboard();
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










 /*   static public LinkedList<String> createTro(Scanner input){
        LinkedList<String> list = new LinkedList<String>();
        String divLine = ("----------------------------------");
        boolean entering = true;
        
        System.out.println("Creating Tro Lables...");
        System.out.print("Part Number: ");
        String p = input.nextLine();
        System.out.println();
        System.out.print("Quanity: ");
        int q = input.nextInt();
        System.out.println();
        String v = "500124";
        
        System.out.println("Enter the 1t/9d as _# of lables_ _data_");
        while(entering){
            String holder = input.nextLine();

    	    if (holder.startsWith("/")){
    	        String temp = holder.substring(0,2);
    	        switch (temp){
    	            case "/t" : entering = false;
    	                        System.out.println("/t<> detected\n");
    	                        System.out.println(list.size() + " Items saved");
    	                        System.out.println(divLine);
    	        }
    	    }else{
    	        int repeat = Integer.parseInt(holder.substring(0,1));
    	        for (int i = 0; i < repeat; i++){
    	            String temp = "@P" + p + "@Q" + q + "@V" + v + "@1T" + holder + "@9D" + holder;
    	            list.add(holder);
    	        }
    	    }
    	    
        }
        return list;
    }
    

    
    static public void subStringAll(Scanner input, Label[] labelData, String n){
        String [] data = n.split("\\s+");
        //a[0] - Substring fuction call
        //a[1] - The feild you wish to substring
        
        System.out.println("Please enter spaces to select the portion you wish to keep");
        
        switch (data[1]){
            case "p"  : System.out.println("SubStringing Part Number.."); 
                        System.out.println("#" + labelData[0].getP()); break;
            case "1t" : System.out.println("SubStringing Lot Number..");
                        System.out.println("#" + labelData[0].getT()); break;
            case "9d" : System.out.println("SubStringing Date Code.."); 
                        System.out.println("#" + labelData[0].getD()); break;
            case "q"  : System.out.println("SubStringing Quanity.."); 
                        System.out.println("#" + labelData[0].getQ()); break;
            case "v"  : System.out.println("SubStringing Vender..");
                        System.out.println("#" + labelData[0].getV()); break;
        }
        System.out.print("#");
        String holder = input.nextLine();
        //int index = input.nextLine().length()-1;
        //System.out.println("Holder:" + holder);
        //int index = holder.length()-1;
        
        //int one = Integer.parseInt(n.substring(5,6));
        //int two = Integer.parseInt(n.substring(7,8));
        
        
        String temp = "";
        for (int i = 0; i < labelData.length; i++){
            switch (data[1]){
                //case "p"  : labelData[i].setP(labelData[i].getP().substring(one,two)); break;
                //case "1t" : labelData[i].setT(labelData[i].getT().substring(one,two)); break;
                //case "9d" : labelData[i].setD(labelData[i].getD().substring(one,two)); break; 
                //case "q"  : labelData[i].setQ(labelData[i].getQ().substring(one,two)); break;
                //case "v"  : labelData[i].setV(labelData[i].getV().substring(one,two)); break;
                
                case "p"  : temp = crop(labelData[i].getP(),holder);
                            labelData[i].setP(temp); 
                            System.out.println("Part Number substringed to: P" + temp); break;
                case "1t" : temp = crop(labelData[i].getT(),holder);
                            labelData[i].setT(temp); 
                            System.out.println("Lot Code substringed to: 1T" + temp); break;
                case "9d" : temp = crop(labelData[i].getD(),holder);
                            labelData[i].setD(temp); 
                            System.out.println("Date Code substringed to: 9D" + temp); break;
                case "q"  : temp = crop(labelData[i].getQ(),holder);
                            labelData[i].setQ(temp); 
                            System.out.println("Quanity substringed to: Q" + temp); break;
                case "v"  : temp = crop(labelData[i].getV(),holder);
                            labelData[i].setV(temp); 
                            System.out.println("Vender substringed to: V" + temp); break;
                default   : System.out.println("Comman not found");
            }
        }
        
    }
    static public String crop(String n, String key){
        String holder = "";
        key = key + "                                      ";
        for (int i = 0; i < n.length(); i++){
            if (key.charAt(i) == '_'){
                holder = holder + n.charAt(i);
            }
        }
        return holder;
    }
    
    static public void changeAll(Label[] labelData, String n){
        String[] data = null;
        try {
            data = n.split("\\s+");
        }catch(ArrayIndexOutOfBoundsException e){
            System.out.println("Arruments inccorect");
            return;
        }

        
        //a[0] - The change fuction call
        //a[1] - The feild you wish to change
        //a[2] - What you want it to be changed to
        switch (data[1]){
            case "p"  : System.out.println("Changeing Part Number to: " + data[2]); break;
            case "1t" : System.out.println("Change Lot Number to: " + data[2]); break;
            case "9d" : System.out.println("Change Date Code to: " + data[2]); break;
            case "q"  : System.out.println("Change Quanity to: " + data[2]); break;
            case "v"  : System.out.println("Change Vender to: " + data[2]); break;
        }
        for (int i = 0; i < labelData.length; i++){
            switch (data[1]){
                case "p"  : labelData[i].setP(data[2]); break;
                case "1t" : labelData[i].setT(data[2]); break;
                case "9d" : labelData[i].setD(data[2]); break; 
                case "q"  : labelData[i].setQ(data[2]); break;
                case "v"  : labelData[i].setV(data[2]); break;
                default   : System.out.println("Comman not found");
            }
        }
    }

    static public void convertToZPL(Scanner input, Label[] labelData, String n){
        String[] data = null;
        if (n.length() > 2){
            data = n.split("\\s+");
        }
        String user = "";
        if (data != null){
            if (data.length > 0){
                switch(data[1]){
                    case "b" : user = "Bailey Hubabrd"; break;
                    case "n" : user = "N/A"; break;
                }
           }
        }else{
            System.out.print("Enter your full name: ");
            user = input.nextLine();
        }
       
        clearConsole(); 
        
        System.out.print("^XZ\n");
        for (int i = 0; i < labelData.length; i++){
            System.out.println(labelData[i].formatZPL(user,i));
        }
        System.out.println("}$");
    }
    
    static public Label[] convertToLabels(String[] dataBase){
        Label[] temp = new Label[dataBase.length];
        for (int i = 0; i < dataBase.length; i++){
            temp[i] = new Label();
            temp[i].formatLabel(dataBase[i]);
             
        }
        return temp;
    }
    
    static public void helpCommand(){
        System.out.println("[List of commands]----------------");
        System.out.println("/p : Profile, select a label profile.");
        System.out.println("/d : Enter new data");
        System.out.println("/a : Prints out the contents of the array");
        System.out.println("/l : Prints out the contents of the label dataBase");
        System.out.println("/z : Fomats the the ZPL output");
        System.out.println("/a : Changes the contents of that feild");
        System.out.println("/s : SubStrings the given feild");
        System.out.println("/q : Takes in ints | 0 restarts program, 1 clears console");
        System.out.println("----------------------------------");
    }
    
    static public LinkedList<String> enterData(Scanner input){
        LinkedList<String> list = new LinkedList<String>();
        boolean entering = true;
        String divLine = ("----------------------------------");
        
        System.out.println("Start entering data parsed by [enter]'s");
        System.out.println("Use '/d' to finalize the list");
        int index = 0;
        while (entering){
            System.out.print("[" + (index+1) + "]");
    	    String holder = input.nextLine();
    	    //System.out.println("Captured: '" + holder + "'" + "\n" + divLine);
    	    if (holder.startsWith("/")){
    	        String temp = holder.substring(0,2);
    	        switch (temp){
    	            case "/d" : entering = false;
    	                        System.out.println("/d<> detected\n");
    	                        System.out.println(list.size() + " Items saved");
    	                        System.out.println(divLine);
    	                        
    	        }
    	    }else{
    	        //dataBase[index] = holder;
    	        list.add(holder);
    	        index++;
    	    }
        }
        //String[] temp = new String[list.size()];
        //for (int i = 0; i < temp.length; i++){
        //    temp[i] = list.get(i);
        //}
        return list;
    }
    
    static public void printArray(String[] n){
        System.out.println("Printing Data...");
        for (int i = 0; i < n.length; i++){
	        System.out.println (n[i]);
      } 
    }
    
    static public void printLabel(Label[] n){
        System.out.println("Printing Data... " + n.length);
        //Uncommment to print all labels
        //for (int i = 0; i < n.length; i++){
        int i = 0;
            System.out.println("Printing[" + i + "]");
            System.out.println(n[i].toString());
        //}
    }

*/