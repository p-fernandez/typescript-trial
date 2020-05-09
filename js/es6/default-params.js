function countdown(initial, final = 0, interval = 1) {
    let current = initial;
    while (current > final) {
        console.log(current);
        current -= interval;
    }
}
countdown(20, 3, 1);
countdown(10);
// countdown(); // Will fail at compilation time
