import Grid from "@mui/material/Grid";
import useRecipes from "./hooks/useRecipes";
import RecipeCard from "./RecipeCard";

const Content = () => {
  const recipes = useRecipes();
  return (
    <Grid container spacing={2}>
      {recipes.map((recipe) => (
        <Grid item xs={12}>
          <RecipeCard
            name={recipe.name}
            url={recipe.url}
            image={recipe.image}
          />
        </Grid>
      ))}
    </Grid>
  );
};
export default Content;
