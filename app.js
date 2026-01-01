// 🔹 Supabase credentials
const SUPABASE_URL = "https://eyyoigiytzhbtcwqvooa.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV5eW9pZ2l5dHpoYnRjd3F2b29hIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQ5NDE0OTUsImV4cCI6MjA3MDUxNzQ5NX0.2LNSR60X9QXh2oih_bmnP31iKo5pV82-0cPa06J2L8k";

// 🔹 Create Supabase client
const client = supabase.createClient(
  SUPABASE_URL,
  SUPABASE_ANON_KEY
);
console.log(client);

// 🔹 Form submit
const form = document.querySelector("form");

form &&form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const fullName = form.querySelector('input[type="text"]').value;
  const email = form.querySelector('input[type="email"]').value;
  const password = form.querySelectorAll('input[type="password"]')[0].value;
  const confirmPassword = form.querySelectorAll('input[type="password"]')[1].value;

  // 🔸 Validation
  if (!fullName || !email || !password || !confirmPassword) {
    Swal.fire({
      icon: "warning",
      title: "Missing Fields",
      text: "Please fill all fields"
    });
    return;
  }

  if (password !== confirmPassword) {
    Swal.fire({
      icon: "error",
      title: "Password Mismatch",
      text: "Passwords do not match"
    });
    return;
  }

  // 🔹 Supabase Sign Up
  const { data, error } = await client.auth.signUp({
    email: email,
    password: password,
    options: {
      data: {
        full_name: fullName
      }
    }
  });

  if (error) {
    Swal.fire({
      icon: "error",
      title: "Signup Failed",
      text: error.message
    });
    return;
  }

  Swal.fire({
    icon: "success",
    title: "Account Created 🎉",
    text: "Please check your email to confirm",
    timer: 2000,
    showConfirmButton: false
  });

  setTimeout(() => {
    window.location.href = "login.html";
  }, 2000);
});



// 🔹 Login Form submit

form && form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = form.querySelector('input[type="email"]').value;
  const password = form.querySelector('input[type="password"]').value;

  if (!email || !password) {
    Swal.fire({
      icon: "warning",
      title: "Missing Fields",
      text: "Please enter email and password"
    });
    return;
  }

  const { data, error } = await client.auth.signInWithPassword({
    email,
    password
  });

  if (error) {
    Swal.fire({
      icon: "error",
      title: "Login Failed",
      text: error.message
    });
    return;
  }

  Swal.fire({
    icon: "success",
    title: "Login Successful 🌸",
    text: "Welcome back!",
    timer: 1500,
    showConfirmButton: false
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
    image: "https://templatekits.themewarrior.com/jamila/wp-content/uploads/sites/99/2024/03/product-1.jpg",
    oldPrice: 40,
    price: 23,
    description: "Velit, condimentum nibh facilisi diam volutpat ullamcorper. Faucibus in dignissim nunc, eget molestie id amet vitae congue nulla.",
    category: "Hijab",
    tag: "Hijab"
  },
  {
    id: "00158PD",
    name: "Elegant Summer Hijab",
    image: "https://templatekits.themewarrior.com/jamila/wp-content/uploads/sites/99/2024/03/product-2.jpg",
    oldPrice: 50,
    price: 30,
    description: "Soft fabric and vibrant colors for summer, perfect for sunny days.",
    category: "Hijab",
    tag: "Hijab"
  },
  {
    id: "00159PD",
    name: "Classic Black Hijab",
    image: "https://templatekits.themewarrior.com/jamila/wp-content/uploads/sites/99/2024/03/product-3.jpg",
    oldPrice: 35,
    price: 20,
    description: "A timeless black hijab suitable for all occasions.",
    category: "Hijab",
    tag: "Hijab",},
    {
    id: "00160PD",
    name: "Elegant Summer Hijab",
    image: "https://templatekits.themewarrior.com/jamila/wp-content/uploads/sites/99/2024/03/product-4-300x300.jpg",
    oldPrice: 50,
    price: 30,
    description: "Soft fabric and vibrant colors for summer, perfect for sunny days.",
    category: "Hijab",
    tag: "Hijab"
  },
  {
    id: "00161PD",
    name: "Elegant Summer Hijab",
    image: "https://templatekits.themewarrior.com/jamila/wp-content/uploads/sites/99/2024/03/product-5.jpg",
    oldPrice: 50,
    price: 30,
    description: "Soft fabric and vibrant colors for summer, perfect for sunny days.",
    category: "Hijab",
    tag: "Hijab"
  },
  {
    id: "00162PD",
    name: "Elegant Summer Hijab",
    image: "https://templatekits.themewarrior.com/jamila/wp-content/uploads/sites/99/2024/03/product-6.jpg",
    oldPrice: 50,
    price: 30,
    description: "Soft fabric and vibrant colors for summer, perfect for sunny days.",
    category: "Hijab",
    tag: "Hijab"
  },
  {
    id: "00163PD",
    name: "Elegant Summer Hijab",
    image: "https://templatekits.themewarrior.com/jamila/wp-content/uploads/sites/99/2024/03/product-7-300x300.jpg",
    oldPrice: 50,
    price: 30,
    description: "Soft fabric and vibrant colors for summer, perfect for sunny days.",
    category: "Hijab",
    tag: "Hijab"
  },
    
  {
    id: "00164PD",
    name: "Elegant Summer Hijab",
    image: "https://templatekits.themewarrior.com/jamila/wp-content/uploads/sites/99/2024/03/product-8.jpg",
    oldPrice: 50,
    price: 30,
    description: "Soft fabric and vibrant colors for summer, perfect for sunny days.",
    category: "Hijab",
    tag: "Hijab"
  }
    

];

