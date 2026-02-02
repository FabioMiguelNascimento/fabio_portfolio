import { getTranslations } from "next-intl/server"
import StampsHeaderPopover from './stamps-header-popover'

export default async function StampsHeader() {
    const t = await getTranslations('stamps')
    
    return (
        <header className="relative">
            <StampsHeaderPopover
                labelKey="header.tooltip.label"
                desktopKey="header.tooltip.desktop"
                mobileKey="header.tooltip.mobile"
            />

            <h2 className="text-[3.5rem] uppercase font-mono">
              {t("header.title")}
            </h2>
            <span className="text-1xl">{t("header.subtitle")}</span>
        </header>
    )
}