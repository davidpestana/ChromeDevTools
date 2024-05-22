1. **Inicialización del proyecto:**
```bash
mkdir mi-proyecto
cd mi-proyecto
npm init -y
```

2. **Instalación de dependencias:**
```bash
npm install express
```

3. **Creación de archivos:**
```bash
touch index.html style.css server.js
```

4. **Contenido de los archivos:**

   **index.html:**
   ```html
   <!DOCTYPE html>
   <html lang="en">
   <head>
       <meta charset="UTF-8">
       <meta name="viewport" content="width=device-width, initial-scale=1.0">
       <title>My App</title>
       <link rel="stylesheet" href="style.css">
   </head>
   <body>
       <h1>Hello, world!</h1>
       <script src="script.js"></script>
   </body>
   </html>
   ```

   **style.css:**
   ```css
   body {
       background-color: #f0f0f0;
   }
   ```

   **server.js:**
   ```javascript
   const express = require('express');
   const app = express();
   const port = 3000;

   app.get('/', (req, res) => {
       res.sendFile(__dirname + '/index.html');
   });

   app.listen(port, () => {
       console.log(`Servidor corriendo en http://localhost:${port}`);
   });
   ```

5. **Ejecución del servidor:**
```bash
node server.js
```