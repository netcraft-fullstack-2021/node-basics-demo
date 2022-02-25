import { flatten } from "./array-utils.js";
import padLeft from 'pad-left';

const arrayOfArrays = [[1,2,3], [4, 5,6], [7,8,9]]

console.log(flatten(arrayOfArrays).map(item => padLeft(item, 4, '*') ));

//output