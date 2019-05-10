module.exports = {
  jwtSecret:
    process.env.JWT_SECRET ||
    "this is a super duper secret. Do not tell anyone!!!"
};
