import Image from 'next/image';

export default function LogoX() {
    return (
        <a
            href="https://x.com/nenrin_yearring"
            target="_blank"
            rel="noopener noreferrer"
            className="
                link-primary
                hover:bg-gray-200
                dark:hover:bg-gray-700
                transition-colors
                rounded-lg
                p-1
            "
        >
            <Image
                width={20}
                height={20}
                src="/x-logo-black.png"
                alt="X"
                className="m-2 dark:hidden"
            />
            <Image
                width={20}
                height={20}
                src="/x-logo-white.png"
                alt="X"
                className="m-2 hidden dark:block"
            />
        </a>
    )
}
