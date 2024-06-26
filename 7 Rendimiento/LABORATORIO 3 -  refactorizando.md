### Modificaciones en el Servidor (Node.js)

#### 1. Instalación de Dependencias
```bash
npm install express
```

#### 2. Archivo `server.js`
```javascript
const express = require('express');
const app = express();
const allData = generateData();

// Endpoint para obtener datos paginados
app.get('/data', (req, res) => {
  const page = req.query.page || 1;
  const pageSize = 10; // Tamaño de página
  const startIndex = (page - 1) * pageSize;
  const endIndex = page * pageSize;
  const paginatedData = allData.slice(startIndex, endIndex);
  res.json(paginatedData);
});


function generateData() {
  const data = [];
  for (let i = 0; i < 1000; i++) {
    data.push({
      id: i + 1,
      name: `Product ${i + 1}`,
      price: Math.floor(Math.random() * (1000 - 10 + 1)) + 10, // Precio aleatorio entre 10 y 1000
      category: ['Electronics', 'Clothing', 'Books'][Math.floor(Math.random() * 3)] // Categoría aleatoria
    });
  }
  return data;
}

app.listen(3000, () => {
  console.log('Servidor iniciado en el puerto 3000');
});
```

### Modificaciones en la Web App (HTML, CSS y JavaScript)

#### 1. Archivo `index.html`
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Paginación de Datos</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div id="data-container"></div>
  <button id="prev-btn">Anterior</button>
  <button id="next-btn">Siguiente</button>
  <script src="script.js"></script>
</body>
</html>
```

#### 2. Archivo `styles.css`
```css
/* Estilos */
```

#### 3. Archivo `script.js`
```javascript
const dataContainer = document.getElementById('data-container');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
let currentPage = 1;

function displayData(item) {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');
    productCard.innerHTML = `
      <h2>${item.name}</h2>
      <p>Price: $${item.price}</p>
      <p>Category: ${item.category}</p>
    `;
    return productCard;
};



function fetchData(page) {
  fetch(`/data?page=${page}`)
    .then(response => response.json())
    .then(data => {
      // Renderizar los datos en el contenedor
      dataContainer.innerHTML = '';
      data.forEach(item => {
        const div = displayData(item);
        dataContainer.appendChild(div);
      });
    })
    .catch(error => console.error('Error al obtener datos:', error));
}

// Event listeners para los botones de paginación
prevBtn.addEventListener('click', () => {
  if (currentPage > 1) {
    currentPage--;
    fetchData(currentPage);
  }
});

nextBtn.addEventListener('click', () => {
  currentPage++;
  fetchData(currentPage);
});

// Cargar datos al iniciar la aplicación
fetchData(currentPage);
```

Con estas modificaciones, la aplicación estará lista para paginar los datos y mejorar su rendimiento al cargar solo una parte de los datos a la vez.
