document.addEventListener('DOMContentLoaded', function() {
    // Declaro el game object como circulo
    let go = "circle";

    // Informacion sobre el juego
    let info = document.querySelector("#info");
    info.textContent = `Is ${go} turn`;
    info.style.color = "red";

    // Hacer que al presionar una celda se dibujo el game object correspondiente
    const cell = document.querySelectorAll("td");
    cell.forEach(td => {
        td.addEventListener("click", () => {
            if (td.querySelector("div") === null){
                // Insertar el game object
                let newCell = document.createElement("div");

                if (go === "circle"){
                    info.style.color = "blue";
                }else{
                    info.style.color = "red";
                }

                newCell.classList.add(go);
                td.append(newCell);

                if (go === "circle"){
                    newCell.textContent = "O";
                }else{
                    newCell.textContent = "X";
                }

                // Aquí debería revisar si alguien ganó

                // Luego de dibujar el game object este debe cambiar
                if (go === "circle"){
                    go = "cross"
                }else{
                    go = "circle"
                }

                // Informacion actualizada de a quien le toca
                info.textContent = `Is ${go} turn`;
            }
        });
    });

    // Boton para reiniciar el juego
    const restart = document.querySelector("button");
    restart.addEventListener("click", function() {
        location.reload();
    });
});