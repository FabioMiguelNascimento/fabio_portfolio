import { getTranslations } from "next-intl/server";
import { FiMapPin } from "react-icons/fi";

export default async function About() {
  const t = await getTranslations("about");

  return (
    <div className="
      relative w-full max-w-none bg-[#fff9c4] dark:bg-amber-900/30 p-6 shadow-sm rotate-0 border-t border-stone-200 dark:border-amber-700/30
      md:max-w-xs md:mx-auto md:rotate-2 md:shadow-lg md:border md:rounded-sm md:z-10 md:mt-12
      flex flex-col min-h-[220px]
    ">
      <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-32 h-8 bg-white/40 dark:bg-amber-800/20 backdrop-blur-[2px] shadow-sm rotate-1 hidden md:block"></div>

      <div className="absolute -top-20 -right-16 hidden md:block w-32 h-32 pointer-events-none rotate-12">
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
           <path 
             d="M80 10 C 70 30, 90 60, 20 80" 
             className="stroke-stone-800 dark:stroke-amber-200"
             strokeWidth="3"
             strokeLinecap="round" 
             strokeDasharray="6 3"
           />
           <path 
             d="M25 70 L 15 82 L 35 85" 
             className="stroke-stone-800 dark:stroke-amber-200"
             strokeWidth="3"
             strokeLinecap="round" 
             strokeLinejoin="round"
           />
        </svg>
        
        <span className="absolute top-0 right-4 font-handwriting text-stone-700 dark:text-amber-200 text-sm -rotate-12 w-max font-bold">
           {t("annotation")}
        </span>
      </div>

      <div className="flex-1">
        <h3 className="font-handwriting text-2xl text-stone-800 dark:text-amber-100 mb-4 font-bold">{t("title")}</h3>

        <p className="text-stone-700 dark:text-amber-100/90 leading-relaxed font-mono text-sm">
          {t.rich("description", {
            strong: (chunks: React.ReactNode) => <strong>{chunks}</strong>,
            br: () => <br />,
          })}
        </p>
      </div>

      <div className="mt-4 pt-3 border-t-2 border-dotted border-stone-800/10 dark:border-amber-600/20 flex items-center justify-between text-stone-600 dark:text-amber-200/80">
        <div className="flex items-center gap-1.5 text-xs">
          <FiMapPin className="w-3.5 h-3.5" />
          <span>Taquara, RS</span>
        </div>
      </div>
    </div>
  );
}
