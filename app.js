const fs = require('fs');

genders = ['male', 'female'];
maleNames = ['John','Bob', 'Michael', 'Alan', 'Jeff'];
femaleNames = ['Barbara', 'Tiffany', 'Dorothy', 'Alex', 'Martha'];
lastNames = ['Smith', 'Wane', 'Young', 'Koval', 'Marshall'];

let identity = [];
let i=0;

while(i<=20){
    let generatedIdentity = {};
    generatedIdentity.id = i;

    generatedIdentity.genders = genders[Math.floor(Math.random() * genders.length)];

    if (generatedIdentity.gender == 'male') {
        generatedIdentity.firstName = maleNames[Math.floor(Math.random() * maleNames.length)];
    } else {
        generatedIdentity.firstName = femaleNames[Math.floor(Math.random() * femaleNames.length)];
    }

    generatedIdentity.lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
    generatedIdentity.age = Math.floor((Math.random() * 60) + 18);
    generatedIdentity.mail = `${generatedIdentity.firstName}.${generatedIdentity.lastName}@gmail.com`;

    identity.push(generatedIdentity);

    i++;
}

const data = JSON.stringify(identity);
fs.writeFile('identity.json', data, (err) => {
    if (err) throw err;
});