### Laboratorio: Uso de Allocation Sampling en Chrome DevTools

Este laboratorio te guiará paso a paso para aprender a usar la herramienta de Allocation Sampling en Chrome DevTools para capturar y analizar la asignación de memoria en tiempo real. Esto es útil para identificar problemas de rendimiento relacionados con la asignación de memoria en tu aplicación web.

#### Prerrequisitos
1. Tener Google Chrome instalado.
2. Conocimiento básico de HTML, CSS y JavaScript.
3. Una aplicación web sencilla para probar (puedes usar una página web estática o cualquier proyecto en el que estés trabajando).

#### Pasos del Laboratorio

##### 1. Preparar la Aplicación
Asegúrate de tener una aplicación web lista para probar. Puedes usar el mismo ejemplo sencillo de los laboratorios anteriores:

**index.html**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Allocation Sampling Example</title>
</head>
<body>
    <h1>Allocation Sampling Example</h1>
    <button id="leak-button">Create Leak</button>
    <script src="script.js"></script>
</body>
</html>
```

**script.js**
```javascript
let leaks = [];

document.getElementById('leak-button').addEventListener('click', () => {
    for (let i = 0; i < 1000; i++) {
        leaks.push(new Array(1000).fill('leak'));
    }
    console.log('Leak created!');
});
```

##### 2. Abrir Chrome DevTools
1. Abre tu aplicación web en Google Chrome.
2. Haz clic derecho en cualquier parte de la página y selecciona "Inspeccionar" o presiona `Ctrl+Shift+I` (Windows/Linux) o `Cmd+Opt+I` (Mac) para abrir DevTools.

##### 3. Navegar a la Pestaña de Memory
1. En DevTools, navega a la pestaña **Memory**.
2. Aquí es donde puedes tomar heap snapshots y realizar otros análisis de memoria.

##### 4. Configurar y Iniciar el Allocation Sampling
1. En la pestaña Memory, selecciona la opción **Allocation sampling**.
2. Haz clic en el botón **Start** para comenzar a grabar la asignación de memoria.

##### 5. Crear una Fuga de Memoria
1. Con la grabación en marcha, vuelve a tu aplicación web y haz clic en el botón "Create Leak" varias veces para crear fugas de memoria.
2. Observa cómo la consola muestra mensajes indicando que se han creado las fugas.

##### 6. Detener la Grabación
1. Después de haber creado las fugas, vuelve a la pestaña Memory y haz clic en el botón **Stop** para detener la grabación.
2. La herramienta de Allocation Sampling procesará los datos y mostrará los resultados en una vista detallada.

##### 7. Analizar los Resultados
1. Una vez que la grabación se detiene, verás una lista detallada de las funciones que han asignado memoria durante el periodo de grabación.
2. La vista mostrará la cantidad de memoria asignada por cada función y el número de veces que se ha llamado a cada función.
3. Busca las funciones relacionadas con la creación de fugas. En nuestro ejemplo, debería ser evidente que la función asociada con el botón "Create Leak" está asignando una gran cantidad de memoria.

##### 8. Identificar y Corregir la Fuga de Memoria
1. En nuestro ejemplo, notarás que la función asociada con el botón "Create Leak" está asignando una gran cantidad de memoria.
2. Para corregir esta fuga, modifica el código para gestionar mejor la memoria:

**script.js**
```javascript
document.getElementById('leak-button').addEventListener('click', () => {
    // Limpiar las fugas anteriores antes de crear nuevas
    leaks = [];
    for (let i = 0; i < 1000; i++) {
        leaks.push(new Array(1000).fill('leak'));
    }
    console.log('Leak created!');
});
```

3. Guarda los cambios y recarga la página.
4. Repite los pasos anteriores para grabar y analizar la asignación de memoria para asegurarte de que la fuga de memoria se ha corregido.

### Conclusión
Este laboratorio te ha mostrado cómo usar la herramienta de Allocation Sampling en Chrome DevTools para capturar y analizar la asignación de memoria en tiempo real en tu aplicación web. Esto te ayuda a identificar problemas de rendimiento y fugas de memoria, y a tomar las medidas necesarias para optimizar tu código.