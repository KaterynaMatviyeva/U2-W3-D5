// Authorization:
//   "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmY1OWRjNDc5YzQ1ZjAwMTU2OWI0N2YiLCJpYXQiOjE3MjczNzQ0NjUsImV4cCI6MTcyODU4NDA2NX0.Ay9ad_jhcMNA2IDb1DeNwmg8wQxvK6m_Hdbqr264Y3s"////
const url = "https://striveschool-api.herokuapp.com/api/product/";
const addressId = new URLSearchParams(location.search);
const sockId = addressId.get("sockId");

const getSingleSock = function () {
  fetch(url + "/" + sockId, {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmY1OWRjNDc5YzQ1ZjAwMTU2OWI0N2YiLCJpYXQiOjE3MjczNzQ0NjUsImV4cCI6MTcyODU4NDA2NX0.Ay9ad_jhcMNA2IDb1DeNwmg8wQxvK6m_Hdbqr264Y3s",
    },
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("La tua richiesta non è andata a buon fine");
      }
    })
    .then((singleSock) => {
      sockDetails(singleSock);
    })
    .catch((err) => {
      alert("ERROR FROM SERVER");
      console.log("ERROR", err);
    });
};

const sockDetails = function (sock) {
  const detailRow = document.getElementById("detail-row");
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
   <a  href="./backOffice.html?sockId=${sock._id}" class="btn btn-outline-success mb-1">Modifica</a>
   <a   href="./backOffice.html?sockId=${sock._id}" class="btn btn-outline-success">Elimina calzino</a>
</div>
</div>
`;
  detailRow.appendChild(newCol);
};

getSingleSock();
