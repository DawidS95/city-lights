var pierwszenstwo='poziomo';
function start(){
    setTimeout(function(){ changelights() }, 5000);
}
function pulse(id){
    for (var x=1; x<=12; x++)
        {
            if (x%2==0)
                setTimeout(function(){ document.getElementById("zebralights"+id+"_green").style.background='greenyellow'; }, 300*x);
            else
                setTimeout(function(){ document.getElementById("zebralights"+id+"_green").style.background='black'; }, 300*x);
        }
    setTimeout(function(){
        document.getElementById("zebralights"+id+"_green").style.background='black';
        document.getElementById("zebralights"+id+"_red").style.background='red';
    }, 4000);
}
function changelights(){
    if (pierwszenstwo=='poziomo')
        {
            pierwszenstwo='pionowo';
            document.getElementById("lights1_green").style.background='black';
            document.getElementById("lights1_yellow").style.background='yellow';
            document.getElementById("lights2_green").style.background='black';
            document.getElementById("lights2_yellow").style.background='yellow';
            pulse(3);
            pulse(4);
            setTimeout(function(){
                document.getElementById("lights1_red").style.background='red';
                document.getElementById("lights2_red").style.background='red';
                document.getElementById("lights1_yellow").style.background='black';
                document.getElementById("lights2_yellow").style.background='black';
                document.getElementById("lights3_yellow").style.background='yellow';
                document.getElementById("lights4_yellow").style.background='yellow';
            }, 3000);
            setTimeout(function(){
                document.getElementById("lights3_yellow").style.background='black';
                document.getElementById("lights4_yellow").style.background='black';
                document.getElementById("lights3_red").style.background='black';
                document.getElementById("lights4_red").style.background='black';
                document.getElementById("lights3_green").style.background='greenyellow';
                document.getElementById("lights4_green").style.background='greenyellow';
                document.getElementById("zebralights1_green").style.background='greenyellow';
                document.getElementById("zebralights1_red").style.background='black';
                document.getElementById("zebralights2_green").style.background='greenyellow';
                document.getElementById("zebralights2_red").style.background='black';
                document.getElementById("zebralights3_red").style.background='red';
                document.getElementById("zebralights4_red").style.background='red';
                document.getElementById("zebralights3_green").style.background='black';
                document.getElementById("zebralights4_green").style.background='black';
            }, 6000);
        }
    else
        {
            pierwszenstwo='poziomo';
            document.getElementById("lights3_green").style.background='black';
            document.getElementById("lights3_yellow").style.background='yellow';
            document.getElementById("lights4_green").style.background='black';
            document.getElementById("lights4_yellow").style.background='yellow';
            pulse(1);
            pulse(2);
            setTimeout(function(){
                document.getElementById("lights3_red").style.background='red';
                document.getElementById("lights4_red").style.background='red';
                document.getElementById("lights3_yellow").style.background='black';
                document.getElementById("lights4_yellow").style.background='black';
                document.getElementById("lights1_yellow").style.background='yellow';
                document.getElementById("lights2_yellow").style.background='yellow';
            }, 3000);
            setTimeout(function(){
                document.getElementById("lights1_yellow").style.background='black';
                document.getElementById("lights2_yellow").style.background='black';
                document.getElementById("lights1_red").style.background='black';
                document.getElementById("lights2_red").style.background='black';
                document.getElementById("lights1_green").style.background='greenyellow';
                document.getElementById("lights2_green").style.background='greenyellow';
                document.getElementById("zebralights1_green").style.background='black';
                document.getElementById("zebralights1_red").style.background='red';
                document.getElementById("zebralights2_green").style.background='black';
                document.getElementById("zebralights2_red").style.background='red';
                document.getElementById("zebralights3_red").style.background='black';
                document.getElementById("zebralights4_red").style.background='black';
                document.getElementById("zebralights3_green").style.background='greenyellow';
                document.getElementById("zebralights4_green").style.background='greenyellow';
            }, 6000);
        }
    console.log(pierwszenstwo);
setTimeout(function(){ changelights(); }, 15000);
}