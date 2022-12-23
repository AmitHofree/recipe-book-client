import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Content from "./Content";

const App = () => {
  return (
    <Container maxWidth="md">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" gutterBottom>
          Recipe Book
        </Typography>
        <Content />
      </Box>
    </Container>
  );
};

export default App;
