"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
    const path = usePathname();

    return (
        <header>
            <div className="main-container inner">
                <Link href="/">
                    <img src="logo.png" alt="logo" width={132} height={40} />
                </Link>
                <nav>
                    <Link href="/" className={cn("nav-link", {
                        "is-active": path === "/",
                        'is-home': true,
                    })}>
                        Home
                    </Link>
                    <p className="nav-link">Search</p>
                    <Link href="/coins" className={cn("nav-link", {
                        "is-active": path === "/coins",
                    })}>
                        Coins
                    </Link>
                </nav>
            </div>
        </header>
    );
};

export default Header;