/*Catch Unclosed Parentheses, Brackets, Braces and Quotes
Another syntax error to be aware of is that all opening parentheses, brackets, curly braces, and quotes have a closing pair. 
Forgetting a piece tends to happen when you're editing existing code and inserting items with one of the pair types. 
Also, take care when nesting code blocks into others, such as adding a callback function as an argument to a method.

One way to avoid this mistake is as soon as the opening character is typed, immediately include the closing match, 
then move the cursor back between them and continue coding. Fortunately, most modern code editors
generate the second half of the pair automatically.


Fix the two pair errors in the code.*/

        let myArray = [1, 2, 3];
        let arraySum = myArray.reduce((previous, current ) =>  previous + current);
        console.log(`Sum of array values is: ${arraySum}`);


/*The reduce() method reduces an array to a single value. If you’re not familiar with it, 
the following code shows an example of using the the method:

const array1 = [1, 2, 3, 4];
console.log(array1.reduce((accumulator, currentValue) => accumulator + currentValue));  // expected output: 10
You can also define the argument to the reduce method as a variable or constant and hand that in to the function, e.g.,

const array1 = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => accumulator + currentValue;

// 1 + 2 + 3 + 4
console.log(array1.reduce(reducer));      // expected output: 10

// 5 + 1 + 2 + 3 + 4
console.log(array1.reduce(reducer, 5));   // expected output: 15
You can see and run this code at Array.prototype.reduce().*/
