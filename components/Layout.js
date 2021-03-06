import Head from "next/head";
import Link from "next/link";

const siteTitle = "r7kamura/nippo";

export default function Layout({ children }) {
  return (
    <>
      <header>
        <Head>
          <title>{siteTitle}</title>
        </Head>
        <nav>
          <p>
            <Link href="/">
              <a>{siteTitle}</a>
            </Link>
          </p>
        </nav>
      </header>
      <main>{children}</main>
      <footer>
        <nav>
          <ul>
            <li>
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
          </ul>
        </nav>
      </footer>
    </>
  );
}
