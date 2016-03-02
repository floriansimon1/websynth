/** @file Registers redux related components into the main sandal container */

module.exports = sandal => {
    sandal.factory(
        'client.redux.initialState',
        ['client.models.State', 'client.models.makeInstrument'],
        require('../redux/initial-state')
    );

    sandal.factory(
        'client.redux.rootReducer',
        ['client.redux.initialState'],
        require('../redux/root-reducer')
    );

    sandal.factory(
        'client.redux.store',
        ['client.redux.rootReducer', 'client.redux.initialState'],
        require('../redux/store')
    );

    sandal.factory(
        'client.redux.dispatch',
        ['client.redux.store'],
        store => store.dispatch
    );

    sandal.factory(
        'client.redux.actionReducers',
        require('../redux/action-reducers')
    );

    sandal.factory(
        'client.redux.actions',
        ['client.redux.dispatch', 'client.redux.actionReducers'],
        require('../redux/action-creators')
    );};
