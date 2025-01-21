    //  loader after 2 seconds
    window.onload = () => {
      setTimeout(() => {
        document.getElementById('loader').style.display = 'none';
        filterandsortproducts();
      }, 2000);
    };

    //  product data
    const products = [
      { id: 1, name: "Earrings", price: 1999, category: "Fashion", image: "/images/earrings.webp" },
      { id: 2, name: "Shoes", price: 1899, category: "Fashion", image: "/images/shoe.jpg"},
      { id: 3, name: "Makeup&beauty", price: 1799, category: "Fashion", image: "/images/makeup.webp" },
      { id: 4, name: "Jwellery", price: 11677, category: "Fashion", image: "/images/jwellery.jpg" },
      { id: 5, name: "Tablet", price: 15559, category: "electronics", image: "/images/tablet.jpg" },
      { id: 6, name: "Earbuds", price: 1469, category: "electronics", image: "/images/earbuds.jpg" },
      { id: 7, name: "Speakers", price: 1340, category: "electronics", image: "/images/speaker.jpg" },
      { id: 8, name: "Smart Watches", price: 1299, category: "electronics", image: "/images/smart watch.jpg" },
      { id: 9, name: "Kitchen Appliances", price: 3199, category: "electronics", image: "/images/kitchen appliances.jpg" },
      { id: 10, name: "Mouse", price:199, category: "electronics", image: "/images/mouse.jpg" },
      { id: 11, name: "Cables", price: 999, category: "electronics", image: "/images/cables.jpg" },
      { id: 12, name: "Power banks", price: 859, category: "electronics", image: "/images/power bank.jpg" },
      { id: 13, name: "Grooming", price: 799, category: "electronics", image: "/images/grooming tool.jpg" },
      { id: 14, name: "Bulbs&Light", price: 99, category: "electronics", image: "/images/bulb.jpg" },
      { id: 15, name: "Iron Box", price: 399, category: "electronics", image: "/images/iron box.jpg" },
      { id: 16, name: "Hair Dryer", price: 699, category: "electronics", image: "/images/hair dryer.jpg"},
      { id: 17, name: "Electic Cookware", price: 1059, category: "electronics", image: "/images/electric cookware.jpg" },
      { id: 18, name: "Coffee Maker", price: 11199, category: "electronics", image: "/images/coffee maker.webp" },
      { id: 19, name: "Kettle", price: 599, category: "electronics", image: "/images/kettle.webp" },
      { id: 20, name: "Mixers", price: 1399, category: "electronics", image: "/images/mixer.webp" }
    ];
    
    // Function products
    function filterandsortproducts() {
      const category = document.getElementById('categoryFilter').value;
      const sortOption = document.getElementById('sortOptions').value;
      let filteredProducts = products;
      console.log(category);
      // Filter
      if (category === "electronics") {
        // document.getElementById("productGrid").style.display = "grid";
        // console.log(productcard);
        filteredProducts = filteredProducts.filter(product => product.category === category);
        console.log(filteredProducts);
      } else if(category === "Fashion"){
        filteredProducts = filteredProducts.filter(product => product.category === category);
        console.log(products);
      }
      else if(category === "All Categories"){
        filteredProducts = filteredProducts;
        console.log(products);
      }

      if (sortOption === 'lowToHigh') {
        filteredProducts.sort((a, b) => a.price - b.price);
        console.log(filteredProducts);
      } else if (sortOption === 'highToLow') {
        filteredProducts.sort((a, b) => b.price - a.price);
        console.log(filteredProducts);
      }
      // Display  list
      loadProducts(filteredProducts);
      function loadProducts() {
        const productGrid = document.getElementById('productGrid');
        productGrid.innerHTML = '';
        filteredProducts.forEach((product) => {
          const productCard = document.createElement('div');
          productCard.className = 'product-card';
          productCard.innerHTML = `
            <img class="product-image" src="${product.image}" alt="${product.name}">
            <div class="product-details">
              <h3>${product.name}</h3>
              <p>RS.${product.price}</p>
              <button class="add-to-cart" onclick="addToCart('${product.name}')">Add to Cart</button>
            </div>`;
          productGrid.appendChild(productCard);
  
          const image = productCard.querySelector('.product-image');
          image.onload = () => {
            image.style.opacity = 100;
          };
        });
      }
    }


//  dropdown menus
document.getElementById('categoryFilter').addEventListener('change', filterandsortproducts);
document.getElementById('sortOptions').addEventListener('change', filterandsortproducts);

    // Add to cart
    function addToCart(productName) {
      const toast = document.getElementById('toast');
      toast.textContent = `${productName} added to cart!`;
      toast.classList.remove('hidden');
      toast.classList.add('show');
      setTimeout(() => toast.classList.remove('show'), 2000);
      console.log(toast);   
    }

    // Scroll-to-top button
    const scrollToTopButton = document.getElementById('scrollToTop');
    window.onscroll = () => {
      if (window.scrollY > 100) scrollToTopButton.style.display = 'block';
      else scrollToTopButton.style.display = 'none';
    };

    scrollToTopButton.onclick = () => window.scrollTo({ top: 0, behavior: 'smooth' });