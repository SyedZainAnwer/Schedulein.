import { useState } from "react"

export const useLocalStorage = <T>(key: string, initialValue: T)  => {
    const [storedValue, setStoredValue] = useState<boolean>(() => {
        if (typeof window !== 'undefined') {
            try {
                const item = window.localStorage.getItem(key);
                return item ? JSON.parse(item) : initialValue;
            } catch(error: any) {
                console.error(error);
                return initialValue;
            }
        }

        return initialValue;
    });

    const setValue = (value: boolean) => {
        try {
            setStoredValue(value);
            if (typeof window !== 'undefined') {
                window.localStorage.setItem(key, JSON.stringify(value));
            } 
        } catch(error: any) {
            console.error(error)
        }
    };

    return [storedValue, setValue] as const;
}