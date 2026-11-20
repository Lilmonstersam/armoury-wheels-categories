/* Product-page quote interaction uses the mockups' existing local quote store. */
(() => {
  const key = 'armoury_quote_cart';
  const variants = {
    '4299': { sku: 'ARA217-32', finish: 'ArmourBrite' },
    '4306': { sku: 'ARP217-32', finish: 'Polished' }
  };
  let memory = [];
  const read = () => {
    try {
      const stored = JSON.parse(localStorage.getItem(key) || '[]');
      return Array.isArray(stored) ? stored : memory;
    } catch { return memory; }
  };
  const count = entries => entries.reduce((n,item) => n + Math.max(1,Number(item.quantity) || 1),0);
  const refresh = () => {
    const items = read();
    document.querySelectorAll('[data-ag-quote-count]').forEach(el => el.textContent = count(items));
    document.querySelectorAll('[data-wc-cart-count]').forEach(el => el.textContent = count(items) || '');
  };
  const preview = () => {
    const dialog = document.getElementById('ag-quote-preview');
    const list = dialog.querySelector('[data-ag-quote-items]');
    list.replaceChildren();
    const items = read();
    items.forEach(item => {
      const li = document.createElement('li');
      const finishes = Array.isArray(item.finishes) ? item.finishes.join(', ') : '';
      li.textContent = [item.productName, item.productSku, finishes, 'Qty ' + (item.quantity || 1)].filter(Boolean).join(' · ');
      list.appendChild(li);
    });
    dialog.querySelector('[data-ag-quote-empty]').hidden = items.length > 0;
    dialog.showModal();
  };
  // Capture on window before the saved WooCommerce handlers can send a live
  // cart request. This is a local mockup selection, shared with the other pages.
  window.addEventListener('click', event => {
    const target = event.target.closest?.('[data-ag-product-add],[data-ag-view-quote],#ag-sticky-add');
    if (!target) {
      if (event.target.closest?.('#ag-quote-preview')) event.stopPropagation();
      return;
    }
    event.preventDefault();
    event.stopImmediatePropagation();
    if (target.hasAttribute('data-ag-view-quote')) { preview(); return; }
    const selected = Number(document.getElementById('ag-sticky-select').value) || 0;
    const id = target.id === 'ag-sticky-add' ? Object.keys(variants)[selected] : target.dataset.agProductAdd;
    const variant = variants[id];
    if (!variant) return;
    const entries = read();
    const found = entries.find(item => item.productSku === variant.sku);
    if (found) found.quantity = Math.max(1,Number(found.quantity) || 1) + 1;
    else entries.push({
      source:'product_page', category:'wheel', productId:id,
      productName:'Light Truck Drive/Steer 6 stud', productSku:variant.sku,
      quantity:1, productUrl:'https://armourygroup.com.au/product/light-truck-drive-steer-6-stud/',
      finishes:[variant.finish], items:[], truckModel:'',
      freeText:'16 x 5.5-inch truck wheel · 6/222 PCD', recommendation:false
    });
    memory = entries;
    try { localStorage.setItem(key,JSON.stringify(entries)); } catch {}
    refresh();
    const status = document.querySelector('[data-ag-quote-status]');
    status.textContent = variant.sku + ' · ' + variant.finish + ' added to your quote.';
    target.textContent = 'Added';
    clearTimeout(target.agResetTimer);
    target.agResetTimer = setTimeout(() => target.textContent = 'Add to quote',1800);
  },true);
  document.addEventListener('DOMContentLoaded', refresh);
})();
