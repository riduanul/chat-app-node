function decorateHtmlResponse(title) {
  return function (req, res, next) {
    res.locals.html = true;
    res.locals.title = `${title} - Chat Application`;
    next();
  };
}

module.exports = decorateHtmlResponse;
