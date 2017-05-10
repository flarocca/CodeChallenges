import ChuckNorrisCode from '../CodeChallenges/ChuckNorrisCode';

describe('ChuckNorrisCode', () => {
    it('Cannot encode a null message', () => {
        let nullMessage = null
        expect(() => ChuckNorrisCode.encode(nullMessage)).toThrowError('Message cannot be null.')
    });

    it('Cannot encode an undefined message', () => {
        let undefinedMessage
        expect(() => ChuckNorrisCode.encode(undefinedMessage)).toThrowError('Message cannot be undefined.')
    });

    it('Cannot decode a null message', () => {
        let nullMessage = null
        expect(() => ChuckNorrisCode.decode(nullMessage)).toThrowError('Message cannot be null.')
    });

    it('Cannot decode an undefined message', () => {
        let undefinedMessage
        expect(() => ChuckNorrisCode.decode(undefinedMessage)).toThrowError('Message cannot be undefined.')
    });

    it('This an example of an encoded message', () => {
        expect(ChuckNorrisCode.encode('C')).toEqual('00 0 0 0 00 0000 0 00');
        expect(ChuckNorrisCode.encode('a')).toEqual('00 0 0 00 00 0000 0 0');
        expect(ChuckNorrisCode.encode('s')).toEqual('00 0 0 000 00 00 0 00');
        expect(ChuckNorrisCode.encode('a')).toEqual('00 0 0 00 00 0000 0 0');
        expect(ChuckNorrisCode.encode('Casa')).toEqual('00 0 0 0 00 0000 0 00 00 0 0 00 00 0000 0 0 00 0 0 000 00 00 0 00 00 0 0 00 00 0000 0 0');
    });

    it('This an example of an decoded message', () => {
        expect(ChuckNorrisCode.decode('00 0 0 0 00 00 0 0 00 000')).toEqual('H');
        expect(ChuckNorrisCode.decode('00 0 0 00 00 0 0 0000')).toEqual('o');
        expect(ChuckNorrisCode.decode('00 0 0 00 00 0 0 00 00 0 0 0')).toEqual('m');
        expect(ChuckNorrisCode.decode('00 0 0 00 00 00 0 0 00 0 0 0')).toEqual('e');
        expect(ChuckNorrisCode.decode('00 0 0 0 00 00 0 0 00 000 00 0 0 00 00 0 0 0000 00 0 0 00 00 0 0 00 00 0 0 0 00 0 0 00 00 00 0 0 00 0 0 0')).toEqual('Home');
    });
});