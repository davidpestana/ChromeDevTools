### Laboratorio: Uso de Heap Snapshot en Chrome DevTools

Este laboratorio te guiará paso a paso para aprender a usar las herramientas de DevTools de Chrome para capturar y analizar heap snapshots de la memoria. Esto te permitirá identificar problemas de memoria en tus aplicaciones web, como fugas de memoria.

#### Prerrequisitos
1. Tener Google Chrome instalado.

2. Conocimiento básico de HTML, CSS y JavaScript.
3. Una aplicación web sencilla para probar (puedes usar una página web estática o cualquier proyecto en el que estés trabajando).

#### Pasos del Laboratorio

##### 1. Preparar la Aplicación
Asegúrate de tener una aplicación web lista para probar. Para este laboratorio, puedes usar un ejemplo sencillo:

**index.html**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Heap Snapshot Example</title>
</head>
<body>
    <h1>Heap Snapshot Example</h1>
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

Esta sencilla página crea una fuga de memoria cada vez que se hace clic en el botón.

##### 2. Abrir Chrome DevTools
1. Abre tu aplicación web en Google Chrome.
2. Haz clic derecho en cualquier parte de la página y selecciona "Inspeccionar" o presiona `Ctrl+Shift+I` (Windows/Linux) o `Cmd+Opt+I` (Mac) para abrir DevTools.

##### 3. Navegar a la Pestaña de Performance
1. En DevTools, navega a la pestaña **Memory**.
2. Aquí es donde puedes tomar heap snapshots y realizar otros análisis de memoria.

##### 4. Tomar un Heap Snapshot Inicial
1. Con la página cargada, haz clic en **Take snapshot** en la pestaña de Memory.
2. Esto capturará el estado actual de la memoria de la aplicación.
3. Una vez completado, podrás ver una lista de objetos en memoria.

##### 5. Crear una Fuga de Memoria
1. Vuelve a tu aplicación web y haz clic en el botón "Create Leak" varias veces para crear varias fugas de memoria.
2. Observa cómo la consola muestra mensajes indicando que se han creado las fugas.

##### 6. Tomar un Heap Snapshot Posterior
1. Vuelve a DevTools y toma otro heap snapshot después de haber creado las fugas.
2. Ahora tendrás dos snapshots que puedes comparar: uno antes de la fuga y otro después.

##### 7. Analizar los Heap Snapshots
1. Seleccion

a el heap snapshot más reciente.
2. En el panel de DevTools, selecciona la opción **Comparison** (Comparación) para comparar el snapshot actual con el anterior.
3. Busca en la lista de objetos aquellos que tienen un incremento significativo en el tamaño o en el número de instancias.
4. Haz clic en los objetos sospechosos para ver más detalles sobre ellos. Esto te permitirá identificar qué partes de tu código están causando las fugas.

##### 8. Identificar y Corregir la Fuga de Memoria
1. En nuestro ejemplo, notarás que hay muchos arrays llenos de la cadena 'leak' que se han creado por el botón.
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
4. Repite los pasos anteriores para tomar y comparar heap snapshots y asegúrate de que la fuga de memoria se ha corregido.

##### 9. Revisión y Mejores Prácticas
1. Asegúrate de siempre limpiar las referencias a objetos que ya no necesitas.
2. Usa técnicas de gestión de memoria, como el uso de debuggers y herramientas de monitoreo, regularmente en tus ciclos de desarrollo.
3. Mantén tu código modular y encapsulado para facilitar la identificación y solución de fugas de memoria.

### Conclusión
Este laboratorio te ha mostrado cómo usar las herramientas de Chrome DevTools para capturar y analizar heap snapshots, identificar fugas de memoria y corregirlas en tu código. La gestión de memoria es crucial para el rendimiento de aplicaciones web complejas, y el uso de estas herramientas puede ayudarte a mantener tu aplicación optimizada y libre de problemas de memoria.