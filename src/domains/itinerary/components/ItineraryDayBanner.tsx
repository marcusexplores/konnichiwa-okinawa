import { StaticImageData } from 'next/image';

// Aspect ratio is 16:9, so these are our base dimensions
const bannerWidth = 1920;
const bannerHeight = 1080;

const topSplitX = bannerWidth * 0.4;
const bottomSplitX = bannerWidth * 0.6;

const overlayFill = '#eceee5';

const fadeLayerOneTopLeftX = topSplitX - 1; // Overlaps a little with previous shape to prevent gap
const fadeLayerOneTopRightX = topSplitX + 25;
const fadeLayerOneBottomRightX = bottomSplitX + 25;
const fadeLayerOneBottomLeftX = bottomSplitX - 1; // Overlaps a little with previous shape to prevent gap

const fadeLayerTwoTopLeftX = fadeLayerOneTopRightX - 1; // Overlaps a little with previous shape to prevent gap
const fadeLayerTwoTopRightX = fadeLayerOneTopRightX + 25;
const fadeLayerTwoBottomRightX = fadeLayerOneBottomRightX + 25;
const fadeLayerTwoBottomLeftX = fadeLayerOneBottomRightX - 1; // Overlaps a little with previous shape to prevent gap

const descriptionFontSize = 30;
const descriptionLineHeight = descriptionFontSize + 20;

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
    <div className="relative aspect-video h-full w-full overflow-hidden">
      <svg
        className="absolute inset-0"
        viewBox={`0 0 ${bannerWidth} ${bannerHeight}`}
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        <defs>
          <mask id="photo-reveal-mask" maskUnits="userSpaceOnUse">
            {/* Right panel clip path */}
            <polygon
              points={`${topSplitX},0 ${bannerWidth},0 ${bannerWidth},${bannerHeight} ${bottomSplitX},${bannerHeight}`}
              fill="white"
            />
            <text
              x="150"
              y="425"
              fontSize="450"
              fontWeight="900"
              fontFamily="Georgia, 'Times New Roman', serif"
              fill="white"
            >
              {day}
            </text>
          </mask>
        </defs>

        {/* Left panel overlay */}
        <polygon
          points={`0,0 ${topSplitX},0 ${bottomSplitX},${bannerHeight} 0,${bannerHeight}`}
          fill={overlayFill}
        />

        <image
          href={image.src}
          x="0"
          y="0"
          width={bannerWidth}
          height={bannerHeight}
          preserveAspectRatio="xMidYMid slice"
          mask="url(#photo-reveal-mask)"
        />

        <polygon
          points={`${fadeLayerOneTopLeftX},0 ${fadeLayerOneTopRightX},0 ${fadeLayerOneBottomRightX},${bannerHeight} ${fadeLayerOneBottomLeftX},${bannerHeight}`}
          fill={overlayFill}
          fillOpacity="0.75"
        />

        <polygon
          points={`${fadeLayerTwoTopLeftX},0 ${fadeLayerTwoTopRightX},0 ${fadeLayerTwoBottomRightX},${bannerHeight} ${fadeLayerTwoBottomLeftX},${bannerHeight}`}
          fill={overlayFill}
          fillOpacity="0.35"
        />

        <text
          x="150"
          y="575"
          fontSize="65"
          fontWeight="900"
          fontFamily="Georgia, 'Times New Roman', serif"
          fill={'#1b3d2f'}
        >
          {title}
        </text>
        <text
          x="150"
          y="650"
          fontSize="25"
          fontWeight="500"
          fontFamily="Georgia, 'Times New Roman', serif"
          fill={'#90A1B9'}
        >
          {subtitle}
        </text>

        {/* Separator */}
        <line
          x1="155"
          y1="700"
          x2="180"
          y2="700"
          stroke="#2d5a3f"
          strokeWidth="2"
          strokeLinecap="round"
        />

        {descriptions.map((line, index) => (
          <text
            key={index}
            x="150"
            y={775 + descriptionLineHeight * index}
            fontSize={descriptionFontSize}
            // fontFamily="Georgia, 'Times New Roman', serif"
          >
            {line}
          </text>
        ))}
      </svg>
    </div>
  );
};
