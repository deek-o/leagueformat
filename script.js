  document.addEventListener('DOMContentLoaded', function () {
    const continentItems = document.querySelectorAll('#continentMenu .dropdown-item');

         continentItems.forEach(item => {
      item.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent default link behavior

        // Do any other action, e.g., enable League dropdown
        document.getElementById('btnCountry').removeAttribute('disabled');
      });
    });
     });

     document.addEventListener('DOMContentLoaded', function () {
    const countryItems = document.querySelectorAll('#countryMenu .dropdown-item');

         countryItems.forEach(item => {
      item.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent default link behavior

        // Do any other action, e.g., enable League dropdown
        document.getElementById('btnLeague').removeAttribute('disabled');
      });
    });
     });