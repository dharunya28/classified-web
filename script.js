// Products

let products = [

    {
        name: "Used Laptop",
        price: 25000,
        category: "Electronics",
        image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=600&q=80",
        description: "Good condition laptop"
    },

    {
        name: "Study Table",
        price: 3000,
        category: "Furniture",
        image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=600&q=80",
        description: "Wooden study table in good condition"
    },

    {
        name: "Programming Book",
        price: 500,
        category: "Books",
        image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=600&q=80",
        description: "Good condition programming book"
    },

    {
        name: "Used Bicycle",
        price: 7000,
        category: "Vehicles",
        image: "https://images.unsplash.com/photo-1485965120184-e220f721d03e?auto=format&fit=crop&w=600&q=80",
        description: "Used bicycle in good condition"
    }

];


// Display Products

function displayProducts() {

    let productList = document.getElementById("productList");

    let searchText = document
        .getElementById("search")
        .value
        .toLowerCase();

    let category = document
        .getElementById("category")
        .value;

    productList.innerHTML = "";


    products.forEach(function(product, index) {

        // Search filter

        if (
            !product.name
                .toLowerCase()
                .includes(searchText)
        ) {
            return;
        }


        // Category filter

        if (
            category !== "All" &&
            product.category !== category
        ) {
            return;
        }


        // Product card

        productList.innerHTML += `

            <div class="product">

                <img
                    src="${product.image}"
                    alt="${product.name}"
                >

                <h3>
                    ${product.name}
                </h3>

                <p class="price">
                    &#8377;${product.price}
                </p>

                <p>
                    <b>Category:</b>
                    ${product.category}
                </p>

                <p>
                    ${product.description}
                </p>

                <button
                    onclick="contactSeller(${index})"
                >
                    Contact Seller
                </button>

            </div>

        `;

    });

}


// Add Product

function addProduct() {

    let name = document
        .getElementById("productName")
        .value;

    let price = document
        .getElementById("price")
        .value;

    let category = document
        .getElementById("productCategory")
        .value;

    let image = document
        .getElementById("image")
        .value;

    let description = document
        .getElementById("description")
        .value;


    // Check empty fields

    if (
        name === "" ||
        price === "" ||
        image === "" ||
        description === ""
    ) {

        alert("Please fill all fields");

        return;
    }


    // Create new product

    let newProduct = {

        name: name,

        price: price,

        category: category,

        image: image,

        description: description

    };


    // Add product

    products.push(newProduct);


    // Save product

    localStorage.setItem(
        "products",
        JSON.stringify(products)
    );


    alert("Product added successfully!");


    // Clear form

    document.getElementById("productName").value = "";

    document.getElementById("price").value = "";

    document.getElementById("image").value = "";

    document.getElementById("description").value = "";


    // Go to Home

    showHome();


    // Display products

    displayProducts();

}


// Contact Seller

function contactSeller(index) {

    alert(
        "Product: " +
        products[index].name +
        "\n\n" +
        "Seller contact option will be available here."
    );

}


// Show Home

function showHome() {

    document.getElementById("home")
        .style.display = "block";

    document.getElementById("sell")
        .style.display = "none";

}


// Show Sell Product

function showSell() {

    document.getElementById("home")
        .style.display = "none";

    document.getElementById("sell")
        .style.display = "block";

}


// Display products when page opens

displayProducts();