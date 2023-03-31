function add()
{
    var x=document.getElementById("input1").value
    var y=document.getElementById("input2").value
    var z=parseInt(x)+parseInt(y)
    document.getElementById("output").value=z
}
    function clr(){
        document.getElementById("input1").value=null
        document.getElementById("input2").value=null
        document.getElementById("output").value=null
    }

function substract(){
    var x=document.getElementById("input1").value
    var y=document.getElementById("input2").value
    var z=parseInt(x)-parseInt(y)
    document.getElementById("output").value=z

}
function div(){
    var x=document.getElementById("input1").value
    var y=document.getElementById("input2").value
    var z=parseInt(x)/parseInt(y)
    document.getElementById("output").value=z

}
function multiplication(){
    var x=document.getElementById("input1").value
    var y=document.getElementById("input2").value
    var z=parseInt(x)*parseInt(y)
    document.getElementById("output").value=z

}