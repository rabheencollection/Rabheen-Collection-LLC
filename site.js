/* Shared site behavior — used by thobes.html, jewelry.html, dresses.html */

// TODO: replace with your real WhatsApp number, country code, no + or spaces
// Example: "15551234567"
const WHATSAPP_NUMBER = "15551234567";

function buildOrderLink(productName, price){
  const msg = `Hi! I'm interested in the ${productName} ($${price}) from Rabheen Collection.`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
}

function renderGrid(categoryKey, gridElId){
  const grid = document.getElementById(gridElId);
  const items = (window.PRODUCTS && window.PRODUCTS[categoryKey]) || [];

  if(items.length === 0){
    grid.innerHTML = `<div class="empty-state">New pieces coming soon — check back shortly.</div>`;
    return;
  }

  grid.innerHTML = items.map(item => `
    <div class="card">
      <div class="photo"><img src="${item.image}" alt="${item.name}" loading="lazy"></div>
      <div class="info">
        <h3>${item.name}</h3>
        <div class="price">$${item.price}</div>
        <a class="buy" href="${buildOrderLink(item.name, item.price)}" target="_blank" rel="noopener">Message to Order</a>
      </div>
    </div>
  `).join('');
}
