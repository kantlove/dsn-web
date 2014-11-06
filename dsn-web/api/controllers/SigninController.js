module.exports = {
  processSignin: function (req, res) {
    return res.send(req.body.username);
  }
};