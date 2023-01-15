const client = require('twilio')(process.env.accountSID, process.env.authToken);

const otpVerify = (req, res) => {
    if ((req.body.otp).length === 6) {
        client
            .verify
            .services(process.env.serviceSID)
            .verificationChecks
            .create({
                to: `${email1}`,
                code: req.body.otp
            })
            .then((data) => {
                if (data.status === "approved") {
                    const user = new User({
                        name: name1,
                        email: email1,
                        username: username1,
                        password: password1,
                        // address: address1
                    })
                    user.save()
                        .then((result) => {
                            console.log('success')
                        })
                        .catch((err) => {
                            console.log(err)
                        })
                    res.redirect('/login');
                } else {
                    session = req.session;
                    session.invalidOTP = true
                    res.redirect('/otpLoginVerify');
                }
            })
    } else {
        session = req.session;
        session.invalidOTP = true
        res.redirect('/otpLoginVerify');
    }
}