var a = [1,2,3,4,56]
var b=["a","b","c","D"]

console.log(a,b)
var c = a.concat(b)
console.log(c)


var arr = [1,2,3]
for (i in arr)
    console.log(i ,arr[i])

var arr = [1,2,3]
for (i of arr)
    console.log( arr[i])

//Testing the Array
// Some and every
// every -> all condition true then it will display true otherwise flase
// some -> any one condition true then it will retrun true 

var arr =[ 2,3,4,5,6,7]

var  some=arr.some(ar  => ar >6)
console.log(some)

var  some=arr.some(ar  => ar >8)
console.log(some)

var every = arr.every(arr =>arr >1)
console.log(every)

var every = arr.every(arr =>arr >0)
console.log(every)

var every = arr.every(arr =>arr >2)
console.log(every)

//Join

var join=arr.join("_")
console.log(join)

var join=arr.join("+")
console.log(join)
var join=arr.join(" ")
console.log(join)

// sort

// It is used to arrange array elements in ascending or descending order

var num1 =[1,3,4,6,10,20,24,454]
var alph= ["a" ,"b","d" ,"e", "c"]

var sort=alph.sort()
console.log(sort)

// coming to the numbers is as problem
var sort=num1.sort()
console.log(sort)


// ascending order
var sort=num1.sort( (a,b) => a-b)
console.log(sort)

// how it works 
// a-b --> negative  --> a comes before b
           //postive ----> b comes before a

 // descending order
 
 var sort=num1.sort( (a,b) => b-a)
console.log(sort)

// falttening of Array
// var arr2 = [1,2,3[2,3,4[4,3[23,44]]]]
// var flat =arr2.flat(Infinity)


// console.log(flat)
var arr2 = [1, 2, 3, [2, 3, 4, [4, 3, [23, 44]]]];

var flat = arr2.flat(Infinity);

console.log(flat);

// console.log(arr2.flat(  2))

//removing duplicates

//we removes duplicates by using set

var m =[ 1,2,3,4,5,2,3,6]

var set = [...new Set(m)]
console.log(set)

// indexof ()

var index = m .indexOf(6)
console.log(index)

// map 
 //it is used to transform each element of an array and retrum a new array

 
var m =[ 1,2,3,4,5,2,3,6]

var map = m .map(m=> m*2)
console.log(map)

var map = m .map(m=> m==2)
console.log(map)

var map = m .map(m=> m+100)
console.log(map)

// filter 
// it retruns only elements that satisys ba condition

var map = m .filter(m=> m%2==0)
console.log(map)

// reduce 
// it is e used to reduced an array to a singlr value
// it will count the total elements

var reduce = m .reduce(m=> m*2)
console.log(map)

var reduce = m .reduce(m=> m)
console.log(map)