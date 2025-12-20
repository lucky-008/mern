const validate = (schema) => async (req, res, next) => {
  try {
    const parsedBody = await schema.parseAsync(req.body);
    req.body = parsedBody;
    next();
  } catch (error) {
    return res.status(400).json({
      message:
        error?.errors?.[0]?.message ||
        error?.message ||
        "Validation failed",
    });
  }
};

module.exports = validate;

