import StaticRating from "@/components/rating";

export default function SkillList() {
    return (
        <div>
            <h2
                id="skills"
                className="
                    text-3xl
                    font-bold
                    mb-4
                    pt-[64px]
                    pb-2
                    border-b-2
                    border-gray-300
                "
            >
                <a
                    href="#skills"
                    className="
                        text-3xl
                        font-bold
                        mt-4
                        mb-4
                        pb-2
                    "
                >
                    Skills
                </a>
            </h2>
            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Technology</th>
                            <th>できる度</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>JavaScript</td>
                            <td><StaticRating name="js" rate={4} /></td>
                        </tr>
                        <tr>
                            <td>TypeScript</td>
                            <td><StaticRating name="ts" rate={3} /></td>
                        </tr>
                        <tr>
                            <td>React</td>
                            <td><StaticRating name="react" rate={3} /></td>
                        </tr>
                        <tr>
                            <td>Next.js</td>
                            <td><StaticRating name="nextjs" rate={4} /></td>
                        </tr>
                        <tr>
                            <td>PHP</td>
                            <td><StaticRating name="php" rate={3} /></td>
                        </tr>
                        <tr>
                            <td>Rust</td>
                            <td><StaticRating name="rust" rate={1} /></td>
                        </tr>
                    </tbody>
                </table>
                <p className="text-sm mt-2 text-gray-500 dark:text-gray-400">
                    できる度は1: 書いたことある程度, 5: 人に教えられる程度 です
                </p>
            </div>
        </div>
    )
}