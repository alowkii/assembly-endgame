import { words } from '../data/words.js'

export function getWord() {
    return words[Math.floor(Math.random() * words.length)];
}