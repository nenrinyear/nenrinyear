import Link from "next/link";

export default function NavBar() {
    return (
        <header
            className="
                navbar
                sticky
                top-0
                z-50
                flex
                h-16
                w-full
                bg-base-100
                bg-opacity-90
                backdrop-blur
                transition-shadow
                duration-100
                shadow-sm
            "
        >
            <div className="flex-1">
                <Link className="btn btn-ghost text-xl" href="/">
                    nenrin.me
                </Link>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    <li>
                        <Link href="/#about">
                            About
                        </Link>
                    </li>
                    <li>
                        <Link href="/#skills">
                            Skills
                        </Link>
                    </li>
                </ul>
            </div>
        </header>
    )
}