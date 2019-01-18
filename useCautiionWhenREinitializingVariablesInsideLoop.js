/*Use Caution When Reinitializing Variables Inside a Loop
Sometimes it's necessary to save information, increment counters, or re-set variables within a loop. 
A potential issue is when variables either should be reinitialized, and aren't, or vice versa. 
This is particularly dangerous if you accidentally reset the variable being used for the terminal condition,
causing an infinite loop.

Printing variable values with each cycle of your loop by using console.log() can uncover buggy behavior related to resetting, 
or failing to reset a variable.


The following function is supposed to create a two-dimensional array with m rows and n columns of zeroes. 
Unfortunately, it's not producing the expected output because the row variable isn't being reinitialized 
(set back to an empty array) in the outer loop. 
Fix the code so it returns a correct 3x2 array of zeroes, which looks like [[0, 0], [0, 0], [0, 0]].

_____________________________________________________
Use Caution When Reinitializing Variables Inside a Loop
This challenge must be solved by redefining the scope of row[].
Below is an example of the desired matrix.

[
[0][0],
[0][0],
[0][0]
]
However the current matrix - seen below - is far from the desired matrix

[
[0][0][0][0][0][0],
[0][0][0][0][0][0],
[0][0][0][0][0][0]
]
This error occurs due to the row[] array being declared as a global variable outside of the nested for loop.
However, to fill the matrix correctly the row[] array must be reset after each iteration of the outer loop.

*/

function zeroArray(m, n) {
  // Creates a 2-D array with m rows and n columns of zeroes
  let newArray = [];
  
  for (let i = 0; i < m; i++) {
    // Adds the m-th row into newArray
    let row = [];
    for (let j = 0; j < n; j++) {
      // Pushes n zeroes into the current row to create the columns
      row.push(0);
    }
    // Pushes the current row, which now has n zeroes in it, to the array
    newArray.push(row);
  }
  return newArray;
}

let matrix = zeroArray(3, 2);
console.log(matrix);