// 🔹 Wait until DOM is loaded
document.addEventListener("DOMContentLoaded", async () => {

  // 🔹 Get product ID from URL
  const urlParams = new URLSearchParams(window.location.search);
  const productId = urlParams.get("id");
  if (!productId) return alert("Product ID missing!");

  // 🔹 Find product
  const product = products.find(p => p.id === productId);
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
    const { data: { user } } = await client.auth.getUser();
    if (!user) {
      Swal.fire({
        icon: "warning",
        title: "Login Required",
        text: "Please login first to add items to cart"
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
        showConfirmButton: false
      });
    }
  });
});

// document.addEventListener("DOMContentLoaded", async () => {

//   // 🔐 User check
//   const { data: { user } } = await client.auth.getUser();
//   if (!user) {
//     Swal.fire("Login Required", "Please login first", "warning");
//     window.location.href = "login.html";
//     return;
//   }

//   // 🛒 Fetch cart items
//   const { data, error } = await client
//     .from("AddToCard")
//     .select("*")
//     .eq("user_id", user.id);

//   if (error) {
//     Swal.fire("Error", error.message, "error");
//     return;
//   }

//   const cartContainer = document.getElementById("cartItems");
//   cartContainer.innerHTML = "";

//   if (!data.length) {
//     cartContainer.innerHTML = "<p>Your cart is empty 🛒</p>";
//     return;
//   }

//   let total = 0;

//   data.forEach(item => {
//     total += item.price * item.quantity;

//     cartContainer.innerHTML += `
//       <div class="flex justify-between border-b py-3">
//         <div>
//           <h3 class="font-semibold">${item.product_name}</h3>
//           <p>Qty: ${item.quantity}</p>
//         </div>
//         <p>$${item.price * item.quantity}</p>
//       </div>
//     `;
//   });

//   document.getElementById("totalAmount").innerText = "$" + total;
// });
// document.getElementById("placeOrder").addEventListener("click", async () => {

//   const { data: { user } } = await client.auth.getUser();
//   if (!user) return;

//   // 🔹 Cart fetch
//   const { data: cartItems, error } = await client
//     .from("AddToCard")
//     .select("*")
//     .eq("user_id", user.id);

