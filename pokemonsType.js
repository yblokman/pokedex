const pokemons = [
  { nome: 'Bulbasaur', id: '1', tipo1: 'Grama', tipo2: 'Venenoso' },
  { nome: 'Ivysaur', id: '2', tipo1: 'Grama', tipo2: 'Venenoso' },
  { nome: 'Venusaur', id: '3', tipo1: 'Grama', tipo2: 'Venenoso' },
  { nome: 'Charmander', id: '4', tipo1: 'Fogo' },
  { nome: 'Charmeleon', id: '5', tipo1: 'Fogo' },
  { nome: 'Charizard', id: '6', tipo1: 'Fogo', tipo2: 'Voador' },
  { nome: 'Squirtle', id: '7', tipo1: 'Água' },
  { nome: 'Wartortle', id: '8', tipo1: 'Água' },
  { nome: 'Blastoise', id: '9', tipo1: 'Água' },
  { nome: 'Caterpie', id: '10', tipo1: 'Inseto' },
  { nome: 'Metapod', id: '11', tipo1: 'Inseto' },
  { nome: 'Butterfree', id: '12', tipo1: 'Inseto', tipo2: 'Voador' },
  { nome: 'Weedle', id: '13', tipo1: 'Inseto', tipo2: 'Venenoso' },
  { nome: 'Kakuna', id: '14', tipo1: 'Inseto', tipo2: 'Venenoso' },
  { nome: 'Beedrill', id: '15', tipo1: 'Inseto', tipo2: 'Venenoso' },
  { nome: 'Pidgey', id: '16', tipo1: 'Normal', tipo2: 'Voador' },
  { nome: 'Pidgeotto', id: '17', tipo1: 'Normal', tipo2: 'Voador' },
  { nome: 'Pidgeot', id: '18', tipo1: 'Normal', tipo2: 'Voador' },
  { nome: 'Ratata', id: '19', tipo1: 'Normal' },
  { nome: 'Raticate', id: '20', tipo1: 'Normal' },
  { nome: 'Spearow', id: '21', tipo1: 'Normal', tipo2: 'Voador' },
  { nome: 'Fearow', id: '22', tipo1: 'Normal', tipo2: 'Voador' },
  { nome: 'Ekans', id: '23', tipo1: 'Venenoso' },
  { nome: 'Arbok', id: '24', tipo1: 'Venenoso' },
  { nome: 'Pikachu', id: '25', tipo1: 'Elétrico' },
  { nome: 'Raichu', id: '26', tipo1: 'Elétrico' },
  { nome: 'Sandshrew', id: '27', tipo1: 'Terrestre' },
  { nome: 'Sandslash', id: '28', tipo1: 'Terrestre' },
  { nome: 'Nidoran♀', id: '29', tipo1: 'Venenoso' },
  { nome: 'Nidorina', id: '30', tipo1: 'Venenoso' },
  { nome: 'Nidoqueen', id: '31', tipo1: 'Venenoso', tipo2: 'Terrestre' },
  { nome: 'Nidoran♂', id: '32', tipo1: 'Venenoso' },
  { nome: 'Nidorino', id: '33', tipo1: 'Venenoso' },
  { nome: 'Nidoking', id: '34', tipo1: 'Venenoso', tipo2: 'Terrestre' },
  { nome: 'Clefairy', id: '35', tipo1: 'Fada' },
  { nome: 'Clefable', id: '36', tipo1: 'Fada' },
  { nome: 'Vulpix', id: '37', tipo1: 'Fogo' },
  { nome: 'Ninetales', id: '38', tipo1: 'Fogo' },
  { nome: 'Jigglypuff', id: '39', tipo1: 'Normal', tipo2: 'Fada' },
  { nome: 'Wigglytuff', id: '40', tipo1: 'Normal', tipo2: 'Fada' },
  { nome: 'Zubat', id: '41', tipo1: 'Venenoso', tipo2: 'Voador' },
  { nome: 'Golbat', id: '42', tipo1: 'Venenoso', tipo2: 'Voador' },
  { nome: 'Oddish', id: '43', tipo1: 'Grama', tipo2: 'Venenoso' },
  { nome: 'Gloom', id: '44', tipo1: 'Grama', tipo2: 'Venenoso' },
  { nome: 'Vileplume', id: '45', tipo1: 'Grama', tipo2: 'Venenoso' },
  { nome: 'Paras', id: '46', tipo1: 'Inseto', tipo2: 'Venenoso' },
  { nome: 'Parasect', id: '47', tipo1: 'Inseto', tipo2: 'Venenoso' },
  { nome: 'Venonat', id: '48', tipo1: 'Inseto', tipo2: 'Venenoso' },
  { nome: 'Venomoth', id: '49', tipo1: 'Inseto', tipo2: 'Venenoso' },
  { nome: 'Diglett', id: '50', tipo1: 'Terrestre' },
  // ... Outros Pokémon
];


const divPokemon = document.getElementById('pokemonImageContainer');
const divText = document.createElement('div')

const searchBtn = document.querySelector('#search')



searchBtn.addEventListener("click", function(e){

  divPokemon.innerHTML = ''
  divText.innerHTML = ''


  e.preventDefault()

  const inputPokemon = document.querySelector('#input')

  const searchPokemon = inputPokemon.value

  pokemons.forEach(pokemon => {
    if (pokemon.nome === searchPokemon) {
      const caminhoDaImagem = `assets/POKEMON/${pokemon.nome} - ${pokemon.id}.svg`;
      const caminhoDoTipo = `assets/TYPE/${pokemon.tipo1}.svg`;
                
      const imgElement = document.createElement('img');
      imgElement.src = caminhoDaImagem;
      imgElement.alt = pokemon.nome;
           
      const nomeElement = document.createElement('p')
      nomeElement.textContent = pokemon.nome
  
      const idElement = document.createElement('p')
      idElement.textContent = `id:${pokemon.id}`
  
      const tipoElement = document.createElement('img')
      tipoElement.src = caminhoDoTipo
      tipoElement.alt = pokemon.tipo1
      tipoElement.className = "typePokemon"
  
      divText.appendChild(nomeElement)
      divText.appendChild(idElement)
  
      divPokemon.appendChild(imgElement);
      divPokemon.appendChild(divText)
      divPokemon.appendChild(tipoElement)
    }

  });
  document.querySelector('#input').value = ''

})

