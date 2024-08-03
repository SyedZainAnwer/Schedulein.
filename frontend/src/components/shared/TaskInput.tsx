import { Input } from "../ui/input";

const TaskInput = () => {
    return (
        <div className="border border-gray-200 rounded-lg p-5 w-1/2 mt-5">
            <Input placeholder="Task Heading" className="border-none font-semibold focus:outline-none" />
            <Input placeholder="Description" className="border-none text-xs focus:outline-none" />
        </div>
    )
}

export default TaskInput;