Vamos a utilizar la **Progressive Web App (PWA) Demo** que Google ofrece para ilustrar el uso de estas tecnologías.

### Laboratorio: Uso del Panel de Aplicaciones de Google DevTools con una PWA

#### Objetivo
Aprender a usar el panel de aplicaciones en Google DevTools para analizar y depurar el almacenamiento local, Service Workers, y otros recursos de una aplicación web progresiva (PWA).

#### Materiales Necesarios
- Navegador Google Chrome.
- La aplicación de demostración de PWA: [Air Horner](https://airhorner.com/).

#### Paso 1: Acceder a Google DevTools
1. Abre Google Chrome y navega a la aplicación de demostración [Air Horner](https://airhorner.com/).
2. Presiona `F12` o `Ctrl + Shift + I` (en Windows) o `Cmd + Option + I` (en Mac) para abrir DevTools.
3. Haz clic en la pestaña **Application**.

#### Paso 2: Explorar el Panel de Aplicaciones

##### Service Workers
1. **Registrar y Verificar el Service Worker:**
   - En la sección **Service Workers**, observa el service worker registrado para la aplicación.
   - Verifica las acciones disponibles, como la actualización del service worker y la visualización de sus eventos.

##### Cache Storage
1. **Explorar Cache Storage:**
   - Revisa cómo la aplicación almacena recursos en Cache Storage para una carga más rápida.
   - Explora los archivos cacheados y cómo se gestionan.
   - Intenta desconectar tu internet y recargar la aplicación para ver cómo funciona offline.

##### Storage
1. **Local Storage:**
   - En el panel de la izquierda, expande la sección **Local Storage** y selecciona el sitio web.
   - Observa los datos almacenados localmente y realiza modificaciones.

2. **IndexedDB:**
   - Expande la sección **IndexedDB** para ver la base de datos utilizada por la aplicación.
   - Explora los objetos almacenados y cómo se estructuran.

##### Background Services
1. **Push Messaging:**
   - Si la aplicación utiliza notificaciones push, podrás ver la configuración y los mensajes recibidos.

2. **Background Sync:**
   - Verifica si la aplicación utiliza sincronización en segundo plano y cómo gestiona las tareas pendientes.

#### Paso 3: Análisis Práctico

1. **Modificar Datos en Local Storage:**
   - Realiza alguna acción en la aplicación que almacene datos en Local Storage.
   - Localiza estos datos en Local Storage y modifica su contenido desde DevTools. Refresca la página y observa los cambios.

2. **Ver Cookies:**
   - Observa las cookies establecidas por la aplicación y modifica sus valores.

3. **Service Workers y Cache:**
   - Desregistra el Service Worker desde DevTools y observa el comportamiento de la aplicación.
   - Navega offline para ver cómo el Service Worker y el Cache Storage permiten que la aplicación funcione sin conexión.

#### Paso 4: Tareas Adicionales
1. **Explorar una Aplicación Diferente:**
   - Repite el proceso con otra PWA de tu elección.
   - Observa las diferencias en el uso de almacenamiento y otros recursos.

2. **Crear un Proyecto Sencillo:**
   - Crea una página HTML sencilla que utilice Local Storage, IndexedDB, y un Service Worker.
   - Usa DevTools para verificar que los datos se almacenan correctamente y realiza modificaciones directas.

### Conclusión
Este laboratorio proporciona una introducción práctica al uso del panel de aplicaciones en Google DevTools con una PWA. Explorar el almacenamiento local, los Service Workers, y otros recursos te permitirá comprender mejor cómo las aplicaciones web progresivas manejan y almacenan datos, mejorando tus habilidades de depuración y desarrollo.