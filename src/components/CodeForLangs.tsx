"use client";

import { useMemo, useState } from "react";
import { highlight } from "sugar-high";

interface property {
  "c++"?: string;
  javascript?: string;
  java?: string;
  typescript?: string;
  python?: string;
}
type keysTabT = Array<keyof property>;
export const CodeForLangs = (property: property) => {
  const possibleLangs = useMemo(() => {
    const langs: keysTabT = [];
    (Object.keys(property) as keysTabT).forEach((key) => {
      if (property[key]) {
        langs.push(key);
      }
    });
    return langs;
  }, [property]);
  const [currentLang, setCurrentLang] = useState(possibleLangs[0]);
  const codeHTML = highlight(property[currentLang] as string);
  return (
    <div className="flex flex-col">
      <div className="flex gap-2 border rounded-2xl">
        {possibleLangs.map((lang, i) => (
          <button
            key={i}
            onClick={() => {
              setCurrentLang(lang);
            }}
            className={`rounded-2xl font-bold cursor-pointer p-2 ${
              lang == currentLang ? "text-header-foreground " : ""
            }`}
          >
            {lang}
          </button>
        ))}
      </div>
      <pre className="border p-3 border-t-0 rounded-2xl overflow-scroll">
        <code dangerouslySetInnerHTML={{ __html: codeHTML }} />
      </pre>
    </div>
  );
};
