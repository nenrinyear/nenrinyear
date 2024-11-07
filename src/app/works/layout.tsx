import "@/app/content.css";

export default function WorkLayout({ children }: { children: React.ReactNode }) {
    return (
        <section className="content">
            {children}
        </section>
    )
}