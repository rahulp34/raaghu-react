import { languages } from 'prismjs';
import React from 'react';
import Editor from 'react-simple-code-editor';
import Prism from 'prismjs';
// import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import 'prismjs/themes/prism.css'; //Example style, you can use another

export interface RdsCompSyntaxHighlighterProps {
  value: string;
  editorId?: any;
  textareaClassName?: string;
  preClassName?: string;
  disabled?: boolean
  maxLength?: number;
  minLength?: number;
  placeholder?: string;
  readOnly?: boolean;
  name?: string;
  required?: boolean;
  style?: React.CSSProperties;
  padding?: number;
  tabSize?: number
  onValueChange: (value: any) => void;
}
const RdsCompSyntaxHighlighter = (props: RdsCompSyntaxHighlighterProps) => {

  return (
    <Editor value={props.value} onValueChange={props.onValueChange} highlight={code => Prism.highlight(code, languages.js, languages.js as any)}
      textareaId={props.editorId} disabled={props.disabled} maxLength={props.maxLength} minLength={props.minLength}
      name={props.name} placeholder={props.placeholder} readOnly={props.readOnly} padding={props.padding}
      required={props.required} textareaClassName={props.textareaClassName} preClassName={props.preClassName}
      tabSize={props.tabSize} style={props.style} autoFocus={true} />
  );
};

export default RdsCompSyntaxHighlighter;





// function highlight(code: any, language: any) {
//   const grammar = Prism.languages[language];
//   return Prism.highlight(code, language, language);
// }

// return (
//   <>
//     <Editor
//       value={props.value}
//       onValueChange={props.onChange}
//       highlight={code => highlight(code,languages.js )}
//       padding={10}
//       style={{
//         fontFamily: '"Fira code", "Fira Mono", monospace',
//         fontSize: 12,
//       }}
//     />
//   </>
// );