import { useState } from 'react'
import './App.css'
import ReactMarkdown from "react-markdown";


const defaultMarkdown =`
  # Cool Cat's Guide to Markdown

  Welcome! In this guide, you'll learn how to use Markdown to make your content look awesome.

  ## Markdown Basics

  Here are some cool features of Markdown:

  - **Bold** text to emphasize important points
  - *Italic* text for a bit of style
  - [Click here](https://www.freecodecamp.org) to learn more at freeCodeCamp!

  Inline code example: \`const example = "Hello, Markdown!";\`

  And here's a code block:
  \`\`\`
  function greet(name) {
    return \`Hello, \${name}!\`;
  }
  \`\`\`

  - Enjoy creating lists
  - Markdown makes formatting easy

  > Markdown is a lightweight markup language with plain-text formatting syntax.

  ![Funny Cat](https://media.istockphoto.com/id/1188445864/photo/closeup-portrait-of-funny-ginger-cat-wearing-sunglasses-isolated-on-light-cyan-copyspace.jpg?s=1024x1024&w=is&k=20&c=CtdYHDwDk-HjbAR0H0jzWlT9sqpI30ks4Ld-RXg4bnQ=)

  **Bold text** to make important notes stand out

  Remember, with Markdown, you'll be a cool cat like me in no time!
  
`;




function App() {
  const [markdownText, setMarkdownText] = useState<string>(defaultMarkdown)

  return (
    <>
      <div>
        <h1 id="header">Markdown Previewer</h1>
        <div className='boxes-container'>
          <textarea name="editor" id="editor" value={markdownText} onChange={(e) => setMarkdownText(e.target.value)}></textarea>
          <div id="preview">
            <ReactMarkdown>{markdownText}</ReactMarkdown>
          </div>
        </div>
      </div>
    </>
  );
}

export default App
