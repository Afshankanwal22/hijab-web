// 🔹 Supabase credentials
const SUPABASE_URL = "https://eyyoigiytzhbtcwqvooa.supabase.co";
const SUPABASE_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV5eW9pZ2l5dHpoYnRjd3F2b29hIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQ5NDE0OTUsImV4cCI6MjA3MDUxNzQ5NX0.2LNSR60X9QXh2oih_bmnP31iKo5pV82-0cPa06J2L8k";

// 🔹 Create Supabase client
const client = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
console.log(client);

// 🔹 Form submit
const form = document.querySelector("form");

form &&
  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const fullName = form.querySelector('input[type="text"]').value;
    const email = form.querySelector('input[type="email"]').value;
    const password = form.querySelectorAll('input[type="password"]')[0].value;
    const confirmPassword = form.querySelectorAll('input[type="password"]')[1]
      .value;

    // 🔸 Validation
    if (!fullName || !email || !password || !confirmPassword) {
      Swal.fire({
        icon: "warning",
        title: "Missing Fields",
        text: "Please fill all fields",
      });
      return;
    }

    if (password !== confirmPassword) {
      Swal.fire({
        icon: "error",
        title: "Password Mismatch",
        text: "Passwords do not match",
      });
      return;
    }

    // 🔹 Supabase Sign Up
    const { data, error } = await client.auth.signUp({
      email: email,
      password: password,
      options: {
        data: {
          full_name: fullName,
        },
      },
    });

    if (error) {
      Swal.fire({
        icon: "error",
        title: "Signup Failed",
        text: error.message,
      });
      return;
    }

    Swal.fire({
      icon: "success",
      title: "Account Created 🎉",
      text: "Please check your email to confirm",
      timer: 2000,
      showConfirmButton: false,
    });

    setTimeout(() => {
      window.location.href = "login.html";
    }, 2000);
  });

// 🔹 Login Form submit

form &&
  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const email = form.querySelector('input[type="email"]').value;
    const password = form.querySelector('input[type="password"]').value;

    if (!email || !password) {
      Swal.fire({
        icon: "warning",
        title: "Missing Fields",
        text: "Please enter email and password",
      });
      return;
    }

    const { data, error } = await client.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      Swal.fire({
        icon: "error",
        title: "Login Failed",
        text: error.message,
      });
      return;
    }

    Swal.fire({
      icon: "success",
      title: "Login Successful 🌸",
      text: "Welcome back!",
      timer: 1500,
      showConfirmButton: false,
    });

    setTimeout(() => {
      window.location.href = "home.html";
    }, 1500);
  });

// 🔹 Sample products (replace with Supabase fetch if needed)
const products = [
  {
    id: "00157PD",
    name: "Cape Town Garden Hijab",
    image:
      "https://templatekits.themewarrior.com/jamila/wp-content/uploads/sites/99/2024/03/product-1.jpg",
    oldPrice: 40,
    price: 23,
    description:
      "Velit, condimentum nibh facilisi diam volutpat ullamcorper. Faucibus in dignissim nunc, eget molestie id amet vitae congue nulla.",
    category: "Hijab",
    tag: "Hijab",
  },
  {
    id: "00158PD",
    name: "Elegant Summer Hijab",
    image:
      "https://templatekits.themewarrior.com/jamila/wp-content/uploads/sites/99/2024/03/product-2.jpg",
    oldPrice: 50,
    price: 30,
    description:
      "Soft fabric and vibrant colors for summer, perfect for sunny days.",
    category: "Hijab",
    tag: "Hijab",
  },
  {
    id: "00159PD",
    name: "Classic Black Hijab",
    image:
      "https://templatekits.themewarrior.com/jamila/wp-content/uploads/sites/99/2024/03/product-3.jpg",
    oldPrice: 35,
    price: 20,
    description: "A timeless black hijab suitable for all occasions.",
    category: "Hijab",
    tag: "Hijab",
  },
  {
    id: "00160PD",
    name: "Elegant Summer Hijab",
    image:
      "https://templatekits.themewarrior.com/jamila/wp-content/uploads/sites/99/2024/03/product-4-300x300.jpg",
    oldPrice: 50,
    price: 30,
    description:
      "Soft fabric and vibrant colors for summer, perfect for sunny days.",
    category: "Hijab",
    tag: "Hijab",
  },
  {
    id: "00161PD",
    name: "Elegant Summer Hijab",
    image:
      "https://templatekits.themewarrior.com/jamila/wp-content/uploads/sites/99/2024/03/product-5.jpg",
    oldPrice: 50,
    price: 30,
    description:
      "Soft fabric and vibrant colors for summer, perfect for sunny days.",
    category: "Hijab",
    tag: "Hijab",
  },
  {
    id: "00162PD",
    name: "Elegant Summer Hijab",
    image:
      "https://templatekits.themewarrior.com/jamila/wp-content/uploads/sites/99/2024/03/product-6.jpg",
    oldPrice: 50,
    price: 30,
    description:
      "Soft fabric and vibrant colors for summer, perfect for sunny days.",
    category: "Hijab",
    tag: "Hijab",
  },
  {
    id: "00163PD",
    name: "Elegant Summer Hijab",
    image:
      "https://templatekits.themewarrior.com/jamila/wp-content/uploads/sites/99/2024/03/product-7-300x300.jpg",
    oldPrice: 50,
    price: 30,
    description:
      "Soft fabric and vibrant colors for summer, perfect for sunny days.",
    category: "Hijab",
    tag: "Hijab",
  },

  {
    id: "00164PD",
    name: "Elegant Summer Hijab",
    image:
      "https://templatekits.themewarrior.com/jamila/wp-content/uploads/sites/99/2024/03/product-8.jpg",
    oldPrice: 50,
    price: 30,
    description:
      "Soft fabric and vibrant colors for summer, perfect for sunny days.",
    category: "Hijab",
    tag: "Hijab",
  },
];

