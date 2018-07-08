import { expect } from 'chai';
import reducer from '../../../src/reducers/Measurements';
import { SET_DATA } from "../../../src/saga";

const initialState = [];

describe('Measurements', () => {
    it('returns the initial state if action is unknown', () => {
        expect(
            reducer(undefined, {})
        ).to.deep.equal(initialState);
    });

    describe('SET_DATA', () => {
        it('updates state by pushing new element if it was not exist', () => {
            const newItem = [
                {
                    name: 'Pressure',
                    unit: 'hPa',
                    measurements:[
                    ],
                    _id: '58c15afe518ca70001b80345'
                }
            ];
            expect(
                reducer(undefined, {
                    type: SET_DATA,
                    data: newItem
                })
            ).to.deep.equal(newItem);
        });

        it('updates existing element', () => {
            const currentState = [
                {
                    name: 'Location',
                    measurements:[
                        1489066746,
                        [
                            40.55404852193788,
                            -73.27629907400552
                        ]
                    ],
                    _id: '58c15afe518ca70001b80343'
                }
            ];
            const data = [
                {
                    name: 'Location',
                    measurements:[
                        111111111,
                        [
                            40.2,
                            -73.7
                        ]
                    ],
                    _id: '58c15afe518ca70001b80343'
                }
            ];
            expect(
                reducer(currentState, {
                    type: SET_DATA,
                    data
                })
            ).to.deep.equal(data);
        });
    })
});