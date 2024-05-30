//array to store the product details
var products = [
    {
        id: 1,
        name: "Apple IPhone 14 Pro Max, 6.7, 256GB + 6GB RAM (Single SIM), 4323mAh, 5G - Deep Purple",
        price: "239,999",
        image: "/images/1.jpg",
        quantity: 20
    },
    {
        id: 2,
        name: "Skyworth 50G3A, 50&Prime; 4K UHD Frameless Smart Android TV &ndash; Black (1YR WRTY)",
        price: "41,999",
        image: "/images/skyworth.jpg",
        quantity: 34
    },
    {
        id: 3,
        name: "Roasted Salted CashewNuts",
        price: "300",
        image: "/images/cashew.jpeg",
        quantity: 21
    },
    {
        id: 4,
        name: "Hisense 43A4K Series Smart",
        price: "31,599",
        image: "/images/hisense.jpg",
        quantity: 12
    },
    {
        id: 5,
        name: "Sailsky 4G LTE Wifi Router 300Mbps Wireless Router With SIM Card Slot",
        price: "6,500",
        image: "/images/wifi.jpg",
        quantity: 23
    },
    {
        id: 6,
        name: "Apple MacBook Pro A1398 2015 15.4 Retina Intel Core i7 16GB RAM 256GB SSD Refurbished",
        price: "65,999",
        image: "/images/macbook.jpg",
        quantity: 34
    },
    {
        id: 7,
        name: "Lenovo IdeaPad 1 14IAU7 Laptop - Type 82QC 14.0 FHD Display Intel® Core™ i3 12th Gen Processor 4GB RAM 256GB SSD Intel® UHD Graphics Windows 11 Home (1YR WRTY)",
        price: " 60,000",
        image: "/images/lenovo.jpg",
        quantity: 10
    },
    {
        id: 8,
        name: "Tusker Tusker Lager Can - 500ml - Pack of 6",
        price: "1,199",
        image: "/images/tusker.jpg",
        quantity: 23
    },
    {
        id: 9,
        name: "Rashnik RN-999 2 In 1 Blender & Grinder 1.5L 400W - Black",
        price: "1,680",
        image: "/images/hashnik.jpg",
        quantity: 6
    },
    {
        id: 10,
        name: "Nunix Nunix 7.5KG Twins Tub Washing Machine",
        price: "18,480",
        image: "/images/nunix.jpg",
        quantity: 34
    },
    {
        id: 11,
        name: "AL JAZARI Extra Virgin Olive Oil",
        price: "799",
        image: "/images/virginoil.jpg",
        quantity: 45
    },
    {
        id: 12,
        name: "Pure Mountain Cold Pressed Canola Oil - 5L",
        price: "1,687",
        image: "/images/canola.jpg",
        quantity: 3
    },
    {
        id: 13,
        name: "Pietro Coricelli Extra Virgin Olive Oil",
        price: "3,999 - 4,999",
        image: "/images/extravirgin.jpg",
        quantity: 3
    },
    {
        id: 14,
        name: "Rice Storage Container, Rice Dispenser, Sealed Grain Container, Dry Food Dispenser, Dry Food Fruit Storage Box for Home and Kitchen,",
        price: "3,800",
        image: "/images/riceStorage.jpg",
        quantity: 100
    },
    {
        id: 15,
        name: "Skyworth 43E3A, 43-inches Full HD Frameless Smart Android TV, Black (1YR WRTY)",
        price: " 24,999",
        image: "/images/hisense1.jpg",
        quantity: 24
    },
    {
        id: 16,
        name: "Nunix SC-002 Table Top Double Burner Gas Stove Cooker",
        price: "1,925",
        image: "/images/gasstove.jpg",
        quantity: 45
    },
    {
        id: 17,
        name: "Nunix 5-Tier Multifunctional Shoe Rack - White",
        price: "1,680",
        image: "/images/shoerack.jpg",
        quantity: 67
    },
    {
        id: 18,
        name: "Nunix 138L Double Door Fridge Energy Efficient",
        price: "28,050",
        image: "/images/fridge.jpg",
        quantity: 56
    },
    {
        id: 19,
        name: "AILYONS AFK-111 Water Dispenser Hot And Normal With Storage Cabinet (1YR WRTY)",
        price: " 3,289",
        image: "/images/dispenser.jpg",
        quantity: 71
    },
    {
        id: 20,
        name: "Gld 75 Smart Vidaa OS Frameless Ultra HD LED Television - Black",
        price: " 95,423",
        image: "/images/ulltra.jpg",
        quantity: 12
    },
    {
        id: 21,
        name: "Bathroom Kitchen Corner Shelf",
        price: "850",
        image: "/images/kitchen.jpg",
        quantity: 45
    },
    {
        id: 22,
        name: "Fleece Bathrobe Long Shawl Collar Plush Robe- Unisex",
        price: " 1,930",
        image: "/images/bathrobe.jpg",
        quantity: 43
    },
    {
        id: 23,
        name: "ColorScreen SmartWatch Heart Rate Sport Bracelet",
        price: " 489",
        image: "/images/smartwact.jpg",
        quantity: 23
    },
    {
        id: 24,
        name: "Red Berry RB134 - 4 In 1 Blender - 300W - Black",
        price: " 2,912",
        image: "/images/black.jpg",
        quantity: 23
    },
    {
        id: 25,
        name: "Tornado 14Pcs Heavy Non-Stick Cooking Pot Sufuria Set",
        price: "6,900",
        image: "/images/cookware.jpg",
        quantity: 34
    },
    {
        id: 26,
        name: "Jamespot 10PCS Cooking Pots Cookware Set 5pcs Pots+5pcs Lids",
        price: "4,699",
        image: "/images/5pcs.jpg",
        quantity: 56
    },
    {
        id: 27,
        name: "Nunix 92L Single Door Fridge Energy Efficient BC-92",
        price: " 18,700",
        image: "/images/fridge1.jpg",
        quantity: 45
    },
    {
        id: 28,
        name: "XIAOMI Redmi 13C , 6.74 8GB RAM + 256GB ROM, 50MP AI Triple Camera, 5000mAh (Dual Sim) - Midnight Black",
        price: "17,050",
        image: "/images/redmi.jpg",
        quantity: 65,
    },
    {
        id: 29,
        name: "HP Refurbished 705 G1 AMD A6 3.5 GHz 4GB 500GB Windows 10 Pro Desktop CPU",
        price: "12,999",
        image: "/images/desktop.jpg",
        quantity: 12,
    },
    {
        id: 30,
        name: "DELL P2419H 23.8 FHD LED-Backlit 3H Hard Coating IPS Monitor - Refurbished",
        price: "19,999",
        image: "/images/monitor.jpg",
        quantity: 54,
    },
    {
        id: 31,
        name: "HP Envy X360 14-es0033dx-13th Gen Intel Core I7-16GB RAM+1TB SSD-FINGERPRINT READER (1YR WRTY)",
        price: "142,000",
        image: "/images/hp.jpg",
        quantity: 23,
    }
];
//render items using the html
var RenderProducts = /** @class */ (function () {
    function RenderProducts() {
    }
    RenderProducts.render = function (products) {
        var productsContainer = document.getElementById("products");
        if (!productsContainer)
            return;
        productsContainer.innerHTML = "";
        products.forEach(function (product) {
            var productHTML = "\n                <div class=\"product\">\n                    <img src=\"".concat(product.image, "\" alt=\"").concat(product.name, "\">\n                    <p>").concat(product.name, "</p>\n                    <p>Ksh ").concat(product.price, "</p>\n                    <button class=\"add-to-cart\" data-id=\"").concat(product.id, "\">Add To Cart</button>\n                </div>\n            ");
            productsContainer.innerHTML += productHTML;
        });
    };
    return RenderProducts;
}());
RenderProducts.render(products);
//greet and logout user
//interface for the user
var Auth = /** @class */ (function () {
    function Auth() {
    }
    Auth.CurrentUser = function () {
        var user = sessionStorage.getItem("user");
        if (user) {
            return JSON.parse(user);
        }
        return null;
    };
    Auth.logout = function () {
        if (confirm("Are you sure you want to log out?")) {
            sessionStorage.removeItem("user");
            window.location.href = "login.html";
        }
    };
    return Auth;
}());
var Greeting = /** @class */ (function () {
    function Greeting() {
    }
    Greeting.greetUser = function () {
        var currentUser = Auth.CurrentUser();
        var greetingMessage = document.getElementById("welcome-user");
        if (greetingMessage && currentUser && currentUser.username) {
            greetingMessage.innerText = "Welcome, ".concat(currentUser.username, "!");
        }
        else {
            if (greetingMessage) {
                greetingMessage.innerText = "Welcome";
            }
        }
    };
    return Greeting;
}());
window.onload = function () {
    Greeting.greetUser();
    var logoutButton = document.getElementById("logout");
    if (logoutButton) {
        logoutButton.addEventListener("click", Auth.logout);
    }
};
//logic to search for products
var searchProducts = document.getElementById("searchInput");
if (searchProducts) {
    searchProducts.addEventListener("input", handleClick);
}
function handleClick(event) {
    var searchItem = event.target.value.toLowerCase();
    var filteredProducts = products.filter(function (product) {
        return product.name.toLowerCase().indexOf(searchItem) !== -1;
    });
    RenderProducts.render(filteredProducts);
}
