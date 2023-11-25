import React, { useContext } from 'react'
import { UserContext, UnamelastContext} from './App'


const CompC = () => {
    //this for second option
    const name = useContext(UserContext);
    const lastname = useContext(UnamelastContext);
  return (
    <>
    {
        //first option to call context
    }
    <UserContext.Consumer>
        {(element)=>{
            return(
                <>
                <UnamelastContext.Consumer>
                    {(lastname)=>{
                        return(
                            <>
                            <h1>{element} {" "} {lastname}</h1>
                            </>
                        )
                    }}
                </UnamelastContext.Consumer>
                </>
            )
        }}
    </UserContext.Consumer>

    {
        //second option to call context
    }
    <div>Hallo i am {name}  {lastname}</div>
    </>
   
  )
}

export default CompC;