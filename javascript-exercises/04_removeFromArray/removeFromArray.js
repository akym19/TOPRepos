const removeFromArray = function(array, ...args) {
let arr = [];
for (let item of array){
    if (!args.includes(item)){
        arr.push(item);
    }
}
return arr;
    // return array.filter(item => !args.includes(item))
};

// Do not edit below this line
module.exports = removeFromArray;
