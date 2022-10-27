// document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//     anchor.addEventListener("click", function(e){
//         e.preventDefault();
//         document.querySelector(this.getAttribute("href")).scrollIntoView({
//             behavior : "smooth"
//         })
//     })
// })

const menuItems = document.querySelectorAll('.header a[href^="#"]');

menuItems.forEach(item => {
    item.addEventListener('click', scrollToIdOnClick);
})
function getScrollTopByHref(element){
    const id = element.getAttribute('href');
    return document.querySelector(id).offsetTop;
}

function scrollToIdOnClick(event){
    event.preventDefault();
    const element = event.target;
    const to = getScrollTopByHref(event.target);
    scrollToPosition(to);
}

function scrollToPosition(to){
    // window.scroll({
    //     top: to,
    //     behavior: "smooth",
    // });
    smoothScrollTo(0,to);
}

function smoothScrollTo(endX, endY, duration) {
    const startX = window.scrollX || window.pageXOffset;
    const startY = window.scrollY || window.pageYOffset;
    const distanceX = endX - startX;
    const distanceY = endY - startY;
    const startTime = new Date().getTime();
  
    duration = typeof duration !== 'undefined' ? duration : 700;
  
    // Easing function
    const easeInOutQuart = (time, from, distance, duration) => {
      if ((time /= duration / 2) < 1) return distance / 2 * time * time * time * time + from;
      return -distance / 2 * ((time -= 2) * time * time * time - 2) + from;
    };
  
    const timer = setInterval(() => {
      const time = new Date().getTime() - startTime;
      const newX = easeInOutQuart(time, startX, distanceX, duration);
      const newY = easeInOutQuart(time, startY, distanceY, duration);
      if (time >= duration) {
        clearInterval(timer);
      }
      window.scroll(newX, newY);
    }, 1000 / 60); // 60 fps
  };

  // TRANSIÇÃO DE IMAGEM

let time = 3500,
    currentImageIndex = 0,
    images1 = document.querySelectorAll(".project1 img")
    images2 = document.querySelectorAll(".project2 img")
    max = images1.length

function nextImage(){
  images1[currentImageIndex].classList.remove('selected')
  images2[currentImageIndex].classList.remove('selected')
  currentImageIndex++
  if(currentImageIndex >= max)
    currentImageIndex = 0
  images1[currentImageIndex].classList.add('selected')
  images2[currentImageIndex].classList.add('selected')
}
   
function start(){
  setInterval(()=>{
    nextImage()
  }, time)
}
window.addEventListener('load', start)