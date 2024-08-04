export interface ITask {
    date: Date,
    setDate?: React.Dispatch<React.SetStateAction<Date>> | undefined,
    task: string,
}