**Laboratorio: Creación de un Servidor con Node.js para Servir una Página Web de Ejemplo**

**Iteración 1: Configuración del Servidor Básico**

**Objetivo:**
En esta iteración, configuraremos un servidor básico utilizando Node.js para servir una página web de ejemplo. Además, incluiremos un código secreto en el JavaScript de la página web que el alumno deberá encontrar y leer en la consola del navegador.

**Pasos a Seguir:**

1. **Configuración del Proyecto:**
   - Crea un nuevo directorio para el proyecto del laboratorio.
   - Inicializa un nuevo proyecto de Node.js ejecutando el comando `npm init -y` en la terminal.
   
2. **Instalación de Dependencias:**
   - Instala las dependencias necesarias ejecutando el comando `npm install express` en la terminal.

3. **Creación de Archivos:**
   - Crea un archivo HTML llamado `index.html` con el siguiente contenido:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Sample Web Page</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <h1>Hello, World!</h1>
  <p>This is a sample web page served by Node.js.</p>
  <script src="script.js"></script>
</body>
</html>
```

   - Crea un archivo JavaScript llamado `script.js` con el siguiente contenido:

```javascript
// Genera un código secreto aleatorio
const secretCode = Math.floor(Math.random() * 1000) + 1;

// Envía el código secreto a la consola del navegador
console.log(`¡Bienvenido! Tu código secreto es: ${secretCode}`);
```

   - Crea un archivo CSS llamado `styles.css` con el siguiente contenido:

```css
body {
  font-family: Arial, sans-serif;
  background-color: #f0f0f0;
  text-align: center;
}

h1 {
  color: #333;
}

p {
  color: #666;
}
```

4. **Configuración del Servidor:**
   - Crea un archivo llamado `server.js` con el siguiente contenido:

```javascript
const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
```

5. **Ejecución del Servidor:**
   - Ejecuta el servidor ejecutando el comando `node server.js` en la terminal.

6. **Acceso a la Página Web:**
   - Abre tu navegador web y accede a `http://localhost:3000` para ver la página web de ejemplo servida por Node.js.
   - Abre la consola del navegador (presiona F12) para encontrar y leer el código secreto generado en el archivo `script.js`.