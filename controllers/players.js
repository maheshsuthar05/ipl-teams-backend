import Players from '../models/models.js';

export const getPlayers = async (req,res) => {
    try {
        const playersInfo = await Players.find();
        res.status(200).json(playersInfo)
    } catch (error) {
        res.status(404).json({message: error.message})
    }
}

export const createPlayer = async (req,res) => {
    const player = req.body;
    const newPlayer = new Players(player);
    try {
        await newPlayer.save();
        res.status(201).json(newPlayer);
    } catch (error) {
        res.status(409).json({message: error.message})
    }
}