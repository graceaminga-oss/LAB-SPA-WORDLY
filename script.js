document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("search-form");
  const input = document.getElementById("word-input");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const word = input.value.trim();

    if (word === "") {
      showError("Please enter a word");
      return;
    }

    fetchWord(word);
  });
});

// FETCH DATA FROM API
async function fetchWord(word) {
  try {
    const response = await fetch(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
    );

    if (!response.ok) {
      throw new Error("Word not found");
    }

    const data = await response.json();
    displayWord(data[0]);
    clearError();

  } catch (error) {
    showError(error.message);
  }
}

// DISPLAY DATA ON PAGE
function displayWord(data) {
  document.getElementById("word").textContent = data.word;

  document.getElementById("phonetic").textContent =
    data.phonetic || "No pronunciation";

  document.getElementById("definition").textContent =
    data.meanings[0].definitions[0].definition;

  document.getElementById("example").textContent =
    data.meanings[0].definitions[0].example || "No example available";

  // SYNONYMS
  let synonyms = data.meanings[0].definitions[0].synonyms;

  let synonymText = "No synonyms found";

  if (synonyms && synonyms.length > 0) {
    synonymText = synonyms.join(", ");
  }

  document.getElementById("synonyms").textContent =
    synonymText;
}

// ERROR HANDLING
function showError(message) {
  document.getElementById("error-message").textContent = message;
}

function clearError() {
  document.getElementById("error-message").textContent = "";
}