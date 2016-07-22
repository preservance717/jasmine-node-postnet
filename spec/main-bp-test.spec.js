'use strict'
const fixtures = require('./fixtures');
const main = require('../main/mian-bp');

describe('postnet-bp', () => {
     let input;
    let codes;
    const allTags = fixtures(); 
        
    it('delete Frame', ()=> {
        input = '|:|:|::||:::::||:|::||:::|:::||::|:|:||::|::|:||:::|';
        
        const codes = main.buildCode(input);
        const expectCodes = [':|:|:', ':||::', ':::||', ':|::|', '|:::|',':::||', '::|:|', ':||::', '|::|:','||:::'];
        
        expect(codes).toEqual(expectCodes);
    });
    
    it('build code', ()=> {
        codes = [':|:|:', ':||::', ':::||', ':|::|', '|:::|',':::||', '::|:|', ':||::', '|::|:','||:::'];
        const codeDigit = main.getCodeDigit(codes, allTags);
        const expectCodeDigit = {postDigit:561471268, checkDigit:0};
        
        expect(codeDigit).toEqual(expectCodeDigit);
    })
});
