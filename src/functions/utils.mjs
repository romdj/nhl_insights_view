
export function sveltifyRow(data) {
    const accumulator = [];
    let accumulatorObj = {};
    let accumulatorKey = {};
    data.forEach(item => {
        Object.keys(item).forEach(itemKey => {
            // const fn = getFunction123(itemKey);
            // console.log(typeof fn);
            // console.log(fn());
            // console.log(fn);
            accumulatorKey = {
                [itemKey]: {
                    key: itemKey,
                    sortable: Number.isInteger(item[itemKey]),
                    title: typeof item[itemKey] === 'string' ? item[itemKey].toUpperCase() : item[itemKey],
                    'value': getFunction123(itemKey),
                    // 'value': v => v.rank,
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

export function sveltifyColumn(data) {
   return data.map(item => ({
        key: item,
        sortable: false,
        // sortable: Number.isInteger(item),
        title: typeof item === 'string' ? item.toUpperCase() : item,
        // value: v => v.rank,
        value: getFunction123(item),
    }));
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

function getFunction123(itemKey) {
    switch (itemKey) {
        case 'rank':
            return v => v.rank;
        case 'teamName':
            return v => v.teamName;
        case 'GP':
            return v => v.GP;
        case 'OfficialW':
            return v => v.OfficialW;
        case 'RL':
            return v => v.RL;
        case 'OTL':
            return v => v.OTL;
        case 'PTS':
            return v => v.PTS;
        case 'P':
            return v => v.P;
        case 'RW':
            return v => v.RW;
        case 'ROW':
            return v => v.ROW;
        case 'GF':
            return v => v.GF;
        case 'GoalsAgainst':
            return v => v.GoalsAgainst;
        case 'Diff':
            return v => v.Diff;
        case 'HOME':
            return v => v.HOME;
        case 'AWAY':
            return v => v.AWAY;
        case 'S':
            return v => v.S;
        case 'Last10':
            return v => v.Last10;
        case 'Streak':
            return v => v.Streak;
        default:
            return v => v.teamName;
    }
}
