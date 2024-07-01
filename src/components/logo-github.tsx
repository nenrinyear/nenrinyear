import Image from 'next/image';

export default function LogoGithub() { 
    return (
        <a
            href="https://github.com/nenrinyear"
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
                src="/github-mark.png"
                alt="GitHub"
                className="m-2 dark:hidden"
            />
            <Image
                width={20}
                height={20}
                src="/github-mark-white.png"
                alt="GitHub"
                className="m-2 hidden dark:block"
            />
        </a>
    );
}