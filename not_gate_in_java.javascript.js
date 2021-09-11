//function returns binary o/p of selected gate
function gateOutput2()
{
    var i3 = document.getElementById("input3").value;
    var gt = document.getElementById("gateType2").value;
    var o;

    switch(gt)
    {
        case "not": o = i3 == 0;
    }
    
    document.getElementById("output2").value = o;
}