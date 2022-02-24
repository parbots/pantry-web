import { Html, Head, Main, NextScript } from 'next/document';

import { preloadFont } from '../utils/fonts';

export default function Document() {
    return (
        <Html>
            <Head>{preloadFont('Inter', ['Regular', 'Bold'])}</Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
