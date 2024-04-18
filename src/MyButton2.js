import { MyButton } from "./MyButton";

const list= {
    isLogged :false
};
export const MyButton2 = () =>{

  
    return (

    /* <>
    {list.isLogged ? (<MyButton/>) : (<p>Im a false condition</p>)}
</> */

<>
   {list.isLogged && <MyButton/>}
</>
    );
}