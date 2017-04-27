// GLOBAL VARIABLES -------
// Store an array of image paths in a variable
var images = ['https://unsplash.it/800/600?image=533', 'https://unsplash.it/800/600?image=534', 'https://unsplash.it/800/600?image=531', 'https://unsplash.it/800/600?image=528', 'https://unsplash.it/800/600?image=527', 'https://unsplash.it/800/600?image=526'];

// Set a variable for the current position(index) and give it an initial value of 0
var currentPosition = 0;

// Set an array for votes
var votes = [0, 0, 0, 0, 0, 0];

// EVENTS ---------
// Listen for click events on the next and previous buttons
$('#next').on('click', function() {
    // Update the current position
    currentPosition += 1;

    // Update source
    changeImage();

    //Make sure the previous button is enabled
    $('#prev').prop('disabled', false);

    // If the currentPosition is at the last image
    if (currentPosition === images.length - 1) {
        // Disable the next button
        $('#next').prop('disabled', true);
    }

});
$('#prev').on('click', function() {
    // Update the current position
    currentPosition -= 1;

    // Update source
    changeImage();

    // Make sure the next button is enabled
    $('#next').prop('disabled', false);

    // If the currentPosition is at the first item (the zero index), disable the previous button
    if (currentPosition === 0) {
        $('#prev').prop('disabled', true);
    }

});

// Listen for a change event on the #your-vote select menu
$('#upvote').on('click', function() {

    // Add one vote to the current score at the current index
    votes[currentPosition] += 1;

    // Display the amount of likes on the page.
    $('#votes').html("Likes: " + votes[currentPosition]);
});

$('#downvote').on('click', function() {

    // Subtract one vote from the score at the current position.
    votes[currentPosition] -= 1;

    // Display the amount of likes on the page.
    $('#votes').html("Likes: " + votes[currentPosition]);
});

function changeImage() {
    // Update the src attribute to the urls that's stored at the currentPosition in the array
    $('#currentImage').attr('src', images[currentPosition]);

    // Display the amount of likes for the current image.
    $('#votes').html("Likes: " + votes[currentPosition]);
}