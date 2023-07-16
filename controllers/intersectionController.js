const turf = require('@turf/turf');

// Function to calculate intersections between a lineString and scatteredLines
const calculateIntersections = (lineString, scatteredLines) => {
  // Initialize an empty array to store the intersections
  const result = [];

  // Iterate through each scatteredLine
  scatteredLines.forEach((scatteredLine) => {
    // Calculate the intersection between the lineString and the scatteredLine
    const intersection = turf.lineIntersect(lineString, scatteredLine.line);

    // Check if there are any intersections
    if (intersection.features.length > 0) {
      // Retrieve the first intersection point and add it to the result array
      result.push({
        id: scatteredLine.id,
        intersectionPoint: intersection.features[0].geometry.coordinates,
      });
    }
  });

  // Return the array of intersections
  return result;
};

// Export the calculateIntersections function as part of the module.exports object
module.exports = {
  calculateIntersections,
};
