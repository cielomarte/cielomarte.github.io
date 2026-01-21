type Props = {
  onSelect: (path: { function?: string; domain?: string }) => void;
};

export function PathSelector({ onSelect }: Props) {
  return (
    <div>
      <h2>What do you want to use AI for?</h2>
      <button onClick={() => onSelect({ function: "decision-support" })}>
        Decision Support
      </button>

      <h2>Where do you apply it?</h2>
      <button onClick={() => onSelect({ domain: "healthcare" })}>
        Healthcare
      </button>
    </div>
  );
}
