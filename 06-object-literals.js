//enhance object literals

function newUser(user, age, country, uId){
    return {
        user: user,
        age: age,
        country: country,

        // user,
        // age,
        // country
        id: uId

    }
}

console.log(newUser('oscarmb86', 37, 'HN', 1));