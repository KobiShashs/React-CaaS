class Globals{
}

class DevelopmentGlobals extends Globals{
    public urls = {
        cats: "http://localhost:8080/api/cats/",
        client:  "http://localhost:8080/api/client/",
        images: "http://localhost:8080/api/cats/images/",
        customers: "http://localhost:8080/api/customers/cats/",
        employees: "http://localhost:8080/api/employess/cats/"
    }
}

class ProductionGlobals extends Globals{
    public urls = {
        cats: "http://localhost:8080/api/cats/",
        client:  "http://localhost:8080/api/client/",
        images: "http://localhost:8080/api/cats/images/",
        customers: "http://localhost:8080/api/customers/cats/",
        employees: "http://localhost:8080/api/employess/cats/"
    }
}

const globals = process.env.NODE_ENV === 'production' ? new ProductionGlobals : new DevelopmentGlobals;

export default globals;