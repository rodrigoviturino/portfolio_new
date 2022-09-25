
/*  ATIVAR MODAL */
let modalHome = document.querySelector('#home #btn-banner');
let btnModalClose = document.querySelector('#modal-home .btn-close');

function activeModalHome(){
  modalHome.addEventListener('click', function(e){
    e.preventDefault();
    document.querySelector('#modal-home').classList.add('activeModalHome');
  });

  btnModalClose.addEventListener('click', function(e){
    e.preventDefault();
    document.querySelector('#modal-home').classList.toggle('activeModalHome');
  })
}

activeModalHome();

/*  end ATIVAR MODAL */



let arrow = document.querySelector('.title-js');

arrow.addEventListener('click', function(){
    document.querySelector('.block-skills__menu__wrapper__subMenu').classList.toggle('ativo');
});


btn = document.querySelector('.btn');
console.log(btn);



/** Menu Mobile */
  /** Ativar Menu */
  let btn_menu_mobile = document.querySelector('.menu-mobile-js');
  console.log(btn_menu_mobile);

  btn_menu_mobile.addEventListener('click', function(e){
      e.preventDefault();
      document.querySelector('.header__main__wrapper').classList.add('ativarMenu');
      document.querySelector('.menu-close-js').classList.add('.menu-close');
  });
  /** end Ativar Menu */

/** Close Menu */
  let btn_menu_close_mobile = document.querySelector('.menu-close-js');
  btn_menu_close_mobile.addEventListener('click', function(e){
      e.preventDefault();

      document.querySelector('.header__main__wrapper').classList.toggle('ativarMenu');
  })
/** end Close Menu */

/** end Menu Mobile */


/** Navegação por Tab */
const tabMenu = document.querySelectorAll('.js-tabmenu li');
const tabContent = document.querySelectorAll('.js-tabcontent section');

if(tabMenu.length && tabContent.length) {

    tabContent[0].classList.add('activeContent');

    function activeTab(index) {

        tabContent.forEach( (section, index) => {
            section.classList.remove('activeContent');       
        });

        tabContent[index].classList.add('activeContent');
    }

    tabMenu.forEach( (itemMenu, index) => {
        itemMenu.addEventListener('click', (event) => {
            event.preventDefault();
            activeTab(index);
        });
    });
}

/** end Navegação por Tab */



$('.responsive').slick({
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    arrows:false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          dots: false,
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
            dots: false,
            slidesToShow: 2,
            slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
            dots: false,
            infinite: true,
            speed: 300,
            slidesToShow: 1,
            slidesToScroll: 1,
            adaptiveHeight: true
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object

    ]
  });
      

  $('.one-time').slick({
    dots: false,
    arrows: false,
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    adaptiveHeight: true,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: false,
            dots: false
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
              dots: false,
              infinite: false,
              speed: 300,
              arrows: false,
              slidesToShow: 1,
              adaptiveHeight: true
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
  
      ]
  });

  $(document).ready(function(){
    $('.single-item').slick({
      arrows: true,
      dots: false,
      slidesToShow: 3,
      slidesToScroll:1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: false,
            dots: false
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
              dots: false,
              infinite: false,
              speed: 300,
              arrows: false,
              slidesToShow: 1,
              adaptiveHeight: true
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
  
      ]
    });
  })



/** Simulando Click no Filtro All */
    let filters = document.querySelectorAll(".portfolio__filter__header .portfolio__filter__header__group__item");
    // filters[3].classList.add('filter-ativo');

      filters[3].classList.add('filter-ativo');
  
      function activeFilter(index) {
  
          filters.forEach( (section, index) => {
              section.classList.remove('filter-ativo');       
          });
  
          filters[index].classList.add('filter-ativo');
      }
  
      filters.forEach( (filter, index) => {
          filter.addEventListener('click', (event) => {
              event.preventDefault();
              activeFilter(index);
          });
      });
    


    
/** end Simulando Click no Filtro All */


/* MENU STICKY */
let menu = document.querySelector('.header');
let headerClassList = menu.classList;
console.log(headerClassList);


window.addEventListener('scroll', () => {
    if (window.scrollY >= 100) {
        if(!headerClassList.contains('scrollHide')) {
            headerClassList.add('scrollHide')
        }
    } else {
        headerClassList.remove('scrollHide');
    }
});
/* END MENU STICKY */

/* SCROLL MENU SUAVE */
$('.header__main__wrapper__menu a').click( function(event) {
  event.preventDefault();
  let id = $(this).attr('href'),
    targetOffset = $(id).offset().top,
    menuHeight = $('.header').innerHeight();

  $('html, body').animate({
    scrollTop: targetOffset - menuHeight
  }, 1000)

  $('.header__main__wrapper').removeClass('ativarMenu');
  

})
/* END SCROLL MENU SUAVE */


/* HOME - PORTFOLIO FILTER */

var $grid = $('.grid').isotope({
  itemSelector: '.grid-item',
  layoutMode: 'fitRows'
});

$('.filter li').on('click', function(e){
  e.preventDefault();
  var value = $(this).attr('data-name');
  
  $grid.isotope({
      filter: value,
      animationOptions: {
          duration: 750,
          easing: 'linear',
          queue: false
      }
  });
  
});


// Portfolio isotope filter
  $(window).load(function() {
  var $container = $('.portfolio-items');
  $container.isotope({
      filter: '*',
      animationOptions: {
          duration: 750,
          easing: 'linear',
          queue: false
      }
  });
  $('.cat a').click(function() {
      $('.cat .active').removeClass('active');
      $(this).addClass('active');
      var selector = $(this).attr('data-filter');
      $container.isotope({
          filter: selector,
          animationOptions: {
              duration: 750,
              easing: 'linear',
              queue: false
          }
      });
      return false;
  });

});
/* end HOME - PORTFOLIO FILTER */