//   if (error || !cartItems.length) {
//     Swal.fire("Cart Empty", "No items found", "warning");
//     return;
//   }

//   // 🔹 Prepare orders
//   const orders = cartItems.map(item => ({
//     user_id: user.id,
//     product_id: item.product_id,
//     product_name: item.product_name,
//     price: item.price,
//     quantity: item.quantity,
//     status: "completed"
//   }));

//   // 🔹 Insert into Orders table
//   const { error: orderError } = await client
//     .from("Orders")
//     .insert(order);

//   if (orderError) {
//     Swal.fire("Error", orderError.message, "error");
//     return;
//   }

//   // 🔹 Clear cart
//   await client
//     .from("AddToCard")
//     .delete()
//     .eq("user_id", user.id);

//   Swal.fire({
//     icon: "success",
//     title: "Order Placed 🎉",
//     text: "Thank you for shopping!",
//   });

//   setTimeout(() => {
//     window.location.href = "checkout.html";
//   }, 1500);
// }); 
// // ===============================
// // 🔹 Load Checkout Data
// // ===============================
// document.addEventListener("DOMContentLoaded", async () => {

//   // 🔐 Check user login
//   const { data: { user } } = await client.auth.getUser();
//   if (!user) {
//     Swal.fire("Login Required", "Please login first", "warning");
//     window.location.href = "login.html";
//     return;
//   }

//   // 🛒 Fetch cart items
//   const { data: cartItems, error } = await client
//     .from("AddToCard")
//     .select("*")
//     .eq("user_id", user.id);

//   if (error) {
//     Swal.fire("Error", error.message, "error");
//     return;
//   }

//   if (!cartItems || cartItems.length === 0) {
//     Swal.fire("Empty Cart", "Your cart is empty", "info");
//     return;
//   }

//   // 🧮 Calculate totals
//   let totalQty = 0;
//   let totalPrice = 0;

//   cartItems.forEach(item => {
//     totalQty += item.quantity;
//     totalPrice += item.price * item.quantity;
//   });

//   // 🖥️ Show data in HTML
//   document.getElementById("productName").innerText =
//     cartItems.map(i => i.product_name).join(", ");

//   document.getElementById("productPrice").innerText =
//     "$" + cartItems.reduce((sum, i) => sum + i.price, 0);

//   document.getElementById("productQty").innerText = totalQty;

//   document.getElementById("productTotal").innerText = "$" + totalPrice;

//   // ===============================
//   // ✅ Confirm Order
//   // ===============================
//   document.getElementById("confirmOrder").addEventListener("click", async () => {

//     const orders = cartItems.map(item => ({
//       user_id: user.id,
//       product_id: item.product_id,
//       product_name: item.product_name,
//       price: item.price,
//       quantity: item.quantity,
//       total: item.price * item.quantity,
//       status: "confirmed"
//     }));

// //     // 📦 Insert orders
// //     const { error: orderError } = await client
// //       .from("Orders")
// //       .insert(order);

// //     if (orderError) {
// //       Swal.fire("Order Failed", orderError.message, "error");
// //       return;
// //     }

// //     // 🗑️ Clear cart
// //     await client
// //       .from("AddToCard")
// //       .delete()
// //       .eq("user_id", user.id);

// //     // 🎉 Success
// //     Swal.fire({
// //       icon: "success",
// //       title: "Order Placed 🎉",
// //       text: "Thank you for your purchase!",
// //       timer: 2000,
// //       showConfirmButton: false
// //     });

// //     setTimeout(() => {
// //       window.location.href = "checkout.html";
// //     }, 2000);
// //   });
// // });

// document.addEventListener("DOMContentLoaded", async () => {

//   // 🔐 User check
//   const { data: { user } } = await client.auth.getUser();
//   if (!user) {
//     Swal.fire("Login Required", "Please login first", "warning");
//     window.location.href = "login.html";
//     return;
//   }

