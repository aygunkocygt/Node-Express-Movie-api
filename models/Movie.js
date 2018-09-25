const  mongoose = require('mongoose');

const Movieschema = new mongoose.Schema({
    director_id:  mongoose.SchemaTypes.ObjectId,
    title: {
        type: String,
        required: [true,'`{PATH}` alanı zorunludur.' ],
        maxlength: [30, '`{PATH}` alanı `({VALUE})`, `({MAXLENGTH})`, karekterden küçük olmalıdır'],
        minlength: [2, '`{PATH}` alanı `({VALUE})`, `({MINLENGTH})`, karekterden büyük olmalıdır']
    },

    category:
        {
            type:String,
            maxlength: 30,
            minlength: 1,
        },
    country:{
        type:String,
        maxlength: 30,
        minlength: 1,
    },

    year:{
     type:Number,
        max:2030,
        min:1900
    },
    imdb_score:{
      type:Number,
      max:10,
      min:1,
    },
    date: {
        type:Date,
        default:Date.now

    }

});

module.exports = mongoose.model('movie',Movieschema);
