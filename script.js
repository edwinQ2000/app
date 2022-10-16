let superdata ={}
let car = {}
let principalContainer= document.getElementById('principal-container')
let Container2= document.getElementById('container2')
let Container3= document.getElementById('container2')
const btnModificar = document.getElementById('btnModificar')

 function updatePage(){
    // console.log(superdata)
    //btnModificar.disabled=true

    Object.entries(superdata).forEach(([key, value]) => {
        
        principalContainer.innerHTML+= `<div class="card" style="width: 18rem;" id='${value.Id}'>
                                            <img src="${value.Imagen}" class="card-img-top" alt="imagen">
                                            <div class="card-body">
                                            <h5 class="card-title">${key}</h5>
                                            <p class="card-text">${value.User} Propietario </p>
                                            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#${key}Modal">
                                            Detalles
                                            </button>
                                            <button type="button"  class="btn btn-primary" onclick="getCar('${key}')" >
                                            Modificar
                                            </button>
                                            <button type="button"  class="btn btn-primary" onclick="dropCar('${key}')" >
                                            Eliminar
                                            </button>
                                            </div>
                                        </div>`+ showCar(key,value)


                                       

    })
 }

function showCar(id,value){
    Container2 =  `<div class="modal fade" id="${id}Modal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                            <img src="${value.Imagen}" class="card-img-top" alt="imagen">
                            <br/>
                            <tittle>${value.Id}</tittle>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <b>Nombre:</b> ${value.User}.<p><p>
                            </div>
                            <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                            </div>
                        </div>
                        </div>
                    </div>
                    `
    return Container2

}
function newTarjeta(){
    let tipo = document.getElementById('Tipo').value
    addCar({
        Tipo:document.getElementById('Tipo').value,
        Id:document.getElementById('Id').value
    })
    alert("Agregado con exito!")
    limpiar()

}

function preEdit(id){
    
    document.getElementById('id').value=id
    document.getElementById('Nombre').value=car.Nombre
    document.getElementById('Motor').value=car.Motor
    document.getElementById('Combustion').value=car.Combustion
    document.getElementById('Caja').value=car.Caja
    document.getElementById('Traccion').value=car.Traccion
    document.getElementById('Modelo').value=car.Modelo
    document.getElementById('Imagen').value=car.Imagen
    document.getElementById('Marca').value=car.Marca
    btnModificar.disabled = false
    btnCrear.disabled=true

}
function editCar(){
    
   updateCar(document.getElementById('id').value,{
        Marca:document.getElementById('Marca').value,
        Motor:document.getElementById('Motor').value,
        Modelo: document.getElementById('Modelo').value,
        Caja:document.getElementById('Caja').value,
        Traccion: document.getElementById('Traccion').value,
        Nombre:document.getElementById('Nombre').value,
        Combustion: document.getElementById('Combustion').value,
        Imagen: document.getElementById('Imagen').value
        
    })

    
        btnModificar.disabled = true
        btnCrear.disabled=false
        limpiar()
}

function dropCar(id){

    deleteCar("Ford")
    location.reload()

}

function limpiar(){
    document.getElementById('Nombre').value=""
    document.getElementById('Motor').value=""
    document.getElementById('Combustion').value=""
    document.getElementById('Caja').value=""
    document.getElementById('Traccion').value=""
    document.getElementById('Modelo').value=""
    document.getElementById('Imagen').value=""
    document.getElementById('Marca').value=""
    document.getElementById('id').value=""
    location.reload()

}

//-------------------------------------------------------------------------------------------------------------------

/*
const fetchData = () => {
    fetch("https://crud-giweb-default-rtdb.firebaseio.com/Concesionario.json")
    .then(response => response.json())
    .then(data => console.log(data))
}
*/
const url ='https://productos-a0778-default-rtdb.firebaseio.com/'
const getData = async() => {
    const response = await fetch(url+'.json')
    const data = await response.json()
    console.log("Aqui entro")
    console.log(data)
    superdata=data
    updatePage()
}

const getCar = async(id) => {
    const url= 'https://crud-giweb-default-rtdb.firebaseio.com/Concesionario/'+id+'.json'
    const response = await fetch(url)
    const data = await response.json()
    car=data
    preEdit(id)
    
}

const addCar = async(car) => {
    const response = await fetch(url+'.json',{
        method: 'POST',
        body: JSON.stringify(car),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    const data = await response.json()
    console.log(data)

}

const updateCar = async(id,carr) => {
    alert(JSON.stringify(carr))
    const response = await fetch(url+'/'+id+'.json',{
        method: 'PUT',
        body: JSON.stringify(carr),
        headers: {
            'Content-Type': 'application/json'
        }

    })
    const data = await response.json()
    console.log(data)
    

}

const deleteCar = async (id) => {
    const response = await fetch(url+'/'+id+'.json',{
        method: 'DELETE',
})
}       

//getCar("Ford")
/*addCar({
    Motor: '2.4L',
    Modelo: 2019,
    Caja: 'Automatica',
    Traccion: '4X2',
    Nombre: 'Explorer',
    Combustion: 'Diesel' 

})*/
/*updateCar('-Mx2M60cqx0MukOw-hMr',{
    Motor: '2.4L',
    Modelo: 2019,
    Caja: 'Mecanica',
    Traccion: '4X4',
    Nombre: 'Explorer',
    Combustion: 'Gasolina' 

})*/
//deleteCar('-Mx2M60cqx0MukOw-hMr')
getData()
