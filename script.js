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