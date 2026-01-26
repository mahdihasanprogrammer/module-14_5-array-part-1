const numbers = [20,10,30,54,80,93,70];

console.log(numbers)
// numbers.pop()
// numbers.shift()
numbers.push(100,500,300)

console.log(numbers)
numbers.unshift(200)
console.log(numbers.indexOf(54));


const friends = ['salman', 'sakib', 'hossain'];
const index = friends.indexOf('sakib');
console.log(index);

for(const number of numbers){
    // console.log(number)
}


const student = ['ajhar', {name:'hasan',sun:'sadaqat'},20];
console.log(student[1].sun);

student[0]= 'shafique';
console.log(student)