document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const formData = new FormData(this);

  fetch("controller/account/login.php", {
    method: "POST",
    body: formData,
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.success) {
        window.location.href = "index.php";
      } else {
        alert(data.message);
      }
    })
    .catch(() => {
      alert("Error en el servidor");
    });
});
