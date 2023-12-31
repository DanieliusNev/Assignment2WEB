import { Button, Container, Grid } from "@mui/material";
import PokemonList from "../components/PokemonList";
import usePokemons from "../hooks/usePokemons";
import { IndexedType } from "../interfaces/pokemon.interfaces";

const Home = () => {
  const {
    pokemons,
    hasMorePokemon,
    fetchNextPage,
    pokemonTypes,
    setSelectedType,
    selectedType,
    setPokemons,
  } = usePokemons();

  const handleSelectType = (type: IndexedType | null) => {
    if (type) {
      setSelectedType(type);
    } else {
      setPokemons([]);
      setSelectedType(null);
    }
  };

  return (
    <Container>
      <Grid container spacing={2} mt={1}>
        <Grid
          container
          item
          xs={12}
          sx={{ display: "flex", justifyContent: "center" }}
        >
          {pokemonTypes.map((type) => (
            <Button
              key={type.name}
              variant="contained"
              sx={{
                "&.MuiButton-contained": {
                  background: type.color,
                },
                m: 1,
              }}
              onClick={() => handleSelectType(type)}
            >
              {type.name}
            </Button>
          ))}
          <Button
            variant="contained"
            sx={{
              m: 1,
            }}
            onClick={() => handleSelectType(null)}
          >
            ALL
          </Button>
        </Grid>
        <Grid
          container
          item
          xs={12}
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <PokemonList pokemons={pokemons}></PokemonList>
          <Grid item>
            <Button
              variant="contained"
              disabled={!hasMorePokemon}
              onClick={fetchNextPage}
            >
              Load more Pokemon
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
