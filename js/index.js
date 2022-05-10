
let flag = 0;
let delay = 1600 / 1000;
let comparisonspeed = 400;
let first = null;
let last = null;
var size = document.querySelector("#size").value;
var inpt = document.querySelector("#input").value;





$('.ui.icon')
    .popup();
$('input[type=range]')
    .popup(

    );



function changeblocks() {
    let k = document.querySelector("#input").value.split(",");
    let innhtml = "";
    for (let i = 0; i < k.length; i++) {
        innhtml += `<div class="sc-jRQAMF eRnhep" style="order: 0;" id=${i} >${k[i]}</div>`;
    }
    document.querySelector(".horzx .nums").innerHTML = innhtml;

}






function changeinput(e) {

    let k = e.target.value;
    k = k.trim();

    let flag = 0;

    if (k.substring(k.length - 1) === ",") {
        k = k.substring(0, k.length - 1);
        flag = 1;
    }
    k = k.replace(/^,+|,+$/g, '');
    if (k === "") {
        document.querySelector("#size").value = 0;
        document.querySelector(".horzx .nums").innerHTML = "";
        return;
    }


    let arr = k.split(",");

    let innhtml = "";
    let val = "";
    let b = 0;
    for (let i = 0; i < arr.length; i++) {

        if (!isNaN(arr[i])) {
            if (i === 0) {
                val = "" + arr[i];
            } else {
                val = val + "," + arr[i];
            }
            b += 1;
            document.querySelector("#size").value = b;

            innhtml += `<div class="sc-jRQAMF eRnhep" style="order: 0;" id=${i} >${arr[i]}</div>`;
        } else {
            break;
        }




    }
    if (flag === 1) {
        val = val + ",";
    }
    document.querySelector("#input").value = val;

    if (document.querySelector("#input").value === "") {
        document.querySelector("#size").value = "" + 0;
    }
    document.querySelector(".horzx .nums").innerHTML = innhtml;

}





const sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
}











function animationresolve(a, b) {
    return new Promise(resolve => {
        if (flag === 1 &&  reset_clicked === false) {
            document.getElementById("" + a).style.backgroundColor = "#FFB6C1";
            document.getElementById("" + b).style.backgroundColor = "#FFB6C1";
            setTimeout(() => {
                document.getElementById("" + a).style.backgroundColor = "white";
                document.getElementById("" + b).style.backgroundColor = "white";
                resolve(parseInt(document.getElementById("" + a).innerHTML) < parseInt(document.getElementById("" + (b)).innerHTML));

            }, comparisonspeed);
        }
    });
}

