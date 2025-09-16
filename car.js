 /*----------------  ABOUT IMG CHANGER---------------- */  
    const images = ["img/about11.jpg", "img/about2.jpg", "img/about3.jpg", "img/about4.jpg", "img/about5.jpg", "img/about6.jpg", "img/about7.jpg", "img/about8.jpg","img/69f5e7d367c0eebea0e71b4ade6e3add.jpg"];

    let index = 0;

    function changeImage() {
      index = (index + 1) % images.length; 
      document.getElementById("car").src = images[index];
    }

    setInterval(changeImage, 3000);

/*----------------  BOOKING FORM---------------- */
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#booking form");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // stop default submit

    // Get values
    const name = document.querySelector("input[placeholder='Your Name']").value.trim();
    const phone = document.querySelector("input[placeholder='Your Phone Number']").value.trim();
    const carModel = document.querySelector("input[placeholder='Car Model']").value.trim();
    const service = document.querySelector("select").value;
    const date = document.querySelector(".date").value;

    // Check empty fields
    if (!name || !phone || !carModel || !service || !date) {
      alert("⚠️ Please fill in all fields before booking!");
      return;
    }

    // Name validation → only letters & spaces, min 3 chars, max 20
    if (!/^[A-Za-z ]{3,20}$/.test(name)) {
      alert("Name must be at least 3 letters (only alphabets, max 20).");
      return;
    }

    // Phone validation → must start with 6/7/8/9 and total 10 digits
    if (!/^[6-9][0-9]{9}$/.test(phone)) {
      alert("Phone number must start with 6, 7, 8, or 9 and be 10 digits long.");
      return;
    }

    // Success
    alert("✅ Booking Successful!\n\n" +
          "Name: " + name +
          "\nPhone: " + phone +
          "\nCar Model: " + carModel +
          "\nService: " + service +
          "\nDate: " + date);

    // Redirect
    window.location.href = "submit.html";
  });
});