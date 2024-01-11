import { Box, Grid } from "@mui/material";
import { GameCard } from "./GameCard";
import { NewGameButton } from "./NewGameButton";
import { useContext } from "react";
import { GameContext } from "./providers/GameProvider";

export function SelectMenu() {
  const { games, addGame } = useContext(GameContext);

  return (
    <>
      {games.map((e) => (
        <Grid item key={e.title}>
          <GameCard game={e} />
        </Grid>
      ))}
      <Grid item md={12} m={2}>
        <Box width={"100%"}>
          <NewGameButton onDone={(newGame) => addGame(newGame)} />
        </Box>
      </Grid>
    </>
  );
}
