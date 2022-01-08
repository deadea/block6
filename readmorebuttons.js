
let hiddenTextMain = document.querySelector(".main-section__text.main-section__text--hidden-mobile")
let hiddenTextMainTablet = document.querySelector(".main-section__text--hidden-tablet");

let brandsHiddenOnTablet = document.querySelectorAll(".brands .swiper-slide--hidden--tablet");
let brandsHiddenOnDesktop = document.querySelectorAll(".brands .swiper-slide--hidden--desktop");

let repairsHiddenOnTablet = document.querySelectorAll(".repairs .swiper-slide--hidden--tablet");
let repairsHiddenOnDesktop = document.querySelectorAll(".repairs .swiper-slide--hidden--desktop");

document.querySelectorAll(".button-open, .button-close").forEach((item) => {
  item.addEventListener("click", (event) => {
    event.preventDefault();


if (item.classList.contains('button-open')) {

    let buttonOpenParent = item.parentNode;

    if (buttonOpenParent.className === "main-section__container") {
      item.classList.toggle("button--hidden");

      if (window.matchMedia("(min-width: 768px) and (max-width: 1119px)").matches) {
        
        hiddenTextMainTablet.classList.toggle("main-section__text--hidden-tablet");
        let buttonClose = document.querySelector(".main-section__container .button-close")
      buttonClose.classList.toggle("button--hidden");

      } else {

        hiddenTextMain.classList.toggle("main-section__text--hidden-mobile");
        let buttonClose = document.querySelector(".main-section__container .button-close")
        buttonClose.classList.toggle("button--hidden");
      }



    }


    if (buttonOpenParent.className === "brands") {
      item.classList.toggle("button--hidden");
            
      for (let i = 0; i < brandsHiddenOnTablet.length; i++) {
        brandsHiddenOnTablet[i].classList.toggle("swiper-slide--hidden--tablet");
      }
      for (let i = 0; i < brandsHiddenOnDesktop.length; i++) {
        brandsHiddenOnDesktop[i].classList.toggle("swiper-slide--hidden--desktop");
      }
      let buttonClose = document.querySelector(".brands .button-close");
      buttonClose.classList.toggle("button--hidden");
    }

    if (buttonOpenParent.className === "repairs") {
      item.classList.toggle("button--hidden");
      
      for (let i = 0; i < repairsHiddenOnTablet.length; i++) {
        repairsHiddenOnTablet[i].classList.toggle("swiper-slide--hidden--tablet");
      }
      for (let i = 0; i < repairsHiddenOnDesktop.length; i++) {
        repairsHiddenOnDesktop[i].classList.toggle("swiper-slide--hidden--desktop");
      }
      let buttonClose = document.querySelector(".repairs .button-close");
      buttonClose.classList.toggle("button--hidden");
    }
}
if (item.classList.contains('button-close')) {

    let buttonCloseParent = item.parentNode;

    if (buttonCloseParent.className === "main-section__container") {
      item.classList.toggle("button--hidden");

      if (window.matchMedia("(min-width: 768px) and (max-width: 1119px)").matches) {
        
        hiddenTextMainTablet.classList.toggle("main-section__text--hidden-tablet");
        let buttonOpen = document.querySelector(".main-section__container .button-open")
        buttonOpen.classList.toggle("button--hidden");

      } else {
      hiddenTextMain.classList.toggle("main-section__text--hidden-mobile");
      let buttonOpen = document.querySelector(".main-section__container .button-open")
      buttonOpen.classList.toggle("button--hidden");

      }
      
    }


  
    if (buttonCloseParent.className === "brands") {
      item.classList.toggle("button--hidden");
      
      for (let i = 0; i < brandsHiddenOnTablet.length; i++) {
        brandsHiddenOnTablet[i].classList.toggle("swiper-slide--hidden--tablet");
      }
      for (let i = 0; i < brandsHiddenOnDesktop.length; i++) {
        brandsHiddenOnDesktop[i].classList.toggle("swiper-slide--hidden--desktop");
      }
      let buttonOpen = document.querySelector(".brands .button-open");
      buttonOpen.classList.toggle("button--hidden");
    }

    if (buttonCloseParent.className === "repairs") {
      item.classList.toggle("button--hidden");
      
     
      for (let i = 0; i < repairsHiddenOnTablet.length; i++) {
        repairsHiddenOnTablet[i].classList.toggle("swiper-slide--hidden--tablet");
      }
      for (let i = 0; i < repairsHiddenOnDesktop.length; i++) {
        repairsHiddenOnDesktop[i].classList.toggle("swiper-slide--hidden--desktop");
      }
      let buttonOpen = document.querySelector(".repairs .button-open");
      buttonOpen.classList.toggle("button--hidden");
    }

}  





  });
});

