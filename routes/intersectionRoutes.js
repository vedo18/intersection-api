const express = require("express");
const router = express.Router();
const turf = require("@turf/turf");

const intersectionsController = require("../controllers/intersectionController");
const authMiddleware = require("../middleware/authMiddleware");

// POST /api/intersections
router.post("/api/intersections", authMiddleware, (req, res) => {
  // Retrieve the lineString and scatteredLines from the request body
  const { lineString, scatteredLines } = req.body;

  // Check if the required parameters are present
  if (!lineString || !scatteredLines) {
    // Return a 400 Bad Request response if any parameter is missing
    return res.status(400).json({ error: "Bad Request" });
  }

  // Create a lineString feature using the coordinates from the lineString object
  const lineStringFeature = turf.lineString(lineString.coordinates);

  // Call the intersectionsController to calculate the intersections between the lineString and scatteredLines
  const intersections = intersectionsController.calculateIntersections(
    lineStringFeature,
    scatteredLines
  );

  // Return the intersections as a JSON response
  res.json(intersections);
});

// Export the router module
module.exports = router;
