"use client"

import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { useIsMobile } from '@/hooks/use-mobile.hook'
import { useTranslations } from 'next-intl'
import { FiInfo, FiZap } from 'react-icons/fi'
import StampsCycler from './stamps-cycler'

type Props = {
  labelKey: string
  desktopKey: string
  mobileKey: string
}

export default function StampsHeaderPopover({ labelKey, desktopKey, mobileKey }: Props) {
  const isMobile = useIsMobile()
  const t = useTranslations('stamps')

  const key = isMobile ? mobileKey : desktopKey

  const node = t.rich(key, {
    icon: () => <FiZap className="inline-block w-4 h-4 ml-1 text-emerald-400" />,
    br: () => <br />,
    cycler: () => <StampsCycler className="inline-flex ml-1" />,
  })


  return (
    <div className="absolute top-0 right-0 p-2">
      <Popover>
        <PopoverTrigger asChild>
          <button aria-label={t(labelKey)} className="p-1 rounded">
            <FiInfo className="w-5 h-5 text-foreground/80" />
          </button>
        </PopoverTrigger>
        <PopoverContent sideOffset={isMobile ? 12 : 16} side={isMobile ? "bottom" : "left"} align="start" className="max-w-[18rem] p-3">
          {node}
        </PopoverContent> 
      </Popover>
    </div>
  )
} 
