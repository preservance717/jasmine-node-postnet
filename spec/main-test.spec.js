'use strict';

const loadAllTags = require('./fixtures');
const main = require('../main/main');

describe('postnet', ()=> {
    let input;
    const allTags = loadAllTags();

    it('invalid input', ()=> {
        input = 'AAA';
        const validNums = main.getValidNums(input);
        const expectValidNums = 'invalid input';

        expect(validNums).toEqual(expectValidNums);
    });

    it('input have 5 bit', ()=> {
        input = '56147';
        const postCodes = main.buildPostCodes(input, allTags);
        const expectPostCodes = [':|:|:', ':||::', ':::||', ':|::|', '|:::|'];

        expect(postCodes).toEqual(expectPostCodes);
    });

    it('input have 10 bit', ()=> {
        input = '56147-1268';
        const postCodes = main.buildPostCodes(input, allTags);
        const expectPostCodes = [':|:|:', ':||::', ':::||', ':|::|', '|:::|', ':::||', '::|:|', ':||::', '|::|:'];

        expect(postCodes).toEqual(expectPostCodes);
    });

    it('get checkcode', () => {
        input = '56147-1268';

        const checkCode = main.getCheckCode(input,allTags);
        const expectCheckCode = '||:::';

        expect(checkCode).toEqual(expectCheckCode);
    });
    
    it('build code text', ()=> {//56147-1268
        const postCodes = [':|:|:', ':||::', ':::||', ':|::|', '|:::|', ':::||', '::|:|', ':||::', '|::|:'];
        const checkCode = '||:::';
        
        const code = main.buildCodeText(postCodes, checkCode);
        const expectCode = '|:|:|::||:::::||:|::||:::|:::||::|:|:||::|::|:||:::|';
        
        expect(code).toEqual(expectCode);
    })
});


