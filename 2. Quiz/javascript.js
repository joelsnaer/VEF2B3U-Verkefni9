var teljari = 0;
var rangt = 0;
var rett = 0;
var Spurningar = [
{
spurning: "Hvað er 5 * 5?",
svarmoguleiki: ["5","10","25","30"],
rettSvar: "25"
},
{
  spurning: "Hversu margir cm eru 1 inch",
  svarmoguleiki: ["2.54","3.54","2.63","2.56"],
  rettSvar: "2.54"
},
{
  spurning: "Hvað er 0 Kelvin mikið í celsíus",
  svarmoguleiki: ["273.15°","-273.15°","-239.62°","239.62°"],
  rettSvar: "-273.15°"
},
{
  spurning: "Hvað er 137 * 3",
  svarmoguleiki: ["411","453","394","376"],
  rettSvar: "411"
}
];

//shuffleArray Function
function shuffleArray(array) {
 var m = array.length, t, i;
 // While there remain elements to shuffle…
 while (m) {
 // Pick a remaining element…
 i = Math.floor(Math.random() * m--);
 // And swap it with the current element.
 t = array[m];
 array[m] = array[i];
 array[i] = t;
 }
 return array;
}


//Birt textann

var svarm = document.getElementById("svarmoguleikar");
function prenta() {
    if (teljari >= Spurningar.length) {
      document.getElementById("spurning").innerHTML = "Þú ert búinn með allar spurningarnar";
    }
    else {
      document.getElementById("spurning").innerHTML = Spurningar[teljari].spurning;
      for (i = 0; i < Spurningar[teljari].svarmoguleiki.length; i++) {
      	var svarmoguleikar_li = document.createElement("LI");
      	var svarmoguleikar_texti = document.createTextNode(Spurningar[teljari].svarmoguleiki[i]);
      	svarmoguleikar_li.appendChild(svarmoguleikar_texti);
      	svarm.appendChild(svarmoguleikar_li);
    }
  }
}

function uppfaera() {
   document.getElementById("rett").innerHTML = "Rétt: " + rett;
   document.getElementById("rangt").innerHTML = "Rangt: " + rangt;
}

function eyda() {
  var sml = document.getElementById("svarmoguleikar");
  while (sml.firstChild) {
    sml.removeChild(sml.firstChild);
  }
}

//Kalla í aðferðir
shuffleArray(Spurningar);
prenta();

document.body.addEventListener("click", function(event) {
    if (event.target.nodeName === "LI")
        if (event.target.innerHTML === Spurningar[teljari].rettSvar) {
          rett++;
          uppfaera();
        }
        else {
          rangt++;
          uppfaera()
          ;
        }
        eyda();
        teljari++;
        prenta();
});
