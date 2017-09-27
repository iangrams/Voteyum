var mongoose = require("mongoose");
var Contest = require("../models/Ballot").Contest;
var Option = require("../models/Ballot").Option;
var Vote = require("../models/Ballot").Vote;

var voteController = {};

// Ballot view
voteController.displayContests = function(req, res) {
  Contest.find({region: new RegExp(req.params.region,'i')}, function(err, contests) {
    if (err) {
      return res.render('index', { error: err});
    }else{
      return res.render('vote', { contests: contests, user: req.user});
    }
  });
};

module.exports = voteController;
