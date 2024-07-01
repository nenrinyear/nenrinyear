import Image from 'next/image';
import Link from 'next/link';
import LogoGithub from './logo-github';
import LogoX from './logo-x';

export default function Footer() {
    return (
        <footer className="
            footer
            bg-gray-100
            dark:bg-gray-800
            text-gray-500
            dark:text-gray-400
            w-full
            mt-20
            p-10
        ">
            <aside>
                <Image
                    width={80}
                    height={80}
                    src="/nenrin_icon.jpg"
                    alt="nenrin"
                    className="
                        rounded-full
                        mt-4
                        mb-4
                    "
                />
                <p>
                    ねんりんです。Webまわりで生きてます
                </p>
            </aside>
            <nav>
                <h6 className="footer-title">
                    Links
                </h6>
                <div className="flex flex-row items-center justify-start">
                    <Link
                        href="/"
                        className="link-primary"
                    >
                        nenrin.me
                    </Link>
                    <LogoX />
                    <LogoGithub />
                </div>
            </nav>
        </footer>
    )
}