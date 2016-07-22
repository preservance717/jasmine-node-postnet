'use strict';

function buildPostCodes(input, allTags) {
    const nums = input.split('-');
    const digits = nums[1] ? (nums[0].concat(nums[1])).split('') : nums[0].split('');

    if (digits.every(digit => {Number.isInteger(Number(digit))})) {
        return ;
    }
    if (digits.length != 5 && digits.length != 9) {
        return ;
    }

    return digits.map(digit =>allTags[digit]);
}

module.exports = {buildPostCodes: buildPostCodes};