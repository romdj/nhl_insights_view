
export function sveltify(data) {
    const accumulator = [];
    let accumulatorObj = {};
    let accumulatorKey = {};
    data.forEach(item => {
        Object.keys(item).forEach(itemKey => {
            accumulatorKey = {
                [itemKey]: {
                    "key": itemKey,
                    "sortable": Number.isInteger(item[itemKey]),
                    "title": typeof item[itemKey] === 'string' ? item[itemKey].toUpperCase() : item[itemKey],
                    value: v => v[itemKey],
                }
            };
            accumulatorObj[Object.keys(accumulatorKey)[0]] = accumulatorKey[Object.keys(accumulatorKey)[0]];
            accumulatorKey = {};
        });
        accumulator.push(accumulatorObj);
        accumulatorObj = {};
    });
    return accumulator;
}

// TODO
// Add the filter Function: 
// filterOptions: rows => {
//     let letrs = {};
//     rows.forEach(row => {
//       let letr = row.first_name.charAt(0);
//       if (letrs[letr] === undefined)
//         letrs[letr] = {
//           name: `${letr.toUpperCase()}`,
//           value: letr.toLowerCase()
//         };
//     });
            
// Add css class:
// class: "text-center"
 