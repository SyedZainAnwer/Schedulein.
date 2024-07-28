import LeftSideBar from "@/components/LeftSideBar";

const page = () => {
    return(
        <div className="flex w-full">
            {/* Left Side Bar */}
            <section className="w-1/5 bg-slate-100 h-screen p-2">
                <LeftSideBar />
            </section>

            {/* Main Task Display Area */}
            <section className="w-4/5">
                <p>Tasks</p>
            </section>

            {/* Graph Area */}
            <section className="w-1/5">
                <p>Graphs</p>
            </section>
        </div>
    )
}

export default page;