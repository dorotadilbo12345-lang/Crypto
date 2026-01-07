const wrapper = document.getElementById("crypto-wrapper");

fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd")
  .then((response) => response.json())
  .then((data) => {
    console.log("Crypto data:", data);

    const sortedCryptos = data.sort((a, b) => a.name.localeCompare(b.name));

    sortedCryptos.forEach((crypto) => {
      const card = document.createElement("div");
      card.className = "crypto-card";

      if (crypto.current_price > 100) {
        card.style.borderColor = "gold";
      } else {
        card.style.borderColor = "silver";
      }

      card.innerHTML = `
        <div class="crypto-name">${crypto.name}</div>
        <div class="crypto-price">$${crypto.current_price}</div>
      `;

      card.addEventListener("click", () => {
        console.log("Clicked crypto:", crypto.name);
      });

      wrapper.appendChild(card);
    });
  })
  .catch((error) => {
    console.error("Error fetching crypto:", error);
  });