// 🔹 Wait until DOM is loaded
document.addEventListener("DOMContentLoaded", async () => {
  // 🔹 Get product ID from URL
  const urlParams = new URLSearchParams(window.location.search);
  const productId = urlParams.get("id");
  if (!productId) return alert("Product ID missing!");

  // 🔹 Find product
  const product = products.find((p) => p.id === productId);
  if (!product) return alert("Product not found!");

  // 🔹 Populate HTML
  document.querySelector("h1").innerText = product.name;
  document.querySelector("img").src = product.image;
  document.querySelector(".text-gray-400").innerText = "$" + product.oldPrice;
  document.querySelector(".text-2xl").innerText = "$" + product.price;
  document.querySelector("p.mb-8").innerText = product.description;
  document.querySelector(".sku").innerText = product.id;
  document.querySelector(".category").innerText = product.category;
  document.querySelector(".tag").innerText = product.tag;
  document.querySelector(".tab-description").innerText = product.description;

  // 🔹 Add to Cart
  const addToCartBtn = document.querySelector("button.bg-rose-300");
  const quantityInput = document.querySelector("input[type='number']");

  addToCartBtn.addEventListener("click", async () => {
    // 🔐 Check login
    const {
      data: { user },
    } = await client.auth.getUser();
    if (!user) {
      Swal.fire({
        icon: "warning",
        title: "Login Required",
        text: "Please login first to add items to cart",
      });
      return;
    }

    // 🔹 Prepare product data
    const cartItem = {
      user_id: user.id,
      product_id: product.id,
      product_name: product.name,
      price: product.price,
      quantity: Number(quantityInput.value),
      // image_url: product.image
    };

    // 🔹 Insert into Supabase 'AddToCard' table
    const { error } = await client.from("AddToCard").insert([cartItem]);

    if (error) {
      Swal.fire("Error", error.message, "error");
    } else {
      Swal.fire({
        icon: "success",
        title: "Added to Cart 🛒",
        timer: 1200,
        showConfirmButton: false,
      });
    }
  });
});

/***********************/
document.addEventListener("DOMContentLoaded", async () => {
  const addBtn = document.querySelector("button.bg-rose-300");
  if (!addBtn) return; // not product page

  const urlParams = new URLSearchParams(window.location.search);
  const productId = urlParams.get("id");

  const product = products.find((p) => p.id === productId);
  if (!product) return;

  document.querySelector("h1").innerText = product.name;
  document.querySelector("img").src = product.image;
  document.querySelector(".text-2xl").innerText = "$" + product.price;
  document.querySelector("p.mb-8").innerText = product.description;

  addBtn.addEventListener("click", async () => {
    const qty = Number(document.querySelector("input[type='number']").value);

    const {
      data: { user },
    } = await client.auth.getUser();
    if (!user) {
      Swal.fire("Login Required", "Please login first", "warning");
      return;
    }

    const { error } = await client.from("AddToCard").insert([
      {
        user_id: user.id,
        product_id: product.id,
        product_name: product.name,
        price: product.price,
        quantity: qty,
      },
    ]);

    if (error) {
      Swal.fire("Error", error.message, "error");
      return;
    }

    Swal.fire("Added", "Item added to cart", "success");
    setTimeout(() => (window.location.href = "checkout.html"), 1200);
  });
});

