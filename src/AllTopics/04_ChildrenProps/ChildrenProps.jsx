
const ChildrenProps = () => {
    let user = ["Jane Doe", "John Doe", "James Doe"];
    return(
        <div>
            <h1>Learn Children Props</h1>
            {user.map((name,idx) =>{
                return <Card key={idx}>{name}</Card>
            })}



            {/* <Card/> */}

            {/* Pair Tag */}
            {/* <Card>John Doe</Card>
            <Card>Jane Doe</Card>
            <Card>James Doe</Card>
             */}
        </div>
    );
};
export default ChildrenProps;

const Card = (props) =>{
    console.log(props);
    
    return(
        <div>
            <h1>I Am Card</h1>
            <p>Welcome {props.children}</p>
            <hr />
        </div>
    );
};