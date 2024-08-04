import { useState } from "react";
import { Input } from "../ui/input";
import Badge from "./Badge";
import { DatePickerWithPresets } from "./DatePicker";
import { format } from "date-fns";
import { ITask } from "@/types/appTypes";


const TaskInput = () => {
    const [value, setValue] = useState<ITask>({
        date: new Date(),
        task: "",
    })
    return (
        <div className="border border-gray-200 rounded-lg p-5 w-1/2 mt-5">
            <Input 
                placeholder="Task Heading" 
                className="border-none font-semibold focus-visible:ring-transparent" 
                // onChange={() => setDate}
                value={value.date && format(value.date, "d LLL") }
            />
            <Input placeholder="Description" className="border-none text-xs focus-visible:ring-transparent" />
            <div>
                <DatePickerWithPresets date={value.date} setDate={setValue}/>
            </div>
        </div>
    )
}

export default TaskInput;