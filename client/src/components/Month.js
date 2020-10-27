import React from 'react';
import { Bar } from 'react-chartjs-2';
import Collapsible from 'react-collapsible'

// import SurveyForm from './survey';
// import { getTask, saveTask } from "../services/movieService";
// import { getScores } from "../services/genreService";

const Chart = (props) => {

    const nextTasks = ['Number of steps', 'calories', 'water intake']
    const nextTaskNumbered = [80, 40, 60, 100, 0]
    const data = {
        labels: nextTasks,
        datasets: [
            {
                label: 'Activities',
                backgroundColor: 'lightblue',
                borderColor: 'rgba(123, 239, 178, 1)',
                borderWidth: 1,
                hoverBackgroundColor: 'rgba(123, 239, 178, 1)',
                hoverBorderColor: 'rgba(123, 239, 178, 1)',
                data: nextTaskNumbered

            }
        ]
    };
    return (
        
        <div style={{ width: "900px", height: "800px" }}>
            <p style={{fontSize: "30px", fontWeight: "bold"}}>Montly Review</p>
            <Bar data={data} />
        </div>
    );
}

export default Chart;