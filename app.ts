abstract class FabricaProductos {
    abstract crearcuenta() : Cuenta
    abstract creartarjeta() : Tarjeta
}

class FabricaCredito extends FabricaProductos {
    crearcuenta(): Cuenta {

        console.log("creando producto credito")
        let a = new Cuenta()
        return a
    }
    creartarjeta(): Tarjeta {
        console.log("creando producto credito")
        let a = new Tarjeta()
        return a
    }
}


class FabricaDebito extends FabricaProductos {
    crearcuenta(): Cuenta {
        let a = new Cuenta()
        return a
    }
    creartarjeta(): Tarjeta {
        let a = new Tarjeta()
        return a
    }

}
class Cuenta{

}

class Tarjeta{
        id: number;
        user: number;
        imagen: string;
        tipo: string;
}

