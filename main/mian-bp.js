'use strict'

function buildCode(input) {
    const codes = [];
    const codeArr = [];
    const barcodes = deleteFrame(input);

    barcodes.forEach(barcode => {codeArr.push(barcodes.splice(0,5))});
    codeArr.forEach(code => {
        codes.push(code.reduce((pre, next)=>pre.concat(next)));
    });
    codes.push(barcodes.reduce((pre,next)=>pre.concat(next)));
    return codes;
  }

function deleteFrame(input) {
    let splitNums = input.split('');
    splitNums.pop();
    splitNums.shift();

    return splitNums;
}

function getCodeDigit(codes, allTags) {
    const digit = codes.map(code =>allTags.indexOf(code));
    
    if(digit){
        const checkDigit = digit.pop();
        const postDigit = Number(digit.reduce((pre, next)=> pre + '' + next));
        return {postDigit,checkDigit};
    }else{
        return 'invalid input';
    }
}

module.exports = {buildCode: buildCode,getCodeDigit:getCodeDigit};
