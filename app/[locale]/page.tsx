import Hero from "@/components/hero/hero";
import Navbar from "@/components/navbar/navbar";
import Projects from "@/components/projects/projects";
import Stamps from "@/components/stamps/stamps";
import { routing } from "@/i18n/routing";
import { setRequestLocale } from "next-intl/server";

type Props = {
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function Home({ params }: Props) {
  const { locale } = await params;

  setRequestLocale(locale);

  return (
    <main>
      <Navbar />
      <main className="space-y-24 sm:space-y-8">
        <Hero />
        <Projects />
        <Stamps />

        <section id="contact" className="bg-slate-50 dark:bg-slate-900 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-semibold">Contato (temporário)</h2>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
            Placeholder de contato — o formulário real será implementado em breve.
          </p>
        </section>

        <footer id="site-footer" className="mt-8 border-t pt-6 text-center text-sm text-slate-600 dark:text-slate-400">
          <p>© {new Date().getFullYear()} — Footer temporário</p>
        </footer>
      </main>
    </main>
  );
}
