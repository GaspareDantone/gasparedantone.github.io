// cattura elementi

let myNavbar = document.querySelector("#myNavbar");
let links = document.querySelectorAll(".nav-link");
let logo = document.querySelector(".img-logo");




console.dir(logo);




window.addEventListener("scroll", ()=>{
    let scrolled = window.scrollY;

    if (scrolled > 0) {
        
        changeNavbar('nav-blur', 'logo-rosso', "var(--white)", "2px solid var(--red)", "transparent" );


    }else{

        myNavbar.classList.remove('nav-blur');
        

        changeNavbar('nav-custom', 'logo-nero', "var(--black)", "transparent" , );
    }


    
})

function changeNavbar(background , imglogo, color1, color2, color3 ) {
    myNavbar.classList.add(background);
        logo.src =`/assett/${imglogo}.png`;


        links.forEach((link)=>{
            link.style.color = color1;
            link.addEventListener("mouseenter", ()=>{
                link.style.borderBottom = color2

            })
            link.addEventListener("mouseleave", ()=>{
                link.style.borderBottom = color3
            })
        })
    
}



// let myNavbar = document.querySelector("#myNavbar");
// let links = document.querySelectorAll(".nav-link");
// let logo = document.querySelector(".img-logo");

// // Aggiungi gli eventi UNA VOLTA SOLA
// links.forEach((link) => {
//   link.addEventListener("mouseenter", () => {
//     link.style.borderBottom = "2px solid var(--red)";
//   });
//   link.addEventListener("mouseleave", () => {
//     link.style.borderBottom = "transparent";
//   });
// });

// window.addEventListener("scroll", () => {
//   let scrolled = window.scrollY;

//   if (scrolled > 0) {
//     myNavbar.classList.remove("nav-custom");
//     myNavbar.classList.add("nav-blur");
//     changeNavbar("logo-rosso", "var(--white)");
//   } else {
//     myNavbar.classList.remove("nav-blur");
//     myNavbar.classList.add("nav-custom");
//     changeNavbar("logo-nero", "var(--black)");
//   }
// });

// function changeNavbar(imglogo, textColor) {
//   logo.src = `/assett/${imglogo}.png`; // ✅ path corretto
//   links.forEach((link) => {
//     link.style.color = textColor;
//   });
// }












// chiamata asincrona si attiva quando si interseca una parte della pagina
// setInterval(): crea un loop che non blocca il browser
// clearInterval(): blocca il loop
// interseptionOberserver() un oggetto del browser che fa iniziare una funzione nel momento che viene          intersecato un elemento dell html     

let firstNumber = document.querySelector("#firstNumber");
let secondNumber = document.querySelector("#secondNumber");
let thirdNumber = document.querySelector("#thirdNumber");

function createIntevarl(number , element , timing) {
    let count = 0;

    let interval = setInterval(()=>{
        if (count < number) {
            count++
            element.innerHTML = count
        }else{
            clearInterval(interval);
        }
    },timing)
};
//  createIntevarl(2500 , firstNumber , 250);
//  createIntevarl(5000 , secondNumber , 150);
//  createIntevarl(70 , thirdNumber ,800);

let confirm = false; 
// confirm false mi serve per evitare che lo scroll continuo riattivi intersecting

 let observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
       
        if (entry.isIntersecting && confirm == false) {
            createIntevarl(2500 , firstNumber , 250);
            createIntevarl(5000 , secondNumber , 150);
            createIntevarl(70 , thirdNumber ,800);
            confirm = true

            
        }
    })

 });
 observer.observe(firstNumber);

// swiper js struttura carosello

const swiper = new Swiper('.swiper', {
    speed: 600,
    parallax: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  
   
  });


  let reviews = [
    { name : "giusy" , title : "ottimo prodotto", description: "tutto perfetto come da descrizione"},
    { name : "ale" , title : "bellissimo", description: "bellisisma esperienza"},
    { name : "fenix" , title : "pessimo", description: "non tornero"},
    { name : "argo" , title : "stupefacente", description: "comprero sempre qui"},
    { name : "goku" , title : "top 10", description: "qualita' eccelsa"},
    { name : "bulma" , title : "carissimo", description: "troppo povero per comprare qui"},

  ];

// creazione card

  let swiperWrapper = document.querySelector(".swiper-wrapper")
  let addReviews = document.querySelector("#addReviews");
  let userName = document.querySelector("#userName");
  let userTitle = document.querySelector("#userTitle");
  let userDescription = document.querySelector("#userDescription");






  reviews.forEach((review) =>{
    let div = document.createElement('div');
    div.classList.add('swiper-slide');
    div.innerHTML = `
    <div class="title" data-swiper-parallax="-300">${review.name}</div>
    <div class="subtitle" data-swiper-parallax="-200">${review.title}</div>
    <div class="text" data-swiper-parallax="-100">
      <p>
        ${review.description}
      
      </p>
    </div>
    `
    swiperWrapper.appendChild(div);

});




function generateCard() {
    swiperWrapper.innerHTML = '';
    reviews.forEach((review) =>{
        let div = document.createElement('div');
        div.classList.add('swiper-slide');
        div.innerHTML = `
        <div class="title" data-swiper-parallax="-300">${review.name}</div>
        <div class="subtitle" data-swiper-parallax="-200">${review.title}</div>
        <div class="text" data-swiper-parallax="-100">
          <p>
            ${review.description}
          
          </p>
        </div>
        `
        swiperWrapper.appendChild(div);
    
    });
    
}
generateCard()




addReviews.addEventListener("click", ()=>{
    reviews.push({ name : userName.value , title : userTitle.value, description: userDescription.value})
    generateCard();
    userName.value ='';
    userTitle.value = '';
    userDescription.value = '';
    // corregge le modifiche
    swiper.update();

})


// dark mode

let btnDarkMode = document.querySelector("#btnDarkMode");
let isClicket = true;

btnDarkMode.addEventListener("click",()=>{

  if(isClicket){
    document.documentElement.style.setProperty('--light', 'rgb(26,26,26)');
    document.documentElement.style.setProperty('--dark', 'rgb(250,250,250)');
    btnDarkMode.innerHTML = `<i class="fa-regular fa-sun"></i>`;
    isClicket = false;
    localStorage.setItem( 'mode' , 'dark' );
  }else{ 
    document.documentElement.style.setProperty('--light', 'rgb(250,250,250)');
    document.documentElement.style.setProperty('--dark', 'rgb(26,26,26)');
    btnDarkMode.innerHTML = `<i class="fa-regular fa-moon"></i>`;
    isClicket = true;
    localStorage.setItem( 'mode' , 'light' );
  
   }
})


 let mode = localStorage.getItem('mode');


 if (mode === 'dark'){
   document.documentElement.style.setProperty('--light', 'rgb(26,26,26)');
   document.documentElement.style.setProperty('--dark', 'rgb(250,250,250)');
   btnDarkMode.innerHTML = `<i class="fa-regular fa-sun"></i>`;
   isClicket = false;

  
 } else {
   document.documentElement.style.setProperty('--light', 'rgb(250,250,250)');
    document.documentElement.style.setProperty('--dark', 'rgb(26,26,26)');
    btnDarkMode.innerHTML = `<i class="fa-regular fa-moon"></i>`;
    isClicket = true;
  
 }
 















  
            
    