/***********************
  CHECKOUT PAGE
************************/
document.addEventListener("DOMContentLoaded", async () => {
  const nameEl = document.getElementById("productName");
  if (!nameEl) return; // not checkout page

  const priceEl = document.getElementById("productPrice");
  const qtyEl = document.getElementById("productQty");
  const totalEl = document.getElementById("productTotal");
  const confirmBtn = document.getElementById("confirmOrder");

  // 🔐 Login check
  const {
    data: { user },
  } = await client.auth.getUser();
  if (!user) {
    window.location.href = "login.html";
    return;
  }

  // 🛒 Cart fetch
  const { data: cart, error } = await client
    .from("AddToCard")
    .select("*")
    .eq("user_id", user.id);

  if (error || !cart.length) {
    Swal.fire("Empty Cart", "No items found", "warning");
    return;
  }

  // 👉 For now first item
  const item = cart[0];
  const total = item.price * item.quantity;

  // 🖥️ UI Fill
  nameEl.innerText = item.product_name;
  priceEl.innerText = "Rs " + item.price;
  qtyEl.innerText = item.quantity;
  totalEl.innerText = "Rs " + total;

  // ✅ CONFIRM ORDER
  confirmBtn.addEventListener("click", async () => {
    const deliveryMinutes = Math.floor(Math.random() * 30) + 20;

    // 📦 Insert into Orders (ADMIN WILL SEE THIS)
    const { error: orderError } = await client.from("order").insert([
      {
        user_id: user.id,
        product_id: item.product_id,
        product_name: item.product_name,
        price: item.price,
        quantity: item.quantity,
        total: total,
        status: "Pending",
        delivery_time: `${deliveryMinutes} minutes`,
      },
    ]);

    if (orderError) {
      Swal.fire("Order Failed", orderError.message, "error");
      return;
    }

    // 🗑️ Clear cart
    await client.from("AddToCard").delete().eq("user_id", user.id);

    Swal.fire({
      icon: "success",
      title: "Order Placed 🎉",
      html: `
        <p>Your order has been placed.</p>
        <p class="mt-2"><b>Estimated Delivery:</b> ${deliveryMinutes} minutes</p>
      `,
    });
  });
});
document.addEventListener("DOMContentLoaded", async () => {
  const table = document.getElementById("ordersTable");
  if (!table) return;

  const { data: orders, error } = await client
    .from("order")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    alert(error.message);
    return;
  }

  table.innerHTML = "";

  orders.forEach((order) => {
    table.innerHTML += `
      <tr class="border-b">
        <td class="py-2">${order.product_name}</td>
        <td>${order.quantity}</td>
        <td>Rs ${order.total}</td>
        <td>
          <span class="px-3 py-1 rounded bg-yellow-100 text-sm">
            ${order.status}
          </span>
        </td>
        <td>${order.delivery_time}</td>
      </tr>
    `;
  });
});

async function addProduct() {
  const name = document.getElementById("name").value;
  const description = document.getElementById("desc").value;
  const price = document.getElementById("price").value;
  const image = document.getElementById("image").value;

  if (!name || !price) {
    Swal.fire("Error", "Name & Price required", "error");
    return;
  }

  const { error } = await client
    .from("product")
    .insert([
      { name: name, description: description, price: price, image: image },
    ]);

  if (error) {
    Swal.fire("Error", error.message, "error");
    return;
  }

  Swal.fire("Success", "Product added 🎉", "success");

  document.querySelectorAll("input, textarea").forEach((el) => (el.value = ""));
}
document.addEventListener("DOMContentLoaded", async () => {
  const productsContainer = document.getElementById("productsContainer");
  if (!productsContainer) return;

  // 🔹 Fetch products from Supabase
  const { data: products, error } = await client
    .from("product")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    Swal.fire("Error", error.message, "error");
    return;
  }

  productsContainer.innerHTML = "";

  // 🔹 Loop through products and render HTML
  products.forEach((product) => {
    const div = document.createElement("div");
    div.className = "border p-4 rounded-md shadow hover:shadow-lg transition";

    div.innerHTML = `
      <img src="${product.image}" alt="${product.name}" class="w-full h-60 object-cover mb-4 rounded">
      <h2 class="text-xl font-semibold mb-2">${product.name}</h2>
      <p class="text-gray-600 mb-2">${product.description}</p>
      <p class="text-2xl font-bold mb-4">$${product.price}</p>
      <a href="product.html?id=${product.id}" class="bg-rose-300 px-6 py-2 text-white rounded-full hover:bg-rose-400 transition">View</a>
    `;

    productsContainer.appendChild(div);
  });
});

