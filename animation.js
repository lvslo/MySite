document.onmousemove = moveIt;

function moveIt(evnt)
{
    if( !evnt )
        evnt = window;

    var y = evnt.clientY;

    var rer = document.getElementById("rer").style;

    rer.top = y + "px";

    document.getElementById("y").innerHTML = y;


}