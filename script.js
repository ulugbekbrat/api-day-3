let box = document.querySelector('.box');
let past = document.querySelector('.past');
let totalPrice = 0; 

fetch('https://fakestoreapi.com/products?limit=10')
  .then((res) => res.json())
  .then((data) => {
    for (let olma of data) {
      box.innerHTML += `
        <div class="card">
          <img src="${olma.image}" alt="">
          <h3 class="product-title">${olma.title}</h3>
          <p>${olma.category}</p>
          <h3 class="product-price">${olma.price}$</h3>
          <button class="btn">Sotib olish</button>
        </div>
      `;
    }
  });

box.addEventListener('click', (e) => {
  if (e.target.classList.contains('btn')) {
    alert('Mahsulot savatga qo\'shildi');

    let productTitle = e.target.closest('.card').querySelector('.product-title').textContent;
    let productPrice = parseFloat(
      e.target.closest('.card').querySelector('.product-price').textContent.replace('$', '')
    );

    totalPrice += productPrice;

    past.innerHTML += `
      <p>${productTitle} - ${productPrice}$</p>
    `;
    past.innerHTML += `
      <p><strong>Total Price: ${totalPrice.toFixed(2)}$</strong></p>
    `;
  }
});
