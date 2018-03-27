// locates the html element by id
var c = document.getElementById("zCanvas");

//defines context as 2d
var ctx = c.getContext("2d");

//Z
Z(ctx, 320, 300)

//zFunctionBegin
function Z(ctx, x, y) {
    ctx.beginPath();
    ctx.font = "200px Arial";
    ctx.fillText("Z", x, y);
    ctx.closePath();

    //time
    ctx.beginPath();
    ctx.font = "43px Arial";
    ctx.fillText("19:55", x + 6, y - 147);
    ctx.closePath();

    //count
    ctx.beginPath();
    ctx.font = "20px Arial";
    ctx.fillText("COUNT: 100", x + 2, y + 23);
    ctx.closePath();

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
