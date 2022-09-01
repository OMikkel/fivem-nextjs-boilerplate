import { ThemeProvider } from 'next-themes'
import '../styles/globals.css'

const MyApp = ({ Component, pageProps }) => (
    <ThemeProvider attribute="class" enableColorScheme={false}>
        <Component {...pageProps} />
    </ThemeProvider>
)

export default MyApp
