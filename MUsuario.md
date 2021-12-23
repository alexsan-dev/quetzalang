<!--Titulo-->
![image](/images/imagen00.jpg)
# **Manual De Usuario** - Quetzalang

## Contenidos

1. [Descripción Proyecto](#descripción-proyecto)
2. [Requisitos Iniciales](#requisitos-iniciales)
3. [Entorno del Proyecto](#entorno-del-proyecto)
    * Interprete
    * Traductor C3D
4. [Reportes](#reportes)
    * Errores
    * Tabla de Símbolos
    * AST
    * Gramatical 
5. [Finalizar](#finalzar)

## Descripción Proyecto
El proyecto **Quetzal** consiste en la implementación de la fase de síntesis de un compilador, desarrollando para ello un interprete y posteriormente un traductor a codigo intermedio - Codigo de 3 Direcciones.

El código de 3 direcciones puede ser ejecutado en algún compilador de C.  

Se ha utilizado **JISON** como herramienta para el análisis léxico, sintáctico y semántico.

## Requisitos Iniciales
Se ha implementado sobre la plataforma github pages, por lo que como requisito único básico es disponer de un navegador para su ejecución como usuario.

La dirección web bajo la que accederemos al editor Interprete-Traductor es la siguiente: *https://alexsan-dev.github.io/quetzalang/*

## Entorno del Proyecto
El entorno general de la aplicación consiste en un editor de texto desde el cual se pueden efectuar se ejecuta el interprete y el traductor de código de 3 direcciones; éste es como se ilustra a continuación:
<!--Imagen de Pantalla Principal-->

### Interprete
Al accesar al sitio *https://alexsan-dev.github.io/quetzalang/* se visualizan el editor de texto, es acá donde se transcribe el código que se desea interpretar.

<!--Imagen remarcando el área de editor de texto-->

Al haber ingresado código en formato del lenguaje *Quetzal* con el formato correcto, se procede a efectuar la interpretación del código dando clic en el botón **Interpretar**.

Si el código es correcto el resultado se muestra en la sección de consola en la parte inferior.

Si por el contrario se detectaran errores también acá se mostrarán los mismos.

![image](/images/interpreteOk.jpg)

### Traductor Código 3 Direcciones
En el entorno de proyecto se tiene además la capacidad de traducir el código pulsando la combinación de teclas **Ctrl+E** lo cual nos efectúa la traducción a código de 3 direcciones o pulsando el icono respectivo.

## Reportes

### Errores
Pulsando sobre el botón **REPORTES** se mostrara el informe de errores léxicos, sintácticos y semánticos. como a continuación se muestra:


![image](/images/tblsimbolOk.jpeg)

La lista de errores se muestra en la parte inferior derecha en la sección **Lista de errores**.

### Tabla de Símbolos
Pulsando sobre el botón **REPORTES** se mostrará la tabla de símbolos(variables, funciones, etc.), como a continuación se ilustra: 

![image](/images/tblsimbolOk.jpeg)

La tabla de símbolos se muestra en la parte superior derecha en la sección **Lista de simbolos**.

### AST
Pulsando sobre el botón **REPORTES** se mostrará el grafo que represena el árbol de análisis sintáctico como a continuación se indica:

![image](/images/tblsimbolOk.jpeg)

El AST se muestra en la parte izquierda del entorno de trabajo.

### Gramatical
Éste informe muestra la definición dirigida por la sintaxis utilizada.

## Finalizar







