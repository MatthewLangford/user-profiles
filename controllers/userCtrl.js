var users = [
    {
        name: 'Preston McNeil',
        password: 'password1',
        friends: ['Lindsey Mayer', 'Terri Ruff']
    },
    {
        name: 'Ryan Rasmussen',
        password: '$akgfl#',
        friends: ['Lindsey Mayer']
    },
    {
        name: 'Terri Ruff',
        password: 'hunter2',
        friends: ['Lindsey Mayer', 'Preston McNeil']
    },
    {
        name: 'Lindsey Mayer',
        password: '777mittens777',
        friends: ['Preston McNeil', 'Ryan Rasmussen', 'Terri Ruff']
    }
];

module.exports = {

    login: (req, res, next) =>{
        let login1 = users.filter(val =>{
            return val.name === req.body.name && val.password === req.body.password;
        });
        if(login1.length > 0){
            req.session.currentUser = login1[0];
            res.send({userFound: true});
        }else{
            res.send({userFound: false});
        }
    }
};