const User = require("../models/User");
const { catchErrors } = require("../handlers/error_handler");
const { Types } = require("mongoose");
const ObjectID = Types.ObjectId;

const auth = catchErrors(
  /**
   * @param {Request} req
   * @param {Response} res
   * @param {NextFunction} next
   */
  async (req, res, next) => {
    if (!req.session.userId || !ObjectID.isValid(req.session.userId)) {
      next();
    }
    const user = await User.findById(req.session.userId);
    if (!user) {
      next();
    }
    req.user = user;
    res.locals.user = user;
    next();
  }
);
module.exports = auth;
