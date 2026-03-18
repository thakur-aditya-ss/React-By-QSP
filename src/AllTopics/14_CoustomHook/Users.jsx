import {useAPI} from './useAPI'

const Users = () => {
    let {apiData, loading} = useAPI("https://dummyjson.com/users");
    

    if(loading){
        return <h1 className='text-center font-extrabold text-5xl'>Loading...</h1>
    }
    
  return (
    <div>
        <h1 className='font-bold text-4xl '>Users</h1>
    </div>
  );
};

export default Users;