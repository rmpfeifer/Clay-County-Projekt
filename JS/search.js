function test() {
    console.log("Test");
  }

  function send2() {
    $.get("NameCCLR.php").done(function(data){
        // What do I do with the data?
        console.log(data);
    });
  }

function send3() {
 // All of the actually good code inside of this function was copy and pasted from here https://stackoverflow.com/a/5004276
// Variable to hold request
var request;

// Bind to the submit event of our form
$("#foo").submit(function(event){
    // Prevent default posting of form - put here to work in case of errors
   event.preventDefault();
    // Abort any pending request
    if (request) {
        request.abort();
    }
    // setup some local variables
    var $form = $(this);
    // Let's select and cache all the fields
    var $inputs = $form.find("input, select, button, textarea");
    // Serialize the data in the form
    var serializedData = $form.serialize();
    // Fire off the request to /form.php
    request = $.ajax({
        url: "NameCCLR.php",
        type: "get",
        data: serializedData
    });
    // Callback handler that will be called on success
    request.done(function (response){
        // Log a message to the console
        console.log("Hooray, it worked!");
        console.log(response);
        const $results = response;
        for(i=0;i<response.length;i++){
            runHigh(1,6,6);
        }
    });
    // Callback handler that will be called on failure
    request.fail(function (jqXHR, textStatus, errorThrown){
        // Log the error to the console
        console.error(
            "The following error occurred: "+
            textStatus, errorThrown
        );
    });
});
  }

