import Punctuation from './Punctuation'


    describe('Punctuation removal', () => {
        it("when hello%world return hello world", () => {
            const input = "hello%world";
            const expected = "hello world"

            const actual = Punctuation(input)

            expect(actual).toBe(expected);
        })
    });

   