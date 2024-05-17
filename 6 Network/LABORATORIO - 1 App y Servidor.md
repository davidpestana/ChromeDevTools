Entendido, vamos a crear los endpoints y la webapp con los botones correspondientes. Aquí tienes los pasos actualizados:

**Paso 1: Configuración del Servidor y Creación de Endpoints**

1. **Configurar los Endpoints en el Servidor:**
   - Agrega los siguientes endpoints al archivo `server.js` para simular carga de datos y retardo:
     ```javascript
     // Endpoints de carga de datos
     app.get('/data/100b', (req, res) => {
       res.set('Content-Type', 'text/plain').send('Respuesta de 100 bytes');
     });

     app.get('/data/1kb', (req, res) => {
       res.set('Content-Type', 'text/plain').send('x'.repeat(1024));
     });

     app.get('/data/10kb', (req, res) => {
       res.set('Content-Type', 'text/plain').send('x'.repeat(1024 * 10));
     });

     app.get('/data/100kb', (req, res) => {
       res.set('Content-Type', 'text/plain').send('x'.repeat(1024 * 100));
     });

     // Endpoints con retardo
     app.get('/delay/1000ms', (req, res) => {
       setTimeout(() => {
         res.set('Content-Type', 'text/plain').send('Respuesta con retardo de 1000ms');
       }, 1000);
     });

     app.get('/delay/2000ms', (req, res) => {
       setTimeout(() => {
         res.set('Content-Type', 'text/plain').send('Respuesta con retardo de 2000ms');
       }, 2000);
     });

     app.get('/delay/3000ms', (req, res) => {
       setTimeout(() => {
         res.set('Content-Type', 'text/plain').send('Respuesta con retardo de 3000ms');
       }, 3000);
     });
     ```

**Paso 2: Creación de la WebApp HTML, CSS y JS**

1. **Crea un archivo `index.html`:**
   - Crea un archivo llamado `index.html` en la raíz de tu proyecto y agrega la estructura HTML básica.

2. **Agrega los Botones para Llamar a los Endpoints:**
   - Dentro del archivo `index.html`, agrega los siguientes botones para llamar a los endpoints:
     ```html
     <!DOCTYPE html>
     <html lang="es">
     <head>
       <meta charset="UTF-8">
       <meta name="viewport" content="width=device-width, initial-scale=1.0">
       <title>Laboratorio de Carga de Datos y Retardo</title>
       <link rel="stylesheet" href="styles.css">
     </head>
     <body>
       <h1>Laboratorio de Carga de Datos y Retardo</h1>
       <button onclick="callEndpoint('/data/100b')">Cargar 100 bytes</button>
       <button onclick="callEndpoint('/data/1kb')">Cargar 1 kilobyte</button>
       <button onclick="callEndpoint('/data/10kb')">Cargar 10 kilobytes</button>
       <button onclick="callEndpoint('/data/100kb')">Cargar 100 kilobytes</button>
       <button onclick="callEndpoint('/delay/1000ms')">Retardo de 1000ms</button>
       <button onclick="callEndpoint('/delay/2000ms')">Retardo de 2000ms</button>
       <button onclick="callEndpoint('/delay/3000ms')">Retardo de 3000ms</button>
       <script src="scripts.js"></script>
     </body>
     </html>
     ```

3. **Crea un archivo `styles.css`:**
   - Crea un archivo llamado `styles.css` en la misma ubicación que `index.html` y agrega los estilos CSS necesarios según tu preferencia.

4. **Crea un archivo `scripts.js`:**
   - Crea un archivo llamado `scripts.js` en la misma ubicación que `index.html` y agrega el siguiente código JavaScript para realizar las llamadas a los endpoints:
     ```javascript
     function callEndpoint(endpoint) {
       fetch(endpoint)
         .then(response => response.text())
         .then(data => console.log(data))
         .catch(error => console.error('Error:', error));
     }
     ```

**Paso 3: Inicia el Servidor y Visualiza la WebApp**

1. **Inicia el Servidor:**
   - Guarda todos los archivos creados (`server.js`, `index.html`, `styles.css` y `scripts.js`) en la misma carpeta.
   - Abre tu terminal, navega hasta la ubicación del proyecto y ejecuta el siguiente comando para iniciar el servidor:
     ```bash
     node server.js
     ```

2. **Visualiza la WebApp:**
   - Abre tu navegador web y navega a `http://localhost:3000` para acceder a la webapp.
   - Haz clic en los botones para llamar a los diferentes endpoints y observa las respuestas en la consola del navegador.

Con estos pasos, has creado una aplicación Node.js con varios endpoints para simular carga de datos y retardo, y una webapp con botones para llamar a estos endpoints y visualizar las respuestas en la consola del navegador.