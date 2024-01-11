import { Grid } from "@mui/material";
import { MainMenu } from "./MainMenu";
import { GameProvider } from "./providers/GameProvider";
import "./App.css";

function App() {
  return (
    <GameProvider>
      <Grid container display='flex' justifyContent='center'>
        <Grid item xs={12} sm={6}>
          <MainMenu />
        </Grid>
      </Grid>
    </GameProvider>
  );
}

export default App;
