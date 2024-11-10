  document.getElementById('dietFilter').addEventListener('change', function() {
      const filterValue = this.value;
      const menuItems = document.querySelectorAll('.menu-item');

      menuItems.forEach(item => {
        if (filterValue === 'all' || item.dataset.type.includes(filterValue)) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });
    });
    
  // Handle form submission
  document.getElementById('reservationForm').addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent default form submission

      // Get form values
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const phone = document.getElementById('phone').value;
      const date = document.getElementById('date').value;
      const time = document.getElementById('time').value;

      // Fill modal with user input
      document.getElementById('confirmName').textContent = name;
      document.getElementById('confirmEmail').textContent = email;
      document.getElementById('confirmPhone').textContent = phone;
      document.getElementById('confirmDate').textContent = date;
      document.getElementById('confirmTime').textContent = time;

      // Show modal
      const modal = new bootstrap.Modal(document.getElementById('confirmationModal'));
      modal.show();
  });

  // Function to send confirmation email using Formspree
  function sendEmail() {
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const phone = document.getElementById('phone').value;
      const date = document.getElementById('date').value;
      const time = document.getElementById('time').value;

      const emailContent = `
      New Reservation:
      Name: ${name}
      Email: ${email}
      Phone: ${phone}
      Date: ${date}
      Time: ${time}
    `;

      // Trigger email sending via Formspree (this action is already handled via the form submission to Formspree)
      alert('Confirmation email will be sent to you shortly!');
  }