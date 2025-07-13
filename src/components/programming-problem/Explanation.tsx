export const Explanation = ({
  explanations,
}: {
  explanations: {
    id: number;
    input: string;
    output: string;
    explanation: string;
  }[];
}) => {
  return (
    <>
      {explanations.map((exp) => (
        <div
          key={exp.id}
          className="flex text-[15px] flex-col w-full rounded-[4px] p-[10px] border bg-explanation my-[15px]"
        >
          <div className="flex gap-1">
            <b>Input: </b>

            <span>{exp.input}</span>
          </div>
          <div className="flex gap-1">
            <b>Output:</b>

            <span>{exp.output}</span>
          </div>
          <div className="flex gap-1">
            <b>Explanation:</b>
            <span>{exp.explanation}</span>
          </div>
        </div>
      ))}
    </>
  );
};
