// Authorization:
//   "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmY1OWRjNDc5YzQ1ZjAwMTU2OWI0N2YiLCJpYXQiOjE3MjczNzQ0NjUsImV4cCI6MTcyODU4NDA2NX0.Ay9ad_jhcMNA2IDb1DeNwmg8wQxvK6m_Hdbqr264Y3s"////
const url = "https://striveschool-api.herokuapp.com/api/product/";
const addressId = new URLSearchParams(location.search);
const sockId = addressId.get("sockId");

if (sockId) {
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
        throw new Error("Errore nella response");
      }
    })
    .then((singleSock) => {
      const putBtn = document.createElement("button");
      const deleteBtn = document.createElement("button");
      putBtn.innerText = "Modifica";
      deleteBtn.innerText = "Elimina";
      deleteBtn.type = "button";
      putBtn.type = "button";
      putBtn.classList.add("btn", "btn-warning");
      deleteBtn.classList.add("btn", "btn-danger");

      sockForm.appendChild(putBtn);
      sockForm.appendChild(deleteBtn);

      deleteBtn.addEventListener("click", deleteSock);
      putBtn.addEventListener("click", putSock);

      const name = document.getElementById("name");
      const imageUrl = document.getElementById("imageUrl");
      const description = document.getElementById("description");
      const brand = document.getElementById("brand");
      const price = document.getElementById("price");

      name.value = singleSock.name;
      imageUrl.src = singleSock.imageUrl;
      description.value = singleSock.description;
      brand.value = singleSock.brand;
      price.value = singleSock.price;
    })
    .catch((err) => {
      console.log("Errore dal server", err);
    });
}

class Sock {
  constructor(_name, _description, _brand, _price, _imageUrl) {
    this.name = _name;
    this.description = _description;
    this.brand = _brand;
    this.price = _price;
    this.imageUrl = _imageUrl;
  }
}

const loginBtn = document.getElementById("login-btn");
const hero = document.getElementById("hero");
const loginContainer = document.getElementById("login-container");
loginBtn.addEventListener("click", function (e) {
  e.preventDefault();
  loginContainer.classList.add("d-none");
  hero.classList.remove("d-none");
});

const sockForm = document.getElementById("sock-form");
sockForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const description = document.getElementById("description").value;
  const brand = document.getElementById("brand").value;
  const price = document.getElementById("price").value;
  const imageUrl = document.getElementById("imageUrl").src;
  const newSock = new Sock(name, description, brand, price, imageUrl);

  fetch(url, {
    method: "POST",
    body: JSON.stringify(newSock),
    headers: {
      "Content-type": "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmY1OWRjNDc5YzQ1ZjAwMTU2OWI0N2YiLCJpYXQiOjE3MjczNzQ0NjUsImV4cCI6MTcyODU4NDA2NX0.Ay9ad_jhcMNA2IDb1DeNwmg8wQxvK6m_Hdbqr264Y3s",
    },
  })
    .then((response) => {
      if (response.ok) {
        alert("Calzino salvato");
        sockForm.reset();
      } else {
        throw new Error("Errore nell'aggiunta dell'elemento");
      }
    })
    .catch((err) => {
      console.log("Errore", err);
    });
});

const putSock = function () {
  const name = document.getElementById("name").value;
  const description = document.getElementById("description").value;
  const brand = document.getElementById("brand").value;
  const price = document.getElementById("price").value;
  const imageUrl = document.getElementById("imageUrl").src;
  const newSock = new Sock(name, description, brand, price, imageUrl);
  fetch(url + "/" + sockId, {
    method: "PUT",
    body: JSON.stringify(newSock),
    headers: {
      "Content-type": "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmY1OWRjNDc5YzQ1ZjAwMTU2OWI0N2YiLCJpYXQiOjE3MjczNzQ0NjUsImV4cCI6MTcyODU4NDA2NX0.Ay9ad_jhcMNA2IDb1DeNwmg8wQxvK6m_Hdbqr264Y3s",
    },
  })
    .then((response) => {
      if (response.ok) {
        alert("Calzino modificato");
        window.location.href = "./shopOnline.html";
      } else {
        throw new Error("Errore nella modifica dell'elemento");
      }
    })
    .catch((err) => {
      console.log("Errore", err);
    });
};
const deleteSock = function () {
  fetch(url + "/" + sockId, {
    method: "DELETE",
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmY1OWRjNDc5YzQ1ZjAwMTU2OWI0N2YiLCJpYXQiOjE3MjczNzQ0NjUsImV4cCI6MTcyODU4NDA2NX0.Ay9ad_jhcMNA2IDb1DeNwmg8wQxvK6m_Hdbqr264Y3s",
    },
  })
    .then((response) => {
      if (response.ok) {
        alert("Calzino eliminato");
        window.location.href = "./shopOnline.html";
      } else {
        throw new Error("Errore nella cancellazione dell'elemento");
      }
    })
    .catch((err) => {
      console.log("Errore", err);
    });
};

//   let methodToUse;
//   if (sockId) {
//     methodToUse = "PUT";
//   } else {
//     methodToUse = "POST";
//   }

//   let urlToUse;
//   if (sockId) {
//     urlToUse = url + "/" + sockId;
//   } else {
//     urlToUse = url;
//   }

//   fetch(urlToUse, {
//     method: methodToUse,
//     body: JSON.stringify(newSock),
//     headers: {
//       "Content-type": "application/json",
//       Authorization:
//         "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmY1OWRjNDc5YzQ1ZjAwMTU2OWI0N2YiLCJpYXQiOjE3MjczNzQ0NjUsImV4cCI6MTcyODU4NDA2NX0.Ay9ad_jhcMNA2IDb1DeNwmg8wQxvK6m_Hdbqr264Y3s",
//       "Content-type": "application/json",
//     },
//   })
//     .then((response) => {
//       if (response.ok) {
//         alert(sockId ? "Calzino modificato con successo" : "Calzino salvato");
//         if (!sockId) {
//           sockForm.reset();
//         } else {
//           window.location.href = "./shopOnline.html";
//         }
//       } else {
//         throw new Error("Errore dalla risposta");
//       }
//     })
//     .catch((err) => {
//       console.log("ERRORE", err);
//     });
