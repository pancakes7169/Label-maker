/*eslint-disable*/ 
var users = [
  [1,"13050","Bailey Hubbard"],
  [1,"99999","Defalut"],
  [-1,"",""],
  [-1,"1st Shift",""],
  [2,"12507","Mundo Molina Jr"],
  [-1,"A-Shift",""],
  [2,"13200","Timothy Laferriere"],
  [-1,"",""],
  [-1,"B-Shift",""],
  [2,"12052","Juliant Martinez"],
  [-1,"",""],
  [-1,"C-Shift",""],
  [-1,"",""],
  [-1,"D-Shift",""],
  [2,"13015","Dominic Potter"]
];

function checkBage(n){
    for (var i = 0; i < users.length; i++){
        if (-1 != users[i][0]){
           if (n == users[i][1]){
               switch (users[i][0]){
                   case 0 : document.getElementById('status').innerHTML = "User: " +            users[i][2] + " found but login has been blocked by the              system"; break;
                   case 1 : localStorage.setItem("bageNum" , users[i][1]);
                            localStorage.setItem("user"    , users[i][2]);
            
                            window.open("home.html", "_self"); 
                            i = users.length; break;
                   case 2 : document.getElementById('status').innerHTML = "User: " +            users[i][2] + " found but login block because the system is          in Alpha testing"; break;
               }
            }
        }else{
            document.getElementById('status').innerHTML = "Invalid Login!!";
        }
    }
} 