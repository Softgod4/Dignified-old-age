var hideButton1 = document.getElementById('hideButton1');
var hideButton2 = document.getElementById('hideButton2');
var hideButton3 = document.getElementById('hideButton3');
var hideButton4 = document.getElementById('hideButton4');
var cardElements = document.getElementsByClassName('sec_04__card');

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




  function openModal3() {
    var modal = document.getElementById("myModal3");
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




  function openModal4() {
    var modal = document.getElementById("myModal4");
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



function openModal5() {
  var modal = document.getElementById("secret__modal");
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


$('.slider5').slick({
  dots: false,
  infinite: false,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow: '<button type="button" class="slick-prev"><img src="img/sec4/icon_arrow copy.png" style="width: 20px; height: 15px"/></button>',
  nextArrow: '<button type="button" class="slick-next"><img src="img/sec4/icon_arrow copy.png" style="width: 20px; height: 15px"/></button>',
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
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
















// function hideCardsExcept(className) {
//   let cards1 = document.getElementsByClassName('.cards1');
//   let cards2 = document.getElementsByClassName('.cards2');
//   let cards3 = document.getElementsByClassName('.cards3');
//   let cards4 = document.getElementsByClassName('.cards4');

//   if (className === 1) {
//     cards1.forEach(function(card) {
//       card.style.display = "block";
//     });
//     cards2.forEach(function(card) {
//       card.style.display = "none";
//     });
//     cards3.forEach(function(card) {
//       card.style.display = "none";
//     });
//     cards4.forEach(function(card) {
//       card.style.display = "none";
//     });
//   }

//   if (className === 2) {
//     cards1.forEach(function(card) {
//       card.style.display = "none";
//     });
//     cards2.forEach(function(card) {
//       card.style.display = "block";
//     });
//     cards3.forEach(function(card) {
//       card.style.display = "none";
//     });
//     cards4.forEach(function(card) {
//       card.style.display = "none";
//     });
//   }

//   if (className === 4) {
//     cards1.forEach(function(card) {
//       card.style.display = "none";
//     });
//     cards2.forEach(function(card) {
//       card.style.display = "none";
//     });
//     cards3.forEach(function(card) {
//       card.style.display = "none";
//     });
//     cards4.forEach(function(card) {
//       card.style.display = "block";
//     });
//   }

// }
function hideCardsExcept(className) {
  let cards1 = document.getElementsByClassName('cards1');
  let cards2 = document.getElementsByClassName('cards2');
  let cards3 = document.getElementsByClassName('cards3');
  let cards4 = document.getElementsByClassName('cards4');

  if (className === 1) {
    Array.from(cards1).forEach(function(card) {
      card.style.display = "flex";
    });
    Array.from(cards2).forEach(function(card) {
      card.style.display = "none";
    });
    Array.from(cards3).forEach(function(card) {
      card.style.display = "none";
    });
    Array.from(cards4).forEach(function(card) {
      card.style.display = "none";
    });
  }

  if (className === 2) {
    Array.from(cards1).forEach(function(card) {
      card.style.display = "none";
    });
    Array.from(cards2).forEach(function(card) {
      card.style.display = "flex";
    });
    Array.from(cards3).forEach(function(card) {
      card.style.display = "none";
    });
    Array.from(cards4).forEach(function(card) {
      card.style.display = "none";
    });
  }

  if (className === 3) {
    Array.from(cards1).forEach(function(card) {
      card.style.display = "none";
    });
    Array.from(cards2).forEach(function(card) {
      card.style.display = "none";
    });
    Array.from(cards3).forEach(function(card) {
      card.style.display = "flex";
    });
    Array.from(cards4).forEach(function(card) {
      card.style.display = "none";
    });
  }

  if (className === 4) {
    Array.from(cards1).forEach(function(card) {
      card.style.display = "none";
    });
    Array.from(cards2).forEach(function(card) {
      card.style.display = "none";
    });
    Array.from(cards3).forEach(function(card) {
      card.style.display = "none";
    });
    Array.from(cards4).forEach(function(card) {
      card.style.display = "flex";
    });
  }
}