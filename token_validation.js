const { verify } = require("jsonwebtoken");

module.exports = {
    checkToken: (req, res, next) => {
        let token = req.get("authorization");
        if (token) {
            token = token.split(' ')[1];
            verify(token, "123", (err, decoded) => {
                if (err) {
                    return res.json({
                        success: 0,
                        message: "Invalid token"
                    });
                } else {
                    req.decoded = decoded;
                    console.log('decoded', decoded)
                    next();
                }
            })
        } else {
            return res.json({
                success: false,
                message: "Access denied! unautorized user"
            })
        }
    }
}