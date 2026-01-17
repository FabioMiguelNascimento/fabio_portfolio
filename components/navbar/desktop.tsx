import { Link } from "@/i18n/routing"
import { HugeiconsIcon } from "@hugeicons/react"
import Image from "next/image"
import { Button } from "../ui/button"
import { NavbarItem } from "./navbar"

type DesktopNavbarProps = {
    links: NavbarItem[]
    actions: NavbarItem[]
}

export default function DesktopNavbar({ links, actions }: DesktopNavbarProps) {
    return (
        <div className="flex items-center gap-3">
            <nav className="flex items-center gap-1">
                {links.map((item, index) => (
                    item.onClick ? (
                        <Button
                            key={item.name ?? `link-${index}`}
                            variant="ghost"
                            size="sm"
                            className="text-sm font-medium"
                            onClick={item.onClick}
                        >
                            {item.name}
                        </Button>
                    ) : item.href ? (
                        <Button
                            key={item.href}
                            asChild
                            variant="ghost"
                            size="sm"
                            className="text-sm font-medium"
                        >
                            <Link href={item.href ?? "#"}>{item.name}</Link>
                        </Button>
                    ) : (
                        <Button
                            key={item.name ?? `link-${index}`}
                            variant="ghost"
                            size="sm"
                            className="text-sm font-medium"
                            onClick={item.onClick}
                        >
                            {item.name}
                        </Button>
                    )
                ))}
            </nav>
            <div className="flex items-center gap-1">
                {actions.map((item, index) => (
                    item.href ? (
                        <Button
                            key={item.href ?? `action-link-${index}`}
                            asChild
                            variant="ghost"
                            size={item.name ? "sm" : "icon"}
                            aria-label={item.srLabel ?? item.name ?? "Navigation action"}
                            title={item.name ?? item.srLabel}
                            className={item.name ? "font-medium" : ""}
                        >
                            <Link href={item.href}>
                                {item.icon &&
                                    (typeof item.icon === "string" ? (
                                        <Image
                                            src={item.icon}
                                            width={24}
                                            height={24}
                                            alt=""
                                            className="size-5 shrink-0 rounded-full object-cover"
                                        />
                                    ) : (
                                        <HugeiconsIcon icon={item.icon} size={22} />
                                    ))}
                                {item.name}
                            </Link>
                        </Button>
                    ) : (
                        <Button
                            key={item.name ?? item.srLabel ?? `action-${index}`}
                            variant="ghost"
                            size={item.name ? "sm" : "icon"}
                            onClick={item.onClick}
                            aria-label={item.srLabel ?? item.name ?? "Navigation action"}
                            title={item.name ?? item.srLabel}
                            className={item.name ? "font-medium" : ""}
                        >
                            {item.icon &&
                                (typeof item.icon === "string" ? (
                                    <Image
                                        src={item.icon}
                                        width={24}
                                        height={24}
                                        alt=""
                                        className="size-5 shrink-0 rounded-full object-cover"
                                    />
                                ) : (
                                    <HugeiconsIcon icon={item.icon} size={22} />
                                ))}
                            {item.name}
                        </Button>
                    )
                ))}
            </div>
        </div>
    )
}