import PropTypes from 'prop-types';

export default function Languages(props) {
    let count = props.wrongGuessesCount;
    const languageElements = props.languages.map((language) => {
            const isLost = count > 0;
            count -= 1;
            return (<div 
                className={`language-chip ${isLost && 'lost'}`} 
                key={language.name} 
                style={
                    isLost ? {backgroundColor: '#000000', color: '#FFFFFF', opacity: 0.5} :
                    {backgroundColor: language.backgroundColor, color: language.color}
                }
            >
                {language.name}
            </div>)
        });

    return (
        <section className="languages-chips">
            {languageElements}
        </section>
    )
}

Languages.propTypes = {
    wrongGuessesCount: PropTypes.number.isRequired,
    languages: PropTypes.array.isRequired
};