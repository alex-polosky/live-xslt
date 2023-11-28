'use client'

import Image from 'next/image'
import styles from './page.module.css'
import React, { useEffect, useState } from 'react'
// import { Xslt, XmlParser } from 'xslt-processor'
import xmlFormat from 'xml-formatter'
// import Editor from 'react-simple-code-editor'
// // @ts-expect-error
// import { highlight, languages } from 'prismjs/components/prism-core'
// import 'prismjs/components/prism-markup'
// import 'prismjs/components/prism-markup-templating'
// import 'prismjs/components/prism-xml-doc'
// import 'prismjs/themes/prism.css'
import CodeEditor from '@uiw/react-textarea-code-editor'


export default function Home() {
  const [inp, setInp] = useState('Input XML');
  const [xsl, setXsl] = useState('XSLT document');
  const [out, setOut] = useState('');

  
  // const xslt = new Xslt();
  // const xmlParser = new XmlParser();
  
  useEffect(() => {
    // setOut(inp + xsl);
    try {
      // var output = xslt.xsltProcess(
      //   xmlParser.xmlParse(inp),
      //   xmlParser.xmlParse(xsl)
      // );
      const parser = new window.DOMParser();

      const xslDoc = parser.parseFromString(xsl, 'text/xml');
      const input = parser.parseFromString(inp, 'text/xml');
      const xsltProcessor = new XSLTProcessor();
      xsltProcessor.importStylesheet(xslDoc);
      const output = xsltProcessor.transformToDocument(input).documentElement.outerHTML;
      setOut(xmlFormat(output));
    }
    catch {
      setOut('no valid xml')
    }
    // console.log('hi!')
  }, [inp, xsl])

  return (
    <main className={styles.main}>
      <div className="grid-container">
        <div className="grid-item">
          {/* <Editor
            value={inp}
            onValueChange={code => setInp(code)}
            highlight={code => highlight(code, languages.xml)}
            padding={10}
            style={{
              fontFamily: '"Fira code", "Fira Mono", monospace',
              fontSize: 12,
              maxHeight: '40vh'
            }}
          /> */}
          <CodeEditor
            value={inp}
            onChange={(code) => setInp(code.target.value)}
            padding={10}
            style={{
              fontFamily: '"Fira code", "Fira Mono", monospace',
              fontSize: 12,
            }}
            language="xml"
          />
          {/* <textarea id="input" value={inp} onChange={e => {setInp(e.target.value);}}></textarea> */}
        </div>
        <div className="grid-item">
          {/* <Editor
            value={xsl}
            onValueChange={code => setXsl(code)}
            highlight={code => highlight(code, languages.xml)}
            padding={10}
            style={{
              fontFamily: '"Fira code", "Fira Mono", monospace',
              fontSize: 12,
            }}
          /> */}
          {/* <textarea id="xslt" value={xsl} onChange={e => {setXsl(e.target.value);}}></textarea> */}
          <CodeEditor
            value={xsl}
            onChange={(code) => setXsl(code.target.value)}
            padding={10}
            style={{
              fontFamily: '"Fira code", "Fira Mono", monospace',
              fontSize: 12,
            }}
            language="xml"
          />
        </div>
      </div>
      <div id="output">
        <CodeEditor
            value={out}
            padding={10}
            style={{
              fontFamily: '"Fira code", "Fira Mono", monospace',
              fontSize: 12,
            }}
            language="xml"
            readOnly={true}
          />
        {/* <textarea id="output" readOnly value={out}></textarea> */}
      </div>
    </main>
  )
}
