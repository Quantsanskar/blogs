// pages/_app.js
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css';
import { BlogProvider } from '../context/BlogContext'; // Import BlogProvider
function MyApp({ Component, pageProps }) {
  return (
    <BlogProvider>
      <Component {...pageProps} />
    </BlogProvider>
  );
}

export default MyApp;
