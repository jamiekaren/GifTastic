console.log("Working...");

//An array to hold the gifs
let gifs = ["Cat", "Parot"];


//Function to display the gif buttons up top
function renderButtons() {

    // Deleting gif buttons before adding new ones, so they don't repeat
    $("#buttons-view").empty();

    //iterate through the gif array
    // variable is our initialization/counter, next our condition
    // then our update to our counter
    for (let i = 0; i < gifs.length; i++) {

        // Then we generate buttons for each gif in the array.
        let b = $("<button>");
        //Then we add a class
        b.addClass("gif");
        // Then we add a data-attribute with value set to movie at index i
        b.attr("data-name", gif[i]);
        //Providing the button's text with a value of movie at index i
        b.text(gif[i]);
        //Adding the button to the HTML
        $("#buttons-view").append(b);
    }
};


// Now a function to handle when button is clicked
$("#add-gif").on("click", function (e) {
    //event.preventDefault() , prevents form trying to submit itself.
    //Using a form so user can hit enter insted of clicking
    e.preventDefault();

    // Grab the text from the input box and store in a variable
    let gif = $("#gif-input").val();
    // Push that new movie to the array
    gif.push(gifs);

    // Call our button function which should handle creating the buttons
    //for our array
    renderButtons();
});

//Calling buttons at least once to display the initial list of gifs
renderButtons();
