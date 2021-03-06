# Proyecto Twitter

## JS Backend project

馃 Mis redes sociales:

- [instagram](https://www.instagram.com/axlze/)
- [linkedin](https://www.linkedin.com/in/axl-reyes-b6914b219/)

### Requerimientos Primer Sprint: Agregar modelos

```markdown

Despu茅s de evaluar tiempo y esfuerzos, el equipo de Launch X ha decidido crear la aplicaci贸n `Twitter`. Para ello han definido la primera etapa del sprint con los siguientes requerimientos a desarrollar:

SPRINT 1: Creaci贸n de un modelo
 
 Requerimiento 1: Se necesita un modelo `User` para guardar la informaci贸n de un usuario de nuestra app: `id`, `username`, `name`, `bio`, `dateCreated` y `lastUpdated`. 
 Soluci贸n: Crear una clase User y un constructor que guarde estos par谩metros. 
 
 Requerimiento 2: Las propiedades `dateCreated` y `lastUpdated` deber谩n ser datos de tipo fecha que guarden el momento en que se instancie un nuevo objeto de la clase `User`.
 Soluci贸n: Modifica el constructor de la clase creada y asigna un valor por defecto a estos atributos usando `new Date()`.
 
 Requerimiento 3: Cada objeto tipo user necesita los siguietes gettes: `getUsername`, `getBio`, `getDateCreated`, `getLastUpdated`.
 Soluci贸n: Agrega los getters regresando la propiedad indicada, no olvides usar `this`.
 
 Requerimiento 4: Cada objeto necesita los siguientes setters: `setUsername` y `setBio`, para actualizar dichas propiedades.
 Soluci贸n: Agrega los setters usando la palabra `set` y modificando el atributo indicado.
```

## Requerimientos Segundo Sprint: Interacci贸n con el modelo

```
Requerimiento 1: Crear un nuevo usuario con lo ya definido en el sprint anterior, usando una nueva clase llamada `UserService`.
Criterios de aceptaci贸n:
1. Esta clase deber谩 tener un m茅todo `create` que se pueda usar sin instanciar (static method), y que reciba solo los par谩metros del `id`, `username` y `name`. 
2. El valor de `bio` deber谩 ser por default para todos los `user` creados.
Requerimiento 2: Agregar un nuevo m茅todo est谩tico en `UserService` llamado `getInfo` que al recibir un objeto de la clase `User`, me regrese una lista con todos los valores de los atributos de dicho objeto.
Requerimiento 3: Agregar un nuevo m茅todo est谩tico en `UserService` llamado `updateUserUsername`, que reciba un objeto de la clase `User` y un nuevo string, que actualizar谩 el valor de `username`. 
Requerimiento 4: Agregar un nuevo m茅todo est谩tico en `UserService` llamado `getAllUsernames`, que recibir谩 una lista de objetos de la clase `User`, y regresar谩 la lista de todos los usernames de dichos objetos. 
```
## Requerimientos tercer Sprint: Agregar vistas

```markdown

Crea una clase llamada `UserView` que servir谩 para interactuar con el modelo `User` a trav茅s de `userService`. Crea un m茅todo en esta clase llamado `create User` que sirva para crear un nuevo objeto user a partir de un `payload`, quiero decir un objeto que contenga informaci贸n para crearlo.

Requerimientos:
1. Valida que al enviar en el `payload` un valor `null`, obtenga un objeto con la llave `error` y el valor indique `payload no existe`.
2. Valida que un `payload` contenga en alguna de las llaves `username`, `name`, o `id` un valor en `null`. Si hay un valor `null` regresa un objeto con la llave `error` y que indique el texto: `necesitan tener un valor v谩lido`.
3. Valida que un `payload` con algunas de las propiedades necesarias regrese un objeto con la llave `error` indicando `necesitan tener un valor v谩lido`.
4. Verifica que se pueda crear un objeto `User`, al enviar un payload con las siguientes propiedades: `username`, `id` y `name`.
```
