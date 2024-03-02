// Set size
const c = document.getElementById("planets");
const ctx = c.getContext("2d");
ctx.canvas.width  = window.innerWidth*0.8;
ctx.canvas.height = window.innerHeight*0.9/1.5;
window.addEventListener('resize', () => {
    ctx.canvas.width  = window.innerWidth*0.8;
    ctx.canvas.height = window.innerHeight*0.8/1.5;
    drawBackground();
});
// Create Sun Image
const sun = new Image();
sun.src = "./assets/Solar_System_Sounds_Logo.png";
// Background
function drawBackground(){
    // Create gradient
    const grd = ctx.createRadialGradient(c.width/2, c.height/2, 10, c.width/2, c.height/2, (c.width+c.height)/4);
    grd.addColorStop(0, "#18122B");
    grd.addColorStop(1, "#0A1931");
    // Fill with gradient
    ctx.fillStyle = grd;
    ctx.fillRect(0, 0, c.width, c.height);
    // Stars
    for (var i = 0; i < 80; i++) {
        var x = Math.floor(Math.random()*c.width+1);
        var y = Math.floor(Math.random()*c.height+1);
        ctx.fillStyle = 'white';
        ctx.fillRect(x, y, 1, 1);
    }
    ctx.lineWidth = 0.05;
    ctx.strokeStyle = "grey";
    // Orbits
    for(var i = 0; i < 8; i++){
        ctx.beginPath();
        ctx.arc(c.width/2, c.height/2, ((c.height<c.width ? c.height:c.width)*.06*(i+1)) + (i<4 ? 0:i) , 0, 2 * Math.PI);
        ctx.stroke();
    }
    // Place Sun
    sideSun = Math.round((ctx.canvas.height<ctx.canvas.width ? ctx.canvas.height:ctx.canvas.width)*0.08*10)/10;
    ctx.drawImage(sun, (ctx.canvas.width/2) - (sideSun/2), (ctx.canvas.height/2) - (sideSun/2), sideSun, sideSun);
    // 8 Lines
    /*var xy = [[0,0],[c.width/2,0],[0,c.height/2],[0,c.height]];
    ctx.lineWidth = 0.75;
    ctx.strokeStyle = "black";
    for(var i = 0; i < 4; i++){
        // Start a new Path
        ctx.beginPath();
        ctx.moveTo(xy[i][0], xy[i][1]);
        ctx.lineTo((c.width-xy[i][0]), (c.height-xy[i][1]));
        // Draw the Path
        ctx.stroke();
    }*/
}
drawBackground();

