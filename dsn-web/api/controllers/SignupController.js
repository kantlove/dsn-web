module.exports = {
  processSignup: function (req, res) {
    return res.send(req.body.username);
  }
};