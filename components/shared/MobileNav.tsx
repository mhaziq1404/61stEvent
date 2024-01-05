import React from 'react'

import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import Image from 'next/image'
import { Separator } from "@/components/ui/separator"
import NavItems from './NavItems'

  

export const MobileNav = () => {
  return (
    <nav className='md:hidden'>
        <Sheet>
            <SheetTrigger className='align-middle'>
                <Image src="/assets/icons/menu.svg" alt='menu' className='cursor-pointer' width={24} height={24}></Image>
            </SheetTrigger>
                <SheetContent className='flex flex-col bg-white md:hidden gap-6'>
                    <Image src="/assets/images/logo.svg" alt='logo' width={128} height={38}></Image>
                    <Separator className='border border-gray-50' />
                    <NavItems></NavItems>
                </SheetContent>
        </Sheet>
    </nav>
  )
}
