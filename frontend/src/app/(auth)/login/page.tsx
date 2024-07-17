import LoginForm from "@/components/LoginForm";

const page = () => {
    return(
        <div className="flex w-full">
            <div className="w-3/4">
                <LoginForm />
            </div>
            <div className="w-1/4">
                <p>Hello</p>
            </div>
        </div>
    )
};


export default page;