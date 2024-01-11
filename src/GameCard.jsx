import { PlayCircle } from "@mui/icons-material";
import { Box, Card, IconButton, Typography } from "@mui/material";
import { useContext } from "react";
import { GameContext } from "./providers/GameProvider";

export function GameCard({ game }) {
  const { title, description, names } = game;
  const { playGame } = useContext(GameContext);

  return (
    <Card style={{ marginBottom: "1em" }}>
      <Box display="flex" flexDirection="row" justifyContent="center">
        <Box style={{ width: "100%", margin: "3em" }}>
          <Typography>{title}</Typography>
          <Typography>{description}</Typography>
          <Typography>{`${names.length} Names`}</Typography>
        </Box>
        <Box style={{ margin: "3em" }}>
          <IconButton onClick={() => playGame(game)}>
            <PlayCircle fontSize="large" color="success" />
          </IconButton>
        </Box>
      </Box>
    </Card>
  );
}
