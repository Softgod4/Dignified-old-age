document.querySelector('a').addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });


  function openModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "block";
    
    var span = document.getElementsByClassName("close")[0];
    span.onclick = function() {
      modal.style.display = "none";
    }

    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }
  }
  function openModal2() {
    var modal = document.getElementById("myModal2");
    modal.style.display = "block";
    
    var span = document.getElementsByClassName("close1")[0];
    span.onclick = function() {
      modal.style.display = "none";
    }

    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }
  }

// window.addEventListener('scroll', function() {
//   const navbar = document.getElementById('navbar');
//   if (window.scrollY >= 300) { /* если пользователь уже прокрутил на 50px и более */
//     navbar.classList.add('navbar-scrolled'); /* добавляем класс для изменения цвета фона навигационной панели */
//   } else {
//     navbar.classList.remove('navbar-scrolled'); /* удаляем класс, чтобы вернуть начальный цвет фона навигационной панели */
//   }
// });




window.addEventListener('scroll', function() {
  var navbar = document.getElementsByClassName('navbar-container')[0];
  if (window.scrollY > 0) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});


$('.slider').slick({
  dots: false,
  infinite: false,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 4,
  prevArrow: '<button type="button" class="slick-prev"><img src="img/sec4/icon_arrow copy.png" /></button>',
  nextArrow: '<button type="button" class="slick-next"><img src="img/sec4/icon_arrow copy.png" /></button>',
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
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
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});


$('.slider2').slick({
  dots: false,
  infinite: false,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 3,
  prevArrow: '<button type="button" class="slick-prev"><img src="img/sec4/icon_arrow copy.png" /></button>',
  nextArrow: '<button type="button" class="slick-next"><img src="img/sec4/icon_arrow copy.png" /></button>',
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
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
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

$('.slider3').slick({
  dots: false,
  infinite: false,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow: '<button type="button" class="slick-prev"><img src="img/sec4/icon_arrow copy.png" /></button>',
  nextArrow: '<button type="button" class="slick-next"><img src="img/sec4/icon_arrow copy.png" /></button>',
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
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
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});