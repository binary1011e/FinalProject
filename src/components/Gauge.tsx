import React from 'react';

interface GaugeProps {
  value: number;
}

const segmentDefs = [
  { label: 'Calm', color: '#4ade80' }, // green
  { label: 'Not Worried', color: '#60a5fa' }, // blue
  { label: 'Neutral', color: '#a3a3a3' }, // gray
  { label: 'Worried', color: '#facc15' }, // yellow
  { label: 'Panic', color: '#ef4444' }, // red
];

// New boundaries: Calm: < -1.5, Not Worried: -1.25 to -0.5, Neutral: -0.5 to 0.5, Worried: 0.5 to 1.25, Panic: > 1.5
const boundaries = [-2, -1, -0.5, 0.5, 1, 2];
const min = -2, max = 2;
const total = max - min;

function getLabelAndColor(value: number) {
  if (value < -1) return { label: 'Calm', color: '#4ade80' };
  if (value < -0.5) return { label: 'Not Worried', color: '#60a5fa' };
  if (value < 0.5) return { label: 'Neutral', color: '#a3a3a3' };
  if (value < 1) return { label: 'Worried', color: '#facc15' };
  return { label: 'Panic', color: '#ef4444' };
}

const RADIUS = 280;
const INNER_RADIUS = 180;
const SVG_W = 2 * RADIUS + 40; // 600
const SVG_H = RADIUS + 60;     // 340
const CX = SVG_W / 2;          // 320
const CY = RADIUS + 10;        // 290

// Map value to angle: -2 (left) => 180deg, 2 (right) => 0deg
function valueToAngle(value: number) {
  const clamped = Math.max(min, Math.min(max, value));
  return 180 - ((clamped - min) / (max - min)) * 180;
}

function polarToCartesian(cx: number, cy: number, r: number, angle: number) {
  const rad = (angle) * Math.PI / 180.0;
  return {
    x: cx + r * Math.cos(rad),
    y: cy - r * Math.sin(rad)
  };
}

// Draw a ring segment (donut wedge) between inner and outer radius
function describeDonutWedge(cx: number, cy: number, rOuter: number, rInner: number, startAngle: number, endAngle: number) {
  const startOuter = polarToCartesian(cx, cy, rOuter, startAngle);
  const endOuter = polarToCartesian(cx, cy, rOuter, endAngle);
  const startInner = polarToCartesian(cx, cy, rInner, endAngle);
  const endInner = polarToCartesian(cx, cy, rInner, startAngle);
  const arcSweep = endAngle - startAngle <= 180 ? '0' : '1';
  return [
    'M', startOuter.x, startOuter.y,
    'A', rOuter, rOuter, 0, arcSweep, 1, endOuter.x, endOuter.y,
    'L', startInner.x, startInner.y,
    'A', rInner, rInner, 0, arcSweep, 0, endInner.x, endInner.y,
    'Z'
  ].join(' ');
}

const Gauge: React.FC<GaugeProps> = ({ value }) => {
  // Map each segment to its arc sweep
  const segmentAngles = boundaries.slice(0, -1).map((b, i) => {
    const vStart = boundaries[i];
    const vEnd = boundaries[i + 1];
    // Map to angles: 180 (left) to 0 (right)
    let start = 180 - ((vStart - min) / total) * 180;
    let end = 180 - ((vEnd - min) / total) * 180;
    return { ...segmentDefs[i], start, end };
  });

  // Needle
  const angle = valueToAngle(value);
  const needleLength = RADIUS;
  const needleX = CX + needleLength * Math.cos((Math.PI * angle) / 180);
  const needleY = CY - needleLength * Math.sin((Math.PI * angle) / 180);
  const { color } = getLabelAndColor(value);

  // For label placement inside segments
  const labelRadius = (RADIUS + INNER_RADIUS) / 2;
  const labelFontSize = 18;

  return (
    <div className="w-full flex flex-col items-center" style={{ background: '#f7f8fa', borderRadius: 18, padding: 16 }}>
      <svg width={SVG_W} height={SVG_H} viewBox={`0 0 ${SVG_W} ${SVG_H}`}>
        {/* Draw donut wedges */}
        {segmentAngles.map((seg, i) => (
          <g key={seg.label}>
            <path
              d={describeDonutWedge(CX, CY, RADIUS, INNER_RADIUS, seg.start, seg.end)}
              fill={seg.color}
              opacity={0.7}
            />
            {/* Place label at midpoint angle */}
            {(() => {
              const midAngle = (seg.start + seg.end) / 2;
              const { x, y } = polarToCartesian(CX, CY, labelRadius, midAngle);
              return (
                <text
                  x={x}
                  y={y + labelFontSize / 3}
                  textAnchor="middle"
                  fontSize={labelFontSize}
                  fontWeight="bold"
                  fill="#222"
                  style={{ fontFamily: 'Inter, sans-serif', pointerEvents: 'none', userSelect: 'none' }}
                >
                  {seg.label}
                </text>
              );
            })()}
          </g>
        ))}
        {/* Needle */}
        <line
          x1={CX}
          y1={CY}
          x2={needleX}
          y2={needleY}
          stroke="#222"
          strokeWidth={4}
          strokeLinecap="round"
        />
        {/* Center circle */}
        <circle cx={CX} cy={CY} r={48} fill="#fff" stroke="#e5e7eb" strokeWidth={2} />
        {/* Value in center */}
        <text x={CX} y={CY + 8} textAnchor="middle" fontSize="32" fontWeight="bold" fill={color} style={{ fontFamily: 'Inter, sans-serif' }}>
          {value.toFixed(2)}
        </text>
      </svg>
    </div>
  );
};

export default Gauge;
  