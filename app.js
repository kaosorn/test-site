const navbar = document.querySelector('nav')

const services = document.querySelector('#video-bg')
const navOptions = {}


const navObserver = new IntersectionObserver(function(entries, navObserver){
    entries.forEach(entry => {
        // if(!entry.isIntersecting()) {
        //     navbar.classList.add('nav-scrolled')
        // } else{
        //     navbar.classList.remove('nav-scrolled')

        // }

        if(!entry.isIntersecting) {
            navbar.classList.add('nav-scrolled')
            
        }else{
            navbar.classList.remove('nav-scrolled')
        }

        

        
        
    })
}, navOptions)


navObserver.observe(services)