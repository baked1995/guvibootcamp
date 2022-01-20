let arrayNumber = [5,10,15,20,25,30,35,40,50,60,75,45,66,69,87,]

//1.Print odd numbers in an array
let resultArray = (function (arrayNumber) {

    return (arrayNumber.filter((item) => {

        return item % 2 !== 0

    }))
})(arrayNumber);

console.log("All odd numbers in an array: " + resultArray)

//2. Convert all the strings to title caps in a string array
let stringArray = ['my' , 'name', 'is', 'harshit', 'gowda']

let resultStringArray = (function (stringArray) {

    return (stringArray.map((item) => {

        return item.toUpperCase()

    }))
})(stringArray);

console.log("All upper case string in an array: " + resultStringArray)

//3.Sum of all numbers in an array

let resultSumArray = (function (arrayNumber) {

    return (arrayNumber.reduce((currentTotal, item) => {

        return currentTotal + item

    }, 0))
})(arrayNumber);

console.log("Sum of numbers in an array: " + resultSumArray)

//4.Return all the prime numbers in an array

let resultPrimeArray = (function (arrayNumber) {

    return (arrayNumber.filter((item) => {

        for (i = 2; i < item; i++) {
            if (item % i === 0)
                return false
        }

        return true

    }))
})(arrayNumber);

console.log("Prime numbers in an array: " + resultPrimeArray)

//5.Return all the palindromes in an array

let PallindromeArray = (function (arrayNumber) {

    return (arrayNumber.filter((item) => {

        let temp = item + ""

        if ((temp.split('').reverse().join('')) === item + "")
            return true

        return false

    }))
})(arrayNumber);

console.log("Pallindrome numbers in an array: " + PallindromeArray)

//6.Return median of two sorted arrays of same size
let arr1 = [1, 2, 3, 4, 5, 8, 10, 12]
let arr2 = [8, 9, 10, 12, 16, 18, 20]

let resultMedian = function (arr1, arr2) {

    let result = []

    let lenArr1 = arr1.length

    let lenArr2 = arr2.length

    if (lenArr1 % 2 === 0) {
        console.log("Median of array 1: " + arr1[lenArr1 / 2])
    } else {
        console.log("Median of array 1: " + arr1[(lenArr1 + 1) / 2])
    }
    if (lenArr2 % 2 === 0) {
        console.log("Median of array 2: " + arr2[lenArr2 / 2])
    } else {
          console.log("Median of array 2: " + arr2[(lenArr2 + 1) / 2])
    }

    return
}(arr1, arr2);

//7.Remove duplicates from an array
let arrayWithDup = [22, 22, 11, 10, 11, 56, 10, 1, 2, 6, 7, 56, 3, 9]

let resultArrayWoDup = ((arrayWithDup, index) => {

    return [...new Set(arrayWithDup)]

})(arrayWithDup)

console.log("Array without Duplicates " + resultArrayWoDup)

//8.Rotate an array by k times and return the rotated array

let arrforrotate = [0, 1, 5, 6, 7, 9]
let resultArrayShifted = ((array, k) => {

    for (let i = 0; i < k; i++) {
        let temp = array.shift()
        array.push(temp)
    }
    return array

})(arrforrotate, 3)

console.log("Array roatated k times: " + resultArrayShifted)
