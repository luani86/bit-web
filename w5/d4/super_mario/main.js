// var mario = document.getElementsByClassName("mario").addEventListener('click', function (mario){
//     return mario.classList.add("mario_nestao");
// });

// document.querySelector("#our_body").addEventListener("keydown", function(e){
//     if(event.key === "ArrowRight"){
//      document.getElementById("mario").setAttribute("src", "mario_running.gif")
//     }
    
// })

document.querySelector("#our_body").addEventListener("keydown", function(e){
    if(event.key === "ArrowRight"){
     document.getElementById("mario").setAttribute("class", "none");
     document.getElementById("mario2").setAttribute("class", "active");
    }
    
});

document.querySelector("#our_body").addEventListener("keyup", function(e){
    if(event.key === "ArrowRight"){
     document.getElementById("mario2").setAttribute("class", "none");
     document.getElementById("mario").setAttribute("class", "active");
    }
    
   
})