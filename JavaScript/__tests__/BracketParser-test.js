import BracketParser from '../CodeChallenges/BracketParser';

describe('BracketParser', () => {
    it('Empty string should be invalid', () => {
        let emptyString = ''
        let bracketParser = new BracketParser(emptyString);

        expect(bracketParser.isValid()).toBe(false);
    });

    it('Null should be invalid', () => {
        let nullValue = null
        let bracketParser = new BracketParser(nullValue);

        expect(bracketParser.isValid()).toBe(false);
    });

    it('Undefined should be invalid as well', () => {
        let undefinedValue = undefined
        let bracketParser = new BracketParser(undefinedValue);

        expect(bracketParser.isValid()).toBe(false);
    });

    it('Open without closing should be invalid', () => {
        let code = '['
        let bracketParser = new BracketParser(code);

        expect(bracketParser.isValid()).toBe(false);
    });

    it('Close without opening should be invalid', () => {
        let code = ']'
        let bracketParser = new BracketParser(code);

        expect(bracketParser.isValid()).toBe(false);
    });

    it('Closing in the incorrect order should be invalid', () => {
        let code = '[some[operations] [+].][][--'
        let bracketParser = new BracketParser(code);

        expect(bracketParser.isValid()).toBe(false);
    });

    it('Example of some code formatted properly', () => {
        let code = '[[1 +3][ saa [h]el]lo [my] [fr[i]en [d]]]'
        let bracketParser = new BracketParser(code);

        expect(bracketParser.isValid()).toBe(true);
    });

    it('Another good example as well', () => {
        let code = '[[[[[[] [] [] [[[]]]]]]]]'
        let bracketParser = new BracketParser(code);

        expect(bracketParser.isValid()).toBe(true);
    });
});