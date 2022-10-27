// work in LATEST EVENTS

let countDownDate = new Date("dec 31, 2023 23:59:59").getTime()
let counter = setInterval(() => {
    
    let dateNow = new Date().getTime();
     let dateDiffer = countDownDate - dateNow;

     let days = Math.floor(dateDiffer / (1000 * 60 * 60 *24));
     let hours = Math.floor((dateDiffer % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
     let minutes = Math.floor((dateDiffer % (1000 * 60 * 60 )) / (1000 * 60));
     let seconds = Math.floor((dateDiffer % (1000 * 60 )) / (1000));
    


     document.querySelector(".days").innerHTML = days < 10 ? `0${days}` : days;
     document.querySelector(".hours").innerHTML = hours < 10 ? `0${hours}` : hours;
     document.querySelector(".minutes").innerHTML = minutes < 10 ? `0${minutes}` : minutes;
     document.querySelector(".seconds").innerHTML = seconds < 10 ? `0${seconds}` : seconds;

     if(dateDiffer < 0 ){
        clearInterval(counter)
     }
}, 1000);


// work in our skiils
let skillSection = document.querySelector(".our-skills");
let skillSpan = document.querySelectorAll(".the-progress span");

// work in  stats
let statsSection = document.querySelector(".stats");
let statsSpan = document.querySelectorAll(".stats .info span ");
let started = true;

function increease(el){
    let goal = el.dataset.goal;
    let theCounter = setInterval(() => {
        el.textContent++

        if(el.textContent == goal)(
            clearInterval(theCounter)
        )
    }, 200 / goal);
}
// button
let up = document.querySelector(".scrolltop");



window.onscroll = function(){
    if(window.scrollY >= skillSection.offsetTop + 100){
        skillSpan.forEach((span) => {
            span.style.width = span.dataset.width
        });
    }

    // work in  stats

    if(window.scrollY >= statsSection.offsetTop){
        if(started){
         statsSpan.forEach(span => {
             increease(span)
         });
        }
        started = false
     }

     //button
     this.scrollY > 1000 ? up.classList.add("show") : up.classList.remove("show")
}

up.onclick = function(){
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
}

