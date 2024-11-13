import "@/app/content.css";
import "highlight.js/styles/atom-one-dark.min.css";

export default function ModalLayout({ children }: { children: React.ReactNode }) {
    return (
        <section className="content">
            {children}
        </section>
    )
}