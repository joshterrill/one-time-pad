const legend = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').map((ch, i) => {
    return { letter: ch, value: i }
});

function findKey(key, param) {
    return legend.find(la => la[param] === key);
}

function search(key) {
    console.log(key);
    return findKey(key, "letter").value;
}

function reverse(key) {
    console.log(key);
    return findKey(key, "value").letter;
}

function mod(n) {
    const p = legend.length - 1;
    return n - p * Math.floor( n / p );
}

module.exports = {
    legend,
    search,
    reverse,
    mod,
}
