import "@/app/content.css";

export default function ModalLayout({ children }: { children: React.ReactNode }) {
    return (
        <section className="content">
            {children}
        </section>
    )
}