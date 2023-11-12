import { Card, CardContent, Grid, Typography } from "@mui/material";
import { DetailPokemon } from "../interfaces/pokemon.interfaces";
import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import Paper from '@mui/material/Paper';

const PokemonBasicInfo = ({ pokemon }: { pokemon: DetailPokemon }) => {
  return (
    <Card>
      <CardContent>
        <TableContainer component={Paper} sx={{ backgroundColor: '#f0f0f0' }}>
          <Table size="small">
            <TableBody>
              <TableRow>
                <TableCell component="th" scope="row">
                  Height
                </TableCell>
                <TableCell align="right">{pokemon.height}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" scope="row">
                  Weight
                </TableCell>
                <TableCell align="right">{pokemon.weight}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" scope="row">
                  Types
                </TableCell>
                <TableCell align="right">
                  {pokemon.types.map((type) => type.type.name).join(", ")}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" scope="row">
                  Abilities
                </TableCell>
                <TableCell align="right">
                  {pokemon.abilities.map((ability) => ability.ability.name).join(", ")}
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </CardContent>
    </Card>
  );
};

export default PokemonBasicInfo;
