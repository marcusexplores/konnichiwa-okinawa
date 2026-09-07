import { ComponentPropsWithoutRef } from 'react';
import { env } from '@/src/common/utilities/env';

const videoBasePath = `${env.publicBasePath}/videos/`;

interface VideoProps extends ComponentPropsWithoutRef<'video'> {
  src: string;
  type?: string;
}

// Videos should be placed in public folder
// Video should be compress using ffmpeg
// Cmd: ffmpeg -i input.mp4 -vcodec libx264 -crf 28 -pix_fmt yuv420p -profile:v main -level 3.1 -movflags +faststart output.mp4
export const Video = ({ src, type = 'video/mp4', ...props }: VideoProps) => {
  const source = `${videoBasePath}${src}`;

  return (
    <video autoPlay muted loop playsInline preload="auto" {...props}>
      <source src={source} type={type} />
      Your browser does not support the video tag.
    </video>
  );
};
