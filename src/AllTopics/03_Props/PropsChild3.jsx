const PropsChild3 = (props) => {
    let {greet} = props


    // console.log(props);
    return (
        <div>
            <h1>PropsChild3</h1>

            <button onClick={() => greet("Parent")}>
                SEND DATA
            </button>
        </div>
    )
};
export default PropsChild3;