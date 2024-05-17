**Laboratorio: Exploración de Retardos y Cargas de Datos con Network**

En esta segunda parte del laboratorio, exploraremos los diferentes retardos y cargas de datos utilizando la pestaña Network de Chrome DevTools.

**Paso 1: Acceso a Chrome DevTools y Navegación a la Pestaña Network**

1. Abre Google Chrome.
2. Accede a la página web creada en la primera parte del laboratorio (http://localhost:3000).
3. Haz clic derecho en cualquier parte de la página y selecciona "Inspeccionar" o presiona `Ctrl + Shift + I` (Windows/Linux) o `Cmd + Option + I` (Mac) para abrir Chrome DevTools.
4. En Chrome DevTools, navega a la pestaña "Network".

**Paso 2: Realización de Llamadas a los Endpoints**

1. Haz clic en los botones de la webapp para llamar a los diferentes endpoints que simulan cargas de datos y retardo.
2. Observa cómo aparecen las solicitudes en la pestaña Network de Chrome DevTools.

**Paso 3: Análisis de las Solicitudes en Network**

1. Observa las diferentes solicitudes listadas en la pestaña Network.
2. Analiza las columnas disponibles, como Name, Status, Type, Size, Time, etc.
3. Observa los diferentes códigos de estado de las solicitudes y los tiempos de respuesta.
4. Haz clic en una solicitud para obtener detalles adicionales, como cabeceras, cuerpo de la respuesta, tiempos de carga, etc.

**Paso 4: Filtrado y Ordenación de Solicitudes**

1. Utiliza las opciones de filtrado y ordenación de la pestaña Network para encontrar solicitudes específicas o para analizar el rendimiento de la carga de la página.
2. Experimenta con diferentes filtros, como XHR, JS, CSS, etc., para ver diferentes tipos de solicitudes.
3. Ordena las solicitudes por diferentes métricas, como tiempo, tamaño, tiempo total, etc.

**Paso 5: Análisis de los Retardos y Cargas de Datos**

1. Identifica las solicitudes que simulan retardo y carga de datos.
2. Observa los tiempos de respuesta de estas solicitudes y compáralos con los tiempos de retardo configurados en los endpoints del servidor.
3. Analiza cómo afectan los diferentes tiempos de retardo y cargas de datos al rendimiento general de la página.
4. Observa cómo cambian las métricas de rendimiento, como el tiempo total de carga de la página, en función de los diferentes escenarios de carga y retardo.

Con estos pasos, habrás explorado y analizado los diferentes retardos y cargas de datos utilizando la pestaña Network de Chrome DevTools, lo que te permitirá comprender mejor el impacto de estos factores en el rendimiento de una aplicación web.