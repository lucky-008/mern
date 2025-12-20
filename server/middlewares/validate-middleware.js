const validate = (schema) => async (req, res, next) => {
  try {
    const parsedBody = await schema.parseAsync(req.body);
    req.body = parsedBody;
    next();
  } catch (err) {
    // DO NOT touch err.errors directly
    return next({
      status: 422,
      message: err?.message || "Validation failed",
    });
  }
};

module.exports = validate;
