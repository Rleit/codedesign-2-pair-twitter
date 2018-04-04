/*refresh page 
window.setInterval('refresh()', 5000); // CALL A FUNCTION EVERY 10000 MILLISECONDS OR 10 SECONDS.

// REFRESH OR RELOAD PAGE.
function refresh() {
    window.location.reload();
}



/*Banik, A. (2018). How to Auto Refresh Page Every 10 Seconds using JavaScript setInterval() Method. [online] Encodedna.com. Available at: http://www.encodedna.com/javascript/auto-refresh-page-every-10-second-using-javascript-setInterval-method.htm [Accessed 3 Apr. 2018].    */

// locates the html element by id
var c = document.getElementById("zCanvas");

//defines context as 2d
var ctx = c.getContext("2d");
ctx.canvas.width = window.innerWidth;
ctx.canvas.height = window.innerHeight;


//tweet information
var url = "http://rainerleit.eu/json/tweets.json";

//Current Blue: BLUE slows the heart rate, suppresses hunger and reduces blood pressure.
//http://www.colourtheory.net/articles/colour_psychology.htm
var textc = "#2F74A8";
// var bgc = "#5DB4F4";

var previous = null;
var current = null;

setInterval(function () {
    $.getJSON("http://rainerleit.eu/json/tweets.json", function (json) {
        current = JSON.stringify(json);
        if (previous && current && previous !== current) {
            console.log('refresh');
            location.reload();
        }
        previous = current;
    });
}, 5000);




/*downloads one or more urls
Rdocumentation.org. (2018). getURL function | RDocumentation. [online] Available at: https://www.rdocumentation.org/packages/RCurl/versions/1.95-4.8/topics/getURL [Accessed 3 Apr. 2018].

*/


function Get(url) {
    var Httpreq = new XMLHttpRequest(); // a new request begins
    //initialize or re-initialize request
    Httpreq.open("GET", url, false);
    Httpreq.send(null);
    return Httpreq.responseText;
}

//parse 
var obj = JSON.parse(Get(url));
console.log(obj);

init();

//Z
function init() {

    Z(ctx, ctx.canvas.width / 2, ctx.canvas.height / 2);
    


    //zFunctionBegin
    function Z(ctx, x, y) {
        ctx.beginPath();
        ctx.font = "400px Arial";
        ctx.fillStyle = textc;
        ctx.textAlign = "center";
        ctx.textBaseline = 'middle';
        ctx.fillText("Z", x, y);
        ctx.closePath();

        // //time
        // ctx.beginPath();
        // ctx.font = "43px Arial";
        // ctx.fillText("19:55", x + 6, y - 147);
        // ctx.closePath();

        //count, tweetBegin

        ctx.beginPath();
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.font = "24px Arial";
        ctx.fillText(obj["0"].text, x + 2, y + 200);
        ctx.closePath();
        //tweetEnd

        //locationBegin
        ctx.beginPath();
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.font = "15px Arial";
        ctx.fillText(obj["0"].created_at, x + 4, y - 200);
        ctx.closePath();
        //locationEnd





    }


}






//zFunctionEnd


/*NOTES FOR ME
canvas = width="800" height="500"
------

    <!-- X = to go left - minus
     // X = to go right - add 
     // Y - to go up - minus 
     // Y - to go down - add-- - >

-----
References
-----
https://codepen.io/jboeijenga/pen/pveQBz?depth=everything&order=popularity&page=3&q=canvas+particle&show_forks=false

*/