//   // 🛒 Fetch cart items
//   const { data: cartItems, error } = await client
//     .from("AddToCard")
//     .select("*")
//     .eq("user_id", user.id);

//   if (error || !cartItems.length) {
//     Swal.fire("Cart Empty", "No items found", "warning");
//     return;
//   }

//   // 🔹 For demo → first item
//   const item = cartItems[0];
//   const total = item.price * item.quantity;

//   // 🔹 Populate HTML
//   document.getElementById("productName").innerText = item.product_name;
//   document.getElementById("productPrice").innerText = "$" + item.price;
//   document.getElementById("productQty").innerText = item.quantity;
//   document.getElementById("productTotal").innerText = "$" + total;

//   // ✅ Confirm Order Button
//   document.getElementById("confirmOrder").addEventListener("click", async () => {

//     const orders = cartItems.map(i => ({
//       user_id: user.id,
//       product_id: i.product_id,
//       product_name: i.product_name,
//       price: i.price,
//       quantity: i.quantity,
//       status: "completed"
//     }));

//     // 🔹 Insert into Orders
//     const { error: orderError } = await client
//       .from("Orders")
//       .insert(order);

//     if (orderError) {
//       Swal.fire("Error", orderError.message, "error");
//       return;
//     }

//     // 🔹 Clear cart
//     await client
//       .from("AddToCard")
//       .delete()
//       .eq("user_id", user.id);

//     Swal.fire({
//       icon: "success",
//       title: "Order Placed 🎉",
//       text: "Thank you for shopping!"
//     });

//     setTimeout(() => {
//       window.location.href = "home.html";
//     }, 1500);
//   });
// });/***********************

document.addEventListener("DOMContentLoaded", async () => {

  const addBtn = document.querySelector("button.bg-rose-300");
  if (!addBtn) return; // not product page

  const urlParams = new URLSearchParams(window.location.search);
  const productId = urlParams.get("id");

  const product = products.find(p => p.id === productId);
  if (!product) return;

  document.querySelector("h1").innerText = product.name;
  document.querySelector("img").src = product.image;
  document.querySelector(".text-2xl").innerText = "$" + product.price;
  document.querySelector("p.mb-8").innerText = product.description;

  addBtn.addEventListener("click", async () => {

    const qty = Number(document.querySelector("input[type='number']").value);

    const { data: { user } } = await client.auth.getUser();
    if (!user) {
      Swal.fire("Login Required", "Please login first", "warning");
      return;
    }

    const { error } = await client.from("AddToCard").insert([{
      user_id: user.id,
      product_id: product.id,
      product_name: product.name,
      price: product.price,
      quantity: qty
    }]);

    if (error) {
      Swal.fire("Error", error.message, "error");
      return;
    }

    Swal.fire("Added", "Item added to cart", "success");
    setTimeout(() => window.location.href = "checkout.html", 1200);
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

  const { data: { user } } = await client.auth.getUser();
  if (!user) {
    window.location.href = "login.html";
    return;
  }

  const { data: cart, error } = await client
    .from("AddToCard")
    .select("*")
    .eq("user_id", user.id);

  if (error || !cart.length) {
    Swal.fire("Empty Cart", "No items found", "warning");
    return;
  }

  const item = cart[0];
  const total = item.price * item.quantity;

  nameEl.innerText = item.product_name;
  priceEl.innerText = "$" + item.price;
  qtyEl.innerText = item.quantity;
  totalEl.innerText = "$" + total;

  confirmBtn.addEventListener("click", async () => {

    const { error: orderError } = await client
      .from("Orders")
      .insert([{
        user_id: user.id,
        product_id: item.product_id,
        product_name: item.product_name,
        price: item.price,
        quantity: item.quantity,
        status: "completed"
      }]);

    if (orderError) {
      Swal.fire("Order Failed", orderError.message, "error");
      return;
    }

    await client.from("AddToCard").delete().eq("user_id", user.id);

    Swal.fire("Success", "Order placed 🎉", "success");
  });
});
