document.getElementById("createUserForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const formData = new FormData(this);
let a;
    fetch("controller/account/createUser.php", {
        method: "POST",
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert("Usuario creado correctamente");
            this.reset();
        } else {
            alert("Error: " + data.message);
        }
    })
    .catch(error => {
        console.error("Error:", error);
        alert("Error en la petición");
    });
});
