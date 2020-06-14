import toNumber from './toNumber';
import isNumber from './isNumber';

export function numbersEqual(a: any, b: any): boolean {
    const [numA, numB] = toNumber(a, b);

    return isNumber(numA) && isNumber(numB) && numA === numB;
}

export default numbersEqual;
