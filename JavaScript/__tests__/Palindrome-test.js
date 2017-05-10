import Palindrome from '../CodeChallenges/Palindrome';

describe('Palindrome', () => {
    it('This a test for an invalid palindrome', () => {
        let invalidPalindrome = 'invalidPalindrome'
        let palindrome = new Palindrome(invalidPalindrome);

        expect(palindrome.isValid()).toBe(false);
    });

    it('An empty string is also an invalid palindrome', () => {
        let invalidPalindrome = ''
        let palindrome = new Palindrome(invalidPalindrome);

        expect(palindrome.isValid()).toBe(false);
    });

    it('String composed by spaces is also an invalid palindrome', () => {
        let justSpaces = '    '
        let palindrome = new Palindrome(justSpaces);

        expect(palindrome.isValid()).toBe(false);
    });

    it('Null is also an invalid palindrome', () => {
        let nullValue = null
        let palindrome = new Palindrome(nullValue);

        expect(palindrome.isValid()).toBe(false);
    });

    it('Undefined is also an invalid palindrome', () => {
        let undefinedValue = undefined
        let palindrome = new Palindrome(undefinedValue);

        expect(palindrome.isValid()).toBe(false);
    });

    it('This a test for a valid palindrome', () => {
        let validPalindrome = 'abcdcba'
        let palindrome = new Palindrome(validPalindrome);

        expect(palindrome.isValid()).toBe(true);
    });

    it('This a test for a valid palindrome as well', () => {
        let validPalindrome = 'neuquen'
        let palindrome = new Palindrome(validPalindrome);

        expect(palindrome.isValid()).toBe(true);
    });

    it('Extract all valid palindromes from the list', () => {
        let expectedResult = ['abcdcba', 'neuquen']
        let list = ['abcdcba', 'asdgf', 'asdf as', ' ', 'neuquen']

        expect(Palindrome.extractFromList(list)).toEqual(expect.arrayContaining(expectedResult))
    });
});