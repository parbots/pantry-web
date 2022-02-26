export type Ingredient = {
    id: string;
    name: string;
    description: string;
    snippet: string;
};

export type Shelf = {
    id: string;
    language: string;
    ingredients: Ingredient[];
};
