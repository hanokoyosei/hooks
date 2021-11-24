import React, { useState } from 'react';

const UserGreet = () => {
    const [isLogged, setLog] = useState(false)
    
    return (
        <div>
            {
                isLogged && <h1>Welcome Kani!</h1>
            }
        </div>
    )
    //! способ 3 
    //  return (
    //      <div>
    //          {
    //              isLogged ? <h1>welcome Kani!</h1> : <h1>welcome User!</h1>
    //          }
    //      </div>
    //  )



    //! способ 2
    
    // let welcome 
    // if (isLogged){
    //     welcome = <h1>welcome Kani!</h1>
    // }else {
    //     welcome = <h1>welcome User!</h1>
    // }

    // return (
    //     <div> {welcome} </div>
    // )

    //! способ 1

    // if (isLogged){
        
    //     return (
    //         <div>
    //             <h1>Welcome Kani!</h1>
    //         </div>
    //     );
    // }else {
    //     return (
    //         <div>
    //         <h1>Welcome User!</h1>
    //     </div>
    //     )
    // }
};

export default UserGreet;