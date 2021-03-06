let btnBurgerMenu = document.querySelector('.nav__btn');
btnBurgerMenu.addEventListener('click', activeBurgerMenu);
let linkBurgerMenu = document.querySelectorAll('.burger-menu__links'), 
    about = document.querySelector('.about'), 
    services = document.querySelector('.services'),
    skills = document.querySelector('.skills'),
    contact = document.querySelector('.contact'),
    work = document.querySelector('.work'),
    btnAboutme = document.querySelector('.btn__aboutMe'), 
    nav = document.querySelector('.nav'), 
    card = document.querySelector('.card'), 
    Dost = false;
document.querySelector('.about__img').addEventListener('click', () => {
  if (!Dost) {
    card.classList.add('card_active');
    Dost = true;
  }
document.querySelector('.card__closed').addEventListener('click', () => {
  card.classList.remove('card_active')
})
}) 
function activeBurgerMenu() {
  document.querySelector('.nav__menu').classList.toggle('nav__menu-active')
  btnBurgerMenu.classList.toggle('nav__btn-active')
}
function scrollTo(element){
  window.scroll({
    left:0, 
    top: element.offsetTop - nav.offsetHeight,
    behavior: 'smooth'
  })
}
function btnAboutmeTo(){
  scrollTo(about)
}
function addEvLink(){
  document.querySelector('.nav__menu').classList.toggle('nav__menu-active')
  btnBurgerMenu.classList.toggle('nav__btn-active')
  if (this.classList.contains('l1')) {
    scrollTo(about)
  } else if(this.classList.contains('l2')){
    scrollTo(services)
  } else if (this.classList.contains('l3')) {
    scrollTo(skills)
  } else if (this.classList.contains('l4')) {
    scrollTo(contact)
  } else if (this.classList.contains('l5')) {
    scrollTo(work)
  }
}
for (var i = 0; i < linkBurgerMenu.length; i++) {
  linkBurgerMenu[i].addEventListener('click', addEvLink)
}
btnAboutme.addEventListener('click', btnAboutmeTo)


















//============ Chart skilss =============

var options = {
  series: [87],
  chart: {
    height: 190,
    type: 'radialBar',
  },
  plotOptions: {
    radialBar: {
      hollow: {
        size: '70%',
      }
    },
  },
  labels: ['HTML5'],
};
var options2 = {
  series: [83],
  chart: {
    height: 190,
    type: 'radialBar',
  },
  plotOptions: {
    radialBar: {
      hollow: {
        size: '70%',
      }
    },
  },
  labels: ['CSS'],
};
var options3 = {
  series: [90],
  chart: {
    height: 190,
    type: 'radialBar',
  },
  plotOptions: {
    radialBar: {
      hollow: {
        size: '70%',
      }
    },
  },
  labels: ['JS'],
};
var options4 = {
  series: [73],
  chart: {
    height: 190,
    type: 'radialBar',
  },
  plotOptions: {
    radialBar: {
      hollow: {
        size: '70%',
      }
    },
  },
  labels: ['PHP'],
};

var cPHP = new ApexCharts(document.querySelector('.skills__gPHP'), options4);
var cJS = new ApexCharts(document.querySelector('.skills__gJS'), options3);
var cCSS = new ApexCharts(document.querySelector('.skills__gCSS'), options2);
var cHTML = new ApexCharts(document.querySelector(".skills__gHTML"), options);
cCSS.render();
cHTML.render();
cJS.render();
cPHP.render();

