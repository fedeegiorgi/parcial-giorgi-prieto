### Hilo Narrativo
Enfocamos nuestro trabajo desde el punto de vista de un diario digital (BA Visual), con nuestros gráficos, que complementan a la nota, queremos contar una historia, mostrar los barrios mas ruidosos, para aquellos a quienes les parece un factor vital a la hora de buscar alojamiento.
Buscamos que los gráficos se relacionen entre sí para lograr dicho objetivo. Cada uno es de alguna manera, un zoom al primer gráfico.

Primero, mostramos la cantidad de denuncias por ruidos molestos en cada barrio de la ciudad.

Luego, de ese gráfico tomamos los tres barrios mas ruidosos para analizar, con nuestra segunda visualización, en que zonas es que se generan estas denuncias, ¿es en todo el barrio o en una zona en particular? 

Finalmente en esos tres barrios vimos los rangos horarios de las denuncias, ¿hay ruidos a la mañana/tarde debido a contaminación sonora de la ciudad o los ruidos son a la noche, producto de la vida nocturna en ese barrio?

Al ver los tres gráficos, uno puede ver cuales son los barrios mas ruidosos, en que zonas particulares de ellos es que se produce dicho ruido y en que horario es mas habitual.

### Marcas, canales y decisiones de diseño.
En el primer grafico utilizamos una geografía de la Ciudad Autónoma de Buenos Aires, y dentro de ese mapa utilizamos el canal del color para rellenar cada barrio con una intensidad distinta para marcar cuales tienen mas o menos denuncias. Consideramos que la visualización debía incluir la cantidad de denuncias, y sería idóneo que cada barrio pueda ser reconocido rápidamente. Sin embargo, al incluir toda esta información nos quedaba un gráfico muy cargado, por lo que decidimos marcar el nombre de los tres barrios mas ruidosos, para seguir el hilo narrativo del que hablamos antes e incluir la información de la cantidad de denuncias en un ranking en forma de tabla.

En el segundo volvimos a utilizar mapas pero esta vez mapas especificos de cada barrio, y utilizamos de nuevo el color para marcar las zonas de ese barrio donde mas denuncias se efectuaron, con una mayor intensidad en los lugares con mas denuncias. Usamos texto y un pín (representando ubicación) para mostrar cuales son esas zonas mas intensas.

En el último utilizamos la marca de barras, pues consideramos que es una manera muy buena de comparar cantidades, utilizamos texto en lugar de una escala para marcar la cantidad de denuncias en cada hora porque nos parecio mas especifico e impactante visualmente. 

Con estas marcas y canales, logramos enfatizar en lo que queríamos para seguir nuestro hilo narrativo.

### Problemas con el conjunto de datos
No tuvimos muchos problemas filtrando y obteniendo informacion del conjunto de datos. Nuestro mayor problema se dió al realizar la última visualización, cuando queríamos filtrar por horas y notamos que nuestro dataset tenía el horario en el cual se efectuó la denuncia como un string y no como un objeto de tipo hora. Para resolverlo, al momento de filtrar la información parseamos los strings con el horario en un objeto de tipo fecha para luego poder obtener solo la hora. El resultado fue un mapa "reclamosPorHora" donde las llaves eran solo las horas en formato 24hs y los valores eran la cantidad de objetos con hora_ingreso en dicha hora (es decir, la cantidad de denuncias hechas en la hora de la llave).

### Transformación de los datos
No transformamos los datos en si, extraimos información de los mismos (cantidad de denuncias por ruidos molestos por barrio, luego dentro de los tres barrios mas ruidosos, cantidad de denuncias por hora).

La única modificación de los archivos dados la realizamos en el segundo gráfico, pues necesitabamos los mapas de Palermo, Caballito y Recoleta por separado, entonces tomamos esa información del geojson original y creamos 3 nuevos, uno por cada barrio.