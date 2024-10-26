import { Suspense } from "react";

export default function ModalLayout({ children }: { children: React.ReactNode }) {
    return (
        <Suspense fallback="loading">
            {children}
        </Suspense>
    )
}