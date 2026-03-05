const PropsChild2 = (props) =>{
    console.log(props); // {values; {data1:**, data2:[], data3:{} }}
    

    let {data1,data2,data3} = props.value;
    return(
        <div>
        <h1>PropsChils 2</h1>
        <h2>Data1 is : {data1}</h2>
        <h2>Data2 is : {data2}</h2>
        <h2>Data3 is : {data3.firstname}</h2>
        </div>
    );
};
export default PropsChild2;