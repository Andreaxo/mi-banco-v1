let datosJson;

fetch('resumen.json')
    .then(Response=> Response.json())
    .then((salida) => {
        datosJson = salida;
        let txtbanco = document.getElementById("banco");
        let txtsucursal = document.getElementById("sucursal");
        let txtnombre = document.getElementById("nombre");
        let txtnumcuenta = document.getElementById("numcuenta");
        let txtusd = document.getElementById("usd");
        let txtmonedausd = document.getElementById("monto-usd");
        let txteuro = document.getElementById("euro");
        let txtmonedaeuro = document.getElementById("monto-euro");
        let txtcbu = document.getElementById("cbu");
        let txtabierta = document.getElementById("abierta");
        txtbanco.textContent = datosJson.banco;
        txtsucursal.textContent = datosJson.sucursal;
        txtnombre.textContent = datosJson.titular;
        txtnumcuenta.textContent = datosJson.nro_cuenta;
        txtmonedausd.textContent = datosJson.saldo[0].monto;
        txtusd.textContent = datosJson.saldo[0].moneda;
        txtmonedaeuro.textContent = datosJson.saldo[1].monto;
        txteuro.textContent = datosJson.saldo[1].moneda;
        txtcbu.textContent = datosJson.nro_banco;
        txtabierta.textContent = datosJson.abierto;

    })
    .catch(function(error) { //El catch es un else - forma de comprobar errores.
        alert(error);
    })