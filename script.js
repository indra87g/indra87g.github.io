document.addEventListener("DOMContentLoaded", () => {
  alert("Selamat datang!");
  const h1 = document.getElementById("animatedText");
  const img = document.getElementById("gokil");
  let hue = 0;

  function animate() {
    hue = (hue + 1) % 360;
    h1.style.color = `hsl(${hue}, 100%, 50%)`;
    requestAnimationFrame(animate);
  }
  
  img.addEventListener("click", function() {
      this.classList.toggle("upside-down");
  });

  animate();
});

