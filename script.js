const dropdown1 = document.getElementById('btnContinent');
const dropdown2 = document.getElementById('btnCountry');
const dropdown3 = document.getElementById('btnLeague');

dropdown1.addEventListener('change', function () {
      if (this.value) {
        dropdown2.disabled = false;
      } else {
        dropdown2.disabled = true;

      }
    });

    dropdown2.addEventListener('change', function () {
      if (this.value) {
        dropdown2.disabled = false;
      } else {
        dropdown3.disabled = true;

      }
    });