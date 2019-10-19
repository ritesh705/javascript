class Car
{
    constructor(brandName)
    {
        this.brandName = brandName;
    }
}

class Model extends Car
{
    constructor(brandName, modelName)
    {
        super(brandName);
        this.modelName = modelName;
    }

    getCarDetails()
    {
        console.log("Car Brand > "+this.brandName+", Car Model > "+this.modelName);
    }
}

// Arrow Function
hello=(val)=>{console.log(val)}

model = new Model("Suzuki", "Baleno");
model.getCarDetails();
hello("Arrow Function");