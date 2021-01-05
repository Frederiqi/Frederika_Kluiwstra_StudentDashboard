import React, { Component } from 'react';

export class LegendGraph extends Component {

    render(props) {
        return (
            <div className="legendGraph">
                <label>
                    <h3 className="labelDifficulty">Moeilijkheidsgraad (1-5)</h3>
                    <h3 className="labelFunfactor">Leuk of juist niet (1-5)</h3>
                </label>
            </div>
        );
    }
}

export default LegendGraph;