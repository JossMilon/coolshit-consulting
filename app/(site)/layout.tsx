import "../globals.css";
import { Inter } from "next/font/google";
// import Menu from "../(site)/components/menu";
import { getPages } from "@/sanity/sanity-utils";
import { Page } from "@/types/Page";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "La Mile",
  description: "Cool shit consulting all day long",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pages = await getPages();
  console.log(pages);
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="max-w-3xl mx-auto py-5">
          <header>
            <nav className="flex items-center justify-between">
              <Link
                href="/"
                className="font-bold text-lg bg-gradient-to-r from-orange-400 to-purple-600 bg-clip-text text-transparent"
              >
                Coolshit consulting
              </Link>
              <div>
                {pages.map((page: Page) => {
                  return (
                    <Link
                      key={page._id}
                      href={`/${page.slug}`}
                      className="font-bold text-lg ml-5"
                    >
                      {page.slug}
                    </Link>
                  );
                })}
              </div>
            </nav>
          </header>
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
