import ChildHoc from "./ChildHoc";

const ParentHoc = () => {
  return (
    <div>
      <h1 className="font-bold text-4xl text-center p-5">
        Learn Higher Order Component
      </h1>

      <hr />

      <ChildHoc />
    </div>
  );
};

export default ParentHoc;
