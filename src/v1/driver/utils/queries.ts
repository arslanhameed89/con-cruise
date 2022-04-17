export const findDriverByDistanceQuery = (
  lat: number,
  long: number,
  maxDistance: number,
): any => {
  const query = {};
  const finalQuery = [
    {
      $geoNear: {
        near: {
          longitude: long,
          latitude: lat,
        },
        key: 'coordinates',
        distanceField: 'distance',
        maxDistance: maxDistance / 6371, //KM to Radian
        distanceMultiplier: 6378.137, // Convert to KM
        spherical: true,
        query: query,
      },
    },
    { $sort: { distance: 1 } },
  ];

  return finalQuery;
};
