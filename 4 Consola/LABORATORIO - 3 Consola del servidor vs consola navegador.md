**Laboratorio: Enviar Códigos a la Consola del Servidor y del Navegador**

**Iteración 3: Enviar Códigos a la Consola**

**Objetivo:**
En esta iteración, aprenderemos a enviar códigos desde el servidor a la consola del servidor y desde el cliente (navegador) a la consola del navegador.

**Pasos a Seguir:**

1. **Configuración del Proyecto:**
   - Asegúrate de tener el proyecto del laboratorio configurado según las iteraciones anteriores.

2. **Modificación del JavaScript del Servidor:**
   - Abre el archivo `server.js`.
   - Agrega un mensaje de registro a la consola del servidor utilizando `console.log`:

```javascript
const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/server-console', (req, res) => {
  console.log('¡Mensaje enviado a la consola del servidor!');
  res.json('Mensaje enviado al navegador desde el servidor');
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
```

3. **Modificación del JavaScript del Cliente:**
   - Abre el archivo `script.js`.
   - Agrega una función para enviar un mensaje a la consola del navegador cuando se hace clic en un botón:

```javascript
// Función para enviar un mensaje a la consola del navegador
function sendToBrowserConsole() {
  console.log('¡Mensaje enviado a la consola del navegador cuando se pulsa el boton!');
      fetch('http://localhost:3000/server-console')
        .then(response=>response.json())
        .then(mensaje => console.log('mensaje recibido del servidor', mensaje));
}

// Asigna la función al evento de clic del botón
document.getElementById('browser-console-btn').addEventListener('click', sendToBrowserConsole);
```

4. **Actualización del HTML:**
   - Abre el archivo `index.html`.
   - Agrega un botón en el cuerpo del documento:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <!-- Metadatos, título y enlaces a estilos -->
</head>
<body>
  <!-- Contenido HTML -->
  <h1>Envío de Códigos a la Consola</h1>
  <p>Haz clic en el botón para enviar un mensaje a la consola del navegador:</p>
  <button id="browser-console-btn">Enviar a la Consola del Navegador</button>
  <script src="script.js"></script>
</body>
</html>
```

5. **Ejecución del Servidor:**
   - Ejecuta el servidor ejecutando el comando `node server.js` en la terminal.

6. **Acceso a la Página Web:**
   - Abre tu navegador web y accede a `http://localhost:3000` para ver la página web de ejemplo servida por Node.js.
   - Abre la consola del navegador (presiona F12) y haz clic en el botón para enviar un mensaje a la consola del navegador.
   - Verifica la consola del servidor donde estás ejecutando el servidor para ver el mensaje enviado desde el servidor.
