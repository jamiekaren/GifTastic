console.log("Working...");


//An array to hold the gifs
let gifs = ["Thor", "Captain America", ""];


// we have to build the url based off of user input (array?) and link...
function searchGifs(gif) {
    let queryURL = "https://api.giphy.com/v1/gifs/search?q=" + gif + "&limit=10" + "&api_key=xO21dEI2EXTWHMEZju3HSOteEK4SeMKo";
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {

        //store data into variable 
        let data_array = response.data;

        //check what data we are getting back
        console.log(data_array);

        //iteriate through each object in array to create images
        data_array.forEach(function (entry) {

            let newImage = $("<img>");
            let imageURL = entry.images.fixed_height.url;
            let dataStill = entry.images.original_still.url;
            let rating = entry.rating;
            //check rating output - it's working
            console.log(rating);

            newImage.attr("src", dataStill);

            newImage.attr("data-state", "still");
            newImage.attr("data-still", dataStill);
            newImage.attr("data-animate", imageURL);
            newImage.attr("data-rating", rating);

            $("#gifs-view").prepend(newImage).prepend("<h2>" + rating);

        });
    });
};


searchGifs("Hawkeye");



//Function to display the gif buttons up top
function renderButtons() {

    $("#buttons-view").empty();

    gifs.forEach(function () {

        let newButton = $("<button>");

        newButton.addClass("gif");

        newButton.attr("data-name", this.val);

        $("#buttons-view").append(newButton);

        renderButtons();
        

    });

    renderButtons();



    // // Now an on-click function to handle when button is clicked
    // $("#add-gif").on("click", function (e) {
    //     //event.preventDefault() , prevents form trying to submit itself.
    //     //Using a form so user can hit enter insted of clicking
    //     e.preventDefault();

    //     // Grab the text from the input box and store in a variable
    //     //Clearly I am not capture the value correctly--- why? 
    //     let newGif = $("input").val();

    //     gifs.push(newGif);

    //     // Call our button function which should handle creating the buttons
    //     //for our array
    //     renderButtons();
    //     console.log(newGif);

    //     // Now also call our APAX function so that we make the new gifs append to the page
    //     searchGifs(newGif);

    // });

};


