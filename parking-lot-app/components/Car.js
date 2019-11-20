class Car
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
    setCarName()
    {
    	this.name = "Baleno Model 2019";
    }
    getCarName()
    {
    	return this.name;
    }
}

export default Car;