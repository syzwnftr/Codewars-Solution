/*

Closure Counter

    Define the function counter that returns a function that returns an increasing value.
    The first value should be 1.
    You're going to have to use closures.

Example:

        const newCounter = counter();
        newCounter() // 1
        newCounter() // 2

*/

function counter() {
    let num = 0;
    const insideFunction = () => {
        return num += 1;
    }
    return insideFunction;
}