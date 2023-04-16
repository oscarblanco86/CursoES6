const user = { username: 'oscarmb86', age: 37, country: 'HN'};
const { username, ...values } = user;
console.log(username);
console.log(values);