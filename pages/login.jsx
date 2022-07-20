import LoginForm from "../components/Auth/LoginForm";
import LoginFrameImage from "../components/Auth/LoginFrameImage";
import RectangleLoginImage from "../components/Auth/RectangleLoginImage";

const Login = () => {
    return (
        <div className="lg:grid lg:grid-cols-2">
            <RectangleLoginImage />
            <div>
                <LoginForm />
                <LoginFrameImage />
            </div>
        </div>
    );
}

export default Login;