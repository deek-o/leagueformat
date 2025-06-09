const regionSelect = document.getElementById("regionSelect");
const countrySelect = document.getElementById("countrySelect");
const leagueSelect = document.getElementById("leagueSelect");

 
  regionSelect.addEventListener('change', function() {
  countrySelect.innerHTML = '<option value="">Select Country</option>';
  countrySelect.removeAttribute('disabled');
  const selectedRegion = this.value.trim();
  console.log(selectedRegion + " is the selected region!");
  const countries = Object.keys(data[selectedRegion]);
  console.log("Countries is: ", countries);

  countries.forEach((country) => {
    console.log("Country is: " + country);
    const option = document.createElement("option");
    option.value = country;
    option.textContent = country;
    countrySelect.appendChild(option);
  });
  });

   document.getElementById('countrySelect').addEventListener('change', function() {
   document.getElementById('leagueSelect').removeAttribute('disabled');
  });

  