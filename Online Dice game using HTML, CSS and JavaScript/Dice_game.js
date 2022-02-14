// Mapping random with the dice image with help of a function
function random_Dice_img_fun(player_num)
{
    return "images/Dice_"+player_num+".png";
}

// Player 1 result 
var player_1_image = document.querySelectorAll(".img_dice")[0];
// Generating random numbers for players with Math methods
var randomNum1 = Math.floor(Math.random() * 6) +1;
player_1_image.setAttribute("src",random_Dice_img_fun(randomNum1));

// Player 2 result 
var player_2_image = document.querySelectorAll(".img_dice")[1];
var randomNum2 = Math.floor(Math.random() * 6) +1;
player_2_image.setAttribute("src",random_Dice_img_fun(randomNum2));

// Player 3 result 
var player_3_image = document.querySelectorAll(".img_dice")[2];
var randomNum3 = Math.floor(Math.random() * 6) +1;
player_3_image.setAttribute("src",random_Dice_img_fun(randomNum3));

// Player 4 result 
var player_4_image = document.querySelectorAll(".img_dice")[3];
var randomNum4 = Math.floor(Math.random() * 6) +1;
player_4_image.setAttribute("src",random_Dice_img_fun(randomNum4));

// Function to compare the same player score
function semi_finalist(Num1, Num2)
{
    if (Num1 > Num2)
    {
        return Num1;
    }
    else if(Num2 > Num1)
    {
        return Num2;
    }
    else if(Num1 == Num2)
    {
        return Num1;
    }
}



// Calling semi_finalist function to compare 4 player score
const finalist_1 = semi_finalist(randomNum1, randomNum2);
const finalist_2 = semi_finalist(randomNum3, randomNum4);


// Game logic.
if (finalist_1 > finalist_2)
{
    if (finalist_1 == randomNum1 && finalist_1 != randomNum2)
    {
        document.querySelector("h1").innerHTML = "Player 1 is the winner";
    }
    else if (finalist_1 == randomNum2 && finalist_1 != randomNum1)
    {
        document.querySelector("h1").innerHTML = "Player 2 is the winner";
    }
}

else if (finalist_2 > finalist_1)
{
    if (finalist_2 == randomNum3 && finalist_2 != randomNum4)
    {
        document.querySelector("h1").innerHTML = "Player 3 is the winner";
    }
    else if(finalist_2 == randomNum4 && finalist_2 != randomNum3)
    {
        document.querySelector("h1").innerHTML = "Player 4 is the winner";
    }
}

if (finalist_1 > finalist_2 || finalist_1 == finalist_2)
{
    if (finalist_1 == randomNum1 && finalist_1 == randomNum2)
    {
        document.querySelector("h1").innerHTML = "Draw between Player 1 and Player 2 ";
    }
}


else if (finalist_2 > finalist_1 || finalist_1 == finalist_2)
{
    if (finalist_2 == randomNum3 && finalist_2 == randomNum4)
    {
        document.querySelector("h1").innerHTML = "Draw between Player 3 and Player 4 ";
    }
}

else
{
    document.querySelector("h1").innerHTML =  "Draw";
}