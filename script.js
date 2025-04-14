// فارم کے بھیجنے پر ایک سادہ پیغام ظاہر کرنا
document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      alert("آپ کا پیغام موصول ہوگیا ہے۔ شکریہ!");
      form.reset();
    });
  }
});
