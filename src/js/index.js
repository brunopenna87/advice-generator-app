
const adviceUpdateButton = document.querySelector(".advice-update");
const adviceNumber       = document.querySelector(".advice-id");
// Agora selecionamos a classe existente no HTML/CSS:
const adviceDescription  = document.querySelector(".advice-text");

async function getAdvice() {
  try {
    const response = await fetch("https://api.adviceslip.com/advice", { cache: "no-cache" });
    if (!response.ok) throw new Error(`Erro HTTP: ${response.status}`);

    const { slip: { id, advice } } = await response.json();
    adviceNumber.innerText      = `Advice #${id}`;
    adviceDescription.innerText = `"${advice}"`;
  } catch (error) {
    console.error("Erro ao tentar buscar conselhos:", error);
    adviceDescription.innerText = "Oops! Não foi possível carregar um conselho.";
  }
}

document.addEventListener("DOMContentLoaded", getAdvice);
adviceUpdateButton.addEventListener("click", getAdvice);
