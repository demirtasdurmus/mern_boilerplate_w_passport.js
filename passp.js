app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(
    function (username, password, done) {

        //Search for user
        User.find({ where: { email: username } }).success(function (user) {

            //If no user register a new one
            if (!user) {

                var today = new Date();
                var salt = today.getTime();
                var createdDate = today.toUTCString();

                var newPass = crypto.hashPassword(password, salt);

                var user = User.build({
                    email: username,
                    password: newPass,
                    salt: salt
                });

                user.save().success(function (savedUser) {
                    console.log('Saved user successfully: %j', savedUser);
                    return done(null, savedUser);

                }).error(function (error) {
                    console.log(error);
                    return done(null, false, { message: 'Something went wrong in registration' });
                });
            }

            //Found user check password
            if (!crypto.validPassword(password, user)) {
                console.log('In password check');
                return done(null, false, { message: 'Invalid password' });
            }

            console.log("Out local strategy");
            return done(null, user);
        });
    }
));

app.post('/login', passport.authenticate('local'), function (req, res) {
    console.log('Logging in as: ' + req.user);

    res.send({ success: 'success' });
});