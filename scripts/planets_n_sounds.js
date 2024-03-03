const pi = Math.PI;
const notes = [
  [16.35, 32.70, 65.41, 130.8, 261.6, 523.3, 1047, 2093, 4186], // C_n (Mercury)
  [18.35, 36.71, 73.42, 146.8, 293.7, 587.3, 1175, 2349, 4699], // D_n (Venus)
  [20.60, 41.20, 82.41, 164.8, 329.6, 659.3, 1319, 2637, 5274], // E_n (Earth)
  [21.83, 43.65, 87.31, 174.6, 349.2, 698.5, 1397, 2794, 5588], // F_n (Mars)
  [24.50, 49.00, 98.00, 196.0, 392.0, 784.0, 1568, 3136, 6272], // G_n (Jupiter)
  [27.50, 55.00, 110.0, 220.0, 440.0, 880.0, 1760, 3520, 7040], // A_n (Saturn)
  [30.87, 61.74, 123.5, 246.9, 493.9, 987.8, 1976, 3951, 7902], // B_n (Uranus)
  [32.70, 65.41, 130.8, 261.6, 523.3, 1047, 2093, 4186, 16.35] // C_n+1 (Neptune)
]
const planetsId = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"];
const planetsImg = ["./assets/planets/Mercury.png", "./assets/planets/Venus.png", "./assets/planets/Earth.png", "./assets/planets/Mars.png", "./assets/planets/Jupiter.png", "./assets/planets/Saturn.png", "./assets/planets/Uranus.png", "./assets/planets/Neptune.png"];
const planetsSize = [0.02, 0.025, 0.03, 0.03, 0.055, 0.055, 0.04, 0.04];
const today = new Date();
const formatedToday = today.getFullYear() + '-' + (today.getMonth() < 9 ? '0' + (today.getMonth() + 1) : (today.getMonth() + 1)) + '-' + (today.getDate() < 10 ? '0' + today.getDate() : today.getDate());
let planetsData;
$.ajax({
  type: "Get",
  url: "./assets/data/2024_planets_octants.json",
  dataType: "json",
  success: function(data) {
    planetsData = data;
    for (var i = 0; i < planetsId.length; i++) {
      document.getElementById(planetsId[i]).innerHTML = notes[i][planetsData[formatedToday][i]] + " Hz";
    }
    const c = document.getElementById("planets");
    const ctx = c.getContext("2d");
    width = ctx.canvas.width;
    height = ctx.canvas.height;
    for (var i = 0; i < planetsId.length; i++) {
      const img = new Image();
      img.src = planetsImg[i];
      x = ((height < width ? height : width) * .06 * (i + 1)) + (i < 4 ? 0 : i);
      y = 0;
      x_ = (x * Math.cos(-20 * (pi / 180) + (planetsData[formatedToday][i] * -40 * (pi / 180)))) - (y * Math.sin(-20 * (pi / 180) + (planetsData[formatedToday][i] * -40 * (pi / 180)))) + width / 2;
      y_ = (y * Math.cos(-20 * (pi / 180) + (planetsData[formatedToday][i] * -40 * (pi / 180)))) + (x * Math.sin(-20 * (pi / 180) + (planetsData[formatedToday][i] * -40 * (pi / 180)))) + height / 2;
      sidePlanet = Math.round((ctx.canvas.height < ctx.canvas.width ? ctx.canvas.height : ctx.canvas.width) * planetsSize[i] * 10) / 10;
      if (i != 5) {
         ctx.drawImage(img, x_ - (sidePlanet / 2), y_ - (sidePlanet / 2), sidePlanet, sidePlanet);
      } else {
         ctx.drawImage(img, x_ - (sidePlanet * 0.75), y_ - (sidePlanet / 2), sidePlanet * 1.5, sidePlanet);
      }
    }
    document.dispatchEvent(new Event("loadedJSON"));
  },
  error: function() {
    console.log("json not found");
  }
});

