### Laboratorio: Uso del Panel de Aplicaciones de Google DevTools

#### Objetivo
Aprender a usar el panel de aplicaciones en Google DevTools para analizar y depurar el almacenamiento local (Local Storage, Session Storage, IndexedDB) y otros recursos de una aplicación web.

#### Materiales Necesarios
- Navegador Google Chrome.
- Una aplicación web para analizar (utilizaremos una aplicación de ejemplo: [To-Do MVC](https://todomvc.com/examples/react/)).

#### Paso 1: Acceder a Google DevTools
1. Abre Google Chrome y navega a la aplicación de ejemplo [To-Do MVC](https://todomvc.com/examples/react/).
2. Presiona `F12` o `Ctrl + Shift + I` (en Windows) o `Cmd + Option + I` (en Mac) para abrir DevTools.
3. Haz clic en la pestaña **Application**.

#### Paso 2: Explorar el Panel de Aplicaciones

##### Storage
1. **Local Storage:**
   - En el panel de la izquierda, expande la sección **Local Storage** y selecciona el sitio web.
   - Añade algunos elementos en la aplicación To-Do MVC y observa cómo los datos se almacenan en Local Storage.
   - Puedes agregar, modificar y eliminar ítems directamente desde DevTools.

2. **Session Storage:**
   - Similar a Local Storage, pero los datos se eliminan al cerrar la pestaña. Explora la sección **Session Storage** y realiza operaciones similares.

3. **IndexedDB:**
   - IndexedDB es una base de datos más poderosa para almacenar grandes cantidades de datos. Explora la sección **IndexedDB** para ver si la aplicación lo utiliza.
   - Revisa las bases de datos, sus objetos almacenados y cómo se estructuran.

##### Cookies
1. Selecciona la sección **Cookies**.
   - Observa las cookies establecidas por la aplicación.
   - Puedes modificar o eliminar cookies directamente desde DevTools.

##### Cache
1. **Cache Storage:**
   - Revisa cómo la aplicación almacena recursos en Cache Storage para una carga más rápida.
   - Explora los archivos cacheados y cómo se gestionan.

2. **Service Workers:**
   - Si la aplicación utiliza un Service Worker, podrás verlo aquí.
   - Los Service Workers son scripts que permiten una funcionalidad offline y otras características avanzadas.

#### Paso 3: Análisis Práctico

1. **Modificar Datos en Local Storage:**
   - Añade una nueva tarea en la aplicación To-Do MVC.
   - Localiza esta tarea en Local Storage y modifica su texto desde DevTools. Refresca la página y observa los cambios.

2. **Ver Cookies:**
   - Inicia sesión o realiza una acción que establezca cookies en una aplicación web.
   - Observa los detalles de las cookies establecidas (nombre, valor, dominio, ruta, etc.).

3. **Service Workers y Cache:**
   - Si la aplicación tiene un Service Worker, intenta desregistrarlo desde DevTools y observa el comportamiento.
   - Navega offline para ver cómo el Service Worker y el Cache Storage permiten que la aplicación funcione sin conexión.

#### Paso 4: Tareas Adicionales
1. **Explorar una Aplicación Diferente:**
   - Repite el proceso con otra aplicación web de tu elección.
   - Observa las diferencias en el uso de almacenamiento y otros recursos.

2. **Crear un Proyecto Sencillo:**
   - Crea una página HTML sencilla que utilice Local Storage y Session Storage.
   - Usa DevTools para verificar que los datos se almacenan correctamente y realiza modificaciones directas.

### Conclusión
Este laboratorio te proporciona una introducción práctica al uso del panel de aplicaciones en Google DevTools. Explorar el almacenamiento local, las cookies y los Service Workers te permitirá comprender mejor cómo las aplicaciones web manejan y almacenan datos, mejorando tus habilidades de depuración y desarrollo.