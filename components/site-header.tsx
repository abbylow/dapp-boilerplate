"use client"

import { Menu } from 'lucide-react'
import { VisuallyHidden } from '@radix-ui/react-visually-hidden'
import Link from 'next/link'
import { useState } from 'react'

import { Icons } from '@/components/icons'
import { ConnectBtn } from '@/components/thirdweb/connect-btn'
import { Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { APP_HOMEPAGE_URL } from '@/const/links'


export function Header() {
  const [mobileNavOpen, setMobileNavOpen] = useState<boolean>(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-20 max-w-screen-2xl items-center justify-between gap-4">
        <div className="flex items-center justify-start md:gap-6 gap-2">
          {/* mobile menu */}
          <Sheet open={mobileNavOpen} onOpenChange={setMobileNavOpen}>
            <SheetTrigger className="md:hidden block">
              <Menu className="h-6 w-6" />
            </SheetTrigger>
            <VisuallyHidden asChild>
              <SheetTitle>Mobile Menu</SheetTitle>
            </VisuallyHidden>

            <VisuallyHidden asChild>
              <SheetDescription>
                This is a menu for mobile
              </SheetDescription>
            </VisuallyHidden>
            <SheetContent side="left" className='flex flex-col'>
              <Link
                href={APP_HOMEPAGE_URL}
                className="flex items-center space-x-2"
                onClick={() => setMobileNavOpen(false)}
              >
                <Icons.logo className="w-20 px-2" />
              </Link>

              <ConnectBtn />
            </SheetContent>
          </Sheet>
          {/* end of mobile menu */}

          <Link href={APP_HOMEPAGE_URL} className="flex items-center space-x-2">
            <Icons.logo className="w-20 px-2" />
          </Link>
        </div>
        <div className="flex items-center justify-end gap-4">
          <div className="md:block hidden">
            <ConnectBtn />
          </div>
        </div>
      </div>
    </header >
  )
}