const PropsChild = (props) => {
    console.log(props);
    
    return (
        <div>
            <h1>Props Child</h1>
            <h2>{props.x.data1}</h2>
            <h2>{props.x.data2}</h2>
        </div>
    );
};
export default PropsChild;
