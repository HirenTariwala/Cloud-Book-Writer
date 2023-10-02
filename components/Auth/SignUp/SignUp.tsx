'use client'

import Input from "@/components/common/Input/Input"
import useSignUp from "./useSignUp"

const SignUp = () => {
    const { formErrors, signupError, userDetails, onChangeUserDetails, onSubmitHandler } = useSignUp()
    return (
        <form onSubmit={onSubmitHandler} className="flex flex-col gap-5 w-80 m-auto mt-20">
            <h1 className="text-black text-center text-2xl">Register here</h1>
            <Input type="text" name="name" error={formErrors.name} value={userDetails.name} onChange={onChangeUserDetails} placeholder="Enter your name" classname="p-2" />
            <Input type="text" name="email" error={formErrors.email} value={userDetails.email} onChange={onChangeUserDetails} placeholder="Enter your email id" classname="p-2" />
            <Input type="password" name="password" error={formErrors.password} value={userDetails.password} onChange={onChangeUserDetails} placeholder="Enter password" classname="p-2" />
            <Input type="password" name="cpassword" error={formErrors.cpassword} value={userDetails.cpassword} onChange={onChangeUserDetails} placeholder="Confirm password" classname="p-2" />
            {signupError?.length > 0 && <span className='text-red-600'>{signupError}</span>}
            <button type="submit" className="bg-[#D4715C] p-2">Sign up</button>
        </form>
    )
}

export default SignUp
