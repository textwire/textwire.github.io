import React from 'react'
import CodeBlock from '@theme/CodeBlock'
import Tabs from '@theme/Tabs'
import TabItem from '@theme/TabItem'
import { homeViewTw } from '@site/src/modules/textwireCodeExamples/homeViewTw'
import { bookComponentTw } from '@site/src/modules/textwireCodeExamples/bookComponentTw'
import { layoutBaseTw } from '@site/src/modules/textwireCodeExamples/layoutBaseTw'
import { dirStructure } from '@site/src/modules/textwireCodeExamples/dirStructure'
import { goCode } from '@site/src/modules/textwireCodeExamples/goCode'

export default function HomepageFeatures(): React.ReactElement {
    return (
        <section className="home-section introduction">
            <div className="container">
                <Tabs>
                    <TabItem value="home" label="Home page" default>
                        <CodeBlock language="textwire" showLineNumbers={true} title="templates/home.tw">
                            {homeViewTw}
                        </CodeBlock>
                    </TabItem>
                    <TabItem value="base" label="Layout">
                        <CodeBlock language="textwire" showLineNumbers={true} title="templates/layouts/base.tw">
                            {layoutBaseTw}
                        </CodeBlock>
                    </TabItem>
                    <TabItem value="book" label="Component">
                        <CodeBlock language="textwire" showLineNumbers={true} title="templates/components/book.tw">
                            {bookComponentTw}
                        </CodeBlock>
                    </TabItem>
                    <TabItem value="structure" label="Structure">
                        <CodeBlock>{dirStructure}</CodeBlock>
                    </TabItem>
                    <TabItem value="gocode" label="Go Code">
                        <CodeBlock language="go" showLineNumbers={true} title="cmd/books/main.go">
                            {goCode}
                        </CodeBlock>
                    </TabItem>
                </Tabs>
            </div>
        </section>
    )
}
