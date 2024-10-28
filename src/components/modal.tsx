
'use client';
import { useRouter } from "next/navigation";
import { MouseEventHandler, ReactNode, useCallback, useRef } from "react";

export default function Modal({ children }: { children: ReactNode }) {
    const overlay = useRef<HTMLDivElement>(null);
    const inner = useRef<HTMLDivElement>(null);
    const router = useRouter();

    const dismiss = () => {
        router.back();
    }

    const onClick: MouseEventHandler = (e) => {
        if (e.target === overlay.current || e.target === inner.current) {
            dismiss();
        }
    };

    return (
        <>
            <style global jsx>{`
            html, body {
                overflow: hidden;
            }
            `}</style>
            <div className="fixed w-full top-0 left-0 h-full flex items-center justify-center z-50">
                <div
                    ref={overlay}
                    className="fixed w-full top-0 left-0 h-full bg-black bg-opacity-50 z-10"
                    onClick={onClick}
                />
                <div
                    ref={inner}
                    className="relative w-full max-w-screen-md max-h-screen bg-white dark:bg-gray-800 rounded-lg shadow-lg m-4 z-50"
                    onClick={onClick}
                >
                    <button
                        className="absolute top-4 right-4 z-50"
                        onClick={dismiss}
                        title="閉じる"
                    >
                        <svg
                            version="1.1"
                            id="_x32_"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                            className="w-6 h-6"
                        >
                            <g>
                                <polygon fill="#4b4b4b" points="512,52.535 459.467,0.002 256.002,203.462 52.538,0.002 0,52.535 203.47,256.005 0,459.465 
                                    52.533,511.998 256.002,308.527 459.467,511.998 512,459.475 308.536,256.005"></polygon>
                            </g>
                        </svg>
                    </button>
                    <div className="relative z-10 w-full max-w-screen-lg max-h-[90vh] overflow-y-auto px-4 py-8">
                        {children}
                    </div>
                </div>
            </div>
        </>
    );
}
