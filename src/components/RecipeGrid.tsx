import Recipe from "./Recipe";

interface Props {
    cols: string
    colsd: string
    colst: string
}

const RecipeGrid = ({ cols, colsd, colst }: Props) => {
    return (
        <div className={`pl-10 pr-10 grid ${colsd} ${colst} ${cols} place-items-center gap-4`}>
            <Recipe />
            <Recipe />
            <Recipe />
            <Recipe />
            <Recipe />
            <Recipe />
            <Recipe />
            <Recipe />
            <Recipe />
            <Recipe />
            <Recipe />
            <Recipe />
        </div>
    );
}

export default RecipeGrid;