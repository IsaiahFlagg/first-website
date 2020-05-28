const database = [
    {
        "id": 1,
        "name": 'Fender Stratocaster',
        "price": 699.00
    },
    {
        "id": 2,
        "name": "Gibson Les Paul",
        "price": 1199.00
    },
    {
        "id": 3,
        "name": "prod Gibson SG",
        "price": 2517.00
    },
    {
        "id": 4,
        "name": "Yamaha FG700S",
        "price": 489.99
    },
    {
        "id": 5,
        "name": "Washburn D10S",
        "price": 299.00
    },
    {
        "id": 6,
        "name": "Rodriguez Caballero 11",
        "price": 415.00
    },
    {
        "id": 7,
        "name": "Fender Precision",
        "price": 799.99
    },
    {
        "id": 8,
        "name": "Hofner Icon",
        "price": 499.99
    },
    {
        "id": 9,
        "name": "Ludwig 5-piece Drum Set with Cymbals",
        "price": 699.99
    },
    {
        
        "id": 10,
        "name": "Tama 5-Piece Drum Set with Cymbals",
        "price": 799.99
    }
];
console.log(database);
console.log(database[0]);
/*JSON.stringify(); This is a json method 
you have to add Javascript to it to see it on the screen*/
document.getElementById("myid").innerHTML = JSON.stringify(database[0].name) + " " + JSON.stringify(database[0].price);
//Id are Unique
document.getElementById("item").innerHTML = `${JSON.stringify(database[0].name)} ${JSON.stringify(database[0].price)}`;
document.getElementById("mytable").innerHTML = `
<tr ${JSON.stringify(database[0].id)}>
    <td>${JSON.stringify(database[0].name)}</td>
    <td>${JSON.stringify(database[0].price)}</td>
    <td><a href="">*Text here*</a></td>
</tr>

<tr ${JSON.stringify(database[1].id)}>
    <td>${JSON.stringify(database[1].name)}</td>
    <td>${JSON.stringify(database[1].price)}</td>
    <td><a href="">*Text here*</a></td>
</tr>`;

