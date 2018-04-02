/*load JSON-encoded data from server, short hand form
url - string that includes the destination to where the request is sent
data - sent with request to server
success - callback function that executes if successful
*/

//once window loads, execute the function
window.onload = function () {
    (function () {
        //somehow connect to our data source
        var twitterAPI = "https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
        //get JSON 
        $.getJSON(twitterAPI, {
                tags: "mount rainier",
                tagmode: "any",
                format: "json"
            })
            .done(function (data) {
                $.each(data.items, function (i, item) {
                    $("<img>").attr("src", item.media.m).appendTo("#images");
                    if (i === 3) {
                        return false;
                    }
                });
            });
    })();
};

/*well */

/*NOTES FOR ME
           /*long hand form
    $.ajax({
        dataType: "json",
        url: url,
        data: data,
        success: success
    });
    */

/*
        /*REFERENCES
        ////
jquery.org, j. (2018). jQuery.getJSON() | jQuery API Documentation. [online] Api.jquery.com. Available at: http://api.jquery.com/jquery.getjson/ [Accessed 2 Apr. 2018].
////


        */
