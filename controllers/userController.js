const User = require("../models/userModel");
const catchAsync = require("../utils/catchAsync");
const Email = require("../utils/email")

exports.createUser = catchAsync(async (req, res, next) => {
  const user = await User.create(req.body);
  const url = `${req.protocol}://localhost:8080/api/emailSender/user`;
  await new Email(user, url).sendWelcome();
  console.log(url);
  res.status(200).json({
    status: "success",
    data: {
      user,
    },
  });
});
