// locates the html element by id
var c = document.getElementById("zCanvas");

//defines context as 2d
var ctx = c.getContext("2d");
ctx.canvas.width = window.innerWidth;
ctx.canvas.height = window.innerHeight;

//tweet information
var url = "http://rainerleit.eu/json/tweets.json";

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
animate();
//Z
function init() {
    bg(ctx, 0, 0)
    Z(ctx, ctx.canvas.width / 2, ctx.canvas.height / 2)


    //zFunctionBegin
    function Z(ctx, x, y) {
        ctx.beginPath();
        ctx.font = "350px Arial";
        ctx.fillStyle = "#40AD7B";
        ctx.textAlign = "center";
        ctx.fillText("Z", x, y);
        ctx.closePath();

        // //time
        // ctx.beginPath();
        // ctx.font = "43px Arial";
        // ctx.fillText("19:55", x + 6, y - 147);
        // ctx.closePath();

        //count

        ctx.beginPath();
        ctx.font = "25px Arial";
        ctx.fillText(obj["0"].user.description, x + 2, y + 23);
        ctx.closePath();

    }

    function bg(ctx, x, y) {

        ctx.fillStyle = "#CDFAE5";
        ctx.fillRect(x, y, ctx.canvas.width, ctx.canvas.height);


    }

}

function animate() {

    requestAnimationFrame(animate);

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
*/
