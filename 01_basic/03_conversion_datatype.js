let age = 36

let score = "9987as"

// console.table([age, score])
// console.log(age, score)

// console.log(typeof score)

let new_score = Number(score)
// console.log(typeof new_score)
// console.table([age, new_score]) 
// as it was mixture of number and string it do convert the variable type to number 
// it doesnt threw error and also it put bydefault value to nan


let val1 = undefined
let new_val1 = Number(score)
// console.log(typeof val1, typeof new_val1)
// console.table([val1, new_val1])

let val2 = NaN
let new_val2 = Number(score)
// console.log(typeof val2, typeof new_val2)
// console.table([val2, new_val2])

let val3 = true
let new_val3 = Number(score)
// console.log(typeof val3, typeof new_val3)
// console.table([val3, new_val3])

let val4 = null
let new_val4 = Number(score)
// console.log(typeof val4, typeof new_val4)
// console.table([val4, new_val4])





let value1 = "ff"
let bool_val = Boolean(value1)
console.log(bool_val);

// "" > False, "gfhj" -> True
// 0 - False, 1 - true


number_1 = 7
let str_num = Number(number_1)
console.log(str_num, typeof str_num);

