import Vehicle from './Vehicle';

class ParkingSpot
{
	constructor(level, row, slotNumber, size)
	{
		this.level = level;
		this.row = row;
		this.slotNumber = slotNumber;
		this.size = size;
	}

	parkVehicle(vehicle)
	{
		this.vehicle = vehicle;
		vehicle.assignParkingSpot(this);
	}

	clearSpot(vehicle)
	{
		this.vehicle = null;
		vehicle.assignParkingSpot(null);
	}

	isAvailable()
	{
		if(this.vehicle == null)
		{
			return true;
		}
	}
}
export default ParkingSpot;