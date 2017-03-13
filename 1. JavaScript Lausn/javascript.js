document.body.addEventListener("keydown", function(event) {
   if (event.keyCode === 13) { //Ef takkinn er með keyCode 13 sem er ENTER takkinn er gert þetta
    var a = document.getElementById("Mynd");
    var mynd = document.createElement("img");
    mynd.src = "https://thumbs.dreamstime.com/x/snowman-clip-art-isolated-7049645.jpg";
    a.appendChild(mynd);
   }
   else { //Ef það er ýtt á einhvern takka sem er ekki enter takkinn er gert þetta
     alert("Þetta var ekki enter takkinn"); //Alert-að að þetta var ekki enter takinn
   }
 }
);
