class ErrorHandler {
  static handle(err, req, res, next) {
    console.error(err.stack);

    res.status(500).json({
      status: "error",
      message: err.message || "Internal server error",
    });
  }
}

module.exports = ErrorHandler;
