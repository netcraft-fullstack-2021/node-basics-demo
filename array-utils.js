// array-utils.ks
export function flatten(arrayofArrays) {
    const result = [];
    arrayofArrays.forEach(array => {
        result.push(...array);
    });
    return result;
}