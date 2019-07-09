console.log("Working...");


//An array to hold the gifs
let gifs = ["Thor", "Captain America", ""];

// we have to build the url based off of user input (array?) and link...
let searchGifs = function (gif) {
    let queryURL = "http://api.giphy.com/v1/gifs/search?q=" + gif + "&limit=10" + "&api_key=xO21dEI2EXTWHMEZju3HSOteEK4SeMKo";
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response);
        
        let newImage = $("<img>");
        let imageURL = response.data.fixed_height;
        let dataStill = response.data.original_still;
        let rating = response.data.rating;

        newImage.attr("src", imageURL);
        newImage.attr("data-still", dataStill );
        newImage.attr("data-animate", imageURL);
        newImage.attr("data-state", "still");
        newImage.prepend(rating);

        console.log(newImage);

        $("#gifs-view").prepend(newImage);

    });
};



//Function to display the gif buttons up top
function renderButtons() {

    $("#buttons-view").empty();

    for (let i = 0; i < gifs.length; i++) {

        
        let newButton = $("<button>");

        newButton.addClass("gif");

        newButton.attr("data-name", this.val)

        $("#buttons-view").append(newButton);
    }
};

renderButtons();



// Now a function to handle when button is clicked
$("#add-gif").on("click", function (e) {
    //event.preventDefault() , prevents form trying to submit itself.
    //Using a form so user can hit enter insted of clicking
    e.preventDefault();

    // Grab the text from the input box and store in a variable
    //Clearly I am not capture the value correctly--- why? 
    let newGif = $("input").val();

    // Call our button function which should handle creating the buttons
    //for our array
    renderButtons();
    console.log(newGif);

    // var text = $('#DynamicValueAssignedHere').find('input[name="FirstName"]').val();
    // set variable to current gif? 
    searchGifs(newGif);

    // Push that new gif to the array but I'm not getting the damn value for some reason!
    gifs.push(newGif);

    
});


