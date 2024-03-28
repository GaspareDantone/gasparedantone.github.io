// cattura elementi

let myNavbar = document.querySelector("#myNavbar");
let links = document.querySelectorAll(".nav-link");
let logo = document.querySelector(".img-logo");



console.dir(logo);




window.addEventListener("scroll", ()=>{
    let scrolled = window.scrollY;

    if (scrolled > 0) {
        // myNavbar.classList.add('nav-blur');
        // logo.src ="http://127.0.0.1:5500/assett/logo-rosso.png";


        // links.forEach((link)=>{
        //     link.style.color = 'var(--white)';
        //     link.addEventListener("mouseenter", ()=>{
        //         link.style.borderBottom = '2px solid var(--red)'

        //     })
        //     link.addEventListener("mouseleave", ()=>{
        //         link.style.borderBottom ="transparent"
        //     })
        // })
        changeNavbar('nav-blur', 'logo-rosso', 'var(--white)', '2px solid var(--red)', 'trasparent' );


    }else{

        myNavbar.classList.remove('nav-blur');
        // logo.src ="http://127.0.0.1:5500/assett/logo-nero.png";
        // links.forEach((link)=>{
        //     link.style.color = 'var(--black)';
        //     link.addEventListener("mouseenter", ()=>{
        //         link.style.borderBottom = '2px solid var(--red)'

        //     })
        //     link.addEventListener("mouseleave", ()=>{
        //         link.style.borderBottom ="transparent"
        //     })
        // })

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



