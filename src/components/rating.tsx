export default function StaticRating({
    rate,
    name,
}: {
    rate: number;
    name: string;
}) {
    
    return (
        <div className="rating">
            {[...Array(5)].map((_, i) => (
                <input key={i} type="radio" name={name} className="mask mask-star" disabled defaultChecked={rate >= i + 1} />
            ))}
        </div>
    );
}