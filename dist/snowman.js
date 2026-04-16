// Size of a single snowflake
const flakeSize = 8;

window.addEventListener("DOMContentLoaded", function() {
   let canvas = document.querySelector("canvas");

   drawGround(canvas);
   drawSnowText(canvas);
   drawSnowman(canvas);
   drawSnowflakes(canvas);
});

function drawGround(canvas) {
   let context = canvas.getContext("2d");

   // Background
   context.fillStyle = "#bbb";
   context.fillRect(0, 0, canvas.width, canvas.height);

   // Ground
   context.fillStyle = "brown";
   context.fillRect(0, canvas.height - 80, canvas.width, canvas.height);
}

function drawSnowflakes(canvas) {
   for (let c = 0; c < 100; c++) {
      let x = Math.floor(Math.random() * canvas.width);
      let y = Math.floor(Math.random() * canvas.height);
      drawSingleFlake(canvas, x, y);
   }
}

function drawSnowText(canvas) {
   // TODO: Complete the function
   let context = canvas.getContext("2d");
   
   context.font = "80px Verdana";
   context.textBaseline = "top";
   context.textAlign = "center";
   context.lineWidth = 4;
   context.strokeStyle = "white";
   context.strokeText("SNOW", canvas.width / 2, 10);
   context.fillStyle = "blue";
   context.fillText("SNOW", canvas.width / 2, 10);

}

function drawSnowman(canvas) {
   // TODO: Complete the function
   let context = canvas.getContext("2d");

   /* Bottom Circle */
   context.beginPath();
   context.arc(150, 200, 50, 0, Math.PI * 2);
   context.fillStyle = "white";
   context.fill();

   /* Middle Circle */
   context.beginPath();
   context.arc(150, 120, 40, 0, Math.PI * 2);
   context.fill();

   /* Top Circle */
   context.beginPath();
   context.arc(150, 60, 25, 0, Math.PI * 2);
   context.fill();

   /* Left Eye */
   context.beginPath();
   context.arc(140, 55, 3, 0, Math.PI * 2);
   context.fillStyle = "black";
   context.fill();

   /* Right Eye */
   context.beginPath();
   context.arc(160, 55, 3, 0, Math.PI * 2);
   context.fill();

   /* Nose */
   context.beginPath();
   context.moveTo(150, 60); 
   context.lineTo(170, 65);      
   context.lineTo(150, 70);      
   context.fillStyle = "orange";
   context.fill();

   /* Buttons down the middle */
   context.fillStyle = "black";
   context.beginPath();
   context.arc(150, 100, 4, 0, Math.PI * 2);
   context.arc(150, 120, 4, 0, Math.PI * 2); 
   context.arc(150, 140, 4, 0, Math.PI * 2); 
   context.fill();

   /* Arms */
   context.strokeStyle = "#663300";
   context.lineWidth = 3;

   /* Left Arm */
   context.beginPath();
   context.moveTo(110, 120); 
   context.lineTo(70, 90);   
   context.stroke();

   /* Right Arm */
   context.beginPath();
   context.moveTo(190, 120);
   context.lineTo(230, 90);
   context.stroke();

}

function drawSingleFlake(canvas, x, y) {
   // TODO: Complete the function
   let context = canvas.getContext("2d");

   context.beginPath();
   context.moveTo(x, y);                                
   context.lineTo(x + flakeSize / 2, y + flakeSize / 2);
   context.lineTo(x, y + flakeSize);                     
   context.lineTo(x - flakeSize / 2, y + flakeSize / 2); 

   context.fillStyle = "#eee";
   context.fill();

}