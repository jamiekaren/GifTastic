console.log("Working...");


//An array to hold the gifs
let gifs = ["Thor", "Captain America",];


// we have to build the url based off of user input (array?) and link...
function searchGifs(gif) {
    let queryURL = "https://api.giphy.com/v1/gifs/search?q=" + gif + "&limit=10" + "&api_key=xO21dEI2EXTWHMEZju3HSOteEK4SeMKo";
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {

        //store data into variable 
        let data_array = response.data;

        // //check what data we are getting back
        // console.log(data_array);

        //iteriate through each object in array to create images
        data_array.forEach(function (entry) {

            let newImage = $("<img>");
            let imageURL = entry.images.fixed_height.url;
            let dataStill = entry.images.original_still.url;
            let rating = entry.rating;
            //check rating output - it's working
            // console.log(rating);

            newImage.attr("src", dataStill);

            newImage.attr("data-state", "still");
            newImage.attr("data-still", dataStill);
            newImage.attr("data-animate", imageURL);
            newImage.attr("data-rating", rating);

            //It doesn't look pretty but it works
            $("#gifs-view").prepend(newImage).prepend("<h2>" + rating);
            renderButtons();

        }); //array iteration ends here

        // try to add your renderButtons() after it
    });
};

//to test out gifs
searchGifs("Hawkeye");


// //Function to display the gif buttons up top
// function renderButtons() {

//     $("#buttons-view").empty();

//     gifs.forEach(function (entry) {

//         let newButton = $("<button>");
//         newButton.addClass("gif");

//         console.log(newButton);

//         newButton.attr("data-name", entry.val);
//         newButton.text(entry.val);
//         $("#buttons-view").append(newButton);

//         //to generate buttons I already have
//         renderButtons();

//     });

// };

function renderButtons() {

    // Deleting the gifs prior to adding new movies
    // (this is necessary otherwise we will have repeat buttons)
    $("#buttons-view").empty();

    // Looping through the array 
    for (let i = 0; i < gifs.length; i++) {

        // Then dynamicaly generating buttons for each movie in the array
        // This code $("<button>") is all jQuery needs to create the start and end tag. (<button></button>)
        let a = $("<button>");

        //add a class
        a.attr("id", "gButton");
        // Adding a data-attribute
        a.attr("data-name", gifs[i]);
        // Providing the initial button text
        a.text(gifs[i]);
        // Adding the button to the HTML
        $("#buttons-view").append(a);

    }
}

// //make buttons we have already
renderButtons();


$("#gButton").click(function () {
    bGif = $(this).attr("data-name");

    //Let's console log our data name
    console.log("This is data name on button click" + bGif);

    searchGifs(bGif);
});


// Now an on-click function to handle when button is clicked
$("#gif-movie").click(function (event) {
    event.preventDefault()
    // prevents form trying to submit itself.
    console.log("These are your current gif array"+ gifs);

    let newGif = $("gif-input").val();
    console.log("Let's console our value from input" + newGif);

    gifs.push(newGif);

    // Call our button function which should handle creating the buttons
    //for our array
    renderButtons();


    // Now also call our APAX function so that we make the new gifs append to the page
    searchGifs(newGif);

});




