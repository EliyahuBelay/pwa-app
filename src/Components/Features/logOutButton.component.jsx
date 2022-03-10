import {useContext} from 'react';
import { FirebaseContext } from "../../Contex/firebaseContex";


const LogOutButton = () => {
    const {auth} = useContext(FirebaseContext)
    const logOut = () => {
       auth.signOut()
    }
    return (
        <>
            <section>LogOut<button onClick={logOut}>Log Out</button></section>
        </>
    )
}
export default LogOutButton;