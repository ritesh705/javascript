import ParkingSpot from './ParkingSpot';

class Vehicle
{
	constructor(size, licensePlate, spotsNeeded)
	{
		this.size = size;
		this.licensePlate = licensePlate;
		this.spotsNeeded = spotsNeeded;
	}

	assignParkingSpot(parkingSpot)
	{
		this.parkingSpot = parkingSpot;
	}
}
export default Vehicle;