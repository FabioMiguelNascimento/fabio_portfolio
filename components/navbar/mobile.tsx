import { Link } from "@/i18n/routing"
import { cn } from "@/lib/utils"
import { Menu01FreeIcons } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"
import Image from "next/image"
import { useState } from "react"
import { Button } from "../ui/button"
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet"
import { NavbarItem } from "./navbar"

type MobileNavbarProps = {
    items: NavbarItem[]
    menuLabel: string
}

export default function MobileNavbar({ items, menuLabel }: MobileNavbarProps) {
    const [open, setOpen] = useState(false)

    return (
        <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
                    <HugeiconsIcon icon={Menu01FreeIcons} size={22} />
            </SheetTrigger>
            <SheetContent side="right" className="gap-10 px-6 py-12 sm:px-10">
                <nav className="flex h-full flex-col justify-between gap-10">
                    <div className="flex flex-col gap-2">
                        {items.map((item, index) => {
                            const key = item.href ?? item.name ?? item.srLabel ?? `action-${index}`
                            const label = item.name ?? item.srLabel ?? ""
                            const ariaLabel = item.srLabel ?? item.name ?? "Navigation action"
                            const hasLabel = label.length > 0
                            const iconSize = hasLabel ? 32 : 36
                            const icon = item.icon
                                ? typeof item.icon === "string"
                                    ? (
                                        <Image
                                            src={item.icon}
                                            width={iconSize}
                                            height={iconSize}
                                            alt=""
                                            className={cn(
                                                "shrink-0 rounded-full object-cover",
                                                hasLabel ? "size-8" : "size-9"
                                            )}
                                        />
                                    )
                                    : (
                                        <HugeiconsIcon icon={item.icon} size={iconSize} />
                                    )
                                : null

                            const buttonClass = cn(
                                "flex w-full items-center gap-4 rounded-xl px-5 py-4 text-lg font-semibold transition-colors",
                                hasLabel ? "justify-start text-left" : "justify-center"
                            )

                            const handleSelect = () => {
                                item.onClick?.()
                                setOpen(false)
                            }

                            const content = (
                                <>
                                    {icon}
                                    {hasLabel && <span className="leading-tight">{label}</span>}
                                </>
                            )

                            if (item.href) {
                                return (
                                    <Button
                                        asChild
                                        key={key}
                                        variant="ghost"
                                        size="lg"
                                        className={buttonClass}
                                        onClick={handleSelect}
                                        aria-label={ariaLabel}
                                    >
                                        <Link href={item.href} className="flex w-full items-center gap-4">
                                            {content}
                                        </Link>
                                    </Button>
                                )
                            }

                            return (
                                <Button
                                    key={key}
                                    variant="ghost"
                                    size="lg"
                                    onClick={handleSelect}
                                    aria-label={ariaLabel}
                                    className={buttonClass}
                                >
                                    {content}
                                </Button>
                            )
                        })}
                    </div>
                </nav>
            </SheetContent>
        </Sheet>
    )
}