const app=Vue.createApp({
data(){
return{
   frutas:[
                { nombre:'Manzana Roja',cantidad:5,precio:5,imagen:'https://www.smartnfinal.com.mx/wp-content/uploads/2016/08/MANZNA-ROJA.jpg'},
                { nombre:'Pepino', cantidad:10,precio:10,imagen:'https://www.recetasnestlecam.com/sites/default/files/2022-04/que-es-el-pepino.jpg'},
             ],
     nuevaFruta: {
      nombre: '',
      cantidad: 0,
      precio: 0,
      imagen:''
    }
}
},
methods:{

 agregarFruta() {

  if (
    this.nuevaFruta.nombre.trim() === '' ||
    this.nuevaFruta.cantidad <= 0 ||
    this.nuevaFruta.precio < 0
  ) {
    alert('❌ Datos inválidos. Revisa nombre, cantidad y precio.')
    return
  }

  this.frutas.push({
    nombre: this.nuevaFruta.nombre,
    cantidad: this.nuevaFruta.cantidad,
    precio: this.nuevaFruta.precio,
    imagen: this.nuevaFruta.imagen || ''
  })


  this.nuevaFruta.nombre = ''
  this.nuevaFruta.cantidad = 0
  this.nuevaFruta.precio = 0
}

},
computed:{
    
    cuantasFrutas() {
      return this.frutas.reduce((total, frutas) => {
        return total + frutas.cantidad
      }, 0)
    },
    
  subtotal() {
    return this.frutas.reduce((total, fruta) => {
      return total + (fruta.cantidad * fruta.precio)
    }, 0)
  },
  iva(){
    return this.subtotal*0.16
  },
  total(){
    return this.iva + this.subtotal
  }
  
}
});
const app1=app.mount('#componente')