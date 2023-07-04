import RecipeGrid from "../components/RecipeGrid";

const RecipesPage = () => {
    return (
        <div className="pt-20">
            <RecipeGrid cols={"grid-cols-1"} colsd={"xl:grid-cols-6"} colst={"md:grid-cols-4"} />
        </div>
    );
}

export default RecipesPage;