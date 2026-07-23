function calculate(principal, rate, time) {
    const p = Number(principal);
    const r = Number(rate);
    const t = Number(time);

    if (isNaN(p) || isNaN(r) || isNaN(t)) {
        throw new TypeError("Inputs must be numbers");
    }

    return (p * r * t) / 100;
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = calculate;
}
