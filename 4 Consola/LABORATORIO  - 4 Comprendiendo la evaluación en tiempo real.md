**Laboratorio: Visualización de Valores en Tiempo Real en el Navegador**

**Iteración 4: Incluir Funciones, Expresiones y Variables en el JavaScript**

**Objetivo:**
En esta iteración, incluiremos funciones, expresiones, variables y constantes en el JavaScript de la página web para que el alumno pueda ver los valores en tiempo real a través de estos recursos, incluso sin ejecutar las funciones.

**Pasos a Seguir:**

1. **Modificación del JavaScript del Cliente:**
   - Abre el archivo `script.js`.
   - Agrega algunas funciones, expresiones, variables y constantes:

```javascript
// Función para sumar dos números
function sum(a, b) {
  return a + b;
}

// Expresión para calcular el área de un círculo
const radius = 5;
const area = Math.PI * radius * radius;

// Variable que almacena un mensaje
let message = 'Hola, mundo!';

// Constante que representa el número de días en una semana
const daysInWeek = 7;

// Imprimir valores en la consola
console.log('Resultado de la suma:', sum(3, 4));
console.log('Área del círculo:', area);
console.log('Mensaje:', message);
console.log('Días en una semana:', daysInWeek);
```

2. **Actualización del HTML:**
   - No es necesario realizar modificaciones en el archivo HTML.

3. **Ejecución del Servidor:**
   - Asegúrate de que el servidor esté en ejecución ejecutando el comando `node server.js` en la terminal.

4. **Acceso a la Página Web:**
   - Abre tu navegador web y accede a `http://localhost:3000` para ver la página web de ejemplo servida por Node.js.
   - Abre la consola del navegador (presiona F12) para ver los valores en tiempo real de las funciones, expresiones, variables y constantes definidas en el archivo JavaScript.
   - Escribe el nombre de una función en la consola del navegador (por ejemplo, `sum`) y observa cómo se muestra la definición de la función y el resultado de la evaluación en tiempo real, sin necesidad de ejecutarla explícitamente.