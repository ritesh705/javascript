import Vehicle from '../components/Vehicle';
import ParkingSpot from '../components/ParkingSpot';

class ParkingController
{
	constructor()
	{
		this.parkingSpots = new Array();
	}

	addParkingSpot(parkingSpot)
	{
		this.parkingSpots.push(parkingSpot);
	}

	getParkingSpot(vehicle)
	{
		for(var i=0; i<this.parkingSpots.length; i++)
		{
			var parkingSpot = this.parkingSpots[i];
			if(parkingSpot.size == vehicle.size && parkingSpot.isAvailable())
			{
				return parkingSpot;
			}
		}
	}
}
export default ParkingController;