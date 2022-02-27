export type Ingredient = {
    id: string;
    name: string;
    description: string;
    language: string;
    snippet: string;
};

export type Shelf = {
    id: string;
    name: string;
    ingredients: Ingredient[];
};
