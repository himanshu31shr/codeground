const merge = (left, right) => {
    let arr = [];
    while (left.length && right.length) {

        if (left[0] < right[0]) {
            arr.push(left.shift());
        } else {
            arr.push(right.shift());
        }

    }

    return [...arr, ...left, ...right];
};

const divide = (arr) => {

    const half = Math.floor(arr.length / 2);

    // Base case or terminating case
    if (arr.length < 2) {
        return arr;
    }

    const left = arr.splice(0, half);

    return merge(divide(left), divide(arr));

};

module.exports = {
    Sort: divide,
    name: "Merge Sort"
};

