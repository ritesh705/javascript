import Car from './Car';

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
        super.setCarName();
        console.log("Var Name : "+this.name);
    }
}

export default Model;