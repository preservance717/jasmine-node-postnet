'use strict';

function getValidNums(input) {
    const nums = input.split('-');
    const digits = nums[1] ? (nums[0].concat(nums[1])).split('') : nums[0].split('');

    if (digits.every(digit => {
            Number.isInteger(Number(digit))
        })) {
        return 'invalid input';
    }
    if (digits.length != 5 && digits.length != 9) {
        return 'invalid input';
    }

    return digits;
}

function buildPostCodes(input, allTags) {
    const digits = getValidNums(input);
    return digits.map(digit =>allTags[digit]);
}

function getCheckCode(input, allTags) {
    const digits = getValidNums(input);
    const sum = digits.map(digit => Number(digit)).reduce((pre, next)=>pre + next);
    let checkDigit = 0;

    if (sum % 10 != 0) {
        checkDigit = 10 - sum % 10;
    }

    return allTags[checkDigit];
}

function buildCodeText(postCodes, checkCode) {
    return `|${postCodes.concat(checkCode).reduce((pre, next)=> pre + next)}|`;
}

module.exports = {
    getValidNums: getValidNums,
    buildPostCodes: buildPostCodes,
    getCheckCode: getCheckCode,
    buildCodeText: buildCodeText
};