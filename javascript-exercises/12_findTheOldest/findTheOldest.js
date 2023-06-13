const findTheOldest = function(people) {
    let oldest = '';
    let age = 0;
    const year = new Date().getFullYear()
    for (let i = 0; i < people.length; i++){
        // console.log(people[i].name)
        if (!people[i].hasOwnProperty('yearOfDeath')){
            currentAge = year - people[i].yearOfBirth;
        } else {
            currentAge = people[i].yearOfDeath - people[i].yearOfBirth;
        }
        if (currentAge > age){
            age = currentAge;
            oldest = people[i];
        }
    }
    return oldest;
};
// Do not edit below this line
module.exports = findTheOldest;
