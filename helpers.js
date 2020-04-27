const legend = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").map((ch, i) => {
    return { letter: ch, value: i }
});

function findKey(key, param) {
    return legend.find(la => la[param] === key);
}

function search(key) {
    const found = findKey(key, "letter");
    if (!found) {
        return "";
    }
    return found.value;
}

function reverse(key) {
    const found = findKey(key, "value");
    if (!found) {
        return "";
    }
    return found.letter;
}

function mod(n) {
    const p = legend.length - 1;
    return n - p * Math.floor(n / p);
}

module.exports = {
    search,
    reverse,
    mod,
}
