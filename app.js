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

form.addEventListener("submit", async (e) => {
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

