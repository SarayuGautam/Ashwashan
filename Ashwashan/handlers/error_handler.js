const CustomError = require("./custom_error");
/**
 * Error Handler
 */
exports.catchErrors = (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch((err) => {
      console.log(err);
      if (typeof err === "string") {
        return res.status(400).json({
          error: err,
        });
      }
      if (err instanceof CustomError) {
        return res.status(err.statusCode || 500).json({
          error: err.error,
        });
      }
      return next(err);
    });
  };
};
