function newUser(name, age, country) {
    var name = name || 'Oscar';
    var age = age || 37;
    var country = country || 'HN';
    console.log(name,age,country);
}

newUser();
newUser('Natalia',6,'MX');

//ES6

function newAdmin(name = 'Oscar', age = 37, country = 'HN') {
    console.log(name, age, country);
}

newAdmin();
newAdmin('Alicia',10,'HN');