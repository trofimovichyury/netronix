import React, { Component } from 'react';
import PropTypes from 'prop-types';

import style from './App.css';

const url = 'https://jsdemo.envdev.io/sse'

export default class App extends Component {
    componentDidMount() {
        this.initEventSource();
    }

    componentWillUnmount() {
        if (this.eventSource) {
            this.eventSource.close();
        }
    }

    initEventSource = () => {
        this.eventSource = new EventSource(url);
        this.eventSource.addEventListener('message', this.props.onMessage);
        this.eventSource.addEventListener('error', this.initEventSource);
    };

    renderHead = () => (
        <div className={style.wrapper}>
            <div className={style.headItem}>Name</div>
            <div className={style.headItem}>Unit</div>
            <div className={style.headItem}>Measurements</div>
        </div>
    );

    renderMeasurements = measurements => (
        measurements.map(m => (
            <div>{m}</div>
        ))
    );

    renderItems = () => (
        this.props.measurements.map(item => (
            <div className={style.wrapper}>
                <div className={style.item}>{item.name}</div>
                <div className={style.item}>{item.unit ? item.unit : '-'}</div>
                <div className={style.item}>{this.renderMeasurements(item.measurements)}</div>
            </div>
        ))
    );

    render() {
        const { measurements } = this.props;
        return (
            <main className={style.app}>
                {
                    measurements.length > 0 ?
                        <div>
                            {this.renderHead()}
                            {this.renderItems()}
                        </div> :
                        <h1 className={style.emptyContent}>Nothing to show</h1>
                }
            </main>
        )
    }
}

App.propTypes = {
    onMessage: PropTypes.func.isRequired,
    measurements: PropTypes.array
};
