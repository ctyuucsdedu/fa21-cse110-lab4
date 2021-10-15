1. 3, since i exit the for loop when reach to the prices.length which is 3 and i is declared with var.
2. 150, since discountedPrice is declared with var and prices[2] = 300 with discount = 0.5, the last value of discountedPrice = 150.
3. 150, as Math.round(150 * 100)/100 = 150, rounding would not make any effect in this case.
4. [50, 100, 150], it returns the array of the three discountedPrices as what the function does.
5. error, since let i is define within the for loop, it is not defined outside of it.
6. error, similar to answer 5.
7. 150, since finalPrice is defined outside of the for loop, so line 14 still have access to it.
8. [50, 100, 150], discounted is defined outside of the for loop so it would be returned with values in the array.
9. error, since let i is define within the for loop, it is not defined outside of it.
10. 3, as const length is initialized with prices.length, there is no error.
11. [50, 100, 150], since pushing into a const array doesn't reassign the array itself but for it's elements.

12.
a. student.name
b. student["Grad Year"]
c. student.greeting()
d. student["Favorite Teacher"].name
e. student.courseLoad[0]

13.
a. '3' + 2 = '32', 2 is converted into string and append to '3'
b. '3' - 2 = 1, '3' is converted into int and minus 2
c. 3 + null = 3, adding a null would not change the number
d. '3' + null = '3null', null is converted into string
e. true + 3 = 4, true is converted into 1
f. false + null, false is converted into 0 and adding a null is 0
g. '3' + undefined = '3undefined', undefined is converted into string
h. '3' - undefined = NaN, undefined cound not be converted into a number

14.
a. '2' > 1 = true, '2' is converted into integer 2
b. '2' < '12' = false, '2' is converted into 2 and '12' is converted into 1
c. 2 == '2' = true, '2' is converted into 2
d. 2 === '2' = false, === does not do any conversion
e. true == 2 = false, true = 1 not 2
f. true == Boolean(2), Boolean(2) is converted into true

15.
== would convert the variables into same type where === wouldn't

17.
The result is [2,4,6], the function modifyArray would call the function doSomething in line 4 to mulitiply all elements in the array by 2 and push into newArr and then return.

19.
1 4 3 2