import mongoose from 'mongoose';

const playerSchema = mongoose.Schema({
    playerName : String,
    photo : String,
    from : String,
    price : {type: Number, default: 0},
    isPlaying : String,
    description : String,
    jersey: {type: Number, default: 0}
})

const Players = mongoose.model('Players',playerSchema)
export default Players;