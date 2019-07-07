console.log("Working...");

/*
Ok, so we need to create buttons and add them to the page with the                                                                                                                                                                                 
Then, we need to create function to create gifs and add them to html page

*/

//An array to hold the gifs
let gifs = ["Cat", "Parot"];

// we have to build the url based off of user input (array?) and link...
let searchGifs = function(gif) {
    let queryURL = "http://api.giphy.com/v1/gifs/search?q=" + gif + "&api_key=xO21dEI2EXTWHMEZju3HSOteEK4SeMKo";
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
      console.log(response);
    });
  };



// Now a function to handle when button is clicked
$("#add-gif").on("click", function (e) {
    //event.preventDefault() , prevents form trying to submit itself.
    //Using a form so user can hit enter insted of clicking
    e.preventDefault();

    // Grab the text from the input box and store in a variable
    let newGif  = $("#gif-input").val();

    // set variable to current gif? 
    searchGifs(newGif);

    // Push that new gif to the array but I'm not getting the damn value for some reason!
    gifs.push(newGif);

    console.log(newGif);


    // Url def works with a search value in there and the rest of the URl, checked in browser
    // let queryURL = "http://api.giphy.com/v1/gifs/search?q=" + gif + "&api_key=xO21dEI2EXTWHMEZju3HSOteEK4SeMKo";

   


    // Call our button function which should handle creating the buttons
    //for our array
    renderButtons();


});


//Function to display the gif buttons up top
function renderButtons() {

    // Deleting gif buttons before adding new ones, so they don't repeat
    $("#buttons-view").empty();

    //iterate through the gif array
    // variable is our initialization/counter, next our condition
    // then our update to our counter
    for (let i = 0; i < gifs.length; i++) {

        // Then we generate buttons for each gif in the array.
        let newButton = $("<button>");
        //Then we add a class
        newButton.addClass("gif");
        // Then we add a data-attribute with value set to movie at index i
        newButton.attr("data-name", gif[i]);
        //Providing the button's text with a value of movie at index i
        newButton.text(gif[i]);
        //Adding the button to the HTML
        $("#buttons-view").append(newButton);
    }
};