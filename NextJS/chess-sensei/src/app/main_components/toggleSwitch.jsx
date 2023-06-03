function Toggle(props) {
    return (
        <div className="flex justify-between align-center m-0 border-4 border-accent bg-accent bg-opacity-10 rounded-3xl w-16 h-7 px-3">
            <button onClick={() => props.onClick(true)}>0</button>
            <button onClick={() => props.onClick(false)}> I</button>
        </div>
    );
}

export default Toggle;
