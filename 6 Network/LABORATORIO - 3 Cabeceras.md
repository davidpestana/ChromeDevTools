**Modificación de Archivos para Incluir Cabeceras en la WebApp y el Servidor**

En este laboratorio, aprenderemos cómo modificar los archivos de la WebApp y del servidor para incluir cabeceras en las solicitudes (request) y respuestas (response) HTTP.

**Paso 1: Modificación de la WebApp**

1. Abre el archivo JavaScript de la WebApp donde se realiza la solicitud al servidor.
2. Encuentra la función o el evento que desencadena la solicitud.
3. Dentro de esta función o evento, busca el código que realiza la solicitud, generalmente utilizando la función `fetch()` o `XMLHttpRequest()`.
4. Añade un objeto de configuración adicional en la solicitud para incluir las cabeceras de la solicitud (request headers) necesarias. Por ejemplo:

   ```javascript
   fetch(url, {
     method: 'GET',
     headers: {
       'Content-Type': 'application/json',
       'Authorization': 'Bearer token123'
     }
   })
   ```

5. Guarda los cambios en el archivo JavaScript.

**Paso 2: Modificación del Servidor**

1. Abre el archivo de código del servidor donde se manejan las solicitudes entrantes.
2. Encuentra la función o el middleware que procesa las solicitudes entrantes.
3. Dentro de esta función o middleware, añade código para incluir las cabeceras de respuesta (response headers) necesarias en las respuestas del servidor. Por ejemplo, si estás utilizando Express en Node.js:

   ```javascript
   app.use(function(req, res, next) {
     res.setHeader('Content-Type', 'application/json');
     res.setHeader('Cache-Control', 'no-cache');
     next();
   });
   ```

4. Guarda los cambios en el archivo del servidor.

Con estos pasos, habrás modificado tanto la WebApp como el servidor para incluir las cabeceras necesarias en las solicitudes y respuestas HTTP. Recuerda verificar que las cabeceras se estén enviando correctamente utilizando las herramientas de desarrollo del navegador (por ejemplo, Chrome DevTools) y el registro de solicitudes del servidor.