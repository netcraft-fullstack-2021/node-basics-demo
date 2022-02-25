export function flatten(arrayofArrays) {
    
    const result = arrayofArrays.reduce((accumulator, array) => [...accumulator, ...array]   , []);
    return result;
}