async function partition(low, high) {

    if (flag === 1 &&  reset_clicked === false) {
        let x = low - 1;
        for (let i = low; i < high; i++) {

            if (await animationresolve(i, high)) {
                if (flag === 1 &&  reset_clicked === false) {
                    document.querySelector(".comparisons").innerHTML = "" + (parseInt(document.querySelector(".comparisons").innerHTML) + 1);
                    x++;
                    if (x <= i) {
                        let xx = (i - x) * 50;
                        let yy = (-1) * xx;
                        first = x;
                        last = i;
                        document.getElementById("" + (x)).style.backgroundColor = "#F0E68C";
                        document.getElementById("" + i).style.backgroundColor = "#F0E68C";
                        document.getElementById("" + x).animate([
                            {
                                transform: 'translate(0px,0px)'
                            }, {
                                transform: 'translate(0px,50px)'
                            }, {
                                transform: `translate(${xx}px,50px)`
                            }, {
                                transform: `translate(${xx}px,0px)`
                            }
                        ], {
                           
                            duration: delay * 2000,

                        });
                        document.getElementById("" + (i)).animate([
                            
                            {
                                transform: 'translate(0px,0px)'
                            }, {
                                transform: 'translate(0px,-50px)'
                            }, {
                                transform: `translate(${yy}px,-50px)`
                            }, {
                                transform: `translate(${yy}px,0px)`
                            }
                        ], {
                            
                            duration: delay * 2000,

                        });
                        setTimeout(function() {
                            if (flag === 1 &&  reset_clicked === false) {
                                document.querySelector(".swaps").innerHTML = "" + (parseInt(document.querySelector(".swaps").innerHTML) + 1);
                                document.getElementById("" + (x)).style.backgroundColor = "white";
                                document.getElementById("" + i).style.backgroundColor = "white";
                                let a = document.getElementById("" + (i)).innerHTML;
                                let b = document.getElementById("" + x).innerHTML;
                                document.getElementById("" + x).innerHTML = a;
                                document.getElementById("" + (i)).innerHTML = b;
                            }
                        }, delay * 2000);
                        await sleep(delay * 3000 + 200);
                    }
                }
            }
        }
        if (flag === 1 &&  reset_clicked === false) {
            if (high != (x + 1)) {
                let xxx = (high - x - 1) * 50;
                let yyy = (-1) * xxx;
                first = x + 1;
                last = high;
                document.getElementById("" + (x + 1)).style.backgroundColor = "#F0E68C";
                document.getElementById("" + high).style.backgroundColor = "#F0E68C";
                document.getElementById("" + (x + 1)).animate([
                    {
                        transform: 'translate(0px,0px)'
                    }, {
                        transform: 'translate(0px,50px)'
                    }, {
                        transform: `translate(${xxx}px,50px)`
                    }, {
                        transform: `translate(${xxx}px,0px)`
                    }
                ], {
                    duration: delay * 2000,

                });
                document.getElementById("" + high).animate([
                    
                    {
                        transform: 'translate(0px,0px)'
                    }, {
                        transform: 'translate(0px,-50px)'
                    }, {
                        transform: `translate(${yyy}px,-50px)`
                    }, {
                        transform: `translate(${yyy}px,0px)`
                    }
                ], {
                    
                    duration: delay * 2000,

                });
                setTimeout(function() {
                    if (flag === 1 &&  reset_clicked === false) {
                        document.querySelector(".swaps").innerHTML = "" + (parseInt(document.querySelector(".swaps").innerHTML) + 1);
                        document.getElementById("" + (x + 1)).style.backgroundColor = "white";
                        document.getElementById("" + high).style.backgroundColor = "white";
                        let a = document.getElementById("" + high).innerHTML;
                        let b = document.getElementById("" + (x + 1)).innerHTML;
                        document.getElementById("" + (x + 1)).innerHTML = a;
                        document.getElementById("" + high).innerHTML = b;
                    }
                }, delay * 2000);
                await sleep(delay * 3000 + 200);
            }
        }
        if (flag === 1 &&  reset_clicked === false) {
            document.getElementById("" + (x + 1)).style.backgroundColor = "#90EE90";
        }
        return x + 1;
    }
}

async function quickSortTransfer(vet,esq,dir){
    var i, j ,x , temp;
    x = vet[(esq + dir) / 2]; //Pivo
    i = esq;
    j = dir;
    do{
        while(x > vet[i]){ 
            let pivot = await partition(esq, dir);
            i++;
           alert(vet[i]);
        }
        while(x < vet[j]){
            let pivot = await partition(dir, esq);
             j--;
            
        }
        if(i <= j)
        {
            temp = vet[i];
            vet[i] = vet[j];
            vet[j] = temp;
            i++;
            j--;
        }
    } while(i <= j);
    if(esq < j){ 
        await quickSortTransfer(vet, esq, j);
  
    }
    if(i < dir){ 
      await  quickSortTransfer(vet, i, dir);
   
    }

}



async function startquicksort(low, high) {

    if (flag === 1 &&  reset_clicked === false) {
        let dd = high/2;
        document.getElementById("" + dd).style.backgroundColor = "#90EE90";

        if (low === high) {
            document.getElementById("" + low).style.backgroundColor = "#90EE90";
        }
        if (low < high) {
            let pivo = await partition(low, high);
            await startquicksort(low, pivo - 1);
            await startquicksort(pivo + 1, high);
        }
    }
}

















