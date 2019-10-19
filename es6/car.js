export default class Car
{
    constructor(brandName)
    {
        this.brandName = brandName;
    }

    getBrandName()
    {
        console.log("Car is of brand "+this.brandName);
        return this.brandName;
    }
}

car = new Car("Suzuki");
car.getBrandName();