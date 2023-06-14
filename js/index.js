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

window.addEventListener('scroll', function() {
  const navbar = document.getElementById('navbar');
  if (window.scrollY >= 300) { /* если пользователь уже прокрутил на 50px и более */
    navbar.classList.add('navbar-scrolled'); /* добавляем класс для изменения цвета фона навигационной панели */
  } else {
    navbar.classList.remove('navbar-scrolled'); /* удаляем класс, чтобы вернуть начальный цвет фона навигационной панели */
  }
});