
/*
 * middleware
 * @param { object } req
 * @param { object } res
 * @param { method } next
 * @return { void }
 * */
function MainMiddleware(req, res, next) : void {
  console.log(req.url);
  //res.status(500).send('Something broke!');
  next();
};

/** exports */
export default MainMiddleware
