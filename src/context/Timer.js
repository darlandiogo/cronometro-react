import React,{useState ,createContext} from 'react';

export const TimerContext = createContext();

const TimerProvider = ({children}) => {

    const [value, setValue] = useState(0);
    return (
        <TimerContext.Provider value={{value,setValue}}>
            {children}
        </TimerContext.Provider>
    );
}

export default TimerProvider;