const Song = require("../models/Songs");

module.exports = {
  async index(req, res) {
    try {
      let songs = null;
      const search = req.query.search;
      if (search) {
        songs = await Song.find({
          title:{$regex:search , $options:"i"}
        }).limit(5);
      } else {
        songs = await Song.find({
          
        }).limit(10)
      }
      res.send(songs);
    } catch (err) {
      res.status(500).send({
        error: "an error has occured trying to fetch the songs",
      });
    }
  },
  async show(req, res) {
    try {
      const song = await Song.findById(req.params.songId);
      res.send(song);
    } catch (err) {
      res.status(500).send({
        error: "an error has occured trying to show the songs",
      });
    }
  },
  async post(req, res) {
    try {
      const title = req.body.title
      const artist = req.body.artist
      const genre = req.body.genre
      const album = req.body.album
      const albumImageUrl = req.body.albumImageUrl
      const youtubeId = req.body.youtubeId
      const lyrics = req.body.lyrics
      const tab = req.body.tab
      const song = await new Song({title,artist,genre,album,albumImageUrl,youtubeId,lyrics,tab});
      song.save();
      res.send(song);
    } catch (error) {
      res.status(500).send({
        error: "An error has occured trying to create the song",
      });
    }
  },
  async put(req, res) {
    try {
      const title = req.body.title
      const artist = req.body.artist
      const genre = req.body.genre
      const album = req.body.album
      const albumImageUrl = req.body.albumImageUrl
      const youtubeId = req.body.youtubeId
      const lyrics = req.body.lyrics
      const tab = req.body.tab
      const id = req.body._id;
      const song = await 
        Song.findByIdAndUpdate(id, {title,artist,genre,album,albumImageUrl,youtubeId,lyrics,tab})
       .then(song => {res.send(song)})
      }catch (error) {
      res.status(500).send({
        error: "An error has occured trying to update the song",
      });
    }
  },
  async delete(req , res){
    try {
      const _id = req.params.songId;
      console.log(_id)
      Song.deleteOne({_id:_id})
      .then(song => {res.status(200).send(song)})
    } catch (error) {
      res.status(500).send({
        error: "An error has occured trying to delete the song",
      });
    }
  }
};
