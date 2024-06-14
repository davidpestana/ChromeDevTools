### Laboratorio: Uso del Panel de Aplicaciones de Google DevTools con una PWA de Demostración

#### Objetivo
Aprender a usar el panel de aplicaciones en Google DevTools para analizar y depurar el almacenamiento local, sincronización en segundo plano (Background Sync), y otros recursos de una PWA que guarda datos en diferido contra un API.

#### Preparativos
1. **Descargar y Desplegar la PWA de Demostración:**
   - Te proporcionaré el código fuente de una PWA simple que puedes desplegar localmente o en cualquier servidor.

#### Paso 1: Crear la Aplicación PWA

Aquí tienes un ejemplo de código para una PWA de tareas que utiliza IndexedDB y sincronización en segundo plano:

##### Estructura de Archivos
```
/pwa-demo
  /images
    icon-192x192.png
    icon-512x512.png
  /js
    app.js
    sw.js
  index.html
  manifest.json
```

##### index.html
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>PWA Demo</title>
  <link rel="manifest" href="/manifest.json">
  <script src="/js/app.js" defer></script>
</head>
<body>
  <h1>PWA Demo</h1>
  <input type="text" id="taskInput" placeholder="Add a new task">
  <button id="addTaskButton">Add Task</button>
  <ul id="taskList"></ul>
</body>
</html>
```

##### manifest.json
```json
{
  "name": "PWA Demo",
  "short_name": "PWA Demo",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#ffffff",
  "description": "A simple PWA demo app",
  "icons": [
    {
      "src": "/images/icon-192x192.png",
      "type": "image/png",
      "sizes": "192x192"
    },
    {
      "src": "/images/icon-512x512.png",
      "type": "image/png",
      "sizes": "512x512"
    }
  ]
}
```

##### app.js
```javascript
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/js/sw.js').then(function(registration) {
    console.log('Service Worker registered with scope:', registration.scope);
  }).catch(function(error) {
    console.log('Service Worker registration failed:', error);
  });
}

let db;
const request = indexedDB.open('tasks', 1);

request.onupgradeneeded = function(event) {
  db = event.target.result;
  db.createObjectStore('tasks', { keyPath: 'id', autoIncrement: true });
};

request.onsuccess = function(event) {
  db = event.target.result;
  displayTasks();
};

request.onerror = function(event) {
  console.log('Error opening IndexedDB:', event.target.errorCode);
};

document.getElementById('addTaskButton').addEventListener('click', function() {
  const taskInput = document.getElementById('taskInput');
  const task = { text: taskInput.value, completed: false };

  const transaction = db.transaction(['tasks'], 'readwrite');
  const objectStore = transaction.objectStore('tasks');
  objectStore.add(task);

  transaction.oncomplete = function() {
    console.log('Task added:', task);
    taskInput.value = '';
    displayTasks();
  };

  transaction.onerror = function(event) {
    console.log('Error adding task:', event.target.errorCode);
  };
});

function displayTasks() {
  const taskList = document.getElementById('taskList');
  taskList.innerHTML = '';

  const transaction = db.transaction(['tasks'], 'readonly');
  const objectStore = transaction.objectStore('tasks');
  const request = objectStore.openCursor();

  request.onsuccess = function(event) {
    const cursor = event.target.result;
    if (cursor) {
      const li = document.createElement('li');
      li.textContent = cursor.value.text;
      taskList.appendChild(li);
      cursor.continue();
    }
  };
}
```

##### sw.js
```javascript
self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('pwa-demo-v1').then(function(cache) {
      return cache.addAll([
        '/',
        '/index.html',
        '/js/app.js',
        '/manifest.json',
        '/images/icon-192x192.png',
        '/images/icon-512x512.png'
      ]);
    })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});
```

#### Paso 2: Desplegar la Aplicación
1. Guarda los archivos en las carpetas correspondientes.
2. Abre un servidor local para probar la PWA. Puedes usar `live-server` o cualquier servidor local que prefieras.

#### Paso 3: Explorar el Panel de Aplicaciones en Google DevTools

1. **Abrir Google DevTools:**
   - Abre tu navegador y navega a la URL de tu servidor local donde la PWA está desplegada.
   - Presiona `F12` o `Ctrl + Shift + I` (en Windows) o `Cmd + Option + I` (en Mac) para abrir DevTools.
   - Haz clic en la pestaña **Application**.

2. **Service Workers:**
   - Observa el service worker registrado para la aplicación.
   - Verifica las acciones disponibles y observa los eventos.

3. **Cache Storage:**
   - Revisa los recursos almacenados en Cache Storage.

4. **IndexedDB:**
   - Explora los datos almacenados en IndexedDB.
   - Añade tareas, modifica y observa cómo se almacenan en IndexedDB.

5. **Background Sync:**
   - Implementa y verifica la sincronización en segundo plano desconectando y reconectando el internet.

#### Paso 4: Análisis Práctico

1. **Modificar Datos en IndexedDB:**
   - Añade una nueva tarea y localiza esta tarea en IndexedDB. Modifica su contenido desde DevTools y observa los cambios.

2. **Verificar Sincronización en Segundo Plano:**
   - Añade una tarea mientras estás desconectado de internet. Reconecta a internet y observa cómo la tarea se sincroniza con el servidor.

3. **Service Workers y Cache:**
   - Desregistra el Service Worker y observa el comportamiento de la aplicación offline.

### Conclusión
Este laboratorio te proporciona una introducción práctica al uso del panel de aplicaciones en Google DevTools con una PWA que utiliza sincronización en segundo plano y almacenamiento en IndexedDB. Si necesitas ayuda con algún paso o tienes preguntas adicionales, no dudes en preguntar. ¡Feliz aprendizaje!