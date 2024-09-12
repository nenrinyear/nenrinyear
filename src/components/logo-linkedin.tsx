import Image from 'next/image';

export default function LogoLinkedIn() {
    return (
        <a
            href="https://www.linkedin.com/in/nenrin-yearring/"
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
                src="/linkedin-black.png"
                alt="X"
                className="m-2 dark:hidden"
            />
            <Image
                width={20}
                height={20}
                src="/linkedin-white.png"
                alt="X"
                className="m-2 hidden dark:block"
            />
        </a>
    )
}
