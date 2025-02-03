import PropTypes from "prop-types";

export default function Word(props) {
    const letterElements = props.currentWord
                            .split("")
                            .map((letter, index) => {
                                const isCorrect = letter === " " || props.guessedLetters.includes(letter.toUpperCase());
                                return (<span 
                                    className="letter"
                                    key={index}
                                >
                                    {isCorrect || props.isLost? letter.toUpperCase(): " "}
                                </span>)
                            });
    
    const lastGuessedLetter = props.guessedLetters[props.guessedLetters.length - 1];
    return (
        <>
            <section className="word">
                {letterElements}
            </section>

            <section 
                className="sr-only" 
                aria-live="polite" 
                role="status"
            >
                <p>
                    {props.currentWord.includes(lastGuessedLetter)? "Correct!": "Incorrect!"}
                </p>
                <p>
                    Current word: {props.currentWord.split("").map(letter => 
                        props.guessedLetters.includes(letter.toUpperCase())? letter.toUpperCase() + ".": "blank.").join(" ")}
                </p>
            </section>
        </>
    );
}

Word.propTypes = {
    currentWord: PropTypes.string.isRequired,
    guessedLetters: PropTypes.array.isRequired,
    isLost: PropTypes.bool.isRequired
};