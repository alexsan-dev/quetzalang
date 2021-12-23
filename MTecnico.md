<!--Titulo-->
# **Manual Técnico** - Quetzalang

## INTEGRANTES
|                     201904117 Alex Daniel Santos Valenzuela                    |                      199616754 Manuel Ricardo Chávez Ambrosio                      |                                      |                                                |
|:-------------------------------------------------------------------------------:|:----------------------------------------------------------------------------:|:----------------------------------------------------------------------------------:|:----------------------------------------------------------------------------------:|


***
## INTRODUCCIÓN

El presente documento tiene como finalidad de proveer información sobre la estructura de la aplicación implementada. Conocer sus partes, la manera de cómo fue construida, etc.

El presente manual tiene por finalidad brindar las especificaciones técnicas del proyecto *Quetzalang* 
dando detalles de la implementación.
***

## HERRAMIENTAS UTILIZADAS PARA EL DESARROLLO

### TypeScript

Para la realización del proyecto se utilizó el lenguaje de programación TypeScript; que es un lenguaje de programación libre y de código abierto.

### Jison

JISON es un generador de analizadores sintácticos LALR, que permite crear un analizador desde un archivo .jison con una syntaxis parecida a YACC/LEX como BISON para C.

La herramienta [JISON](https://gerhobbelt.github.io/jison/docs/) fué la utilizada en la implementación del análisis léxico-sintáctico.

La herramienta de linea comandos genera un archivo de Javascript como modulo que puede integrarse de manera sencilla con aplicaciones de Nodejs, el problema es que contiene mucho código desorganizado y generalmente Dead Code que no es necesario para analizar lenguajes de alto rendimiento.

Se utilizó [WEBPACK](https://webpack.js.org/) que es una herramienta Open Source utilizada para empaquetar y exportar todos los ficheros necesarios para que el proyecto funcione con todas sus dependencias frontend.

### HTML - CSS

Luego que todo se ha comprimido en un solo archivo se ha desarrollado nuestro editor de código con la utilización *HTML-HyperText Markup Language* y *CSS-Cascading Style Sheets*; obteniendo el siguiente resultado:

![image](/images/EditorOk.jpg)

***
##  ESTRUCTURA
* TypeScript
* Jison
    * Análisis Léxico
    * Análisis Sintáctico
* Webpack
* HTML-CSS

***
##  Descarga de la Implementación

### Clonar o Descargar del Repositorio
Haciendo uso de git:

git clone https://github.com/alexsan-dev/quetzalang.git

### Instalar lista de dependencias globales para desarrollo

* TypeScript
* Jison

npm i -g jison typescript

### Instalar lista de dependencias locales

npm i

### Iniciar en modo desarrollo

Al iniciar en este modo compilara todos los archivos .ts, creara la gramatica jison y creara un servidor estatico para el index.html en http://localhost:3000

npm start


