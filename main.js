/*---Trailer---*/

document.addEventListener("DOMContentLoaded", function() {
    const menubtn = document.querySelector(".menu-btn");
    menubtn.addEventListener("click", () => {
        menubtn.classList.toggle("activate");
    });

    const watchTrailerBtn = document.getElementById("watchTrailerBtn");
    const videoContainer = document.getElementById("videoContainer");
    const trailerVideo = document.getElementById("trailerVideo");
    const closeVideo = document.getElementById("closeVideo");

    watchTrailerBtn.addEventListener("click", () => {
        videoContainer.style.display = "block";
        trailerVideo.play();
    });

    closeVideo.addEventListener("click", () => {
        videoContainer.style.display = "none";
        trailerVideo.pause();
    });

    trailerVideo.addEventListener('ended', () => {
        videoContainer.style.display = "none";
    });

    videoContainer.addEventListener('click', (e) => {
        if (e.target === videoContainer) {
            videoContainer.style.display = "none";
            trailerVideo.pause();
        }
    });
});
let slideIndex = 0;

function changeSlide(n) {
    const slides = document.querySelectorAll('.slides img');
    slideIndex += n;
    if (slideIndex >= slides.length) { slideIndex = 0 }
    if (slideIndex < 0) { slideIndex = slides.length - 1 }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    slides[slideIndex].style.display = 'block';
}

document.addEventListener("DOMContentLoaded", function() {
    const homeLink = document.querySelector("#Home1Link");
    const accessoriesLink = document.querySelector("a[href='#accessories']");
    
    homeLink.addEventListener("click", function(event) {
      event.preventDefault();
      document.getElementById("Home1").scrollIntoView({ behavior: "smooth" });
    });
  
    accessoriesLink.addEventListener("click", function(event) {
      event.preventDefault();
      document.getElementById("accessories").scrollIntoView({ behavior: "smooth" });
    });
  });

  // modal
var modal = document.getElementById("myModal");

var images = document.getElementsByClassName("clickable");
var modalImg = document.getElementById("img01");

for (let img of images) {
    img.onclick = function(){
        modal.style.display = "block";
        modalImg.src = this.src;
    }
}

var span = document.getElementsByClassName("close")[0];

span.onclick = function() { 
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
