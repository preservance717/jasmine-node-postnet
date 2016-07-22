'use strict';

const fixtures = require('../spec/fixtures');

function print(input) {
    getValidNums(input);

    const allTags = fixtures();
    const postCodes = buildPostCodes(input, allTags);
    const checkCode = getCheckCode(input, allTags);
    const code = buildCode(postCodes, checkCode);
    const codeText = buildCodeText(input, code);

    console.log(codeText);
}

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

function buildCode(postCodes, checkCode) {
    return `|${postCodes.concat(checkCode).reduce((pre, next)=> pre + next)}|`;
}

function buildCodeText(input, code) {
    return `${input} == ${code}`;
}

module.exports = {
    getValidNums: getValidNums,
    buildPostCodes: buildPostCodes,
    getCheckCode: getCheckCode,
    buildCode: buildCode,
    print: print
};