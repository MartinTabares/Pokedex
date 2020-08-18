new Vue({
    el: '#app',
    data: {
        ingresaPokemon: '',
    },
    methods: {
        mostrar: function () {
            console.log(this.ingresaPokemon);
            fetch('https://pokeapi.co/api/v2/pokemon/' + this.ingresaPokemon)
            .then(res => res.json())
            .then(data => {
                if (this.ingresaPokemon === data.name) {
                    pokemon.innerHTML = `<img src="${data.sprites.front_default}" width="200px">`
                }
            }).catch(Error =>  pokemon.innerHTML = 'Pokemon no encontrado')
        }
    }
})
//${data.name} <br/> pokemon tipo ${data.types[0].type.name} </img>
//fetch('https://pokeapi.co/api/v2/pokemon/' + Math.floor((Math.random() * 100)))
  //          .then(res => res.json())
    //        .then(data => {
      //          console.log(data.types[0].type.name);
        //        if () {
          //          pokemon.innerHTML = `<img src="${data.sprites.front_default}">` 
            //    } else {
                    
              //  }
                
            //})