function drawPlanet(i){
  
  const img = new Image();
    img.src = planetsImg[i];
      if (i != 5) {
         console.log("Position: (" + x + ", " + y + ") - Side:" + sidePlanet + " - Image: " + img);
         img.onload = function(){
          const c = document.getElementById("planets");
  const ctx = c.getContext("2d");
  width = ctx.canvas.width;
  height = ctx.canvas.height;
    x = ((height < width ? height : width) * .06 * (i + 1)) + (i < 4 ? 0 : i);
    y = 0;
    x_ = (x * Math.cos(-20 * (pi / 180) + (planetsData[formatedToday][i] * -40 * (pi / 180)))) - (y * Math.sin(-20 * (pi / 180) + (planetsData[formatedToday][i] * -40 * (pi / 180)))) + width / 2;
    y_ = (y * Math.cos(-20 * (pi / 180) + (planetsData[formatedToday][i] * -40 * (pi / 180)))) + (x * Math.sin(-20 * (pi / 180) + (planetsData[formatedToday][i] * -40 * (pi / 180)))) + height / 2;
    sidePlanet = Math.round((ctx.canvas.height < ctx.canvas.width ? ctx.canvas.height : ctx.canvas.width) * planetsSize[i] * 10) / 10;

            console.log("Image: " + img + " - Image source: " + img.src);
            ctx.drawImage(img, x_ - (sidePlanet / 2), y_ - (sidePlanet / 2), sidePlanet, sidePlanet);}
      } else {
         console.log("Position: (" + x + ", " + y + ") - Side:" + sidePlanet + " - Image: " + img);
         img.onload = function(){
          const c = document.getElementById("planets");
  const ctx = c.getContext("2d");
  width = ctx.canvas.width;
  height = ctx.canvas.height;
    x = ((height < width ? height : width) * .06 * (i + 1)) + (i < 4 ? 0 : i);
    y = 0;
    x_ = (x * Math.cos(-20 * (pi / 180) + (planetsData[formatedToday][i] * -40 * (pi / 180)))) - (y * Math.sin(-20 * (pi / 180) + (planetsData[formatedToday][i] * -40 * (pi / 180)))) + width / 2;
    y_ = (y * Math.cos(-20 * (pi / 180) + (planetsData[formatedToday][i] * -40 * (pi / 180)))) + (x * Math.sin(-20 * (pi / 180) + (planetsData[formatedToday][i] * -40 * (pi / 180)))) + height / 2;
    sidePlanet = Math.round((ctx.canvas.height < ctx.canvas.width ? ctx.canvas.height : ctx.canvas.width) * planetsSize[i] * 10) / 10;

            console.log("Image: " + img + " - Image source: " + img.src);
            ctx.drawImage(img, x_ - (sidePlanet * 0.75), y_ - (sidePlanet / 2), sidePlanet * 1.5, sidePlanet);}
      }
    console.log("Resize: (" + x_ + ", " + y_ + ")");
}
window.addEventListener('planet_resize', () => {
   drawPlanet(0);
   drawPlanet(1);
   drawPlanet(2);
   drawPlanet(3);
   drawPlanet(4);
   drawPlanet(5);
   drawPlanet(6);
   drawPlanet(7);
});
var context = new AudioContext();
var o = null;
var g = null;

function playNote(frequency, type) {
  setTimeout(function() {
    o = context.createOscillator();
    g = context.createGain();
    o.type = type;
    o.connect(g);
    o.frequency.value = frequency;
    g.connect(context.destination);
    o.start(0);
    g.gain.exponentialRampToValueAtTime(0.00001, context.currentTime + 1);
  }, 100)
}

function playPlanet(planetIdx) {
  playNote(notes[planetIdx][planetsData[formatedToday][planetIdx]], 'sine');
}

function playAllPlanets() {
  const notesToday = [
    notes[0][planetsData[formatedToday][0]],
    notes[1][planetsData[formatedToday][1]],
    notes[2][planetsData[formatedToday][2]],
    notes[3][planetsData[formatedToday][3]],
    notes[4][planetsData[formatedToday][4]],
    notes[5][planetsData[formatedToday][5]],
    notes[6][planetsData[formatedToday][6]],
    notes[7][planetsData[formatedToday][7]]
  ]
  noteDifferences = []
  for (var i = 0; i < notesToday.length; i++) {
    for (var j = 0; j < notesToday.length; j++) {
      if (i != j) {
        noteDifferences.push(Math.abs(notesToday[i] - notesToday[j]));
      }
    }
  }
  averageNote = (noteDifferences.reduce((a, b) => a + b, 0) / noteDifferences.length) || 0;
  playNote(averageNote, 'sine'); // Play combination tone (average difference between tones)
}
