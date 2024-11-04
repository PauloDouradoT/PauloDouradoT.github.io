const entrada = document.getElementById("contact-name");
const btn = document.getElementById("add-contact-btn");
const saida = document.getElementById("contact-list");
const del = document.getElementById("clear-list-btn");

btn.addEventListener("click", () => {
  const nome = entrada.value.trim();
  if (nome !== "") {
    const lista = document.createElement("li");
    // lista.setAttribute('class', 't')
    lista.textContent = nome;
    saida.appendChild(lista);
    entrada.value = "";
    del.addEventListener("click", () => {
      saida.removeChild(lista);
    });
  } else {
    alert("Entrada Inaválida! Por favor, insira um nome.");
  }

  const remov = document.querySelectorAll("li");
  const ex = Array.from(remov);
  ex.map((el) => {
    el.classList.add("classeI");
  });

  const exc = document.querySelectorAll(".classeI");
  const val = Array.from(exc);
  val.map((item) => {
    if (item.firstElementChild == null) {
      const span = document.createElement("span");
      span.classList.add("radio");
      span.textContent = "X";
      item.appendChild(span);
      //console.log(item);
      //console.log(item.firstElementChild)

      const spns = [...document.querySelectorAll("span")];
      console.log(spns);
      spns.map((el) => {
        el.addEventListener("click", (el) => {
          el.target.parentElement.remove();
        });
      });
    }
  });
});
