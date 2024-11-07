import "@/app/content.css";

export default function PostLayout({ children }: { children: React.ReactNode }) {
    return (
        <section className="content">
            {children}
        </section>
    )
}