// ================== IMAGE UPLOAD ==================
async function uploadImage(file) {
  if (!file) return null;

  const fileName = `${Date.now()}-${file.name}`;
  const { error } = await client.storage
    .from("product-images")
    .upload(fileName, file);

  if (error) {
    Swal.fire("Upload Error", error.message, "error");
    return null;
  }

  const { data } = client.storage.from("product-images").getPublicUrl(fileName);

  return data.publicUrl;
}

// ================== LOAD PRODUCTS ==================
async function loadProducts() {
  const tableBody = document.querySelector("#productsTable tbody");
  if (!tableBody) return;

  const { data, error } = await client
    .from("product")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    Swal.fire("Error", error.message, "error");
    return;
  }

  tableBody.innerHTML = "";

  data.forEach((p) => {
    tableBody.innerHTML += `
      <tr class="border-b">
        <td class="p-2 flex items-center gap-2">
          <img src="${p.image}" class="w-12 h-12 rounded object-cover">
          ${p.name}
        </td>
        <td class="p-2">Rs ${p.price}</td>
        <td class="p-2">${p.stock ?? "-"}</td>
        <td class="p-2">${p.category ?? "-"}</td>
        <td class="p-1 text-red-500 cursor-pointer delete-btn transition-all duration-100 shadow-sm hover:shadow-lg" data-id="${
          p.id
        }">Delete</td>
      </tr>
    `;
  });

  // Add delete functionality
  const deleteBtns = document.querySelectorAll(".delete-btn");
  deleteBtns.forEach((btn) => {
    btn.addEventListener("click", async () => {
      const id = btn.getAttribute("data-id");
      const { error } = await client.from("product").delete().eq("id", id);
      if (error) {
        Swal.fire("Error", error.message, "error");
      } else {
        Swal.fire("Deleted", "Product deleted successfully", "success");
        loadProducts();
      }
    });
  });
}

// ================== ADD PRODUCT ==================
document.addEventListener("DOMContentLoaded", () => {
  loadProducts();

  const form = document.getElementById("productForm");
  if (!form) return;

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    // Safe element selection
    const nameEl = document.getElementById("name");
    const priceEl = document.getElementById("price");
    const oldPriceEl = document.getElementById("oldPrice");
    const categoryEl = document.getElementById("category");
    const tagEl = document.getElementById("tag");
    const stockEl = document.getElementById("stock");
    const descriptionEl = document.getElementById("description");
    const imageMainEl = document.getElementById("imageMain");

    if (!nameEl || !priceEl || !imageMainEl) {
      Swal.fire("Error", "Form elements missing!", "error");
      return;
    }

    const name = nameEl.value.trim();
    const price = priceEl.value;
    const oldPrice = oldPriceEl?.value || null;
    const category = categoryEl?.value || "";
    const tag = tagEl?.value || "";
    const stock = stockEl?.value || "";
    const description = descriptionEl?.value || "";
    const imageFile = imageMainEl.files[0];
    let publicUrl = null;
    if (!name || !price || !imageFile) {
      Swal.fire("Error", "Name, Price & Image are required", "error");
      return;
    }

    Swal.fire({
      title: "Uploading...",
      allowOutsideClick: false,
      didOpen: () => Swal.showLoading(),
    });

    // ================== IMAGE UPLOAD ==================
    // async function uploadImage(file) {
    // if (!file) return null;
    const file = imageFile;
    const fileName = `${Date.now()}-${file.name}`;
    const { data, error: uploadErr } = await client.storage
      .from("product-images")
      .upload(fileName, file);

    if (uploadErr) {
      Swal.fire("Upload Error", uploadErr.message, "error");
    } else {
      console.log(data, "upload ho rha hai...");

      const { data: upData } = client.storage
        .from("product-images")
        .getPublicUrl(fileName);

      if (upData) {
        console.log(fileName);
        publicUrl = upData.publicUrl;
        console.log(upData);
        console.log(publicUrl);
        
      }
    }

    const { error } = await client.from("product").insert([
      {
        // user_id: user_id,
        name: name,
        price: price,
        old_price: oldPrice,
        category: category,
        tag: tag,
        stock: stock,
        description: description,
        image: publicUrl,
      },
    ]);

    if (error) {
      Swal.fire("Error", error.message, "error");
      return;
    }

    Swal.fire("Success 🎉", "Product added successfully", "success");
    form.reset();
    loadProducts();
  });
});
