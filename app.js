let cellPhones = [
  {
    brand: "Samsung",
    model: "SamsungA30",
    price: "40000",
    camera: "40px",
    ram: "8gb",
    rom: "128gb",
    image_url:
      "https://images.priceoye.pk/samsung-galaxy-a30-pakistan-priceoye-e8bxd.jpg",
  },
  {
    brand: "Samsung",
    model: "SamsungA10",
    price: "40000",
    camera: "40px",
    ram: "4gb",
    rom: "128gb",
    image_url:
      "https://images.priceoye.pk/samsung-galaxy-a10-pakistan-priceoye-ytubo.jpg",
  },
  {
    brand: "Samsung",
    model: "SamsungA20",
    price: "40000",
    camera: "40px",
    ram: "4gb",
    rom: "128gb",
    image_url:
      "https://images.priceoye.pk/samsung-galaxy-a20-pakistan-priceoye-ier2y-500x500.webp",
  },
  {
    brand: "Vivo",
    model: "VivoY20",
    price: "20000",
    camera: "40px",
    ram: "2gb",
    rom: "32gb",
    image_url: "https://phonebolee.com/images/Vivo-Y20.jpg",
  },
  {
    brand: "Vivo",
    model: "VivoY11",
    price: "20000",
    camera: "40px",
    ram: "3gb",
    rom: "32gb",
    image_url:
      "https://www.bolnews.com/wp-content/uploads/2022/11/FotoJet-2022-11-20T000247.387.jpg",
  },
  {
    brand: "Vivo",
    model: "VivoY15",
    price: "30000",
    camera: "40px",
    ram: "4gb",
    rom: "64gb",
    image_url:
      "https://propakistani.pk/price/wp-content/uploads/2019/06/Vivo-Y12-01.jpg",
  },
  {
    brand: "Motorola",
    model: "Motorola Edge Plus(2020)",
    price: "60000",
    camera: "2px",
    ram: "2gb",
    rom: "32gb",
    image_url:
      "https://i.gadgets360cdn.com/large/motorola_edge_plus_body_1587551574402.jpg",
  },
  {
    brand: "Iphone",
    model: "Iphone 12 Pro",
    price: "230000",
    camera: "40px",
    ram: "8gb",
    rom: "128gb",
    image_url:
      "https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-12-pro-max-1.jpg",
  },
  {
    brand: "Iphone",
    model: "Iphone 13 pro",
    price: "350000",
    camera: "40px",
    ram: "8gb",
    rom: "128gb",
    image_url:
      "https://cdn.alloallo.media/catalog/product/apple/iphone/iphone-13-pro/iphone-13-pro-silver.jpg",
  },
  {
    brand: "Iphone",
    model: "Iphone X",
    price: "80000",
    camera: "40px",
    ram: "8gb",
    rom: "128gb",
    image_url: "https://files.refurbed.com/ii/iphone-x-1639476663.jpg",
  },
];

// Select options and input value
const option_selector = document.getElementById("select-options");
const options = document.getElementById("options");
const input_value = document.getElementById("input-value");
const box = document.getElementById("box");

option_selector.innerHTML = `
<select id="options">
<option value="brand">Brand</option>
<option value="model">Model</option>
<option value="price">Price</option>
<option value="camera">Camera</option>
<option value="ram">Ram</option>
<option value="rom">Rom</option>
</select>
<input id="input-value" type="text" placeholder="Search..." />
<button onclick="search()">Search</button>
`;

// Filter Method
function search() {
  box.innerHTML = "";
  const filtered_array = cellPhones.filter((current_obj, current_index) => {
    if (
      current_obj.brand === input_value.value ||
      current_obj.model === input_value.value ||
      current_obj.price === input_value.value ||
      current_obj.camera === input_value.value ||
      current_obj.ram === input_value.value ||
      current_obj.rom === input_value.value
    ) {
      return (box.innerHTML += `<div class="card" style="width: 18rem;">
    <img src="${current_obj.image_url}" class="card-img-top" alt="${current_obj.model}">
    <div class="card-body">
      <h5 class="card-title">${current_obj.brand}</h5>
      <h4 class="card-title">${current_obj.model}</h4>
      <p class="card-text">Camera:${current_obj.camera}</p>
      <p class="card-text">Ram:${current_obj.ram}</p>
      <p class="card-text">Rom:${current_obj.rom}</p>
  <p class="card-text" style="color:red;font-weight:bold;">PKR ${current_obj.price}.00</p>
      <a href="#" class="btn btn-primary">Details</a>
    </div>
  </div>`);
    }
  });
}
