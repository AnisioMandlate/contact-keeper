const jwt = require("jsonwebtoken");
const config = require("config");

module.exports = function (req, res, next) {
  /** Get the token from the header. */

  const token = req.headers["x-auth-token"];

  /** Check if the token exists*/

  if (!token) {
    /** Do not forget to return a response, specially on middlewares, to avoid setting headers
     * after being sent to the client.
     */
    return res
      .status(401)
      .json({ msg: "No token provided, authorization denied" });
  }

  try {
    const decoded = jwt.verify(token, config.get("jwtSecret"));
    req.user = decoded.user;
    next();
  } catch (error) {
    res.status(401).json({ msg: "Token is invalid" });
  }
};
