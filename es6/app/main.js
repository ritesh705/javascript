
import Model from '../components/Model';
import Vehicle from '../components/Vehicle';
import ParkingSpot from '../components/ParkingSpot';
import ParkingController from '../controller/ParkingController';

console.log("Hello!");
console.log("Welcome! To Webpack Dev Server");

var model = new Model("Suzuki", "Baleno");
model.getCarDetails();

var vehicle = new Vehicle("C", "123", "1");
var parkingSpot = new ParkingSpot("1", "1", "1", "C");
var parkingController = new ParkingController();
parkingController.addParkingSpot(parkingSpot);
var availableParkingSpot = parkingController.getParkingSpot(vehicle);
console.log("Parking Spot : "+availableParkingSpot.slotNumber);