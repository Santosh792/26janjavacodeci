async function fetchProducts(){
  const res = await fetch('/api/products');
  return res.json();
}

async function fetchCart(){
  const res = await fetch('/api/cart');
  return res.json();
}

function productCard(p){
  const div = document.createElement('div');
  div.className='card';
  div.innerHTML = `<h3>${p.name}</h3><p>${p.description}</p><strong>$${p.price}</strong><br>`;
  const btn = document.createElement('button');
  btn.textContent='Add to cart';
  btn.onclick = async ()=>{
    await fetch('/api/cart',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({productId:p.id,qty:1})});
    alert('Added to cart');
  };
  div.appendChild(btn);
  return div;
}

async function renderProducts(targetId){
  const products = await fetchProducts();
  const container = document.getElementById(targetId);
  container.innerHTML='';
  products.forEach(p=>container.appendChild(productCard(p)));
}

async function renderCart(){
  const items = await fetchCart();
  const c = document.getElementById('cart');
  if(!c) return;
  c.innerHTML='';
  if(items.length===0) c.textContent='Cart is empty';
  items.forEach(it=>{
    const div = document.createElement('div');
    div.className='card';
    div.innerHTML = `<h4>${it.product.name}</h4><div>Qty: ${it.qty}</div><div>Price: $${it.product.price}</div>`;
    c.appendChild(div);
  });
}

document.addEventListener('DOMContentLoaded', ()=>{
  if(document.getElementById('products')) renderProducts('products');
  renderCart();
});
