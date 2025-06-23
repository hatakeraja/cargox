document.addEventListener("DOMContentLoaded", () => {
  const products = [
    // Fashion (8 items)
    { id: 1, name: "Men's T-Shirt", description: "Comfortable cotton tee", price: "₹499", category: "fashion", image: "https://www.dudemonk.com/cdn/shop/files/OnePiece_d20aaf89-cac0-4373-b6c8-651717a5d33a.jpg?v=1685905857&width=1946" },
    { id: 2, name: "Women's Dress", description: "Elegant floral design", price: "₹799", category: "fashion", image: "https://sarahnoor.co.in/cdn/shop/products/blackembjaqveil.jpg?v=1674732454" },
    { id: 3, name: "Men's Jeans", description: "Slim fit denim", price: "₹1199", category: "fashion", image: "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1722612312-mhl-052224-jeans-amazon1489-66acfa3cbbbe8.jpg?crop=1xw:1xh;center,top&resize=980:*" },
    { id: 4, name: "Women's Top", description: "Casual and stylish", price: "₹399", category: "fashion", image: "https://www.urbanwardrobe.in/cdn/shop/products/meesho___s_-_714884.jpeg?v=1554208446" },
    { id: 5, name: "Men's Hoodie", description: "Warm winter wear", price: "₹899", category: "fashion", image: "https://fullyfilmy.in/cdn/shop/files/1_623741af-214c-4537-8bfa-a29fc0189bb2.png?v=1747990396" },
    { id: 6, name: "Women's Skirt", description: "Chic office wear", price: "₹699", category: "fashion", image: "https://m.media-amazon.com/images/I/51kI4xOxEDL._UY1100_.jpg" },
    { id: 7, name: "Men's Jacket", description: "Waterproof outdoor jacket", price: "₹1499", category: "fashion", image: "https://rukminim2.flixcart.com/image/850/1000/xif0q/jacket/c/u/j/xxl-no-classic-latest-fashion-black-biker-leather-jacket-for-men-original-imagtzbkwz4wjzwb.jpeg?q=90&crop=false" },
    { id: 8, name: "Women's Saree", description: "Traditional and elegant", price: "₹1299", category: "fashion", image: "https://anayadesignerstudio.com/cdn/shop/files/yellow_colour_silk_saree_for_haldi_function.webp?v=1731739730" },

    // Mobile (8 items)
    { id: 9, name: "Xiaomi Redmi Note 13", description: "Powerful budget smartphone", price: "₹14999", category: "mobile", image: "https://m.media-amazon.com/images/I/41ZlnmlOM-L.jpg" },
    { id: 10, name: "Samsung Galaxy M14", description: "5G mid-range device", price: "₹13999", category: "mobile", image: "https://www.poojaratele.com/media/catalog/product/cache/28b568fbf82d79c53c9eab7361be58d0/8/1/81juphkszjl._sl1500_.jpg" },
    { id: 11, name: "iPhone 14", description: "Apple’s premium smartphone", price: "₹69999", category: "mobile", image: "https://iplanet.one/cdn/shop/files/iPhone_14_Starlight_PDP_Image_Position-1A__WWEN_d53da00d-03ea-40db-8c13-08227bfb5e3a.jpg?v=1691142551&width=823" },
    { id: 12, name: "Realme Narzo 60", description: "AMOLED display, 5G", price: "₹15999", category: "mobile", image: "https://rukminim2.flixcart.com/image/850/1000/xif0q/mobile/t/s/y/narzo-60-5g-rmx3750-realme-original-imagrht2yzyc2jyj.jpeg?q=90&crop=false" },
    { id: 13, name: "Vivo Y200", description: "Stylish 5G phone", price: "₹17999", category: "mobile", image: "https://images.jdmagicbox.com/quickquotes/images_main/y200-5g-ram-8-gb-128-gb-desert-gold-272693921-k41x3.png" },
    { id: 14, name: "Motorola Edge 40", description: "Premium features", price: "₹26999", category: "mobile", image: "https://m.media-amazon.com/images/I/71gL3+m6uuL.jpg" },
    { id: 15, name: "iQOO Z9", description: "Gaming-ready phone", price: "₹18999", category: "mobile", image: "https://m.media-amazon.com/images/I/61nO5YRaAxL.jpg" },
    { id: 16, name: "Nothing Phone 2a", description: "Unique LED design", price: "₹23999", category: "mobile", image: "https://m.media-amazon.com/images/I/71tfX-0J2SL.jpg" },

    // Gadget (8 items)
    { id: 17, name: "boAt Smartwatch", description: "Fitness tracker with AMOLED", price: "₹2499", category: "gadget", image: "https://m.media-amazon.com/images/I/61ZuL8CUigL.jpg" },
    { id: 18, name: "Noise Buds", description: "TWS earbuds with noise canceling", price: "₹1999", category: "gadget", image: "https://m.media-amazon.com/images/I/61UNThaGjYL._UF1000,1000_QL80_.jpg" },
    { id: 19, name: "JBL Bluetooth Speaker", description: "Portable music experience", price: "₹3499", category: "gadget", image: "https://avstore.in/cdn/shop/files/2.AVStore-JBL-PartyBox-110-160W-Portable-Wireless-Speaker-Front-Left-Angled-View.jpg?v=1682411625&width=2000" },
    { id: 20, name: "Mi Smart Band 7", description: "24/7 heart tracking", price: "₹2599", category: "gadget", image: "https://m.media-amazon.com/images/I/51--Fsb1yvL.jpg" },
    { id: 21, name: "Sony Headphones", description: "Over-ear with HD sound", price: "₹4999", category: "gadget", image: "https://m.media-amazon.com/images/I/41JACWT-wWL.jpgt5.jpg" },
    { id: 22, name: "Logitech Mouse", description: "Wireless & ergonomic", price: "₹1299", category: "gadget", image: "https://m.media-amazon.com/images/I/61sskFEsc0L.jpget6.jpg" },
    { id: 23, name: "Power Bank 20000mAh", description: "Fast charging supported", price: "₹1599", category: "gadget", image: "https://m.media-amazon.com/images/I/61iE5piq4LL.jpg" },
    { id: 24, name: "VR Headset", description: "Immersive gaming gear", price: "₹2999", category: "gadget", image: "https://m.media-amazon.com/images/I/61RgUtmRymL.jpg" },

    // Appliances (8 items)
    { id: 25, name: "LG Refrigerator", description: "Double door 260L", price: "₹22999", category: "appliances", image: "https://img-prd-pim.poorvika.com/product/LG-421-l-frost-free-double-door-refrigerator-gl-t432apzr-shiny-steel-Front-View.png" },
    { id: 26, name: "Samsung Washing Machine", description: "Top load 6.5kg", price: "₹18999", category: "appliances", image: "https://images.samsung.com/is/image/samsung/p6pim/in/ww70r22ek0x-tl/gallery/in-front-loading-ww66r22ek0stl-322208-ww70r22ek0x-tl-539194805?$684_547_PNG$" },
    { id: 27, name: "IFB Microwave Oven", description: "Convection 23L", price: "₹8999", category: "appliances", image: "https://m.media-amazon.com/images/I/71W-OAGCL0L.jpg" },
    { id: 28, name: "Philips Air Fryer", description: "Oil-free cooking", price: "₹7499", category: "appliances", image: "https://m.media-amazon.com/images/I/414ly0wsjYL._UF894,1000_QL80_.jpg" },
    { id: 29, name: "Voltas AC 1.5 Ton", description: "Inverter split AC", price: "₹32999", category: "appliances", image: "https://m.media-amazon.com/images/I/41jNjA3yygL.jpg" },
    { id: 30, name: "Prestige Mixer Grinder", description: "750W powerful motor", price: "₹3499", category: "appliances", image: "https://m.media-amazon.com/images/I/510m+hnHdzL.jpg" },
    { id: 31, name: "Kent RO Water Purifier", description: "7L storage, UV+UF", price: "₹12999", category: "appliances", image: "https://shop.kent.co.in/cdn/shop/files/A_Info-Grand-Plus-New-W.png?v=1741241715" },
    { id: 32, name: "Usha Ceiling Fan", description: "High speed 1200mm", price: "₹2399", category: "appliances", image: "https://m.media-amazon.com/images/I/51GsLIHbZxL.jpg" }
  ];

  // Renders products into the product-list container
  const renderProducts = (list) => {
    const container = document.getElementById("product-list");
    if (!container) return;

    container.innerHTML = list.map(p => `
      <div class="col-md-6 col-lg-4 mb-4">
        <div class="card h-100 shadow">
          <img src="${p.image}" class="card-img-top" alt="${p.name}">
          <div class="card-body">
            <h5 class="card-title">${p.name}</h5>
            <p class="card-text">${p.description}</p>
            <p class="fw-bold">${p.price}</p>
            <button class="btn btn-warning w-100" onclick="addToCart(${p.id})">Add to Cart</button>
          </div>
        </div>
      </div>
    `).join('');
  };

  // Filter products by search and category
  const filterProducts = () => {
    const query = document.getElementById("search-input")?.value.toLowerCase() || "";
    const activeCategory = document.querySelector(".category-item.active")?.dataset.category || "all";

    let filtered = products.filter(p => p.name.toLowerCase().includes(query));
    if (activeCategory !== "all") {
      filtered = filtered.filter(p => p.category === activeCategory);
    }

    renderProducts(filtered);
    renderSuggestions([]);
  };

  // Show suggestions as user types
  const renderSuggestions = (matches) => {
    const suggestionBox = document.getElementById("suggestions");
    suggestionBox.innerHTML = matches.map(match => `<li class="list-group-item">${match}</li>`).join('');
  };

  // Initial render
  renderProducts(products);

  // Handle category clicks
  document.querySelectorAll(".category-item").forEach(item => {
    item.addEventListener("click", () => {
      document.querySelectorAll(".category-item").forEach(i => i.classList.remove("active"));
      item.classList.add("active");
      filterProducts();
    });
  });

  // Search input suggestions
  const searchInput = document.getElementById("search-input");
  searchInput.addEventListener("input", (e) => {
    const val = e.target.value.toLowerCase();
    const matches = products
      .filter(p => p.name.toLowerCase().includes(val))
      .map(p => p.name);
    renderSuggestions(matches);
    filterProducts();
  });

  // Click suggestion
  document.getElementById("suggestions").addEventListener("click", (e) => {
    if (e.target.tagName === "LI") {
      searchInput.value = e.target.textContent;
      renderSuggestions([]);
      filterProducts();
    }
  });

  // Search button
  document.getElementById("search-btn").addEventListener("click", filterProducts);

  // Add to cart functionality
  window.addToCart = function (productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const existing = cart.find(p => p.id === productId);

    if (existing) {
      existing.qty += 1;
    } else {
      cart.push({ ...product, qty: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    alert(`${product.name} added to cart!`);
  };
});