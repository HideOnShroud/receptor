import RecipeGrid from "../components/RecipeGrid";

const HomePage = () => {
    return (
        <div className="flex justify-center ">

            <div className="w-full md:w-10/12 pt-20">
                <RecipeGrid colsd={"xl:grid-cols-3"} cols={"grid-cols-1"} colst={"md:grid-cols-3"} />
            </div>
        </div>
    );
}

export default HomePage;