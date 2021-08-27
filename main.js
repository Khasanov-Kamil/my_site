let btnBurgerMenu = document.querySelector('.nav__btn');
btnBurgerMenu.addEventListener('click', activeBurgerMenu);

function activeBurgerMenu() {
  document.querySelector('.nav__menu').classList.toggle('nav__menu-active')
  btnBurgerMenu.classList.toggle('nav__btn-active')
}


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

