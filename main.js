canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
car1_width=120;
car1_height=70;
car1_image="car1.png";
car1_x=10;
car1_y=10;
car2_width=120;
car2_height=70;
car2_image="car2.png";
car2_x=10;
car2_y=100;
background_image="racing.jpg";
function add(){
    background_image_tag= new Image();
    background_image_tag.onload=uploadbackground;
    background_image_tag.src=background_image;
    car1_image_tag= new Image();
    car1_image_tag.onload=uploadcar1;
    car1_image_tag.src=car1_image;
    car2_image_tag= new Image();
    car2_image_tag.onload=uploadcar2;
    car2_image_tag.src=car2_image;
}
function uploadbackground(){
    ctx.drawImage(background_image_tag,0,0,canvas.width,canvas.height);
}
function uploadcar1(){
    ctx.drawImage(car1_image_tag,car1_x,car1_y,car1_width,car1_height);
}
function uploadcar2(){
    ctx.drawImage(car2_image_tag,car2_x,car2_y,car2_width,car2_height);
}
window.addEventListener("keydown",my_keydown);
function my_keydown(e){
    keyPressed=e.keyCode;
    console.log(keyPressed);
    if(keyPressed=="38"){
        car1_up();
        console.log("up");
    }
    if(keyPressed=="40"){
        car1_down();
        console.log("down");
    }
    if(keyPressed=="37"){
        car1_left();
        console.log("left");
    }
    if(keyPressed=="39"){
        car1_right();
        console.log("right");
    }
    if(keyPressed=="87"){
        car2_up();
        console.log("w");
    }
    if(keyPressed=="83"){
        car2_down();
        console.log("s");
    }
    if(keyPressed=="65"){
        car2_left();
        console.log("a");
    }
    if(keyPressed=="68"){
        car2_right();
        console.log("d");}
    if(car1_x>600){
        console.log("Car1 WINS!!!")
        document.getElementById('game-status').innerHTML= "Car 1 Wins!!!!!!!!!!!"}
    if(car2_x>600){
        console.log("Car2 WINS!!!")
        document.getElementById('game-status').innerHTML= "Car 2 Wins!!!!!!!!!!!"
        }
    } 
function car1_up(){
    if (car1_y>=0){
        car1_y=car1_y-5;
        console.log("when up arrow is pressed "+car1_x+"-"+car1_y);
        uploadbackground();
        uploadcar1();
        uploadcar2();
    }
}
function car1_down(){
    if (car1_y<=530){
        car1_y=car1_y+5;
        console.log("when down arrow is pressed "+car1_x+"-"+car1_y);
        uploadbackground();
        uploadcar1();
        uploadcar2();
    }
}
function car1_left(){
    if(car1_x>=0){
        car1_x=car1_x-5;
        console.log("when left arrow is pressed "+car1_x+"-"+car1_y);
        uploadbackground();
        uploadcar1();
        uploadcar2();
    }
}
function car1_right(){
    if(car1_x<=680){
        car1_x=car1_x+5;
        console.log("when right arrow is pressed "+car1_x+"-"+car1_y);
        uploadbackground();
        uploadcar1();
        uploadcar2();
    }
}
function car2_up(){
    if (car2_y>=0){
        car2_y=car2_y-5;
        console.log("when up w is pressed "+car2_x+"-"+car2_y);
        uploadbackground();
        uploadcar2();
        uploadcar1();
    }
}
function car2_down(){
    if (car2_y<=530){
        car2_y=car2_y+5;
        console.log("when s arrow is pressed "+car2_x+"-"+car2_y);
        uploadbackground();
        uploadcar2();
        uploadcar1();
    }
}
function car2_left(){
    if(car2_x>=0){
        car2_x=car2_x-5;
        console.log("when left arrow is pressed "+car2_x+"-"+car2_y);
        uploadbackground();
        uploadcar2();
        uploadcar1();
    }
}
function car2_right(){
    if(car2_x<=680){
        car2_x=car2_x+5;
        console.log("when d arrow is pressed "+car2_x+"-"+car2_y);
        uploadbackground();
        uploadcar2();
        uploadcar1();
    }
}

