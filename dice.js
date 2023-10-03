// for dice 1
var random_dice_number1=Math.floor((Math.random()*6))+1;
var img_src1="images/dice"+random_dice_number1+".png"
var img1=document.querySelectorAll("img")[0].setAttribute("src",img_src1);


// for dice 2
var random_dice_number2=Math.floor((Math.random()*6))+1;
var img_src2="images/dice"+random_dice_number2+".png"
var img2=document.querySelectorAll("img")[1].setAttribute("src",img_src2);

// for change in heading 
if(random_dice_number1>random_dice_number2){
    document.querySelector(".h1").innerHTML="Congratualation, Player 1 wins 😍💕"

}else if(random_dice_number2>random_dice_number1){
    document.querySelector(".h1").innerHTML="Congratualation, Player 2 wins 😍💕"

}else{
    document.querySelector(".h1").innerHTML="draw, chal chal feri khel😒😒"

}

