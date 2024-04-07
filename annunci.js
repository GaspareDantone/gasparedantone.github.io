// cattura elementi

let myNavbar = document.querySelector("#myNavbar");
let links = document.querySelectorAll(".nav-link");
let logo = document.querySelector(".img-logo");



console.dir(logo);




window.addEventListener("scroll", ()=>{
    let scrolled = window.scrollY;

    if (scrolled > 0) {
      
        changeNavbar('nav-blur', 'logo-rosso', 'var(--white)', '2px solid var(--red)', 'trasparent' );


    }else{

        myNavbar.classList.remove('nav-blur');
        

        changeNavbar('nav-custom', 'logo-nero', 'var(--black)', '2px solid var(--red)','transparent' );
    }


    
})

function changeNavbar(background , imglogo, color1, color2, color3 ) {
    myNavbar.classList.add(background);
        logo.src =`http://127.0.0.1:5500/assett/${imglogo}.png`;


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

// fetch è uan chiamata asincrona che mi permettte di collegare il mio foglio di lavoro con l'esterno o database esterni o interni e li converte in oggetti

fetch("./annunci.json").then((response)=>response.json()).then((data)=>{
    console.log(data);

    // cattura elementi html
    let categoryWrapper = document.querySelector('#categoryWrapper');
    let cardWrapper = document.querySelector('#cardWrapper');

    





// funzione crea filtro categorie
    function setCategory(params) {
        let category = data.map((annuncio)=> annuncio.category);
        console.log(category);
        let uniqueCategory = [];

        category.forEach((category)=>{
            if (!uniqueCategory.includes(category)) {
                uniqueCategory.push(category);
            } 
            
        });

       uniqueCategory.forEach((category)=>{
        let div = document.createElement ('div');

        div.classList.add('form-check');
        div.innerHTML = `
            <input class="form-check-input" type="radio" name="category" id="${category}" >
            <label class="form-check-label" for="${category}">
                 ${category}
            </label>
        `
        categoryWrapper.appendChild(div);
        
        })

    }
    setCategory()


    function showCards(array) {


        array.sort((a,b)=> b.price - a.price );


        cardWrapper.innerHTML = '';

        array.forEach((annuncio)=>{
            let div = document.createElement('div');
            div.classList.add("card", "mb-4");
            div.style.width = "16rem";
            div.innerHTML = `
            <img src="${annuncio.image}" class="card-img-top" alt="...">
                    <div class="card-body">
                      <h5 class="card-title">${annuncio.name}</h5>
                      <p class="card-text">${annuncio.category}</p>
                      <p>${annuncio.price}</p>
                    </div>
            
         `
            cardWrapper.appendChild(div);
            
            
            
        })
        
    }

    showCards(data);

    // imput radio
    let radios = document.querySelectorAll(".form-check-input");

    function filterByCategory(params) {
        let checked = Array.from(radios).find((button)=> button.checked);
        let categoria = checked.id;

        if (categoria !="all") {
            let filtered = data.filter((annuncio) => annuncio.category == categoria);
            showCards(filtered);
            
        }else{
            showCards(data);
        }




        
    }
    filterByCategory();

    radios.forEach((button)=>{
        button.addEventListener("click",()=>{
            filterByCategory()
        })
    })





    let inputPrice = document.querySelector("#inputPrice");
    let priceNumbers = document.querySelector("#priceNumbers");


    function setPriceInput(params) {
        
        let maxPrice = data[0].price;
        console.log(maxPrice);

        inputPrice.max = maxPrice;
        inputPrice.value = maxPrice;
        priceNumbers.innerHTML = maxPrice;
    }

    setPriceInput()

    inputPrice.addEventListener("input", () =>{

        priceNumbers.innerHTML = inputPrice.value;

        filterByPrice();
    });

    function filterByPrice() {
        let filtered =data.filter((annuncio)=> +annuncio.price <= +inputPrice.value );
        showCards(filtered);

    }


    let inputWord = document.querySelector("#inputWord");
         inputWord.addEventListener("input", ()=>{
            filterByword()

         })

         function filterByword() {
            let filtered = data.filter( (annuncio) => annuncio.name.toLowerCase().includes(inputWord.value.toLowerCase()));
            showCards(filtered);

            

            
         };

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































});



 