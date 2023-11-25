import { useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { sendNuiCallback } from './NuiCallbacks';

const WindowListener = ({children}) => {
    const dispatch = useDispatch();
    
    const escFunction = useCallback((event) => {
        if (event.key === "Escape") {
            sendNuiCallback("/close", {}, (result) => {})
        }
    }, []);

    useEffect(() => {
        document.addEventListener("keydown", escFunction, false);

        return () => {
            document.removeEventListener("keydown", escFunction, false);
        };
    }, []);

    useEffect(() => {
        window.addEventListener('message', (event) => {
            const { type, data }: { type: string, data: any } = event.data
            if (type && (type != "ACTION" && type != "PARTIAL_STATE")) {
                dispatch({type, payload: data});
            }
        });
        
    })
    return children;
}

export default WindowListener;