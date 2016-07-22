'use strict';

const loadAllTags = require('./fixtures');
const main = require('../main/main');

describe('postnet', ()=> {
    let input;
    const allTags = loadAllTags();

    it('input have 5 bit', ()=> {
        input = '56147';
        const postCodes = main.buildPostCodes(input, allTags);
        const expectPostCodes = [':|:|:', ':||::', ':::||', ':|::|', '|:::|'];

        expect(postCodes).toEqual(expectPostCodes);
    });

    it('input have 10 bit', ()=> {
        input = '56147-1268';
        const postCodes = main.buildPostCodes(input, allTags);
        const expectPostCodes = [':|:|:',':||::', ':::||', ':|::|','|:::|',':::||','::|:|',':||::','|::|:'];

        expect(postCodes).toEqual(expectPostCodes);
    })
    it('invalid input', ()=>{
         input = 'AAA';
        const postCodes = main.buildPostCodes(input, allTags);
        const expectPostCodes = undefined;

        expect(postCodes).toEqual(expectPostCodes);
    });
});


