import { Html, Head, Main, NextScript } from 'next/document';

import { preloadFonts } from '../utils/fonts';

const preloadFontLinks = preloadFonts(['Inter'], ['Regular', 'Bold']);

const Document = () => {
    return (
        <Html>
            <Head>{preloadFontLinks}</Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
};

export default Document;
