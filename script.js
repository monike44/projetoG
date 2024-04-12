const message = document.querySelector(".message");
const urso = document.querySelector("#urso");

document.addEventListener("DOMContentLoaded", function() {
    var heartsContainer = document.createElement("div");
    heartsContainer.className = "hearts-container";
    document.body.appendChild(heartsContainer);

    document.body.addEventListener("click", function() {
        message.style.display = "none";
        urso.style.display = "none";
        
        for (var i = 0; i < 40; i++) {
            
            createHeart();
        }
    });

    function createHeart() {
        var heart = document.createElement("div");
        heart.className = "heart";
        heart.style.left = Math.random() * window.innerWidth + "px";
        heart.style.top = Math.random() * window.innerHeight + "px";
        heartsContainer.appendChild(heart);

        setTimeout(() => {
            heart.remove();
            mostrarmenssagem()
        }, Math.random() * 2500 + 1000);

    }

    function mostrarmenssagem() {
        setTimeout(()=>{
            urso.style.display = "block";
            // urso.style.display = "block";
        }, 3500);
    }
});
