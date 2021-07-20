class Globals{
}

class DevelopmentGlobals extends Globals{
    public urls = {
        cats: "http://localhost:8080/api/cats/",
    }
}

class ProductionGlobals extends Globals{
    public urls = {
        cats: "http://localhost:8080/api/cats/",
    }
}

const globals = process.env.NODE_ENV === 'production' ? new ProductionGlobals : new DevelopmentGlobals;

export default globals;