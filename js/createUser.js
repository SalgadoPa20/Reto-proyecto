document
  .getElementById("createUserForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    const formData = new FormData(this);

    console.log({ formData });

    // Debug real
    for (let [key, value] of formData.entries()) {
      console.log(key, value);
    }

    fetch("controller/account/createUser.php", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          alert("Usuario creado correctamente");
          this.reset();
        } else {
          alert("Error: " + data.message);
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("Error en la petición");
      });
  });
