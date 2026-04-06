interface HBSLogoProps {
  variant?: "dark" | "light";
  className?: string;
  size?: "sm" | "md" | "lg";
}

const sizes = {
  sm: { svg: 120, h: 28 },
  md: { svg: 150, h: 34 },
  lg: { svg: 200, h: 46 },
};

export default function HBSLogo({
  variant = "dark",
  className = "",
  size = "md",
}: HBSLogoProps) {
  const { h } = sizes[size];

  // Cores baseadas na variante
  const hastes = variant === "dark" ? "#D4D4D8" : "#27272A";
  const barra = "#A1A1AA";
  const hbsColor = variant === "dark" ? "#D4D4D8" : "#27272A";
  const techColor = variant === "dark" ? "#71717A" : "#A1A1AA";

  // Proporções do H
  const hW = h * 0.85;
  const barraW = hW * 0.45;
  const hasteW = hW * 0.22;
  const hasteH = h;
  const barraH = hasteW;
  const rx = 3.5;
  const gap = (hW - 2 * hasteW - barraW) / 2;

  // Posições
  const leftX = 0;
  const rightX = hasteW + gap + barraW + gap;
  const barraX = hasteW + gap;
  const barraY = (hasteH - barraH) / 2;

  // Tamanho da fonte proporcional
  const fontSize = h * 0.52;
  const textX = hW + h * 0.3;
  const textY = h * 0.68;

  return (
    <svg
      className={className}
      viewBox={`0 0 ${textX + fontSize * 6.2} ${h}`}
      height={h}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="HBS Tech"
    >
      {/* Haste esquerda */}
      <rect
        x={leftX}
        y={0}
        width={hasteW}
        height={hasteH}
        rx={rx}
        fill={hastes}
      />
      {/* Haste direita */}
      <rect
        x={rightX}
        y={0}
        width={hasteW}
        height={hasteH}
        rx={rx}
        fill={hastes}
      />
      {/* Barra central */}
      <rect
        x={barraX}
        y={barraY}
        width={barraW}
        height={barraH}
        rx={rx}
        fill={barra}
      />
      {/* Texto HBS */}
      <text
        x={textX}
        y={textY}
        fontFamily="Inter, sans-serif"
        fontSize={fontSize}
        fontWeight={700}
        fill={hbsColor}
        letterSpacing="3"
      >
        HBS
      </text>
      {/* Texto Tech */}
      <text
        x={textX + fontSize * 2.9}
        y={textY}
        fontFamily="Inter, sans-serif"
        fontSize={fontSize}
        fontWeight={400}
        fill={techColor}
        letterSpacing="3"
      >
        Tech
      </text>
    </svg>
  );
}
