/**
 * @name Annotations
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */

const Annotations = (props) => {
    const { data } = props;

    if(!data.length) {
        return (
            <div className="Annotations">
                <h2>Annotations</h2>
                <div>No annotations to display.</div>
            </div>
        )
    }

    return (
        <div className="Annotations">
            <h2>Annotations</h2>
            {data.map((annotation, i) => {
                const { target, text } = annotation;
                const selector = target[0].selector;
                const highlight = selector[selector.length - 1].exact;
                return (
                    <div key={i}>
                        <p>{text}</p>
                        <p>{highlight}</p>
                    </div>
                    )
            })}
        </div>
    )
}

export default Annotations;