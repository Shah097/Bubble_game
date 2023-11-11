var clutter = "";
var time = 60;
var score = 0;
var rnt = 0;
var scores = []; // Array to store scores

function makebubble() {
    clutter = ""; // Reset the clutter string
    for (var i = 1; i <= 90; i++) {
        var rn = Math.floor(Math.random() * 100);
        clutter += `<div class="bubble">${rn}</div>`;
    }
    document.querySelector(".pbottom").innerHTML = clutter;
}

function timer() {
    var timet = setInterval(function () {
        if (time > 0) {
            time--;
            document.querySelector("#timeb").textContent = time;
        } else {
            clearInterval(timet);
           document.querySelector(".pbottom ").textContent="  Game Over!!!";
        }
    }, 1000);
}

function getnewhit() {
    rnt = Math.floor(Math.random() * 100);
    document.querySelector("#hitb").textContent = rnt;
}

function inscore() {
    score += 10;
    document.querySelector("#scoreb").textContent = score;
}

document.querySelector(".pbottom").addEventListener("click", function (a) {
    var target = Number(a.target.textContent);

    if (target === rnt) {
        makebubble();
        inscore();
        getnewhit();
    }
});

document.querySelector("#rf").addEventListener("click", function () {
    makebubble();
    gsap .from([".bubble"],{
        opacity:0,
        scale:.5,
        duration:"1",
        
     })
});



document.querySelector("#play").addEventListener("click",function(){
   
    if( time ==60){
        timer();
    }else if(time == 0){
        time =60;
        document.querySelector("#timeb").innerHTML="60";
        makebubble();
        timer();
        gsap .from([".bubble"],{
            opacity:0,
            scale:.5,
            duration:"1",
            
         })

    }
})
makebubble();
getnewhit();


var t = gsap.timeline( );


t
 .from(".ptop",{
    opacity:0,
    y:20,
    duration:1,
 })
 .from([".hi",".ti","#hitb","#timeb"],{
    opacity:0,
    x:-30,
    duration:"1"
 })
 .from([".sc","#scoreb","#rp"],{
    opacity:0,
    x:30,
    duration:"1",
    delay:"-1"
 })
 .from([".bubble"],{
    opacity:0,
    scale:.5,
    duration:"1",
    delay:"-1"
 })

 t.from("#h", {
    opacity: 0,
    scale: 0.5,
    duration: 1,
    ease: "power2",
    onComplete: function () {
        // Additional action: Change the text content of the element
        document.querySelector("#h").textContent = "Animation Complete!";
    }
});
t.from(".pbottom", {
    opacity: 0,
    scale: 0.5,
    duration: 1,
    ease: "power2",
    onComplete: function () {
        // Additional action: Change the text content of the element
        document.querySelector("#h").textContent = "Animation Complete!";
    }
});