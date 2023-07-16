function authMiddleware(req, res, next) {
  // Retrieve the Authorization header from the request
  const authHeader = req.headers.authorization;

  // Check if the Authorization header is missing
  if (!authHeader) {
    // Return a 401 Unauthorized response if the header is missing
    return res.status(401).json({ error: 'Unauthorized' });
  }

  // Call the next middleware or route handler
  next();
}

// Export the authMiddleware function to be used in other modules
module.exports = authMiddleware;
