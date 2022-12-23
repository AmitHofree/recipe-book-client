import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

interface Props {
  name: string;
  url: string;
  image: string;
}

const RecipeCard = ({ name, url, image }: Props) => {
  return (
    <Card>
      <CardActionArea
        sx={{ display: "flex", justifyContent: "start" }}
        target="_blank"
        rel="noreferrer"
        href={url}
      >
        <CardMedia
          component="img"
          sx={{ width: 150 }}
          image={image}
          alt={name}
        />
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <CardContent sx={{ flex: "1 0 auto" }}>
            <Typography component="div" variant="h5">
              {name}
            </Typography>
          </CardContent>
        </Box>
        <Box
          sx={{
            marginLeft: "auto",
            paddingRight: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "Center",
          }}
        >
          <KeyboardArrowRightIcon />
        </Box>
      </CardActionArea>
    </Card>
  );
};
export default RecipeCard;
