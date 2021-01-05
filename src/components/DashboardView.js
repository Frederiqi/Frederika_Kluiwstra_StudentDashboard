import React, { Component } from 'react';
import {
    VictoryBar,
    VictoryLine,
    VictoryChart,
    VictoryAxis,
    VictoryGroup,
} from 'victory';
import StudentData from './StudentData';
import LegendGraph from './LegendGraph';

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.handleFunfactorClick = this.handleFunfactorClick.bind(this);
        this.handleDifficultyClick = this.handleDifficultyClick.bind(this);
        this.state =
        {
            funfactor: true,
            difficulty: true
        };

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
        const averageDifficultyCalc = (arr) => {
            let sums = {}, counts = {}, results = [], name;
            for (let i = 0; i < arr.length; i++) {
                name = arr[i].Assignment;
                if (!(name in sums)) {
                    sums[name] = 0;
                    counts[name] = 0;
                }
                sums[name] += arr[i].Difficulty;
                counts[name]++;
            }

            for (name in sums) {
                results.push({ name: name, value: sums[name] / counts[name] });
            }
            return results;
        }
        const averageFunfactorCalc = (arr) => {
            let sums = {}, counts = {}, results = [], name;
            for (let i = 0; i < arr.length; i++) {
                name = arr[i].Assignment;
                if (!(name in sums)) {
                    sums[name] = 0;
                    counts[name] = 0;
                }
                sums[name] += arr[i].Funfactor;
                counts[name]++;
            }

            for (name in sums) {
                results.push({ name: name, value: sums[name] / counts[name] });
            }
            return results;
        }
        const avgDifficulty = averageDifficultyCalc(StudentData);
        const avgFunfactor = averageFunfactorCalc(StudentData);
        if (this.state.funfactor === true && this.state.difficulty === true) {
            return (
                <div className="page">
                    <p>Ontdek op dit dashboard hoe de studenten van Winc Academy alle opdrachten van de opleiding beoordeelden, zowel qua moeilijkheidsgraad als het plezier dat een opdracht gaf.
                    De grafieken op de homepage geven per opdracht de gemiddelde beoordeling van alle studenten bijelkaar.</p>
                    <p>Door links op de naam van een student te klikken kun je de individuele beoordelingen bekijken.</p>
                    <p>Klik hieronder op een button voor een grafiek met enkel de moeilijkheidsgraad of de funfactor.</p>
                    <div className="button">
                        {<input type="button" onClick={this.handleDifficultyClick} value="Toon grafiek moeilijkheid"></input>}
                        {<input type="button" onClick={this.handleFunfactorClick} value="Toon grafiek funfactor"></input>}
                    </div>
                    <VictoryChart
                        domainPadding={20}
                        width={800}
                        height={300}
                    >
                        <VictoryGroup
                            offset={2}
                        >
                            <VictoryBar
                                data={avgFunfactor}
                                barWidth={5}
                                x="name"
                                y="value"
                                tickValues={assignmentArray}
                                style={{ data: { fill: "cadetblue" } }}
                                animate={{
                                    duration: 2500,
                                }}
                            />
                            <VictoryBar
                                data={avgDifficulty}
                                barWidth={5}
                                alignment="start"
                                x="name"
                                y="value"
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
                    <VictoryChart
                        domainPadding={20}
                        width={800}
                        height={300}
                    >
                        <VictoryGroup
                            offset={2}
                        >
                            <VictoryLine
                                data={avgFunfactor}
                                barWidth={5}
                                x="name"
                                y="value"
                                tickValues={assignmentArray}
                                style={{ data: { stroke: "cadetblue" } }}
                                animate={{
                                    duration: 2500,
                                }}
                            />
                            <VictoryLine
                                data={avgDifficulty}
                                barWidth={5}
                                x="name"
                                y="value"
                                tickValues={assignmentArray}
                                style={{ data: { stroke: "coral" } }}
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

                </div>
            );
        } else if (this.state.funfactor === false && this.state.difficulty === true) {
            return (
                <div className="page">
                    <p>Ontdek op dit dashboard hoe de studenten van Winc Academy alle opdrachten van de opleiding beoordeelden, zowel qua moeilijkheidsgraad als het plezier dat een opdracht gaf.
                    De grafieken op de homepage geven per opdracht de gemiddelde beoordeling van alle studenten bijelkaar.</p>
                    <p>Door links op de naam van een student te klikken kun je de individuele beoordelingen bekijken.</p>
                    <p>Klik hieronder op een button voor een grafiek met enkel de moeilijkheidsgraad of de funfactor.</p>
                    <div className="button">
                        {<input type="button" onClick={this.handleFunfactorClick} value="Terug naar gecombineerde grafiek"></input>}
                    </div>
                    <VictoryChart
                        domainPadding={20}
                        width={800}
                        height={300}>
                        <VictoryGroup
                            offset={2}
                        >
                            <VictoryBar
                                data={avgFunfactor}
                                barWidth={5}
                                x="name"
                                y="value"
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
                <div className="page">
                    <p>Ontdek op dit dashboard hoe de studenten van Winc Academy alle opdrachten van de opleiding beoordeelden, zowel qua moeilijkheidsgraad als het plezier dat een opdracht gaf.
                    De grafieken op de homepage geven per opdracht de gemiddelde beoordeling van alle studenten bijelkaar.</p>
                    <p>Door links op de naam van een student te klikken kun je de individuele beoordelingen bekijken.</p>
                    <p>Klik hieronder op een button voor een grafiek met enkel de moeilijkheidsgraad of de funfactor.</p>
                    <div className="button">
                        {<input type="button" onClick={this.handleDifficultyClick} value="Terug naar gecombineerde grafiek"></input>}
                    </div>
                    <VictoryChart
                        domainPadding={20}
                        width={800}
                        height={300}>
                        <VictoryGroup
                            offset={2}
                        >
                            <VictoryBar
                                data={avgDifficulty}
                                barWidth={5}
                                x="name"
                                y="value"
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
                <div className="page">
                    <h1>React Student Dashboard</h1>
                    <p>Ontdek op dit dashboard hoe de studenten van Winc Academy alle opdrachten van de opleiding beoordeelden, zowel qua moeilijkheidsgraad als het plezier dat een opdracht gaf.
                    De grafieken op de homepage geven per opdracht de gemiddelde beoordeling van alle studenten bijelkaar.</p>
                    <p>Door links op de naam van een student te klikken kun je de individuele beoordelingen bekijken.</p>
                    <p>Klik hieronder op een button voor een grafiek met enkel de moeilijkheidsgraad of de funfactor.</p>
                    <div className="button">
                        {<input type="button" onClick={this.handleDifficultyClick} value="Toon grafiek moeilijkheid"></input>}
                        {<input type="button" onClick={this.handleFunfactorClick} value="Toon grafiek funfactor"></input>}
                    </div>
                    <h2>Geen gegevens voor weergave.</h2>


                </div>
            );
        }
    }
}
export default Dashboard;