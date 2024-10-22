import Layout from '@theme/Layout'
import firstContributorsList from '@site/src/modules/firstContributorsList'

export default function Home(): JSX.Element {
    return (
        <Layout
            title="Community Heroes"
            description="Simple yet powerful template language for Go"
        >
            <main className="container community">
                <h1>People Who Help Shape Textwire ❤️</h1>

                <p>
                    We owe a huge thanks to the incredible members of our community
                    who have helped shape Textwire. Your feedback, ideas, and support
                    have been invaluable. Thank you for being a part of our journey!
                </p>

                <p>
                    This version emphasizes the contributors’ role in shaping
                    Textwire and acknowledges their importance in the project’s
                    growth.
                </p>

                <h2>First People to Contribute to Textwire</h2>

                <div className="contributors">
                    {firstContributorsList.map(({ img, name }) => (
                        <a
                            href={`https://github.com/${name}`}
                            key={name}
                            className="contributor"
                            target="_blank"
                        >
                            <img src={img} alt={name} />
                            <p>{name}</p>
                        </a>
                    ))}
                </div>
            </main>
        </Layout>
    )
}
