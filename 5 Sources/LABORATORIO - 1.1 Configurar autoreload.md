Incluir Nodemon en un proyecto Node.js es una excelente manera de mejorar tu flujo de trabajo durante el desarrollo, ya que Nodemon automáticamente reinicia tu servidor cuando detecta cambios en los archivos del proyecto. Aquí te dejo una guía paso a paso para hacerlo:

### Paso 1: Proyecto Node.js

Si aún no tienes un proyecto Node.js, primero necesitas crear uno y si ya lo tienes pasa directamente a instalar nodemon detallado en el Paso 2. 

Abre tu terminal y sigue estos pasos:

1. **Crear un nuevo directorio para tu proyecto:**

   ```bash
   mkdir mi-proyecto-node
   cd mi-proyecto-node
   ```

2. **Inicializar un nuevo proyecto Node.js:**

   ```bash
   npm init -y
   ```

   Esto generará un archivo `package.json` con la configuración predeterminada.

### Paso 2: Instalar Nodemon

Instala Nodemon como una dependencia de desarrollo. Esto asegura que Nodemon se utiliza solo en el entorno de desarrollo y no en producción.

```bash
npm install nodemon --save-dev
```

### Paso 3: Configurar Nodemon

Para utilizar Nodemon, debes actualizar el archivo `package.json` para incluir un script que lo ejecute. Abre `package.json` y añade una sección de scripts o modifica la existente:

```json
{
  "name": "mi-proyecto-node",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "start": "node index.js",
    "dev": "nodemon index.js"
  },
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "nodemon": "^2.0.15"
  }
}
```

### Paso 4: Crear el archivo de entrada

A continuacion se detalla el codigo de un servicio de aplicación, si ya tienes el tuyo no necesitas crearlo. (server.js) en el paso anterior.

Crea un archivo `index.js` (o el nombre que prefieras y que coincida con el script en `package.json`) en el directorio raíz de tu proyecto. Aquí tienes un ejemplo básico:

```javascript
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, World!\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
```

### Paso 5: Ejecutar Nodemon

Ahora puedes ejecutar tu proyecto con Nodemon usando el siguiente comando:

```bash
npm run dev
```

Verás un mensaje en la terminal indicando que el servidor se está ejecutando. Si haces cambios en `index.js` o en cualquier archivo de tu proyecto, Nodemon detectará estos cambios y reiniciará automáticamente el servidor.

### Paso 6: Configuración avanzada (opcional)

Nodemon también permite configuraciones más avanzadas a través de un archivo de configuración. Puedes crear un archivo `nodemon.json` en el directorio raíz de tu proyecto para personalizar el comportamiento de Nodemon. Por ejemplo:

```json
{
  "watch": ["src"],
  "ext": "js,json",
  "ignore": ["test/*", "docs/*"],
  "exec": "node index.js"
}
```

Este archivo indica a Nodemon que observe la carpeta `src` y reinicie el servidor solo cuando se modifiquen archivos con extensiones `.js` o `.json`, ignorando los cambios en las carpetas `test` y `docs`.

### Resumen

- Crea un proyecto Node.js.
- Instala Nodemon como dependencia de desarrollo.
- Configura el script de inicio en `package.json`.
- Crea el archivo de entrada del servidor.
- Ejecuta el servidor con Nodemon.
- (Opcional) Personaliza la configuración de Nodemon.

Siguiendo estos pasos, habrás integrado Nodemon en tu proyecto Node.js, lo que mejorará tu flujo de trabajo al desarrollar aplicaciones.