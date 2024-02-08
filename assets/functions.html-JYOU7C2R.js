import{_ as e,r as i,o as l,c as p,b as a,d as n,e as o,a as s}from"./app-yTiTYspY.js";const c={},r=s(`<h1 id="built-in-functions" tabindex="-1"><a class="header-anchor" href="#built-in-functions"><span>Built-in functions</span></a></h1><p>Textwire has a set of built-in functions that can be used to manipulate data. These functions are used to perform operations on strings, arrays, integers, and floats. You can use these functions anywhere in your Textwire programs.</p><p>Each function is attached to a specific data type. For example, the <code>len</code> function is used to get the length of an array, and the <code>trim</code> function is used to remove characters from both sides of the string. You can call a function on a value by using the dot operator (<code>.</code>) followed by the function name.</p><div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
    {{ &quot;Textwire&quot;.len() }} <span class="token comment">&lt;!-- output: 8 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>You can also chain multiple functions together to perform complex operations.</p><div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">&gt;</span></span>
    {{ &quot;  Textwire  &quot;.trim().len() }} <span class="token comment">&lt;!-- output: 8 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),u={class:"custom-container tip"},d=a("p",{class:"custom-container-title"},"NOTE",-1),h={href:"https://github.com/textwire/textwire/issues/new",target:"_blank",rel:"noopener noreferrer"},m=s(`<h2 id="string-functions" tabindex="-1"><a class="header-anchor" href="#string-functions"><span>String functions</span></a></h2><h3 id="raw" tabindex="-1"><a class="header-anchor" href="#raw"><span><code>raw()</code></span></a></h3><h4 id="description" tabindex="-1"><a class="header-anchor" href="#description"><span>Description</span></a></h4><p>Function <code>raw</code> is used to render a string as raw HTML. This is useful when you want to render HTML tags from a string. By default, HTML tags in a string are escaped to prevent XSS attacks.</p><h4 id="arguments" tabindex="-1"><a class="header-anchor" href="#arguments"><span>Arguments</span></a></h4><p>None</p><h4 id="input-example" tabindex="-1"><a class="header-anchor" href="#input-example"><span>Input example</span></a></h4><div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre class="language-html"><code>{{ &quot;<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">&gt;</span></span>Test<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span>&quot;.raw() }}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="output" tabindex="-1"><a class="header-anchor" href="#output"><span>Output</span></a></h4><div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">&gt;</span></span>Test<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="split" tabindex="-1"><a class="header-anchor" href="#split"><span><code>split()</code></span></a></h3><h4 id="description-1" tabindex="-1"><a class="header-anchor" href="#description-1"><span>Description</span></a></h4><p>Function <code>split</code> is used to split a string into an array of substrings. It takes an optional argument <code>separator</code> which is used to split the string. If no separator is provided, it defaults to a space.</p><h4 id="arguments-1" tabindex="-1"><a class="header-anchor" href="#arguments-1"><span>Arguments</span></a></h4><ol><li><code>separator</code> (optional) - What separator to use to split the string. Default is &quot; &quot; (space).</li></ol><h4 id="input-example-1" tabindex="-1"><a class="header-anchor" href="#input-example-1"><span>Input example</span></a></h4><div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>{{ &quot;one two&quot;.split(&quot; &quot;) }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="output-1" tabindex="-1"><a class="header-anchor" href="#output-1"><span>Output</span></a></h4><p>The output will be <code>one,two</code> because arrays are automatically converted to array items separated by a comma. But, the result of the split function is an array.</p><div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>one,two<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="trim" tabindex="-1"><a class="header-anchor" href="#trim"><span><code>trim()</code></span></a></h3><h4 id="description-2" tabindex="-1"><a class="header-anchor" href="#description-2"><span>Description</span></a></h4><p>Trims a string from spaces and special characters like <code>\\t\\n\\r</code> by default. You can pass a argument to trim a specific set of characters from a string.</p><h4 id="arguments-2" tabindex="-1"><a class="header-anchor" href="#arguments-2"><span>Arguments</span></a></h4><ol><li><code>chars</code> (optional) - A string of characters to trim from a string. Default is <code> \\t\\n\\r</code>.</li></ol><h4 id="input-example-2" tabindex="-1"><a class="header-anchor" href="#input-example-2"><span>Input example</span></a></h4><div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">&gt;</span></span>{{ &quot; Anna &quot;.trim() }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="output-2" tabindex="-1"><a class="header-anchor" href="#output-2"><span>Output</span></a></h4><div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">&gt;</span></span>Anna<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="len" tabindex="-1"><a class="header-anchor" href="#len"><span><code>len()</code></span></a></h3><h4 id="description-3" tabindex="-1"><a class="header-anchor" href="#description-3"><span>Description</span></a></h4><p>The <code>len</code> function returns the length of a string.</p><h5 id="arguments-3" tabindex="-1"><a class="header-anchor" href="#arguments-3"><span>Arguments</span></a></h5><p>None</p><h4 id="input-example-3" tabindex="-1"><a class="header-anchor" href="#input-example-3"><span>Input example</span></a></h4><div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>b</span><span class="token punctuation">&gt;</span></span>{{ &quot;Hello, World!&quot;.len() }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>b</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="output-3" tabindex="-1"><a class="header-anchor" href="#output-3"><span>Output</span></a></h4><div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>b</span><span class="token punctuation">&gt;</span></span>13<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>b</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="array-functions" tabindex="-1"><a class="header-anchor" href="#array-functions"><span>Array functions</span></a></h2><h3 id="len-1" tabindex="-1"><a class="header-anchor" href="#len-1"><span><code>len</code></span></a></h3><h4 id="description-4" tabindex="-1"><a class="header-anchor" href="#description-4"><span>Description</span></a></h4><p>Function <code>len</code> returns the length of an array.</p><h5 id="arguments-4" tabindex="-1"><a class="header-anchor" href="#arguments-4"><span>Arguments</span></a></h5><p>None</p><h4 id="input-example-4" tabindex="-1"><a class="header-anchor" href="#input-example-4"><span>Input example:</span></a></h4><div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">&gt;</span></span>{{ [1, 2, 3].len() }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="output-4" tabindex="-1"><a class="header-anchor" href="#output-4"><span>Output:</span></a></h4><div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">&gt;</span></span>3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="min" tabindex="-1"><a class="header-anchor" href="#min"><span><code>min()</code></span></a></h3><h4 id="description-5" tabindex="-1"><a class="header-anchor" href="#description-5"><span>Description</span></a></h4><p>The <code>min</code> function returns the minimum value of an array. With array of integers or floats, it returns the smallest number. With array of strings, it returns the string with the smallest length.</p><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>Function <code>min</code> working only with <code>INT</code>, <code>FLOAT</code> and <code>STRING</code> arrays. If you try to use it with other types, it will return empty string.</p></div><h5 id="arguments-5" tabindex="-1"><a class="header-anchor" href="#arguments-5"><span>Arguments</span></a></h5><p>None</p><h4 id="input-example-5" tabindex="-1"><a class="header-anchor" href="#input-example-5"><span>Input example</span></a></h4><div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">&gt;</span></span>{{ [1, 2, 3].min() }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="output-5" tabindex="-1"><a class="header-anchor" href="#output-5"><span>Output</span></a></h4><div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">&gt;</span></span>1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="max" tabindex="-1"><a class="header-anchor" href="#max"><span><code>max()</code></span></a></h3><h4 id="description-6" tabindex="-1"><a class="header-anchor" href="#description-6"><span>Description</span></a></h4><p>The <code>max</code> function returns the maximum value of an array. With array of integers or floats, it returns the largest number. With array of strings, it returns the string with the largest length.</p><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>Function <code>max</code> working only with <code>INT</code>, <code>FLOAT</code> and <code>STRING</code> arrays. If you try to use it with other types, it will return empty string.</p></div><h5 id="arguments-6" tabindex="-1"><a class="header-anchor" href="#arguments-6"><span>Arguments</span></a></h5><p>None</p><h4 id="input-example-6" tabindex="-1"><a class="header-anchor" href="#input-example-6"><span>Input example</span></a></h4><div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">&gt;</span></span>{{ [1, 2, 3].max() }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="output-6" tabindex="-1"><a class="header-anchor" href="#output-6"><span>Output</span></a></h4><div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">&gt;</span></span>3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="integer-functions" tabindex="-1"><a class="header-anchor" href="#integer-functions"><span>Integer functions</span></a></h2><h3 id="float" tabindex="-1"><a class="header-anchor" href="#float"><span><code>float()</code></span></a></h3><h4 id="description-7" tabindex="-1"><a class="header-anchor" href="#description-7"><span>Description</span></a></h4><p>The <code>float</code> function is used to convert an integer to a float by adding certain decimal places to the number. You can pass an optional argument <code>precision</code> to add a specific number of decimal places to the number.</p><h5 id="arguments-7" tabindex="-1"><a class="header-anchor" href="#arguments-7"><span>Arguments</span></a></h5><ol><li><code>precision</code> (optional) - The number of decimal places to round the float to. Default is 2.</li></ol><h4 id="input-example-7" tabindex="-1"><a class="header-anchor" href="#input-example-7"><span>Input example</span></a></h4><div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>b</span><span class="token punctuation">&gt;</span></span>Sum: {{ 5.float() }} USD<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>b</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="output-7" tabindex="-1"><a class="header-anchor" href="#output-7"><span>Output</span></a></h4><div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>b</span><span class="token punctuation">&gt;</span></span>Sum: 5.00 USD<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>b</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="float-functions" tabindex="-1"><a class="header-anchor" href="#float-functions"><span>Float functions</span></a></h2><h3 id="int" tabindex="-1"><a class="header-anchor" href="#int"><span><code>int()</code></span></a></h3><h4 id="description-8" tabindex="-1"><a class="header-anchor" href="#description-8"><span>Description</span></a></h4><p>Function <code>int</code> is used to convert a float to an integer by removing the decimal part of the number. It doesn&#39;t round the number, it just removes the decimal part.</p><h5 id="arguments-8" tabindex="-1"><a class="header-anchor" href="#arguments-8"><span>Arguments</span></a></h5><p>None</p><h4 id="input-example-8" tabindex="-1"><a class="header-anchor" href="#input-example-8"><span>Input example</span></a></h4><div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{{ 5.5.int() }}<span class="token punctuation">&quot;</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>number<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="output-8" tabindex="-1"><a class="header-anchor" href="#output-8"><span>Output</span></a></h4><div class="language-html line-numbers-mode" data-ext="html" data-title="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>5<span class="token punctuation">&quot;</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>number<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,88);function g(k,v){const t=i("ExternalLinkIcon");return l(),p("div",null,[r,a("div",u,[d,a("p",null,[n("New functions are added in new version of Textwire when there is a need for them. If you have a suggestion for a new function, please open "),a("a",h,[n("an issue"),o(t)]),n(" on GitHub and we will consider adding it in the next version.")])]),m])}const b=e(c,[["render",g],["__file","functions.html.vue"]]),x=JSON.parse('{"path":"/1.x/functions.html","title":"Built-in functions","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"String functions","slug":"string-functions","link":"#string-functions","children":[{"level":3,"title":"raw()","slug":"raw","link":"#raw","children":[]},{"level":3,"title":"split()","slug":"split","link":"#split","children":[]},{"level":3,"title":"trim()","slug":"trim","link":"#trim","children":[]},{"level":3,"title":"len()","slug":"len","link":"#len","children":[]}]},{"level":2,"title":"Array functions","slug":"array-functions","link":"#array-functions","children":[{"level":3,"title":"len","slug":"len-1","link":"#len-1","children":[]},{"level":3,"title":"min()","slug":"min","link":"#min","children":[]},{"level":3,"title":"max()","slug":"max","link":"#max","children":[]}]},{"level":2,"title":"Integer functions","slug":"integer-functions","link":"#integer-functions","children":[{"level":3,"title":"float()","slug":"float","link":"#float","children":[]}]},{"level":2,"title":"Float functions","slug":"float-functions","link":"#float-functions","children":[{"level":3,"title":"int()","slug":"int","link":"#int","children":[]}]}],"git":{"updatedTime":1707335780000,"contributors":[{"name":"SerhiiCho","email":"serhiicho@protonmail.com","commits":1}]},"filePathRelative":"1.x/functions.md"}');export{b as comp,x as data};
