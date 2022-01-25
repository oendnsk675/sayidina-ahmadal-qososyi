let areaToggleMode = document.getElementById('area-toggle-mode')
let btnToggleMode = document.getElementById('btn-toggle-mode')
let icons = document.querySelectorAll('#icons i')
let areaToggleMode2 = document.getElementById('area-toggle-mode2')
let btnToggleMode2 = document.getElementById('btn-toggle-mode2')
let icons2 = document.querySelectorAll('#icons2 i')
let btnSlideChange = document.querySelectorAll('.btn-slide-change')
let btnContentChange = document.querySelectorAll('.btn-content-change')


// alternative to DOMContentLoaded
document.onreadystatechange = function () {
    if (document.readyState == "interactive") {
        // Initialize your application or run some code.
        if (localStorage.getItem('theme') == 'dark') {
            // lakukan dark mode saat ready
            document.querySelector('#text-oslab-hero').classList.remove('text-oslab')
            document.querySelector('#text-oslab-hero').classList.add('text-oslab-dark')
            document.querySelector('#text-oslab-whatcanido').classList.remove('text-oslab-whatcanido')
            document.querySelector('#text-oslab-whatcanido').classList.add('text-oslab-whatcanido-dark')
            
            btnToggleMode.classList.remove('translate-x-0');
            btnToggleMode.classList.add('translate-x-7');
            btnToggleMode2.classList.remove('translate-y-0');
            btnToggleMode2.classList.add('translate-y-7');
            icons[0].classList.remove('opacity-0')
            icons[1].classList.add('opacity-0')
            icons2[0].classList.remove('opacity-0')
            icons2[1].classList.add('opacity-0')
            
            btnSlideChange.forEach(el => {
                el.classList.remove('btn__slide');
                el.classList.add('btn__slide_submit');
            })

            btnContentChange.forEach(el => {
                el.classList.remove('btn__content');
                el.classList.add('btn__content_submit');
            })
            
        }else{
            // lakukan light mode saat ready
            
            document.querySelector('#text-oslab-hero').classList.remove('text-oslab-dark')
            document.querySelector('#text-oslab-hero').classList.add('text-oslab')
            document.querySelector('#text-oslab-whatcanido').classList.remove('text-oslab-whatcanido-dark')
            document.querySelector('#text-oslab-whatcanido').classList.add('text-oslab-whatcanido')

            btnToggleMode.classList.add('translate-x-0');
            btnToggleMode.classList.remove('translate-x-7');
            btnToggleMode2.classList.add('translate-y-0');
            btnToggleMode2.classList.remove('translate-y-7');
            icons[0].classList.add('opacity-0')
            icons[1].classList.remove('opacity-0')
            icons2[0].classList.add('opacity-0')
            icons2[1].classList.remove('opacity-0')

            btnSlideChange.forEach(el => {
                el.classList.remove('btn__slide_submit');
                el.classList.add('btn__slide');
            })
            
            btnContentChange.forEach(el => {
                el.classList.remove('btn__content_submit');
                el.classList.add('btn__content');
            })

        }
        document.querySelector('html').classList.add(localStorage.getItem('theme'))
    }
}


// console.log(icons[0]);

// btnToggleMode.addEventListener('click', () => {
//     toggleMode()
// })
areaToggleMode.addEventListener('click', () => {
    toggleMode()
})
areaToggleMode2.addEventListener('click', () => {
    toggleMode()
})
// areaToggleMode.addEventListener('click', toggleMode())

