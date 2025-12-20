const { z } = require("zod");

const signupSchema = z.object({
  username: z
    .string({ required_error: "Name is required" })
    .trim()
    .min(3, { message: "At least 3 characters" })
    .max(255, { message: "At most 255 characters" }),

  email: z
    .string({ required_error: "Email is required" })
    .trim()
    .email({ message: "Invalid email address" })
    .min(3)
    .max(255),

  phone: z
    .string({ required_error: "Phone is required" })
    .trim()
    .length(10, { message: "Phone number must be exactly 10 digits" }),

  password: z
    .string({ required_error: "Password is required" })
    .min(6, { message: "Password must be at least 6 characters" })
    .max(255),
});

module.exports = signupSchema;
