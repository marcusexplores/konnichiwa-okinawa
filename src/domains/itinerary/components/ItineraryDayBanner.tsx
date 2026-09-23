import { StaticImageData } from 'next/image';

// The diagonal runs from (splitAt % at top) to (splitAt - slant % at bottom)
const splitAt = 44; // % from left where diagonal starts at the top edge
const slant = 8; // % the diagonal shifts leftward from top to bottom

// Clip-path polygons (percentage-based → scale with element size)
const leftClip = `polygon(0% 0%, ${splitAt}% 0%, ${splitAt - slant}% 100%, 0% 100%)`;
// Glass ribbon: thin slanted strip along the diagonal — no backdrop-filter (it bleeds outside clip-path)
const glassRibbonClip = `polygon(${splitAt - 1.5}% 0%, ${splitAt + 1.5}% 0%, ${splitAt - slant + 1.5}% 100%, ${splitAt - slant - 1.5}% 100%)`;
const edgeLineClip = `polygon(${splitAt - 0.3}% 0%, ${splitAt + 0.3}% 0%, ${splitAt - slant + 0.3}% 100%, ${splitAt - slant - 0.3}% 100%)`;

interface ItineraryDayBannerProps {
  image: StaticImageData;
  day: string;
  title: string;
  subtitle: string;
  descriptions: string[];
}

export const ItineraryDayBanner = ({
  image,
  day,
  title,
  subtitle,
  descriptions = [],
}: ItineraryDayBannerProps) => {
  return (
    <div className="group relative aspect-video w-full">
      <div className="relative h-full w-full overflow-hidden">
        {/* ── Layer 0: Cream left background ─────────────────────────────── */}
        <div
          className="pointer-events-none absolute inset-0 z-0 bg-[#eceee5]"
          style={{ clipPath: leftClip }}
        />

        {/* ── Layers 1+2: Single image masked to show right panel + "01" text ── */}
        {/*
          One SVG element, one <image> tag, one URL.
          The mask has two white shapes: a polygon for the right panel, and SVG
          <text> for the "01" aperture. Both reveal the same image simultaneously.
          Using SVG's own coordinate system avoids the non-square distortion that
          objectBoundingBox causes when mixing x/y scales on wide elements.
        */}
        <svg
          className="pointer-events-none absolute inset-0 z-10 h-full w-full"
          viewBox="0 0 1000 420"
          preserveAspectRatio="xMidYMid slice"
          aria-hidden="true"
        >
          <defs>
            {/*
              maskUnits="userSpaceOnUse" → coordinates are in the viewBox (0 0 1000 420).
              splitAt=44% → x=440; (splitAt-slant)=36% → x=360 at bottom.
            */}
            <mask id="photo-reveal-mask" maskUnits="userSpaceOnUse">
              {/* Right panel polygon */}
              <polygon points="480,0 1000,0 1000,420 400,420" fill="white" />
              <text
                x="180"
                y="135"
                fontSize="140"
                fontWeight="900"
                fontFamily="Georgia, 'Times New Roman', serif"
                fill="white"
              >
                {day}
              </text>
            </mask>
          </defs>
          <image
            href={image.src}
            x="0"
            y="0"
            width="1000"
            height="420"
            preserveAspectRatio="xMidYMid slice"
            mask="url(#photo-reveal-mask)"
          />
          <g transform="translate(155, 190)">
            <text
              x="0"
              y="0"
              fontSize="25"
              fontWeight="900"
              fontFamily="Georgia, 'Times New Roman', serif"
              fill={'#1b3d2f'}
            >
              {title}
            </text>
            <text
              x="0"
              y="20"
              fontSize="10"
              fontWeight="500"
              fontFamily="Georgia, 'Times New Roman', serif"
              fill={'#90A1B9'}
            >
              {subtitle}
            </text>
            <line
              x1="3"
              y1="35"
              x2="25"
              y2="35"
              stroke="#2d5a3f"
              strokeWidth="2"
              strokeLinecap="round"
            />
            {descriptions.map((line, index) => (
              <text
                key={index}
                x="0"
                y={80 + 23 * index}
                fontSize="15"
                // fontFamily="Georgia, 'Times New Roman', serif"
              >
                {line}
              </text>
            ))}
            {/* <foreignObject x="0" y="45" width="200" height="80">
              <div
                style={{
                  fontFamily: "Georgia, 'Times New Roman', serif",
                  fontWeight: '900',
                  color: '#1b3d2f',
                  lineHeight: '1.2',
                  wordBreak: 'break-word'
                }}
              >
                {
                  'Beyond the moat lies history awash Where crimson walls met dragon’s flash'
                }
              </div>
            </foreignObject> */}
          </g>
        </svg>

        {/* ── Layer 3: Glass ribbon along the diagonal ────────────────────── */}
        <div
          className="pointer-events-none absolute inset-0 z-30"
          style={{
            clipPath: glassRibbonClip,
            background:
              'linear-gradient(to bottom, rgba(255,255,255,0.72) 0%, rgba(255,255,255,0.50) 50%, rgba(255,255,255,0.72) 100%)',
          }}
        />

        {/* ── Layer 4: Bright edge reflection line ────────────────────────── */}
        <div
          className="pointer-events-none absolute inset-0 z-40 opacity-90"
          style={{
            clipPath: edgeLineClip,
            backgroundColor: 'rgba(255,255,255,0.95)',
          }}
        />

        {/* ── Layer 5: Text content (left panel) ─────────────────────────── */}
        {/* <div className="absolute inset-0 z-50 flex flex-col justify-between p-8 sm:p-10 lg:p-12">
          <div>
            <div className="mb-2 h-28 sm:h-32 lg:h-36" aria-hidden="true" />
            <h3
              className={`font-serif text-xl leading-tight font-black sm:text-4xl ${titleColor}`}
            >
              {title}
            </h3>
            <p
              className={`mt-2 text-[10px] font-semibold tracking-[0.32em] uppercase ${subtitleColor}`}
            >
              {subtitle}
            </p>

            <div
              className={`my-4 h-0.5 w-8 rounded-full opacity-70 ${lineColor}`}
            />
          </div>

          <div className={`space-y-1 text-xs leading-relaxed ${bodyColor}`}>
            {poemLines.map((line, idx) => (
              <p key={idx}>{line}</p>
            ))}
          </div>
        </div> */}
      </div>
    </div>
  );
};
