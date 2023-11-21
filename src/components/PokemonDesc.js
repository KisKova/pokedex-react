import React, { useState, useEffect } from 'react';
import {Link, useParams} from 'react-router-dom';

const PokemonDesc = () => {
    const { id } = useParams();
    const [pokemonData, setPokemonData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
                if (response.ok) {
                    const data = await response.json();
                    setPokemonData(data);
                } else {
                    throw new Error('Failed to fetch data');
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [id]);

    if (!pokemonData) {
        return <div>Loading...</div>;
    }

    return (
        <div className="pokemon-container">
            <h1>{pokemonData.name}</h1>
            <img
                src={pokemonData.sprites.front_default}
                alt={pokemonData.name}
                className="pokemon-image"
            />
            <div className="pokemon-detail">
                <h3>Abilities:</h3>
                <ul className="pokemon-list">
                    {pokemonData.abilities.map((ability, index) => (
                        <li key={index}>{ability.ability.name}</li>
                    ))}
                </ul>
                <h3>Types:</h3>
                <ul className="pokemon-list">
                    {pokemonData.types.map((type, index) => (
                        <li key={index}>{type.type.name}</li>
                    ))}
                </ul>
                <h3>Stats:</h3>
                <ul className="pokemon-list">
                    {pokemonData.stats.map((stat, index) => (
                        <li key={index}>
                            {stat.stat.name}: {stat.base_stat}
                        </li>
                    ))}
                </ul>
                <h3>Moves:</h3>
                <ul className="pokemon-list">
                    {pokemonData.moves.slice(0, 5).map((move, index) => (
                        <li key={index}>{move.move.name}</li>
                    ))}
                </ul>
            </div>
            <div className="button-container">
                <div>
                    <Link to="/">
                    <button>
                        « Back to PokéGrid
                    </button>
                        </Link>
                </div>
            </div>
        </div>
    );
};

export default PokemonDesc;