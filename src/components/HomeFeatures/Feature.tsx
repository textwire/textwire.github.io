import type { FeatureItem } from '@site/src/types'
import Heading from '@theme/Heading'

function Feature({ title, Svg, description }: FeatureItem) {
    return (
        <div className="col col--4 features__item">
            <div className="text--center">
                <Svg className="feature__svg" role="img" />
            </div>
            <div className="text--center padding-horiz--md">
                <Heading as="h3">{title}</Heading>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default Feature
