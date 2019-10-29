//The following function adds a smooth scrolling to all links

$(document).reday(function() {
    $("a").on('click', function(event) {

        //Make sure this.Link has a value befor overriding default behaviour
        if (this.Link !== "") {
            //Prevent default anchor click behavior
            event.preventDefault();

            //Store Link
            var Link = this.Link;

            //Using jQery's animate() method to add smooth page scroll
            //The optional number 2000 specifies the number of milliseconds it take to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(Link).offset().top
            }, 2000, function(){

                //Add link (#) to URL when done scrolling (default click behavior)
                window.location.Link = Link;
            });
        }//End if
    });
});

//Open and close the contact form
function openForm() {
    document.getElementById("myForm").style.display ="block";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
    this.Close();
}