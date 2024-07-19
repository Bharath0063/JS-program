//1.array manipulation

var a=[1,2,3,4,5,6]
console.log("The pushed array is "+a.push(7))
console.log(a)
var b=[2,4,6,7,8,9]
console.log("The poped array is "+b.pop())
console.log(b)
var c=[2,4,6,8,0,2,3,4,6]
console.log("The unshifted array is "+c.unshift(1))
console.log(c)
var d=[1,2,3,4,5,6,7,2]
console.log("The shifted array is "+d.shift())
console.log(d)

//2.array searching

var e=['apple','orange','mango']
var res=e.indexOf('mango')
console.log("the indexed element is "+res)

var demo=e.find(e=>e.startsWith('m'))
console.log(demo)

var search=e.includes('pineapple')
console.log(search)

//3.array filtering

let num=[23,4,5,67,87,34]
let result=num.filter(num=>num>50)
console.log(result)

//4.array mapping

let number=[2,4,7,6,5,3,4,34,46546,546]
let solution=number.map(number=>number*2)
console.log(solution)

//5.array Destructing

function calculate(num1, num2) {
    const add = num1 + num2;
    const subtract = num1 - num2;
    const multiply = num1 * num2;
    const divide = num1 / num2;
  
    return [add, subtract, multiply, divide];
  }
  
  const [add, subtract, multiply, divide] = calculate(4, 7);
  console.log(add,subtract,multiply,divide)
  console.log("the added number is "+add)