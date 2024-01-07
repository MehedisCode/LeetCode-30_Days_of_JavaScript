/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(num) {
    let init = num;
    function increment(){
        return ++init;
    }
    function decrement(){
        return --init;
    }
    function reset(){
        init = num;
        return init;
    }
    return {
        increment,
        decrement,
        reset
    }
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */