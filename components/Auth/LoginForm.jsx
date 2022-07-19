import { useState } from "react";
import ForgetPassForm from "./ForgetPassForm";
import RegisterForm from "./RegisterForm";

const LoginForm = () => {

    const [visibleLoginItem, setVisibleLoginItem] = useState(true);
    const [visibleForgetItem, setVisibleForgetItem] = useState(true);

    const loadRegisterForm = () => {
        setVisibleLoginItem(false);
    }

    const loadForgetPassForm = () => {
        console.log(visibleForgetItem);
        setVisibleForgetItem(false);
    }

    return (
        <div className="lg:min-h-screen">
            <div className={(visibleLoginItem && visibleForgetItem) ? "px-2 my-24 lg:sticky lg:inset-y-1/3 lg:z-50" : "hidden"}>
                <div className="max-w-md mx-auto">
                    <form>
                        <input type="text" placeholder="Email address" className="block input input-bordered input-primary rounded-full w-full min-w-xs mb-4" />
                        <input type="text" placeholder="Password" className="block input input-bordered input-primary rounded-full w-full min-w-xs" />
                        <br />
                        <input className='bg-secondary hover:bg-orange-400 py-1.5 w-full min-w-xs normal-case text-white rounded-full' type="submit" value="Sign In" />
                    </form>
                    <br />
                    <div className="flex justify-between w-full px-2">
                        <p className="hover:underline cursor-pointer" onClick={loadForgetPassForm}>Forgot Password?</p>
                        <p className="hover:underline cursor-pointer" onClick={loadRegisterForm}>Create account</p>
                    </div>
                </div>
            </div>
            {!visibleForgetItem && <ForgetPassForm />}
            {!visibleLoginItem && <RegisterForm />}
        </div>
    );
}

export default LoginForm;