import React from 'react';
import { shallow } from 'enzyme';
import { spy } from 'sinon';
import { expect } from 'chai';

import App from '../../../src/components/App';

describe('App', () => {
    before(() => {
        Object.defineProperty(global, 'EventSource', {
            value: () => ({
                addEventListener: () => {}
            })
        });
    });

    it('renders nothing if measurements are empty', () => {
        const wrapper = shallow(<App measurements={[]}/>);
        expect(wrapper.find('.emptyContent').length).to.equal(1);
    });

    it('render content if measurements contain data', () => {
        const measurements = [
            {
                measurements: []
            }
        ];
        const wrapper = shallow(<App measurements={measurements}/>);
        expect(wrapper.find('.wrapper').length).to.equal(2);
    });

    it('closes EventSource on unmount', () => {
        const wrapper = shallow(<App measurements={[]}/>);
        const close = spy();
        wrapper.instance().eventSource = {
            close
        };
        wrapper.unmount();
        expect(close.calledOnce).to.be.true;
    });
});