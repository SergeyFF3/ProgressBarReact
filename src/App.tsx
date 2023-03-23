import React, {useEffect, useState} from 'react';
import './App.css';

function App() {
    const [progress, setProgress] = useState<number>(0);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        if (loading && progress <= 100) {
            const interval = setInterval(() => {
                setProgress((prev) => prev + 1);
            }, 100);
            return () => clearInterval(interval);

        } else if (loading && progress > 100) {
            setProgress(0);
            setLoading(false);
        }
    }, [loading, progress]);

    const handleButtonClick = () => {
        setLoading((prev) => !prev);
    };

    return (
        <div className="content">
            <h1 className="title">Progress bar React</h1>
            <div className="progress-container">
                <div className="progress-bar" style={{width: `${progress}%`}}/>
            </div>
            <div className="percent-container">
                <p>0%</p>
                <p>100%</p>
            </div>
            <div className="button-container">
                <button
                    className="btn"
                    onClick={handleButtonClick}
                >
                    {loading ? "Stop" : "Start"}
                </button>
            </div>
        </div>
    );
}

export default App;
