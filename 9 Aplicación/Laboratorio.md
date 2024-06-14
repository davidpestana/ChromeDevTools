### Laboratorio Detallado: Uso del Panel de Aplicaciones de Google DevTools con Vue Task List

#### Objetivo
Aprender a usar el panel de aplicaciones en Google DevTools para analizar y depurar el almacenamiento local, sincronización en segundo plano (Background Sync), y otros recursos de la PWA [Vue Task List](https://bezzubovegor.github.io/vue-task-list/#/lists).

#### Materiales Necesarios
- Navegador Google Chrome.
- La aplicación de demostración [Vue Task List](https://bezzubovegor.github.io/vue-task-list/#/lists).

### Paso 1: Acceder a Google DevTools

1. **Abrir la Aplicación:**
   - Navega a [Vue Task List](https://bezzubovegor.github.io/vue-task-list/#/lists) en Google Chrome.
   
2. **Abrir DevTools:**
   - Presiona `F12` o `Ctrl + Shift + I` (en Windows) o `Cmd + Option + I` (en Mac) para abrir DevTools.

3. **Ir a la Pestaña de Aplicaciones:**
   - Haz clic en la pestaña **Application** en DevTools.

### Paso 2: Explorar el Panel de Aplicaciones

#### Service Workers

1. **Verificar el Service Worker:**
   - En el panel izquierdo, selecciona **Service Workers**.
   - Verás el service worker registrado para la aplicación. Observa su estado (activo o no) y las acciones disponibles.

2. **Actualizar y Ver Eventos:**
   - Para forzar una actualización del service worker, haz clic en el botón **Update**.
   - Observa los eventos y logs generados en la consola de Service Workers.

3. **Desregistrar y Volver a Registrar el Service Worker:**
   - Para desregistrar el service worker, haz clic en el botón **Unregister**.
   - Para volver a registrar el service worker, recarga la página. Esto hará que el navegador registre el service worker nuevamente si el archivo `sw.js` está presente en tu proyecto.

#### Cache Storage

1. **Explorar los Recursos Cacheados:**
   - En el panel izquierdo, selecciona **Cache Storage**.
   - Verás los recursos que la aplicación ha cacheado para una carga más rápida. Expande las entradas para ver los archivos específicos que se han almacenado en caché.

2. **Prueba del Modo Offline:**
   - Desconecta tu conexión a internet (puedes hacerlo desactivando la conexión de red o desconectando tu Wi-Fi).
   - Recarga la página de la aplicación. La aplicación debería seguir funcionando en modo offline utilizando los recursos cacheados.

#### IndexedDB

1. **Explorar IndexedDB:**
   - En el panel izquierdo, selecciona **IndexedDB**.
   - Expande la base de datos `vue-todo` para ver las tablas disponibles (objetos de almacenamiento).

2. **Añadir una Tarea:**
   - Vuelve a la aplicación y añade una nueva tarea.
   - En DevTools, actualiza la vista de IndexedDB para ver la nueva tarea añadida en la base de datos.

3. **Modificar Datos:**
   - Selecciona una entrada en IndexedDB y modifica su contenido directamente.
   - Para hacerlo, selecciona la entrada, haz doble clic en el campo que deseas modificar, realiza el cambio y presiona Enter.
   - Refresca la página de la aplicación para ver los cambios reflejados.

#### Local Storage

1. **Explorar Local Storage:**
   - En el panel izquierdo, selecciona **Local Storage** y elige el sitio web.
   - Observa las claves y valores almacenados localmente.

2. **Modificar Datos en Local Storage:**
   - Cambia el valor de alguna clave y observa cómo afecta a la aplicación. Para hacerlo, selecciona una clave, haz doble clic en el valor, realiza el cambio y presiona Enter.

### Paso 3: Análisis Práctico

#### Verificar Sincronización en Segundo Plano

1. **Simular Desconexión:**
   - Desactiva tu conexión a internet.
   - Añade una tarea en la aplicación. 

2. **Reconectar y Sincronizar:**
   - Reconecta tu internet y observa cómo la tarea se sincroniza con el servidor.
   - Puedes verificar los logs de sincronización en la sección **Background Sync** de DevTools.

### Conclusión

Este laboratorio proporciona una introducción práctica al uso del panel de aplicaciones en Google DevTools con la PWA [Vue Task List](https://bezzubovegor.github.io/vue-task-list/#/lists). Explorando el almacenamiento local, los Service Workers, y la sincronización en segundo plano, puedes obtener una comprensión profunda de cómo las aplicaciones web progresivas manejan y almacenan datos.