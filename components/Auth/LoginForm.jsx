const LoginForm = () => {
    return (
        <div className="px-2 my-12 lg:my-36">
            <div className="lg:w-9/12">
                <form>
                    <input type="text" placeholder="Email address" className="block input input-bordered input-primary rounded-full w-full min-w-xs mb-4" />
                    <input type="text" placeholder="Password" className="block input input-bordered input-primary rounded-full w-full min-w-xs" />
                    <br />
                    <input className='bg-secondary hover:bg-orange-400 py-1.5 w-full min-w-xs normal-case text-white rounded-full' type="submit" value="Submit" />
                </form>
                <br />
                <div className="flex justify-between w-full px-2">
                    <p>Forgot Password?</p>
                    <p>Create account</p>
                </div>
            </div>
        </div>
    );
}

export default LoginForm;