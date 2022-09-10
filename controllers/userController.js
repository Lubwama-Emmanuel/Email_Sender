const User = require("../models/userModel");
const catchAsync = require("../utils/catchAsync");

exports.createUser = catchAsync(async (req, res, next) => {
  const user = await User.create(req.body);

  res.status(200).json({
    status: "success",
    data: {
      user,
    },
  });
});
