
[1,
    45, 2, 5, 4, 8, 6]

module.exports = {
    Sort: function (arr) {

        let min_index = 0, curr, i = 0;

        for (; i < arr.length; i++) {
            curr = arr[i];
            for (let j = i + 1; j < arr.length; j++) {
                if (arr[j] <= arr[min_index]) {
                    min_index = j;
                }
            }

            arr[i] = arr[min_index];
            arr[min_index] = curr;
        }

        return arr;
    },
    name: "Selection Sort"
};

