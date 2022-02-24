export const preloadFont = (font: string, fontTypes: string[]) => {
    return fontTypes.map((type) => {
        return (
            <link
                key={font + type}
                rel='preload'
                as='font'
                crossOrigin=''
                href={`/fonts/${font}/${font}-${type}.ttf`}
            />
        );
    });
};

export const preloadFonts = (fonts: string[], fontTypes: string[]) => {
    return fonts
        .map((font) => {
            return preloadFont(font, fontTypes);
        })
        .flat();
};
