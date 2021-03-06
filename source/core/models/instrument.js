/** @file The instrument class */

const Immutable = require('immutable');
const Maybe     = require('data.maybe');

/**
 * The instrument model
 *
 * @name Instrument
 * @class
 * @memberof module:core.models
 */
module.exports = Immutable.Record({
    /**
     * The ID of the instrument
     *
     * @memberof module:core.models.Instrument
     * @var      {String}
     */
    id: null,

    /**
     * A list of enabled notes for the instrument,
     * represented by their position in the grid
     *
     * @memberof module:core.models.Instrument
     * @var     {Immutable.Set<Number>}
     */
    notes: new Immutable.Set(),

    /**
     * The name of the played note
     *
     * @memberof module:core.models.Instrument
     * @var      {module:core.models.NoteName}
     */
    noteName: null,

    /**
     * The last played in the instrument, not on a
     * scale of 0 to notesPerTrack - 1.
     *
     * @memberof module:core.models.Instrument
     * @var      {Number}
     */
    lastPlayedNote: Maybe.Nothing(),

    /**
     * When not in playing mode, you can
     * trigger notes by using a controller
     * (MIDI or keyboard). This contains a
     * reference to an opaque data structure
     * that the synthesis engine requires
     * in order to stop playing a note when
     * you release the controller button.
     *
     * @memberof module:core.models.Instrument
     * @var      {Unspecified}
     */
    offScheduleNote: Maybe.Nothing()
});
