import "@/app/content.css";

export default function DetailLayout({ children }: { children: React.ReactNode }) {
    return (
        <section className="content">
            {children}
        </section>
    )
}