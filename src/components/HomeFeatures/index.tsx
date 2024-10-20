import Feature from '@site/src/components/HomeFeatures/Feature'
import featureList from '@site/src/modules/featureList'

export default function HomepageFeatures(): JSX.Element {
    return (
        <section className="features">
            <div className="container">
                <div className="row">
                    {featureList.map((props, idx) => (
                        <Feature key={idx} {...props} />
                    ))}
                </div>
            </div>
        </section>
    )
}
