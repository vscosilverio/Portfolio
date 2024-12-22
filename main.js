// -----------------toggle navbar -----------------------------------

let menuIcon = document.querySelector('#menu-icon')
let navbar = document.querySelector('.navbar')

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark')
    navbar.classList.toggle('active')
}


// ----------------scroll section active --------------------------------

let section = document.querySelectorAll('section')
let navlinks = document.querySelectorAll('header nav a')

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY
        let offset = sec.offsetTop - 150
        let height = sec.offsetHight
        let id = sec.getAtribute('id')

        if(top >= offset && top < offset + height) {
            navlinks.forEach.apply(links => {
                links.classList.remove('active')
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active')
            })
        }
    })

    //-------------------- sticky bar navbar --------------------------------

let header = document.querySelector('header')
header.classList.toggle('sticky', window.scrollY > 100)

//-------------------- remove toggle icon and navbar --------------------------------


menuIcon.classList.remove('fa-xmark')
navbar.classList.remove('active')


}

//-------------------- scroll reveal  --------------------------------

ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay: 200,

})

ScrollReveal().reveal('.home-content, heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, portfolio-box, .contact form', { origin: 'buttom' });
ScrollReveal().reveal('.home-contact h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-contact p, .about-content', { origin: 'right' });


//-------------------- typed js  --------------------------------

const typed = new Typed('.multiple-text', {
    strings: ['Frontend Developer', 'Web Designer', 'Software Developer'],
    typeSpeed: 70,
    backSpeed:70,
    backDelay: 1000, 
    loop: true, 
})

// Email -------------------------------


    // Inicializa o EmailJS com seu ID do usuário
    emailjs.init("2unFm5ggmmd7nkWy1");

    // Captura o formulário
    const form = document.getElementById("contact-form");

    form.addEventListener("submit", function (e) {
        e.preventDefault(); // Impede o envio padrão

        emailjs.sendForm("service_ubl4lxg", "template_urnw4xj", form)
            .then(
                function () {
                    alert("Mensagem enviada com sucesso!");
                },
                function (error) {
                    alert("Ocorreu um erro ao enviar sua mensagem. Tente novamente.");
                    console.error("Erro:", error);
                }
            );
    })
