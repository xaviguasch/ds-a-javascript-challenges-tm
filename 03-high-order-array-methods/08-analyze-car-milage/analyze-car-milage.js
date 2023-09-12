function analyzeCarMileage(cars) {
  return cars.reduce(
    (acc, currV) => {
      acc.averageMileage = acc.averageMileage + currV.mileage / cars.length

      if (currV.mileage > acc.highestMileageCar.mileage) {
        acc.highestMileageCar = currV
      }

      if (currV.mileage < acc.lowestMileageCar.mileage) {
        acc.lowestMileageCar = currV
      }

      acc.totalMileage = acc.totalMileage + currV.mileage

      return acc
    },
    {
      averageMileage: 0,
      highestMileageCar: cars[0],
      lowestMileageCar: cars[0],
      totalMileage: 0,
    }
  )
}

module.exports = analyzeCarMileage
