
function createCounter(number) {
    let current = number;

    function increment() {
        current++;
        return current;
    }

    function decrement() {
        current--;
        return current;
    }

    function reset() {
        current = number;
        return current;
    }
    return{
        increment,
        decrement,
        reset 
    }

};
createCounter(5);
