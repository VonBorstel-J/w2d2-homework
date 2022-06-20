   /* --------PARTNERS---------- */ 

//Creating a script for the partners images to be pulled from 
function partnersGallery() {
        
    var photos = []; //Declaring an empty array to store image element 
    var fileNames = []; //Declaring an empty element to store image file names 
    var imageList = []; //Declare an emplty array to store html list that contain an image
    var image; //Declaring an empty variable to store the assembled image list codes
    var openList = "<li class='partner'>"; //Picking the variable to conatin open list tag
    var closeList = "</li>"; //Picking the variable to close the list tag


//Create a loop to create 6 images starting with index of 0 

for(var i=0; i<6; i++) {
    fileNames.push("partner"+(i+1)); //Creating an image file name and store in the array
    photos.push("<img src=images/"+fileNames[i]+".png>"); //Assemble file name into image element and store in an array 
    image = openList + photos[i] + closeList; //Assemble image element from array with list elements and store in a variable
    imageList.push(image); //Store(push) the assembled list codes into an array
    
}

//Display all six image codes stored in the array 
document.getElementById("part").innerHTML = imageList;
}
    partnersGallery();

//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//

// Submit button Scripts 

// Function to generate combination of characters 
function generateCode(){
    // Time to create variables to store the generated codes 
        var code = ' ';  // This will create and empty value that we can fill with the randomly generated code 
        var getCode = ' '; //to store the entered code by the user 
        var btnvalue; // this is for button boolean values 
        var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$';
    
    
    //Generate character multiple times using a loop 
        for (i= 1; i <= 8; i++){
            var char = Math.random()* str.length; //this code will randomly select a character from the variable str then store it in a new variable
            code+=str.charAt(char)  //now it'll take 8 accumulated new variables and store it in char
        }
        return code; //now itll output the full string of random characters 
    }
    
    
    //This pulls everything and puts in into the HTML 
    
    document.getElementById("codes").innerHTML = generateCode(); 
    
    //This code will determine whether to disable to enable the button 
    function disableButton(btnvalue)  {
        document.getElementById("button").disabled = btnvalue; // this is the code that will enable or disable 
        if (btnvalue == true) {//testing if button is disabled or enabled 
           //set button and label color translucent 
        document.getElementById("button").style.backgroundColor = "rgba(73, 119, 209, 0.3)";
        document.getElementById("button").style.color = "rgba(255, 255, 255, 0.5)";
        } else { 
            //set button andlabel color with no transparency  
            document.getElementById("button").style.backgroundColor = "rgba(73, 119, 209, 1)";
            document.getElementById("button").style.color = "rgba(255, 255, 255, 1)";
        }
    }
    
    //listen to user input code 
    var codebox = document.getElementById("codeentered"); //get the input from the textbox 
    codebox.addEventListener("input", evaluateCode); //listen to code entered in the textbox
    
    //run function if detected user had entered a character in textbox 
    function evaluateCode() { 
        getCode = document.getElementById("codeentered").ariaValueMax; //get character entered 
        var charset1 = getCode.trim(); // this will remove any hidden characters entered 
        var charset2 = code.trim(); //remove any hidden characters generated 
        //well see if this code matches the number of generated characters 
        if (charset1.length == charset2.length && charset1 == charset2) {
            disableButton(false); //if matched, run the function to enable button 
        }
    }
    
    
    //Activate function 


//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------//

// Activity page scripts

$(document).ready(function() {
    $('td').css('cursor', 'pointer');
    $("td").click(function() {
        var content = $(this).text(); 
        if (content != "Not Available"){ 
            $(this).toggleClass("tdhighlight");
            }
        });
    });
    
    //Stuck........ Losttttt........ 
    /*$(document).ready(function() {
        var trText = 'doot doot'
        $('#activityModal').modal( {
            keyboard: true,
            backdrop: "static",
            show:false,
            $('#activityText').bind('click', function(){ 
                $(this).toggleClass('blue');
            });
    });
 });*/
