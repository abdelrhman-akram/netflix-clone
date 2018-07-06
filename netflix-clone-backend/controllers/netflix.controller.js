const Profile = require('../models/profile.model');


exports.profile_create = function (req, res) {
    let profile = new Profile(
        {
            // _id:req.body.name,
            userName: req.body.userName,
            urlPhoto: req.body.urlPhoto,
            status: "online"
        }
    );
    profile.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('Profile Created successfully')
    })
};
exports.getProfileInfo = function (req, res){


    Profile.find({userName:req.params.id}, function (err, Profile) {
        if (err) {
          return next(err);
        }
        res.send(Profile);
    })
};
