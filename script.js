const lodzins = document.querySelectorAll('.kartite');

let pagrieztaKartite = false;
let pirmaKartite, otraKartite;
klikski = 0;
function grieztKartiti() {
  this.classList.add('flip');
  
  if (!pagrieztaKartite) {
    pagrieztaKartite = true;
    pirmaKartite = this;
    klikski = klikski+1;
    return;
  }

  otraKartite = this;
  pagrieztaKartite = false;

  checkForMatch();
  console.log(klikski);
}


function checkForMatch() {
  if (pirmaKartite.dataset.framework === otraKartite.dataset.framework) {
    disableCards();
    return;
  }

  unflipCards();
}

function disableCards() {
  pirmaKartite.removeEventListener('click', grieztKartiti);
  otraKartite.removeEventListener('click', grieztKartiti);
}

function unflipCards() {
  setTimeout(() => {
    pirmaKartite.classList.remove('flip');
    otraKartite.classList.remove('flip');
  }, 1000);
}

(function mainitVietu() {
  lodzins.forEach((card) => {
    let randomPosition = Math.floor(Math.random() * 24);
    card.style.order = randomPosition;
  });
})();

lodzins.forEach((card) => card.addEventListener('click', grieztKartiti));

function taimeris() {
  atlicisLaiks = spelesLaiks;
    if (atlicisLaiks > 0) {
      atlicisLaiks = atlicisLaiks - 1;
    }
    if (atlicisLaiks == 0) {
       clearInterval(izpildit);
    }
  };
var laiks = -1;
var s = sekundes.getContext("2d");
s.clearRect(0,0,100,30);
//Teksta parametri
s.font="30px Verdana";
s.textAlign="right";
s.fillStyle="white";
function taimeris() {
  laiks = 6;
    s.clearRect(0,0,100,30);
    s.fillText(laiks,95,28);
  var izpildit = setInterval(function() {
  s.clearRect(0,0,100,30);
    if (laiks > 0) {
      laiks = laiks - 1;
    }
    if (laiks < 6) {
       s.fillStyle="red";
      } s.fillText(laiks,95,28);
    if (laiks==0){
    clearInterval(izpildit);
    punktiKopa = 50-klikski;
    console.log("Beigu rezultāts ir ", punktiKopa);
    s.fillStyle="white";
    alert("Beidzies laiks!\nJa gribi būt topā, spied 'Labi'!\nTavs rezultāts - " + punktiKopa);
    window.location="speletajuTops.html";
  }
  }, 1000);
}
taimeris();
