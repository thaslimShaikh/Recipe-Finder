    document.addEventListener('DOMContentLoaded', () => {
      const modal = document.getElementById('dishModal');
      const modalContent = document.getElementById('modal-body-content');
      const span = document.getElementsByClassName('close-btn')[0];

      document.querySelectorAll('.btn').forEach(button => {
        button.addEventListener('click', () => {
          const contentUrl = button.getAttribute('data-url');
          fetch(contentUrl)
            .then(response => response.text())
            .then(data => {
              modalContent.innerHTML = data;
              modal.style.display = 'block';
              document.body.classList.add('modal-open');
              document.querySelector('.recipe-container').classList.add('blurred-background');
            })
            .catch(error => console.error('Error fetching the recipe:', error));
        });
      });

      span.onclick = () => {
        modal.style.display = 'none';
        document.body.classList.remove('modal-open');
        document.querySelector('.recipe-container').classList.remove('blurred-background');
      };

      window.onclick = event => {
        if (event.target == modal) {
          modal.style.display = 'none';
          document.body.classList.remove('modal-open');
          document.querySelector('.recipe-container').classList.remove('blurred-background');
        }
      };
    });