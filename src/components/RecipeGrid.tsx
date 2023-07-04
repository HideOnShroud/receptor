import Recipe from "./Recipe";

interface Props {
    cols: number
}

const RecipeGrid = ({ cols }: Props) => {
    return (
        <div className={`pl-10 pr-10 grid grid-cols-${cols} place-items-center gap-4`}>
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