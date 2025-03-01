export default function Container(props) {
    return (
        <div id={props.idName} className={props.classes}>
            {props.children}
        </div>
    )

}