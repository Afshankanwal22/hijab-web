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