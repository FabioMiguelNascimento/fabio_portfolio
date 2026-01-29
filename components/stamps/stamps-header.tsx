import { getTranslations } from "next-intl/server"

export default async function StampsHeader() {
    const t = await getTranslations('stamps')
    
    return (
        <header>
            <h2 className="text-[3.5rem] uppercase font-mono">{t("header.title")}</h2>
            <span className="text-1xl">{t("header.subtitle")}</span>
        </header>
    )
}