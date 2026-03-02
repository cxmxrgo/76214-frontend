// Fetch function
async function fetchCountriesData() {
    try {
        const response = await fetch("https://restcountries.com/v3.1/region/europe");
        if (!response.ok) {
            console.log(`Network response was not ok - Status: ${response.status}`);
            return;
        }
        const data = await response.json();
        displayCountriesData(data);
    } catch (error) {
        const container = document.getElementById("remote-data-container");
        container.innerHTML = '<p class="error">⚠️ Failed to load data. Please try again later.</p>';   
        console.error(`Error fetching data: ${error}`);
    }
}

// global storage for characters so search can filter
let rmChars = [];

// Fetch Rick & Morty characters
async function fetchRickMortyData() {
    try {
        const response = await fetch("https://rickandmortyapi.com/api/character");
        if (!response.ok) {
            console.log(`Network response was not ok - Status: ${response.status}`);
            return;
        }
        const data = await response.json();
        console.log(data); // inspect structure
        rmChars = data.results;
        displayRickMortyData(rmChars);
    } catch (error) {
        const container = document.getElementById("remote-data-container");
        container.innerHTML = '<p class="error">⚠️ Failed to load data. Please try again later.</p>';   
        console.error(`Error fetching data: ${error}`);
    }
}

// Display function
function displayCountriesData(countriesArray) {
    const container = document.getElementById("remote-data-container");
    let htmlOutput = "";

    // summary above grid
    const summary = `<p>Showing ${countriesArray.length} countries in Europe.</p>`;

    countriesArray.forEach(country => {
       htmlOutput += `
          <div style="border: 1px solid #ccc; padding: 12px; border-radius: 6px;"><img src="${country.flags.png}" alt="Flag of ${country.name.common}" width="50">
             <p>
                <b>${country.name.common}</b><br>
                Capital: ${country.capital[0]}<br>
                Population: ${country.population.toLocaleString()}<br>            
                Region: ${country.region}
             </p>
          </div>
        `;
    });

    container.innerHTML = summary + htmlOutput;
}

// Fetch users function
async function fetchUsersData() {
    try {
        // Intentionally use a non-existent endpoint to demonstrate 404 handling
        const response = await fetch("data/wrong-file.json");
        if (!response.ok) {
            console.log(`Network response was not ok - Status: ${response.status}`);
            return;
        }
        const data = await response.json();
        displayUsersData(data.results);
    } catch (error) {
        const container = document.getElementById("remote-data-container");
        container.innerHTML = '<p class="error">⚠️ Failed to load data. Please try again later.</p>';   
        console.error(`Error fetching data: ${error}`);
    }
}

// Display Rick & Morty characters
function displayRickMortyData(rmArray) {
    const container = document.getElementById("remote-data-container");
    let htmlOutput = "";

    rmArray.forEach(character => {
        htmlOutput += `
        <div style="border: 1px solid #ccc; padding: 12px; border-radius: 6px;">
            <img src="${character.image}" alt="${character.name}" width="50">
            <p>
              <b>${character.name}</b><br>
              Status: ${character.status}
            </p>
        </div>
        `;
    });
    container.innerHTML = htmlOutput;
}

// Display users function
function displayUsersData(usersArray) {
    const container = document.getElementById("remote-data-container");
    let htmlOutput = "";

    usersArray.forEach(user => {
        htmlOutput += `
        <div style="border: 1px solid #ccc; padding: 12px; border-radius: 6px;">
        <img src="${user.picture.thumbnail}" alt="Picture of ${user.name.first} ${user.name.last}" width="50">
            <p>
            <b>${user.name.first} ${user.name.last}</b><br>
            Email: ${user.email}<br>
            Location: ${user.location.city}, ${user.location.country}
            </p>
            </div>
        `;
    });
    container.innerHTML = htmlOutput;
}

// Event listener on the parent container
document.getElementById("button-container").addEventListener("click", function(e) {
    const searchContainer = document.getElementById("search-container");
    if (e.target.id === "btn-countries") {
        fetchCountriesData();
        document.getElementById("search-input").value = "";
        rmChars = [];
        searchContainer.style.display = "none";
    } else if (e.target.id === "btn-users") {
        fetchUsersData();   
        document.getElementById("search-input").value = "";
        rmChars = [];
        searchContainer.style.display = "none";
    } else if (e.target.id === "btn-rickmorty") {
        fetchRickMortyData();
        searchContainer.style.display = "block";
    }
});

// live search for Rick & Morty names
const searchInput = document.getElementById("search-input");
searchInput.addEventListener("input", function(e) {
    const term = e.target.value.toLowerCase();
    if (rmChars.length) {
        const filtered = rmChars.filter(c => c.name.toLowerCase().includes(term));
        displayRickMortyData(filtered);
    }
});
