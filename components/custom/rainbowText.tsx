import "../../styles/rainbow.css";

const RainbowText = ({ text }: { text: string }) => (
  <div className="rainbow-text">
    {text.split("").map((char, index) =>
      char === " " || char === "\t" ? (
        <span key={index}>&nbsp;</span>
      ) : (
        <span key={index} style={{ animationDelay: `${index * 0.1}s` }}>
          {char}
        </span>
      ),
    )}
  </div>
);

export default RainbowText;
