module.exports = {
    Sort: (data) => {
        for (let i = 1; i < data.length; i++) {

            let curr = data[i], index = i - 1;

            while (index >= 0 && curr < data[index]) {
                data[index + 1] = data[index];
                --index;
            }

            data[index + 1] = curr;
        }

        return data;
    },
    name: "Insertion Sort"
};

