const { Schema, model } = require('mongoose');

const ThoughtSchema = new Schema({

    thoughtText: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 280
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: createdAtVal => dateFormat(createdAtVal)
    },
    username: {
        type: String,
        required: 'Username Required'
    },
    reactions: [ReactionSchema],
    toJson: {
        virtuals: true,
        getters: true
      }

const ReactionSchema = new Schema({
    reactionId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId(),
    },
    reactionBody: {
        type: String,
        required: true,
        maxlength: 280
    },
    username: {
        type: String,
        required: 'Username Required'
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: createdAtVal => dateFormat(createdAtVal)
    },
})

});

ThoughtSchema.virtual("reactionCount").get(function () {
    return this.reactions
})

const Thoughts = model('Thoughts', ThoughtSchema);

module.exports = Thoughts