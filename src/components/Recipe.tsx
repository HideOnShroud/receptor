const Recipe = () => {
    return (
        <div className="text-dark block w-11/12 rounded-lg [box-shadow:_0_4px_4px_rgb(0_0_0_/_40%)] hover:scale-105 delay-50 ease-in-out overflow-hidden">
            <img src="https://thecozycook.com/wp-content/uploads/2022/04/Lasagna-Recipe-f.jpg" alt="" />
            <div className="grid grid-rows-2 place-items-center mb-2">
                <h1 className="text-xl">Name</h1>
                <div className="grid grid-rows-2 grid-cols-2 gap-x-14">
                    <p>Protein 30</p>
                    <p>Carbs 100</p>
                    <p>Fats 10</p>
                    <p>Cals 140</p>
                </div>
            </div>
        </div>
    );
}

export default Recipe;