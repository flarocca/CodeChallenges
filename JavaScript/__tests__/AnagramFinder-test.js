import AnagramFinder from '../CodeChallenges/AnagramFinder'

describe('AnagramFinder', () => {
    it('Cannot be created with a null dictionary', () => {
        let nullDictionary = null

        expect(() => new AnagramFinder(nullDictionary)).toThrowError('Invalid dictionary, It cannot be null.')
    })

    it('Cannot be created with a undefined dictionary', () => {
        let undefinedDictionary = null

        expect(() => new AnagramFinder(undefinedDictionary)).toThrowError('Invalid dictionary, It cannot be undefined.')
    })

    it('Dictionary must contain at least one word', () => {
        let emptyArray = []

        expect(() => new AnagramFinder(emptyArray)).toThrowError('Invalid dictionary, It must contain at least one word.')
    })

    //Ideally, make test to ensure allowing only Array as data-type

    it('If there are no anagrams, it must return an empty array', () => {
        let dictionary = ['some', 'words']
        let anagramFinder = new AnagramFinder(dictionary)
        let expectedResult = []

        expect(anagramFinder.findAnagrams('wow')).toEqual(expectedResult)
    })

    it('It must return all anagrams found', () => {
        let dictionary = ['some', 'osme', 'meso', 'the', 'dictionary']
        let anagramFinder = new AnagramFinder(dictionary)
        let expectedResult = ['some', 'osme', 'meso']

        expect(anagramFinder.findAnagrams('soem')).toEqual(expect.arrayContaining(expectedResult))
    })
})