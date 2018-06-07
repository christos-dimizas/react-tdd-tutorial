
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import {FETCH_BITCOIN} from './constants';
import {fetchBitCoin} from './bitcoin';

const createMockStore = configureMockStore([thunk]);
const store = createMockStore({bitCoin: {}});

const mockResponse = {body: {bpi: 'bitCoin price index'}};

fetchMock.get('https://api.coindesk.com/v1/bpi/currentprice.json', mockResponse);

it('creates an async action to fetch the bitCoin value', () => {
    const expectedActions = [{bitCoin: mockResponse.body, type: FETCH_BITCOIN}];
    return store.dispatch(fetchBitCoin()).then(
        () => {
            expect(
                store.getActions()
            ).toEqual(expectedActions);
        }
    );
}); 