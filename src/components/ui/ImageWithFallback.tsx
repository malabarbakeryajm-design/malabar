import { useState } from "react";
import Image, { ImageProps } from "next/image";

interface ImageWithFallbackProps extends ImageProps {
  fallbackText?: string;
}

export default function ImageWithFallback({
  src,
  alt,
  fallbackText,
  className,
  ...props
}: ImageWithFallbackProps) {
  const [error, setError] = useState(false);

  if (error) {
    return (
      <div
        className={`bg-[#32150C] flex items-center justify-center text-brand-gold/40 text-sm italic font-serif ${className}`}
      >
        {fallbackText || "Image unavailable"}
      </div>
    );
  }

  return (
    <Image
      {...props}
      src={src}
      alt={alt}
      className={className}
      onError={() => setError(true)}
    />
  );
}
