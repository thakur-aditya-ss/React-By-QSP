import HOC from "./Hoc";

const ChildHoc = (props) => {
  console.log(props);

  return (
    <div className="p-5 text-center">
      <h1 className="font-bold text-2xl my-5 ">Child Component</h1>
    </div>
  );
};
export default HOC(ChildHoc);
