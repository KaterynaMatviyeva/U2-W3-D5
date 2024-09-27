//https://striveschool-api.herokuapp.com/api/product/
//key
// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmY1OWRjNDc5YzQ1ZjAwMTU2OWI0N2YiLCJpYXQiOjE3MjczNzI3NDAsImV4cCI6MTcyODU4MjM0MH0.VahCk8ut_lNHF0gPYt1JEAcHVhKH5X7y11ywg1VLVuk
//"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmY1OWRjNDc5YzQ1ZjAwMTU2OWI0N2YiLCJpYXQiOjE3MjczNzI3NDAsImV4cCI6MTcyODU4MjM0MH0.VahCk8ut_lNHF0gPYt1JEAcHVhKH5X7y11ywg1VLVuk";

const url = "https://striveschool-api.herokuapp.com/api/product/";

const getSock = function () {
  fetch(url, {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmY1OWRjNDc5YzQ1ZjAwMTU2OWI0N2YiLCJpYXQiOjE3MjczNzQ0NjUsImV4cCI6MTcyODU4NDA2NX0.Ay9ad_jhcMNA2IDb1DeNwmg8wQxvK6m_Hdbqr264Y3s",
    },
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Errore dalla response");
      }
    })
    .then((socks) => {
      createsCards(socks);
      //crea le col con la funzione
    })
    .catch((err) => {
      console.log("ERRORE", err);
    });
};

const createsCards = function (socksArray) {
  socksArray.forEach((sock) => {
    const newCol = document.createElement("div");
    newCol.classList.add("col", "col-12", "col-md-4");
    newCol.innerHTML = `
  <div class="card h-100">
  <img src="https://ae01.alicdn.com/kf/S3c898ab91b2e41768189561847a5e7e0q/1-paio-di-calzini-magnetici-a-mano-con-mano-In-mano-mano-mano-creativa-attrazione-magnetica.jpg" alt="sock-logo">
  <div class="card-body d-flex flex-column">
    <h5 class="card-title">${sock.name}</h5>
     <p class="card-text text-success">${sock.brand}</p>
     <p class="card-text fst-italic flex-grow-1">${sock.description}</p>
     <p class="card-text">${sock.price}$</p>
     <a href="#" class="btn btn-outline-success mb-1">Completa la coppia 💚</a>
     <a href="./details.html?sockId=${sock._id}" class="btn btn-outline-success">Dettagli del calzino</a>
  </div>
</div>
`;
    const mainRow = document.getElementById("main-row");
    mainRow.appendChild(newCol);
  });
};

getSock();
