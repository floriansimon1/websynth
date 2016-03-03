/** @file Holds the initial state of the application */

const frequencies = [
    440,    // A
    466.16, // A#
    493.88, // B
    523.25, // C
    554.37, // C#
    587.33, // D
    622.25, // D#
    659.25, // E
    698.46, // F
    739.99, // F#
    783.99, // G
    830.61 // G#
];

/**
 * The initial state of the app
 *
 * @name initialState
 * @var
 * @memberof module:client.redux
 */
module.exports = (State, makeInstrument) => new State({
    instruments:   frequencies.map(makeInstrument),
    playing:       false,
    tempo:         120,
    masterVolume:  10,
    notesPerTrack: 16
});
