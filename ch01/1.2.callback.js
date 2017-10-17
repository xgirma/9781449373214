const cities = ['Tokyo', 'London'];

cities.forEach(function callback(city){
   console.log('first: ', city);
});

function callback(city){
    console.log('second: ', city);
}

cities.forEach(callback);

console.log('\n callbacks do not have to be declared inline always.');

