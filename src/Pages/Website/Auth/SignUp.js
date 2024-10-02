import Header from '../../../Components/Header';
import Forms from '../../../Components/Forms/Form';
export default function SignUp(){

    return(
        <div>
            <Header />
            <div className="parent" 
            style={{ 
                height: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center" }}>
                <Forms 
                    button="Register" 
                    endPoint="register"
                    navigate = ""
                    styleRegister = {true}/>
            </div>
        </div>
        
    );
}