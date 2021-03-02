const burger = document.querySelector(".burger"),
      nav = document.querySelector(".header-list ul"),
      navLinks = document.querySelectorAll(".nav-links li"),
      body = document.querySelector('body');

const navAnimation = () => {
    navLinks.forEach((link) => {
        if(link.style.animation) {
            link.style.animation = "";
        }else {
            link.style.animation = `navLinkFade 0.5s ease forwards`;
        }
    });
}

const handleNav = () => {
    nav.classList.toggle("nav-active");
    navAnimation();
    burger.classList.toggle("toggle");
};

const navSlide = () => {
    burger.addEventListener("click",handleNav);
};

const setNavTransition = (width) => {
    if (width < 480) {
        nav.style.transition = "";
    }else {
        nav.style.transition ="transform 0.5s ease-in";
        
    }
};

const handleResize = (e) => {
    const width = e.target.innerWidth;
    console.log(width);
    setNavTransition(width);
};

const resize = () => {
    window.addEventListener("resize",handleResize);
    navSlide();
};

resize();