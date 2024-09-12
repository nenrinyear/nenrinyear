export default function Certificates() {
    return (
        <div>
            <h2
                id="certificates"
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
                    href="#certificates"
                    className="
                        text-3xl
                        font-bold
                        mt-4
                        mb-4
                        pb-2
                    "
                >
                    Certificates
                </a>
            </h2>
            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr>
                            <th>取得年月</th>
                            <th>Certificate</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>2022/05</td>
                            <td>基本情報技術者試験 合格</td>
                        </tr>
                        <tr>
                            <td>2023/07</td>
                            <td>応用情報技術者試験 合格</td>
                        </tr>
                        <tr>
                            <td>2024/07</td>
                            <td>情報処理安全確保支援士試験 合格</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}
