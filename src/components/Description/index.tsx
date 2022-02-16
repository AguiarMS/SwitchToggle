import React from "react";
import { TextDescription } from './styles'

export function Description() {
  return (
    <TextDescription>
      TypeScript is a relatively new language. It was launched for public use in October 2012, as the version 0.8 of the language. It was a result of two years of developed at Microsoft, with Anders Hejlsberg, the lead architect of c#, as well as the creator of Delphi and Turbo Pascal working on the project too.

      Not long after its release, the language was praised by Miguel de Icaza, the Mexican programmer. However, he also criticized the absence of IDE support for TypeScript excluding Microsoft Visual Studio which is unavailable on Linux and OS X.

      This lack of IDE support issue was tackled and by 2013, TypeScript support was present in other IDEs, such as Eclipse using a plug-in provided by Palantir Technologies. Several text editors were also released with support for TypeScript, such as Sublime, Vim and Emacs.

      The TypeScript 0.8 was followed by a newer version, the TypeScript 0.9 which was released in 2013. The newer edition had an additional feature- support for generics. TypeScript 0.9 was succeeded by TypeScript 1.0 which was released at the Build 2014. The second update for Visual Studio 2013 provides default support for TypeScript.

      A New compiler for TypeScript was announced by its development team in July 2014. The team claimed that the new compiler would bring five times gains in performance with itself. Around the same time, the source code for TypeScript, which was originally hosted by CodePlex, was shifted to Github.
    </TextDescription>
  )
}