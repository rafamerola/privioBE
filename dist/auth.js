const OktaJwtVerifier = require('@okta/jwt-verifier');
const oktaJwtVerifier = new OktaJwtVerifier({
    clientId: '0oal4et6odDRJey4W4x6',
    issuer: 'https://dev-420995.okta.com/oauth2/default'
});
async;
function oktaAuth(req, res, next) {
    try {
        const token = (req), as = any, token;
        if (!token) {
            return res.status(401).send('Not Authorised');
        }
        const jwt = await, oktaJwtVerifier, verifyAccessToken = (token);
        req.user = {
            uid: jwt.claims.uid,
            email: jwt.claims.sub
        };
        next();
    }
    catch (err) {
        return res.status(401).send(err.message);
    }
}
