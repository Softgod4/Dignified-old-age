document.querySelector('a').addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });


  function openModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "block";
    
    // Обработчик для закрытия модального окна при клике на крестик
    var span = document.getElementsByClassName("close")[0];
    span.onclick = function() {
      modal.style.display = "none";
    }

    // Обработчик для закрытия модального окна при клике вне его области
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }
  }
