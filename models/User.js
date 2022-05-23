const { Schema, model } = require('mongoose');

const UserSchema = new Schema({

      username: {
        type: String,
        required: 'username is Required',
        unique: true,
        trim: true
      },
      email: {
        type: String,
        unique: true,
        match: [/.+@.+\..+/, 'Please enter a valid e-mail address'],
        required: true
      },
      thoughts: [
        {
          type: Schema.Types.ObjectId,
          ref: "Thought"
        }
      ],
      friends: [
        {
          type: Schema.Types.ObjectId,
          ref: "User"
        }
      ],
      toJson: {
        virtuals: true,
        getters: true
      }
});

UserSchema.virtual("friendCount").get(function() {
  return this.friends(

  )
});

const User = model('User', UserSchema);

module.exports = User;
