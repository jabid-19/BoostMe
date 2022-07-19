import LoginForm from "../components/Auth/LoginForm";
import LoginFrameImage from "../components/LoginFrameImage";
import RectangleLoginImage from "../components/RectangleLoginImage";

const Login = () => {
    return (
        <div className="lg:flex lg:justify-between">
            <RectangleLoginImage />
            <div className="lg:w-1/2">
                <LoginForm />
                <LoginFrameImage />
            </div>
        </div>
    );
}

export default Login;