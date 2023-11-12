import { Card, CardContent, Grid, Typography, styled } from "@mui/material";
import { DetailPokemon, PokemonStat } from "../interfaces/pokemon.interfaces";

const VerticalSlider = styled("input")({
  WebkitAppearance: 'slider-vertical',
  width: '5px',
  height: '150px',
});

const PokemonStats = ({ pokemon }: { pokemon: DetailPokemon | null }) => {
  const maxStats: { [key: string]: number } = {
    hp: 255,
    attack: 190,
    defense: 190,
    'special-attack': 190,
    'special-defense': 190,
    speed: 190,
  };

  // Find the maximum stat value from the provided stats
  const maxStat = pokemon
    ? pokemon.stats.reduce(
        (max, current) =>
          current.base_stat > max ? current.base_stat : max,
        0
      )
    : 100; // Default to 100 if there's no Pokemon data

  return (
    <Card>
      <CardContent>
        <Grid container alignItems="center" justifyContent="center">
          {pokemon ? (
            pokemon.stats.map((stat, index) => (
              <Grid item key={index} sx={{ margin: '5px', width: '120px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Typography variant="body2" align="center">
                  {stat.stat.name}
                </Typography>
                <VerticalSlider
                  type="range"
                  value={stat.base_stat}
                  readOnly
                  aria-label={stat.stat.name}
                  min={0}
                  max={maxStats[stat.stat.name.toLowerCase()]}
                />
                <Typography variant="caption">{stat.base_stat}</Typography>
              </Grid>
            ))
          ) : (
            <Typography variant="body1">No stats available</Typography>
          )}
        </Grid>
      </CardContent>
    </Card>
  );
};

export default PokemonStats;
