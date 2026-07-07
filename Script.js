// Horizontal Navigation
const links = document.querySelectorAll("nav a");
const container = document.querySelector(".container");
const panels = document.querySelectorAll(".panel");

links.forEach(link => {

    link.addEventListener("click", function(e){

        e.preventDefault();

        const id = this.getAttribute("href");

        const target = document.querySelector(id);

        target.scrollIntoView({
            behavior:"smooth",
            inline:"start"
        });

        links.forEach(a=>a.classList.remove("active"));
        this.classList.add("active");

    });

});

// Dark / Light Mode

const themeBtn = document.getElementById("theme-btn");

let dark = true;

themeBtn.onclick = ()=>{

    if(dark){

        document.body.style.background="#f4f4f4";
        document.body.style.color="#111";

        document.querySelector("header").style.background="rgba(255,255,255,.8)";

        document.querySelectorAll(".card,.project-card,.edu-card").forEach(c=>{

            c.style.background="white";
            c.style.color="black";
            c.style.boxShadow="0 10px 25px rgba(0,0,0,.1)";

        });

        document.querySelectorAll("p").forEach(p=>{

            p.style.color="#444";

        });

        themeBtn.innerHTML='<i class="fa-solid fa-sun"></i>';

        dark=false;

    }else{

        document.body.style.background="#0f172a";
        document.body.style.color="white";

        document.querySelector("header").style.background="rgba(15,23,42,.8)";

        document.querySelectorAll(".card,.project-card,.edu-card").forEach(c=>{

            c.style.background="rgba(255,255,255,.08)";
            c.style.color="white";
            c.style.boxShadow="none";

        });

        document.querySelectorAll("p").forEach(p=>{

            p.style.color="#d1d5db";

        });

        themeBtn.innerHTML='<i class="fa-solid fa-moon"></i>';

        dark=true;

    }

};

// Scroll Spy

window.addEventListener("scroll",()=>{

    let current="";

    panels.forEach(panel=>{

        const top=panel.offsetLeft-150;

        if(container.scrollLeft>=top){

            current=panel.getAttribute("id");

        }

    });

    links.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href")==="#"+current){

            link.classList.add("active");

        }

    });

});

// Mouse Wheel Horizontal Scroll

container.addEventListener("wheel",(e)=>{

    e.preventDefault();

    container.scrollLeft += e.deltaY;

});

// Fade Animation

const observer = new IntersectionObserver(entries=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.animate([
                {
                    opacity:0,
                    transform:"translateY(50px)"
                },
                {
                    opacity:1,
                    transform:"translateY(0)"
                }
            ],{

                duration:700,
                fill:"forwards"

            });

        }

    });

},{threshold:.3});

panels.forEach(panel=>observer.observe(panel));

// Project Card Hover Effect

document.querySelectorAll(".project-card").forEach(card=>{

    card.addEventListener("mouseenter",()=>{

        card.style.transform="translateY(-12px) scale(1.05)";

    });

    card.addEventListener("mouseleave",()=>{

        card.style.transform="translateY(0) scale(1)";

    });

});

// Welcome Message

setTimeout(()=>{

    console.log("Welcome to Jignesh Portfolio 🚀");

},1000);