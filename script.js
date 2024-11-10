function get_val(cuurTag) {
    console.log(cuurTag.innerHTML);
    var firstLetter = cuurTag.innerHTML;
    getDataWithLetter(firstLetter);
}

function getDataWithLetter(countname) {
    console.log(countname);

    const productContainer = document.getElementById('product-container');
    productContainer.innerHTML = ''; 

    fetch(`https://restcountries.com/v3.1/all`)
        .then(response => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json();
        })
        .then(result => {
            const filteredCountries = result.filter((country) =>
                country.name.common.startsWith(countname)
            );
            
            filteredCountries.forEach((obj) => {
                const card = document.createElement('div');
                card.classList.add('col-12', 'col-sm-6', 'col-md-4', 'col-lg-3', 'mb-4'); 

                card.innerHTML = `
                    <div class="card h-100">
                        <img src="${obj.flags.png}" class="card-img-top" alt="img">
                        <div class="card-body">
                            <h5 class="card-title">${obj.name.common}</h5>
                        </div>
                    </div>
                `;
                
                productContainer.appendChild(card);
            });
        })
        .catch(error => {
            console.error("Error fetching data:", error);
            alert("An error occurred while fetching data. Please try again.");
        });
}

function getDataWithName(countname) {
    console.log(countname);

    const productContainer = document.getElementById('product-container');
    productContainer.innerHTML = ''; 

    fetch(`https://restcountries.com/v3.1/name/${countname}`)
        .then(response => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json();
        })
        .then(result => {
            result.forEach((obj) => {
                const card = document.createElement('div');
                card.classList.add('col-12', 'col-sm-6', 'col-md-4', 'col-lg-3', 'mb-4'); 

                card.innerHTML = `
                    <div class="card h-100">
                        <img src="${obj.flags.png}" class="card-img-top" alt="img">
                        <div class="card-body">
                            <h5 class="card-title">${obj.name.common}</h5>
                        </div>
                    </div>
                `;
                
                productContainer.appendChild(card);
            });
        })
        .catch(error => {
            console.error("Error fetching data:", error);
            alert("An error occurred while fetching data. Please try again.");
        });
}

document.getElementById('search').onclick = function(ev) {
    ev.preventDefault();
    console.log('TEST');
    var txtdata = document.getElementById('countryName').value;

    console.log(txtdata);
    getDataWithName(txtdata);

    document.getElementById('countryName').value = '';
};

function getAllData() {
    const productContainer = document.getElementById('product-container');
    productContainer.innerHTML = ''; 

    fetch(`https://restcountries.com/v3.1/all`)
        .then(response => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json();
        })
        .then(result => {
            console.log(result);

            result.forEach((obj) => {
                const card = document.createElement('div');
                card.classList.add('col-12', 'col-sm-6', 'col-md-4', 'col-lg-3', 'mb-4'); 

                card.innerHTML = `
                    <div class="card h-100">
                        <img src="${obj.flags.png}" class="card-img-top" alt="img">
                        <div class="card-body">
                            <h5 class="card-title">${obj.name.common}</h5>
                        </div>
                    </div>
                `;
                
                productContainer.appendChild(card);
            });
        })
        .catch(error => {
            console.error("Error fetching data:", error);
            alert("An error occurred while fetching data. Please try again.");
        });
}

document.getElementById('allCountries').onclick = function(ev) {
    ev.preventDefault();
    console.log('test');
    getAllData();
};
