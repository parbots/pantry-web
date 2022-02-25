export type Ingredient = {
    id: string;
    name: string;
    snippet: string;
};

export type Shelf = {
    id: string;
    name: string;
    ingredients: [Ingredient[], Function, Function];
};
