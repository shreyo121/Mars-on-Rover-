canvas= document.getElementById("myCanvas");
ctx= canvas.getContext("2d");
rover_width=100;
rover_height=100;
backgroundimage="mars.jpg";
roverimage="rover.png";
roverxposition=50;
roverypostition=50;
function add(){
    background_imgtag=new Image();
background_imgtag.onload=uploadbackground;
background_imgtag.src=backgroundimage;
rover_imgtag=new Image();
rover_imgtag.onload=uploadroverimage;
rover_imgtag.src=roverimage;
}
function uploadbackground(){
ctx.drawImage(background_imgtag,0,0,1000,800)
}
function uploadroverimage(){
ctx.drawImage(rover_imgtag,roverxposition,roverypostition,100,200)
}
