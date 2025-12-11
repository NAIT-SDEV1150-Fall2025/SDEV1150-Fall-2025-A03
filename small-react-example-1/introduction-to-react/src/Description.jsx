export default function Description({text}) {
    // I'm going to create some jsx that will render the text.
    return <p>
        text of the description: <span style={{color:"red"}}>{text}</span>
    </p>
}