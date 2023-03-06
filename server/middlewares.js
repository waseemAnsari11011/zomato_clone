module.exports = (req, res, next) => {
  if (req.method === 'POST' && req.path === '/login') {
    const {username, password} = req.body;
    const user = res.locals.data.find(
      user => user.username === username && user.password === password,
    );
    if (user) {
      res.json({success: true, token: 'fake-token'});
    } else {
      res
        .status(401)
        .json({success: false, message: 'Invalid username or password'});
    }
  } else {
    next();
  }
};
