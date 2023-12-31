import React from "react";
import useMockData from "../utils/mockData";

const Main = () => {
    const { error, initialize, progress, satus } = useMockData();
    const handleClick = () => {
        console.log("clicked");
        initialize();
    };
    return <div className="container mt-5"> <h1> Main Page</h1>
        <h3>Инициализация данных в FireBase</h3>
        <ul>
            <li>Status:{satus}</li>
            <li>Progress:{progress}%</li>
            {error && <li>eror:{error}</li>}
        </ul>
        <button className="btn btn-primary" onClick={handleClick}>Инициализировать</button>
    </div>;
};

export default Main;
