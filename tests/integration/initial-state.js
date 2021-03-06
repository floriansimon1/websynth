const sandal = require('../providers');

describe('Initially,', () => {
    var state;
    var stateFunctions;

    beforeEach(done => {
        sandal.resolve(
            ['client.redux.initialState', 'core.logic.stateFunctions'],
            (error, initialState, stateMethods) => {
                state          = initialState;
                stateFunctions = stateMethods;

                if (error) {
                    fail(error);
                }

                done();
            }
        );
    });

    it('there should be no last played notes for any instrument', () => {
        expect(state.instruments.find(instrument => instrument.lastPlayedNote.isJust))
        .toBe(undefined);
    });

    it('we should have a default tempo', () => {
        expect(state.tempoMap.size).toBe(1);
    })

    it('we should not be in playing mode', () => {
        expect(state.playing).toBe(false);
        expect(state.playbackTempoMap.size).toBe(0);
    });

    it('there should not be a currently played note', () => {
        expect(state.currentlyPlayedNote.isNothing).toBe(true);
    });

    it('no note should be marked as to play', () => {
        expect(stateFunctions.getPlayedNotes(state).length).toBe(0);
    });
});
