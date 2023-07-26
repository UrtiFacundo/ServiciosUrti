document.addEventListener('DOMContentLoaded', function () {
    const comprar1 = document.getElementById('comprar1');
    comprar1.addEventListener('click', function () {
      const lista = document.getElementById('lista');
      const nuevoElemento = document.createElement('li');
      nuevoElemento.textContent = 'Branding';
      lista.appendChild(nuevoElemento);
    });
    localStorage.setItem("servicio", "Branding");
  });
  document.addEventListener('DOMContentLoaded', function () {
    const comprar2 = document.getElementById('comprar2');
    comprar2.addEventListener('click', function () {
      const lista = document.getElementById('lista');
      const nuevoElemento = document.createElement('li');
      nuevoElemento.textContent = 'Publicidad';
      lista.appendChild(nuevoElemento);
    });
  });
  localStorage.setItem("servicio", "Publicidad");
  
document.addEventListener('DOMContentLoaded', function () {
 const comprar3 = document.getElementById('comprar3');
    comprar3.addEventListener('click', function () {
      const lista = document.getElementById('lista');
      const nuevoElemento = document.createElement('li');
      nuevoElemento.textContent = 'Social Media';
      lista.appendChild(nuevoElemento);
    });
  });
  localStorage.setItem("servicio", "Social Media");
  
  document.addEventListener('DOMContentLoaded', function () {
     const comprar4 = document.getElementById('comprar4');
    comprar4.addEventListener('click', function () {
       const lista = document.getElementById('lista');
       const nuevoElemento = document.createElement('li');
   nuevoElemento.textContent = 'Web Development';
    lista.appendChild(nuevoElemento);
    });
  });
  localStorage.setItem("servicio", "Web Development");

