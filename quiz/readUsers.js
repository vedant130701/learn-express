const express = require('express')
const router = express.Router();

router.get('/usernames', (req, res) => {
    let usernames = req.users.map(function(user) {
        return {id: user.id, username: user.username};
    });
    res.send(usernames);
})

router.get('/username/:name', (req, res) => {
    let uname = req.params.name;
    let userData = req.users.filter((user) => user["username"] === uname);
    if(userData.length != 0) {
        res.send(userData);
    }
    else {
        res.json({
        error: {message: 'users not found', status: 404}
    });
    }
})

module.exports = router