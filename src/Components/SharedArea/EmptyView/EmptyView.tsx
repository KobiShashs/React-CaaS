import "./EmptyView.css";

interface EmptyViewProps {
	msg: string;
}

function EmptyView(props: EmptyViewProps): JSX.Element {
    return (
        <div className="EmptyView Box">
            <p>Moshe</p>
            <h2>{props.msg}</h2>
			<img src="https://media.giphy.com/media/iEq554yYHbjNbDVdsv/giphy.gif"/>
        </div>
    );
}

export default EmptyView;
