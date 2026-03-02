const PropsChild = (props) =>{
    console.log(props);

    let { vale1,value2,value3} = props;

    return (
        <div>
            <h1>PropsChild</h1>
            <h2>Value 1 : {value1}</h2>
            <h2>Value 2 : {Value2}</h2>
            {/* <h2>Value 3 : {value3}</h2> yaha object direct nhi ui pe desply kara sakte hai eske liye hame uska keyvalue ka use karna hoga  */}
            <h2>Value 3 : {value3.firstName}</h2>
        
        </div>
    );
};
export default PropsChild;
