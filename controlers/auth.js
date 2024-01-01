const expressJwt=require('express-jwt')


exports.signout = (req, res) => {
    res.clearCookie('token');
    res.json({message: 'User Signout Sucess'});
};

// protectedRoutes
exports.isSignedIn = expressJwt.expressjwt({secret: "mdcmlsnjfvnfnv", userProperty: 'auth',algorithms: ['HS256'] });

// middleware custom

exports.isAuthenticated = (req, res, next) => {
    // console.log(`rewwww>>>>>>>${req.profile}`);
    const checker = req.profile ;
    if (! checker) {
        return res.status(404).json({error: 'ACESS denied'});
    }
    next();
};