$(".ui.icon.sort").on("click", function(e) {
    document.querySelector(".ui.icon.reset").style.opacity = "1";
    document.querySelector(".ui.icon.reset").style.display = "inline-block";
    document.querySelector(".redo.icon").style.display = "inline-block";
    flag = 1;
    reset_clicked = false;

    if (document.querySelector("#input").value === "") {
        document.querySelector("#size").value = "" + 0;
    } else {
        document.querySelector("#size").value = "" + document.querySelector("#input").value.replace(/^,+|,+$/g, '').split(",").length;
    }
    document.querySelector("#size").readOnly = true;
    document.querySelector("#input").readOnly = true;

    e.target.style.display = "none";
    // var pivo_index = (document.querySelector("#input").value.replace(/^,+|,+$/g, '').split(",").length - 1) / 2; 
    // var esq = document.querySelector("#input").value.replace(/^,+|,+$/g, '').split(",").length - pivo_index;

    var pivo_index = (document.querySelector("#input").value.replace(/^,+|,+$/g, '').split(",").length -1 ) / 2; 
    var esq = document.querySelector("#input").value.replace(/^,+|,+$/g, '').split(",").length - pivo_index;
    var dir = esq;

    startquicksort(0, document.querySelector("#input").value.replace(/^,+|,+$/g, '').split(",").length - 1);
    //quickSortTransfer(document.querySelector("#input").value.replace(/^,+|,+$/g, '').split(","),esq,dir);
                


});





$(".ui.icon.reset").on("click", async function(e) {
    if (flag === 1) {
        this.style.opacity = "0.3";
        reset_clicked = true;
        alert(`Aguarde ${Math.ceil(delay)}segundos `);

        await sleep(delay * 1000);

        flag = 0;
        let obj = {
            target: document.querySelector("#input")
        };
        if (first !== null) {
            $("#" + first).stop(true);
            document.getElementById("" + first).style.backgroundColor = "white";
            first = null;
        }
        if (last !== null) {
            $("#" + last).stop(true);
            document.getElementById("" + last).style.backgroundColor = "white";
            last = null;
        }
        changeinput(obj);
        document.querySelector(".swaps").innerHTML = "" + 0;
        document.querySelector(".comparisons").innerHTML = "" + 0;
        document.querySelector("#size").readOnly = false;
        document.querySelector("#input").readOnly = false;
        e.target.style.display = "none";
        document.querySelector(".ui.icon.sort").style.display = "inline-block";
        document.querySelector(".play.icon").style.display = "inline-block";
    }


});





$(document).ready(function() {
    document.querySelector("#input").value = "15,14,13,12,11,10,9,8,7,6,5,4,3,2,1";
    let obj = {
        target: document.querySelector("#input")
    };
    changeinput(obj);
    $('.ui.accordion').accordion();

    let a = document.querySelectorAll("a.item");

    for (let i = 0; i < a.length; i++) {
        a[i].addEventListener("click", function() {

            var k = `#${this.classList[1]}`;
            document.querySelector(k).style.display = "initial";
            let obj = {
                target: document.querySelector("#input")
            };
            reset_clicked = false;
            flag = 0;
            if (first !== null) {
                $("#" + first).stop(true);
                document.getElementById("" + first).style.backgroundColor = "white";
                first = null;
            }
            if (last !== null) {
                $("#" + last).stop(true);
                document.getElementById("" + last).style.backgroundColor = "white";
                last = null;
            }

            document.querySelector(".ui.icon.sort").style.opacity = "1";

            changeinput(obj);

            document.querySelector(".ui.icon.sort").style.display = "inline-block";
            document.querySelector(".play.icon").style.display = "inline-block";
            document.querySelector(".ui.icon.reset").style.display = "none";

            document.querySelector("#size").readOnly = false;
            document.querySelector("#input").readOnly = false;
            document.querySelector(".swaps").innerHTML = "" + 0;
            document.querySelector(".comparisons").innerHTML = "" + 0;
            flag = 0;







        });
    }





    $('#random').on('click', function() {
        if (flag == 0) {
            let a = document.querySelector("#size").value;
            if (a < 0) {
                alert("Somente valores positivos são permitidos!");
                document.querySelector("#size").value = 0;
                return;

            }
            if (a === "") {
                alert("Você deve especificar o tamanho do vetor!")
            } else {
                a = "" + a;

                if (a.indexOf(".") !== -1) {
                    alert("Somente valores inteiros são permitidos!");
                } else {
                    a = parseInt(a);
                    let z = "";
                    for (let i = 0; i < a - 1; i++) {
                        z += Math.floor(100 + Math.random() * 900) + ",";
                    }
                    if (a !== 0) {
                        z += Math.floor(100 + Math.random() * 900);
                    }

                    document.querySelector("#input").value = z;
                    if (a !== 0) {
                        changeblocks();
                    }
                }
            }
        }
    });


    $("#input").on("input", changeinput);


});



