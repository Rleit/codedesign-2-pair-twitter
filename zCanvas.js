// locates the html element by id
var c = document.getElementById("zCanvas");

//defines context as 2d
var ctx = c.getContext("2d");

//Z
Z(ctx, 320, 300)

//zFunctionBegin
function Z(ctx, x, y) {
    ctx.font = "200px Arial";
    ctx.fillText("Z", x, y);
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
