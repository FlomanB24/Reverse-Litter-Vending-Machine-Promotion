// AOS
AOS.init({
  delay: 250,
});

// NAVBAR
let nav = document.querySelector('.navbar');
window.onscroll = function () {
  var scrollPoint = window.scrollY;
  if (scrollPoint > 500) {} else if (scrollPoint > 150) {
    nav.classList.add('navbar-white');
  } else {
    nav.classList.remove('navbar-white');
  }
}


// TYPED JS
const typed = new Typed('#intro-info', {
  strings: ['tukar sampahmu dengan uang', 'kita jaga alam nusantara'],
  smartBackspace: true,
  typeSpeed: 50,
  backSpeed: 30,
  loop: true,
  startDelay: 1000,

});

// PARTICLE JS
particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 38,
      "density": {
        "enable": true,
        "value_area": 710.2665077774184
      }
    },
    "color": {
      "value": "#ac8f8f"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.5,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 3,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 40,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#ac8f8f",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 6,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "repulse"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 400,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
});