import 'styles/fonts.css';
import 'styles/globals.css';
import 'styles/prism.css';

import type { AppProps } from 'next/app';

const App = ({ Component, pageProps }: AppProps) => {
    return <Component {...pageProps} />;
};

export default App;
