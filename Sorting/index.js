const fs = require('fs');
const Data = require('./data.json');
const dir = fs.readdirSync(__dirname);
const path = require('path');

dir.map(file => {

    if (file.includes('.js') && !file.includes('.json') && !file.includes('index.js')) {
        const { Sort, name } = require(path.join(__dirname, file));

        console.group(name);
        console.time('Time Taken');
        console.table({
            'Unsorted': Data,
            "Sorted": Sort([...Data]),
        });
        console.timeEnd('Time Taken');
        console.groupEnd(name);
    };
});