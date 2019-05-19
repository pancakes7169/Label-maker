/*eslint-disable*/ 
var users = [
  [13050,"Bailey Hubbard"],
  [99999,"Defalut"]
];

function checkBage(n){
    for (var i = 0; i < users.length; i++){
        if (n == users[i][0]){
            localStorage.setItem("bageNum" , users[i][0]);
            localStorage.setItem("user"    , users[i][1]);
            
            window.open("home.html", "_self"); 
            i = users.length;
        }else{
            document.getElementById('status').innerHTML = "Invalid Login!!"
        }
    }
} 