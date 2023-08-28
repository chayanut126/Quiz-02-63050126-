//ฉบับไม่มั่นใจว่าเชื่อม js (ลิ้งค์กับ js ไม่ได้)
const productsContainer = document.querySelector(".products-container");
const ourteamContainer = document.querySelector(".ourteam-container");
const searchField = document.querySelector(".search-field ");

const displayProducts = (arrayData) => {
  productsContainer.innerHTML = "";

  arrayData.forEach((element) => {
    productsContainer.insertAdjacentHTML(
      "beforeend",
      `<div class="product-card">
            <img
              src="${element.thumbnail}"
              alt="img"
            />
            <div class="card-content">
              <h3>${element.title}</h3>
              <p>${element.description}</p>
            </div>
            <div class="card-footer">
              <div>${element.rating}</div>
              <div>$ ${element.price}</div>
            </div>
          </div>`
    );
  });
};

const getData = async () => {
  const response = await fetch("https://dummyjson.com/products");
  const responseJson = await response.json();

  const { products } = responseJson;
  console.log(products);

  displayProducts(products);

  searchField.addEventListener("input", (event) => {
    const { value } = event.target;

    const filter = products.filter((el) => {
      //   return el.title.toLowerCase() === value.toLowerCase();
      return (
        el.title.toLowerCase().includes(value.toLowerCase()) ||
        el.description.toLowerCase().includes(value.toLowerCase())
      );
    });

    displayProducts(filter);
  });
};
const displayOurteam = (arrayData) => {
  ourteamContainer.innerHTML = "";

  arrayData.forEach((element) => {
    ourteamContainer.insertAdjacentHTML(
      "beforeend",
      `<div class="ourteam-container">
            <img
              src="${element.thumbnail}"
              alt="img"
            />
            <div class="team-content">
              <h3>${element.title}</h3>
              <p>${element.description}</p>
            </div>
          </div>`
    );
  });
};

const getData = async () => {
  const response = await fetch("https://dummyjson.com/users");
  const responseJson = await response.json();

  const { ourteam } = responseJson;
  console.log(ourteam);

  displayOurteaam(ourteam);

  searchField.addEventListener("input", (event) => {
    const { value } = event.target;

    const filter = ourteam.filter((el) => {
      //   return el.title.toLowerCase() === value.toLowerCase();
      return (
        el.title.toLowerCase().includes(value.toLowerCase()) ||
        el.description.toLowerCase().includes(value.toLowerCase())
      );
    });

    displayOurteam(filter);
  });
};

getData();
