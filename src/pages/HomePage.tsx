import RecipeGrid from "../components/RecipeGrid";

const HomePage = () => {
    return (
        <div className="flex justify-center ">

            <div className="w-6/12 pt-20">
                <RecipeGrid cols={3} />
            </div>
        </div>
    );
}

export default HomePage;