function toggleMode(){
    let cek = btnToggleMode.classList.contains('translate-x-7')
    const html = document.querySelector('html')
    // console.log(cek);
    if (!cek) {
        // lakukan dark mode
        // btnToggleMode.classList.remove('left-0');
        
        document.querySelector('#text-oslab-hero').classList.remove('text-oslab')
        document.querySelector('#text-oslab-hero').classList.add('text-oslab-dark')
        document.querySelector('#text-oslab-whatcanido').classList.remove('text-oslab-whatcanido')
        document.querySelector('#text-oslab-whatcanido').classList.add('text-oslab-whatcanido-dark')

        btnToggleMode.classList.remove('translate-x-0');
        btnToggleMode.classList.add('translate-x-7');
        btnToggleMode2.classList.remove('translate-y-0');
        btnToggleMode2.classList.add('translate-y-7');

        icons[0].classList.remove('opacity-0')
        icons[1].classList.add('opacity-0')
        icons2[0].classList.remove('opacity-0')
        icons2[1].classList.add('opacity-0')

        
        
        btnSlideChange.forEach(el => {
            el.classList.remove('btn__slide');
            el.classList.add('btn__slide_submit');
        })

        btnContentChange.forEach(el => {
            el.classList.remove('btn__content');
            el.classList.add('btn__content_submit');
        })

        html.classList.remove('light')
        localStorage.setItem('theme', 'dark')
    } else {
        // lakukan light mode
        document.querySelector('#text-oslab-hero').classList.remove('text-oslab-dark')
        document.querySelector('#text-oslab-hero').classList.add('text-oslab')
        document.querySelector('#text-oslab-whatcanido').classList.remove('text-oslab-whatcanido-dark')
        document.querySelector('#text-oslab-whatcanido').classList.add('text-oslab-whatcanido')

        btnToggleMode.classList.remove('translate-x-7');
        btnToggleMode.classList.add('translate-x-0');
        btnToggleMode2.classList.remove('translate-y-7');
        btnToggleMode2.classList.add('translate-y-0');

        icons[0].classList.add('opacity-0')
        icons[1].classList.remove('opacity-0')
        icons2[0].classList.add('opacity-0')
        icons2[1].classList.remove('opacity-0')
        html.classList.remove('dark')
        localStorage.setItem('theme', 'light')
        // btnToggleMode.classList.add('left-0');

        btnSlideChange.forEach(el => {
            el.classList.remove('btn__slide_submit');
            el.classList.add('btn__slide');
        })
        
        btnContentChange.forEach(el => {
            el.classList.remove('btn__content_submit');
            el.classList.add('btn__content');
        })
    }
    document.querySelector('html').classList.add(localStorage.getItem('theme'))

}

// scroll behavior to smoth 

window.addEventListener('scroll', function(){
    let value = window.scrollY
    let scroll = document.querySelector('.scroll-smoth')
    scroll.classList.toggle('active-up', value > 500)

    let text_oslab_hero = document.querySelector('#text-oslab-hero') 
    let line_hero = document.querySelector('#line-hero') 
    text_oslab_hero.style.top = value * 0.5+'px'
    // line_hero.style.top = value * 4+'px'
    
})

function toTop(){
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
}

let conatiner_3 = document.querySelector('#box-intersection')
let lazy = document.querySelectorAll('[data-lazy]')

const lazy_container3 = new IntersectionObserver(entries => {
    console.log(entries);
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.querySelector('#boxs-frontend div').classList.remove('inactive-box')
            entry.target.querySelector('#boxs-frontend div').classList.add('active-box')
            entry.target.querySelector('#boxs-backend div').classList.remove('inactive-box')
            entry.target.querySelector('#boxs-backend div').classList.add('active-box')
        }else{
            entry.target.querySelector('#boxs-frontend div').classList.remove('active-box')
            entry.target.querySelector('#boxs-frontend div').classList.add('inactive-box')
            entry.target.querySelector('#boxs-backend div').classList.remove('active-box')
            entry.target.querySelector('#boxs-backend div').classList.add('inactive-box')
        }
    })
})

const lazy_container4 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        let attribute = entry.target.getAttribute('data-lazy')
        
        // console.log(entry);
        if (entry.isIntersecting) {
            
            if (attribute == 'fade-in') {
                entry.target.classList.add('fade-in')
            }
            if(attribute == 'fade-right'){
                entry.target.classList.add('fade-right')
            }
            if(attribute == 'fade-left'){
                entry.target.classList.add('fade-left')
            }
        }else{
            entry.target.classList.remove('fade-in')
            entry.target.classList.remove('fade-right')
            entry.target.classList.remove('fade-left')
        }
    })
}, {
    rootMargin: '200px'
})

lazy_container3.observe(conatiner_3)
lazy.forEach(el => {
    lazy_container4.observe(el)
})

// mailto on submit bottom right
function toParams(data_js) {
    var form_data = [];
    for ( var key in data_js ) {
        form_data.push(encodeURIComponent(key) + "=" + encodeURIComponent(data_js[key]));
    }

    return form_data.join("&");
}

let form = document.querySelector('.form-contact')
let name = form.querySelector('[name=name]')
let email = form.querySelector('[name=email]')
let subject = form.querySelector('[name=subject]')
let body = form.querySelector('[name=message]')

form.addEventListener('submit', e => {
    e.preventDefault()
    // alert(name)
    let data_email = {
        subject: subject.value,
        body : body.value
    } 
    // console.log(subject, text);
    // console.log(data_email);
    let params = toParams(data_email)
    window.open(`mailto:sayidinaahmadalqososyi@gmail.com?`+params);
})
// /mailto on submit bottom right

// menu nav toggle
let hamburgerMenu = document.querySelector('.hamburger-menu input')
let menuNav = document.querySelector('.menu-nav')

function toggleHamburger(){
    if (hamburgerMenu.checked) {
        // alert()
        menuNav.classList.add('menu-nav-show')
    }else{
        menuNav.classList.remove('menu-nav-show')
    }
}

// /menu nav toggle