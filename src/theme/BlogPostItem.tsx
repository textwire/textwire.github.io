import React from 'react'
import type { Props } from '@theme/BlogPostItem'
import BlogPostItem from '@theme-original/BlogPostItem'
import SharePostButtons from '@site/src/components/SharePostButtons'

export default function BlogPostItemWrapper(props: Props): JSX.Element {
    return (
        <>
            <SharePostButtons />
            <BlogPostItem {...props} />
            <SharePostButtons />
        </>
    )
}
