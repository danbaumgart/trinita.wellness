const Characters = {
    DIGIT: '\\d',
    SPACE: '\\s',
    WORD: '\\w',
    FORWARD_SLASH: '\\/',
    PERIOD: '\\.',
    NOT_WORD: '\\W'
};
Object.defineProperty(Characters, 'keys', {
    get: () => Object.keys(Characters)
});
Object.freeze(Characters);
export const DIGIT = Characters.DIGIT;
export const WORD = Characters.WORD;
export const SPACE = Characters.SPACE;
export const FORWARD_SLASH = Characters.FORWARD_SLASH;
export const PERIOD = Characters.PERIOD;
export const NOT_WORD = Characters.NOT_WORD;
export default Characters;