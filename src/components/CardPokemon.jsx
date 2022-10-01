import React from 'react'

const CardPokemon = ({pokemon}) => {

        /**
       *  Crear un componente, que despliegue la información ✅
       * imagen (sprites) ✅
       * name ✅
       * todos los types ✅
       * listado de todos los nombres de los moviemientos del pokemon
       */


    return (
        <article>
        <img src={pokemon?.sprites.other['official-artwork'].front_default}
            alt="" />

            <h2>{pokemon?.name}</h2>
            
            <ul>
            {pokemon?.types.map((type) => (
        <li key={type.type.name}>{type.type.name}</li>
            ))}
            </ul>
            <h3>Movements</h3>
            <ul>
            {pokemon?.moves.map((e) => (
                <li key={e.move.name}>{e.move.name}</li>
            ))}
            </ul>
        </article>
        );
    };

    export default CardPokemon;

