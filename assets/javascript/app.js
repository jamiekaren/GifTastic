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
            newImage.attr("class", "gif");
            newImage.attr("data-state", "still");
            newImage.attr("data-still", dataStill);
            newImage.attr("data-animate", imageURL);
            newImage.attr("data-rating", rating);

            //It doesn't look pretty but it works
            $("#gifs-view").prepend(newImage).prepend("<h2>" + rating);

        }); //array iteration ends here

        // try to add your renderButtons() after it

    });
};

// //to test out gifs
// searchGifs("Hawkeye");


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

    // // Deleting the gifs prior to adding new movies
    $("#buttons-view").empty();

    // Looping through the array 
    for (let i = 0; i < gifs.length; i++) {

        // $("#dynbtn" + i).remove();

        // $("#buttons-view").remove("dynbtn" + i);
        // Then dynamicaly generating buttons for each movie in the array
        let button = $("<button>");
        // Add an id
        button.attr('id', 'dynbtn' + i);
        // Adding a data-attribute
        button.attr("data-name", gifs[i]);
        // Providing the initial button text
        button.text(gifs[i]);
        $("#buttons-view").append(button);

    }
}

// //make buttons we have already
renderButtons();



$("#buttons-view").on("click", "button", function () {

    console.log("Test");

    bGif = $(this).attr("data-name");

    //Let's console log our data name
    console.log("This is data name on button click" + bGif);

    searchGifs(bGif);
});


// Now an on-click function to handle when button is clicked
$("form").submit(function (event) {

    // $("").click(function (event) {
    event.preventDefault()
    //     // prevents form trying to submit itself.
    console.log("form working!");

    // console.log("These are your current gif array" + gifs[0]);

    let newGif = $("#gif-input").val();

    // $("#gif-input").val().empty();

    console.log("Let's console our value from input " + newGif);

    gifs.push(newGif);
    
    // // Call our button function which should handle creating the buttons
    // //for our array
    renderButtons();

    // // Now also call our APAX function so that we make the new gifs append to the page
    searchGifs(newGif);
});

$("#gifs-view").on("click", "img", function() {
    console.log("image click working!");

    // The attr jQuery method allows us to get or set the value of any attribute on our HTML element
    let state = $(this).attr("data-state");
    // If the clicked image's state is still, update its src attribute to what its data-animate value is.
    // Then, set the image's data-state to animate
    // Else set src to the data-still value
    if (state === "still") {
      $(this).attr("src", $(this).attr("data-animate"));
      $(this).attr("data-state", "animate");
    } else {
      $(this).attr("src", $(this).attr("data-still"));
      $(this).attr("data-state", "still");
    }
  });






