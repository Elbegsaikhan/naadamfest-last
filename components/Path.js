import Link from "next/link";

export default function Path(props) {
    return (
        <>
            <div className="path">
                <ul>
                    <Link href="/">
                        <a>
                            <li>Home</li>
                        </a>
                    </Link>
                    <li>{"|"}</li>
                    <Link
                        href={`/${props.name
                            .replace(/\s/g, "")
                            .trim()
                            .toLowerCase()}`}
                    >
                        <a>
                            <li>{props.name}</li>
                        </a>
                    </Link>
                </ul>

                <style jsx>{`
                    .path {
                        width: 100%;
                        //height: 30px;
                        background-color: #f9f4f3;
                        padding-top: 8px;
                        padding-bottom: 5px;
                    }

                    .path ul {
                        display: flex;
                        list-style: none;
                        margin-left: 170px;
                    }
                    .path ul a {
                        text-decoration: none;
                    }

                    .path ul li {
                        margin-right: 10px;
                        color: #737373;
                        word-break: break-all;
                        font-size: 0.9rem;
                        line-height: 1.8;
                        cursor: pointer;
                    }

                    @media (max-width: 1040px) {
                        .path ul {
                            margin-left: 0px;
                        }
                    }
                `}</style>
            </div>
        </>
    );
}
