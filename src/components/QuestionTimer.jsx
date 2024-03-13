import { useState, useEffect } from "react";

export default function QuestionTimer({timeout, onTimeout, mode}) {
    const [remainingTime, setRemainingTime] = useState(timeout);

    useEffect(() => {
        console.log('setting timeout...')
        const timer = setTimeout(() => {
            onTimeout();
        }, timeout)

        return () => {
            clearTimeout(timer);
        }
    }, [timeout, onTimeout])

    useEffect(() => {
        console.log('setting interval...')
        const remainingTimeInterval = setInterval(() => {
            setRemainingTime((prevRemainingTime) => prevRemainingTime - 100);
        }, 100);

        return () => {
            clearInterval(remainingTimeInterval);
        }
    }, [])

    return (
        <progress id="question-time" max={timeout} value={remainingTime} className={mode}/>
    )
}