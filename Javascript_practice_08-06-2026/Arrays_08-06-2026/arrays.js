//Array
// collection of data ( collection of homogeneous or heterogeneous data)
// to represent an array we use []
//["hello",1,2,3,4,null,undefined,true, {object},[1,2,3,4]]
// multi  dimensional array
//  array which is present in other array
// what is the need for the array
//name
//loction
// address
//..
var arr = ["1" , 20,3,4]
console.log(arr)

// --> adding the element in the array 
// --> push is used to add element at last Array

arr.push("hi")
console.log(arr)

// lets wirte in function 

function hai ()
{
    arr.push(5)
}
hai()
console.log(arr)

// --> unshift 

// It is used to add the elements at the begining of the array

arr.unshift(8)
console.log(arr)

// Splice 
//--> splice is used to add at any where of the array , we can add elements any where it our wish
//--> splice (indexvalue, deletecount , new)
arr.splice (2,0,"hello")
console.log(arr)

arr.splice (3,0,"althaf")
console.log(arr)


arr.splice (3,2,"althaf")
console.log(arr)

// how to access a single array items
// with the help of index array
// it starts from 0 and ends at n-1
// n is length of an array
 var a =[1,2,3,4,5]
 console.log(a[0])
 console.log(a[4])
 console.log(a[2])
 console.log(a[3])


 //pop
 // it is used to remove the element from an array it remove at the end of a an array

 a.pop()
 console.log(a)

 //shift
 // it used to remove the element at begining of an array

 a.shift()
 console.log(a)

 //splice
 // it used to delete any where
var aa =[1,2,3,4,5,6]
 aa.splice(3,2)
 console.log(aa)
  aa.splice(0,6)
 console.log(aa)
 var aa =[1,2,3,4,5,6]

 aa.splice(1,1,1)
 console.log(aa)

 var aa =[1,2,3,4,5,6]

 aa.splice(5,2,1)
 console.log(aa)

 
 var aa =[1,2,3,4,5,6]

 aa.splice(0,6,1)

  var aa =[1,2,3,4,5,6]
 console.log(aa.length)

 //index of is to find the index value if it find then i will count and it will give output
 // incase not found index value it will retrun -1


  var aa =[1,2,3,4,5,6]

console.log(aa .indexOf(100))

  var aa =[1,2,3,4,5,6]
  console.log(aa .indexOf(1))

  // includes --> true/false

  // 
 //includes is to find the  value if it find then i will show true and it will give output
 // incase not found  value it will retrun false

   var aa =[1,2,3,4,5,6]
  console.log(aa .includes(12))

  // last index of 
  //  last index of is to find the index value if it find then i will count the remaining index value and it will give output
 // incase not found index value it will retrun -1


 
   var aa =[1,2,3,4,5,6]
  console.log(aa .lastIndexOf(12))

   var aa =[1,2,3,4,5,6]
  console.log(aa .lastIndexOf(6))

// combining 2 array 
// concat

var num1 =[1,2,3,4,5,56]
var b=[1,2,3]
console.log(num1 ,b )

var c = num1 .concat(b)
console.log(c)



