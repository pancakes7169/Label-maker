/*eslint-disable*/
function label(n) {
    n = n;
    var p = "Test";
    var t = "";
    var d = "";
    var q = "";
    var v = "";
    
    
    this.formatLabel = function(n){
        var intProfile = document.getElementById("profile").value;
        if (n == null || n == ""){
            n = "a";
        }
        if (true){
            if (intProfile == 0) {//Defalt
                n = n.toUpperCase();
                p = this.extract(n,"PA2C");
                t = this.extract(n,"1T"); 
                if (this.extract(n,"2T").length > 2)
                    t = "1TMULT";
                d = this.extract(n,"9D"); 
                q = this.extract(n,"Q");
                v = this.extract(n,"V");
                
            }//Defalut
            if (intProfile == 1) {//Custom
                n = n.toUpperCase();
                p = this.customExtract(n,this.gV("p"),this.gV("p2"));
                t = this.customExtract(n,this.gV("t"),this.gV("t2"));
                if (use1tMult.checked == true)
                    if (this.customExtract(n,this.gV("2t"),this.gV("2t2")).length > 2){
                        t = "1TMULT";
                        console.log(this.customExtract(n,this.gV("2t"),this.gV("2t2"));
                    }
                d = this.customExtract(n,this.gV("d"),this.gV("d2"));
                    if (this.customExtract(n,this.gV("2d"),this.gV("2d2")).length > 2)
                        d = "9DMULT";
                q = this.customExtract(n,this.gV("q"),this.gV("q2"));
                v = this.customExtract(n,this.gV("v"),this.gV("v2"));
                if (document.getElementById("copy1t9d").checked)
                        if(t == "" && d != "")
                            t = d
                        if(d == "" && t != "")
                            d = t
            }//Custom
            if (intProfile == 2) {//Bortech
                
            }//Bortech
            if (intProfile == 3) {//Dynamic
                n = n.toUpperCase();
                p = extract(n,"PA2C");
                t = extract(n,"1T");
                d = extract(n,"6D"); 
                q = extract(n,"Q");
                v = extract(n,"V");      
            }//Dynamic
            if (intProfile == 4) {
                    
            }//Null
        }
        this.fixLabel();
        
    };
    //Fix Lables
    //-------------------------------------------------------------------------
    this.fixLabel       = function(){
        this.correctPrefix();
        p = this.correctPartNum(p);
        t = this.correctLot(t);
        q = this.correctQuantiy(q);
        
        
    }
    
    this.correctPrefix  = function(){
        if(!p.startsWith("P")  && p != "") p = "P" + p;
        if(!t.startsWith("1T") && t != "") t = "1T" + t;
        if(!d.startsWith("9D") && d != "") d = "9D" + d;
        if(!q.startsWith("Q")  && q != "") q = "Q" + q;
        if(!v.startsWith("V")  && v != "") v = "V" + v;
    }
    
    this.correctPartNum = function(n){
        if (n.length == 0){
            return n;
        }
        var num = 13-n.length;
        if (n.length < 13){
            for (var i = 0; i < num; i++){
                n = n + "0";
            }
        }
        return n;
    };
    
    this.correctLot     = function(n){
        if (n.length > 17){
            return n.substr(0,17);
        }
        return n;
    }
    
    this.correctQuantiy = function(n){
       if (this.findNonNum(n) != -1){
            return n.substring(0,this.findNonNum(n));
        }
        return n;

    };
    
    this.findNonNum = function(n){
        for (var i = 2; i<n.length; i++){
            if (isNaN(n.charAt(i))){//Is not a number
                return i;
            }
        }
        return -1;
    };
    
    //Data extraction methods
    //-------------------------------------------------------------------------
    //Get Value
    this.gV = function(n){
        return document.getElementById(n).value
    }
    
    this.extract = function(n,pram){
        if (!n.includes(pram)) {return "";}
        var index1 = n.indexOf("@" + pram) + 1;
        var index2 = n.indexOf("@",index1+1);
        if (index1 != -1 && index2 != -1)
            return n.substring(index1,index2);
        return "";

    };
    
    this.customExtract = function(n,pram1,pram2){
        if (!n.includes(pram1)) {return "";}
        var index1 = n.indexOf(pram1) + pram1.length;
        var index2 = n.indexOf(pram2,index1+1);
        if (index1 != -1 && index2 != -1)
            return n.substring(index1,index2);
        return "";

    };
    //-------------------------------------------------------------------------
    
    this.toStringC = function(){
        var a1 = "-------------------------------";
        var b1 = "\nP:  " + p;
        var c1 = "\n1T: " + t;
        var d1 = "\n9D: " + d;
        var e1 = "\nQ:  " + q;
        var f1 = "\nV:  " + v;
        return (a1 + b1 + c1 + d1 + e1 + f1 + "");
    };
    
    this.checkForNull = function(){
        if (p === "" && t === "" && d === "" && q === "" && v === "")
            return true;
        return false;
        
    };
    
    this.cutFront = function(n,i){
        if (n.length >= i)
            return n.substring(i,n.length);
        return n;
    };
    
    this.formatZPL = function(u,index){
        var a = [13];
        //a[0] is the bottom right of the label
        a[0]  = "^XA\n^FO20,770^AQR36,20^FD"; //[" + (index+1) + "]";
    	a[1]  = "^FS\n^FO400,60^AQR36,20^FD(P) PART NO  " +this.cutFront(p,1); 
    	a[2]  = "^FS\n^FO345,60^BY2,3.0,10^BCR,55,N,N,N^FDP" +this.cutFront(p,1); 
    	a[3]  = "^FS\n^FO400,540^AQR36,20^FD(Q) QUANTITY  " +this.cutFront(q,1); 
    	a[4]  = "^FS\n^FO345,540^BY2,3.0,10^BCR,55,N,N,N^FDQ" +this.cutFront(q,1); 
    	a[5]  = "^FS\n^FO300,60^AQR36,20^FD(1T) LOT NO  " +this.cutFront(t,2); 
    	a[6]  = "^FS\n^FO245,60^BY2,3.0,10^BCR,55,N,N,N^FD1T" +this.cutFront(t,2);
    	a[7]  = "^FS\n^FO200,60^AQR36,20^FD(9D) LOT DATE  " +this.cutFront(d,2); 
        a[8]  = "^FS\n^FO145,60^BY2,3.0,10^BCR,55,N,N,N^FD9D" +this.cutFront(d,2); 
    	a[9]  = "^FS\n^FO300,540^AQR36,20^FD(V) SUPPLIER  " +this.cutFront(v,1); 
        a[10] = "^FS\n^FO245,540^BY2,3.0,10^BCR,55,N,N,N^FDV" +this.cutFront(v,1); 
    	a[11] = "^FS\n^FO200,550^AQR36,20^FDUSER  " +  u + " " + (index+1); 
    	a[12] = "^FS\n^XZ";
        var r = "";
        for (var i = 0; i < a.length; i++){
            r = r + a[i];
        }
        return r;

    };
    
    this.setP = function(n) { p = n.toUpperCase(); };
    this.setT = function(n) { t = n.toUpperCase(); };
    this.setD = function(n) { d = n.toUpperCase(); };
    this.setQ = function(n) { q = n.toUpperCase(); };
    this.setV = function(n) { v = n.toUpperCase(); };

    this.getP = function() { return p; };
    this.getT = function() { return t; };
    this.getD = function() { return d; };
    this.getQ = function() { return q; };
    this.getV = function() { return v; };
    
    this.formatLabel(n);
} 
