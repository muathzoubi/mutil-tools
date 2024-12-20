import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import { Icons } from "@/components/icons"
import { MainNav } from "@/components/main-nav"

export function SiteHeader() {
  return (
    <header className="bg-background sticky top-0 z-40 w-full border-b">
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <MainNav items={siteConfig.mainNav} />
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-1">
            <Link
              href={siteConfig.links.signup}
            >
              <div
                className={buttonVariants({
                  size: "default",
                  variant: "default",
                })}
              >
                
                <span >Sign Up</span>
              </div>
            </Link>
            <Link
              href={siteConfig.links.login}
            >
              <div
                className={buttonVariants({
                  size: "icon",
                  variant: "ghost",
                })}
              >
                <Icons.user className="text-red-600 h-5 w-5 fill-current" />
                <span className="sr-only">Log in</span>
              </div>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}
