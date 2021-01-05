import React, { Component } from 'react';
import {
    VictoryBar,
    VictoryChart,
    VictoryAxis,
    VictoryGroup,
} from 'victory';
import StudentData from './StudentData';
import LegendGraph from './LegendGraph';

class Student extends Component {
    constructor(props) {
        super(props)
        this.handleFunfactorClick = this.handleFunfactorClick.bind(this);
        this.handleDifficultyClick = this.handleDifficultyClick.bind(this);
        this.state = {
            name: props.name,
            funfactor: true,
            difficulty: true
        };
    }
    componentDidMount() {

    }
    handleFunfactorClick() {
        if (this.state.funfactor === false) {
            this.setState({ funfactor: true });
        } else if (this.state.funfactor === true) {
            this.setState({ funfactor: false });
        }
    }
    handleDifficultyClick() {
        if (this.state.difficulty === false) {
            this.setState({ difficulty: true });
        } else if (this.state.difficulty === true) {
            this.setState({ difficulty: false });
        }
    }
    render() {
        const assignmentArray = [...new Set(StudentData.map(data => data.Assignment))]
        const name = this.state.name;
        const query = StudentData.filter(function (slice) {
            return slice.Name === name;
        });
        if (this.state.funfactor === true && this.state.difficulty === true) {
            return (
                <div>
                    <h1>{this.state.name}</h1>
                    {<input type="button" onClick={this.handleDifficultyClick} value="Toon grafiek moeilijkheid"></input>}
                    {<input type="button" onClick={this.handleFunfactorClick} value="Toon grafiek funfactor"></input>}
                    <VictoryChart
                        domainPadding={20}
                        width={800}
                        height={300}>
                        <VictoryGroup
                            offset={2}
                        >
                            <VictoryBar
                                data={query}
                                barWidth={5}
                                x="Assignment"
                                y="Funfactor"
                                tickValues={assignmentArray}
                                style={{ data: { fill: "cadetblue" } }}
                                animate={{
                                    duration: 2500,
                                }}
                            />
                            <VictoryBar
                                data={query}
                                barWidth={5}
                                alignment="start"
                                x="Assignment"
                                y="Difficulty"
                                tickValues={assignmentArray}
                                style={{ data: { fill: "coral" } }}
                                animate={{
                                    duration: 2500,
                                }}
                            />
                        </VictoryGroup>
                        <VictoryAxis
                            tickValues={assignmentArray}
                            label="Opdracht"
                            style={{
                                tickLabels: {
                                    padding: 15,
                                    baselineShift: 8,
                                    wordSpacing: 5,
                                    fontSize: 6,
                                    angle: -60
                                }
                            }}
                        />
                        <VictoryAxis
                            label="Cijfer"
                            style={{
                                axisLabel: { padding: 30 },
                                tickLabels: { fontSize: 6 },
                                ticks: { stroke: 'black', size: 4 },
                            }}
                            dependentAxis
                            width={400}
                            height={400}
                            domain={[0, 5]}
                            standalone={false}
                        />
                    </VictoryChart>
                    <LegendGraph />
                </div>
            );
        } else if (this.state.funfactor === false && this.state.difficulty === true) {
            return (
                <div>
                    <h1>{this.state.name}</h1>
                    {<input type="button" onClick={this.handleFunfactorClick} value="Terug naar gecombineerde grafiek"></input>}
                    <VictoryChart
                        domainPadding={20}
                        width={800}
                        height={300}>
                        <VictoryGroup
                            offset={2}
                        >
                            <VictoryBar
                                data={query}
                                barWidth={5}
                                x="Assignment"
                                y="Funfactor"
                                tickValues={assignmentArray}
                                style={{ data: { fill: "cadetblue" } }}
                                animate={{
                                    duration: 2500,
                                }}
                            />
                        </VictoryGroup>
                        <VictoryAxis
                            tickValues={assignmentArray}
                            label="Opdracht"
                            style={{
                                tickLabels: {
                                    padding: 15,
                                    baselineShift: 8,
                                    wordSpacing: 5,
                                    fontSize: 6,
                                    angle: -60
                                }
                            }}
                        />
                        <VictoryAxis
                            label="Cijfer"
                            style={{
                                axisLabel: { padding: 30 },
                                tickLabels: { fontSize: 6 },
                                ticks: { stroke: 'black', size: 4 },
                            }}
                            dependentAxis
                            width={400}
                            height={400}
                            domain={[0, 5]}
                            standalone={false}
                        />
                    </VictoryChart>
                    <LegendGraph />
                </div>
            );
        } else if (this.state.difficulty === false && this.state.funfactor === true) {
            return (
                <div>
                    <h1>{this.state.name}</h1>
                    {<input type="button" onClick={this.handleDifficultyClick} value="Terug naar gecombineerde grafiek"></input>}
                    <VictoryChart
                        domainPadding={20}
                        width={800}
                        height={300}>
                        <VictoryGroup
                            offset={2}
                        >
                            <VictoryBar
                                data={query}
                                barWidth={5}
                                x="Assignment"
                                y="Difficulty"
                                tickValues={assignmentArray}
                                style={{ data: { fill: "coral" } }}
                                animate={{
                                    duration: 2500,
                                }}
                            />
                        </VictoryGroup>
                        <VictoryAxis
                            tickValues={assignmentArray}
                            label="Opdracht"
                            style={{
                                tickLabels: {
                                    padding: 15,
                                    baselineShift: 8,
                                    wordSpacing: 5,
                                    fontSize: 6,
                                    angle: -60
                                }
                            }}
                        />
                        <VictoryAxis
                            label="Cijfer"
                            style={{
                                axisLabel: { padding: 30 },
                                tickLabels: { fontSize: 6 },
                                ticks: { stroke: 'black', size: 4 },
                            }}
                            dependentAxis
                            width={400}
                            height={400}
                            domain={[0, 5]}
                            standalone={false}
                        />
                    </VictoryChart>
                    <LegendGraph />
                </div>
            );
        } else {
            return (
                <div>
                    {<input type="button" onClick={this.handleFunfactorClick} value="Funfactor"></input>}
                    {<input type="button" onClick={this.handleDifficultyClick} value="Difficulty"></input>}
                    <h1>{this.state.name}</h1>
                    <h2>Geen gegevens voor weergave.</h2>


                </div>
            );
        }
    }
};
export default Student;