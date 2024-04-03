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


    function name(params) {
        
    }



















});



 