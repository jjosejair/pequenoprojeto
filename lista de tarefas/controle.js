const inputTarefa = document.getElementById("inputTarefa");
const botaoAdicionar = document.querySelector(".add");
const areaLista = document.getElementById("areaLista");

// adicionar tarefa
botaoAdicionar.addEventListener("click", adicionarTarefa);

// delegação de eventos (PROFISSIONAL)
areaLista.addEventListener("click", function (event) {
  // DELETAR
  if (event.target.classList.contains("delete")) {
    const item = event.target.closest(".item");
    item.remove();

    // esconder lista se ficar vazia
    if (areaLista.children.length === 0) {
      areaLista.classList.add("oculto");
    }
  }

  // MARCAR TAREFA
  if (event.target.classList.contains("icone")) {
    const icone = event.target;
    const item = icone.closest(".item");

    item.classList.toggle("concluido");

    if (icone.textContent.trim() === "circle") {
      icone.textContent = "check_circle";
    } else {
      icone.textContent = "circle";
    }
  }
});

function adicionarTarefa() {
  const texto = inputTarefa.value.trim();

  if (texto === "") {
    alert("Digite uma tarefa!");
    return;
  }

  const item = document.createElement("div");
  item.classList.add("item");

  item.innerHTML = `
    <div class="item-icone">
      <span class="material-symbols-outlined icone">
        circle
      </span>
    </div>

    <div class="item-nome">
      ${texto}
    </div>

    <div class="item-botao">
      <button class="delete">
        Deletar
      </button>
    </div>
  `;

  areaLista.appendChild(item);

  // mostrar lista
  areaLista.classList.remove("oculto");

  inputTarefa.value = "";
  inputTarefa.focus();
}
