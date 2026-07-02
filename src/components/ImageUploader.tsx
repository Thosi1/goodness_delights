"use client";

import { useCallback, useRef, useState } from "react";
import Image from "next/image";
import { UploadCloud, X } from "lucide-react";

const ACCEPTED_TYPES = ["image/jpeg", "image/jpg", "image/png", "image/webp"];
const MAX_FILES = 5;
const MAX_SIZE_MB = 8;

export interface UploadedImage {
  id: string;
  file: File;
  previewUrl: string;
}

interface Props {
  images: UploadedImage[];
  onChange: (images: UploadedImage[]) => void;
}

export function ImageUploader({ images, onChange }: Props) {
  const [error, setError] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFiles = useCallback(
    (fileList: FileList | null) => {
      if (!fileList) return;
      setError(null);

      const incoming = Array.from(fileList);
      const valid: UploadedImage[] = [];

      for (const file of incoming) {
        if (!ACCEPTED_TYPES.includes(file.type)) {
          setError("Only JPG, PNG and WEBP images are supported.");
          continue;
        }
        if (file.size > MAX_SIZE_MB * 1024 * 1024) {
          setError(`Each image must be smaller than ${MAX_SIZE_MB}MB.`);
          continue;
        }
        valid.push({
          id: `${file.name}-${file.size}-${Date.now()}-${Math.random()}`,
          file,
          previewUrl: URL.createObjectURL(file),
        });
      }

      const combined = [...images, ...valid];
      if (combined.length > MAX_FILES) {
        setError(`You can upload up to ${MAX_FILES} reference images.`);
        onChange(combined.slice(0, MAX_FILES));
        return;
      }

      onChange(combined);
    },
    [images, onChange]
  );

  const removeImage = (id: string) => {
    onChange(images.filter((img) => img.id !== id));
  };

  return (
    <div>
      <div
        role="button"
        tabIndex={0}
        onClick={() => inputRef.current?.click()}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") inputRef.current?.click();
        }}
        onDragOver={(e) => {
          e.preventDefault();
          setIsDragging(true);
        }}
        onDragLeave={() => setIsDragging(false)}
        onDrop={(e) => {
          e.preventDefault();
          setIsDragging(false);
          handleFiles(e.dataTransfer.files);
        }}
        className={`flex cursor-pointer flex-col items-center justify-center gap-2 rounded-soft border-2 border-dashed px-6 py-10 text-center transition-colors ${
          isDragging ? "border-gold-500 bg-gold-300/10" : "border-blush-300 bg-cream-100"
        }`}
        aria-label="Upload reference images: click or drag and drop"
      >
        <UploadCloud className="h-8 w-8 text-gold-500" />
        <p className="font-body text-sm font-medium text-brown-700">
          Drag and drop reference images, or click to browse
        </p>
        <p className="font-body text-xs text-brown-400">
          JPG, JPEG, PNG or WEBP · up to {MAX_SIZE_MB}MB each · up to {MAX_FILES} images
        </p>
        <input
          ref={inputRef}
          type="file"
          multiple
          accept={ACCEPTED_TYPES.join(",")}
          className="sr-only"
          onChange={(e) => handleFiles(e.target.files)}
        />
      </div>

      {error && <p className="mt-2 font-body text-sm text-blush-400">{error}</p>}

      {images.length > 0 && (
        <ul className="mt-4 grid grid-cols-3 gap-3 sm:grid-cols-5">
          {images.map((img) => (
            <li key={img.id} className="relative aspect-square overflow-hidden rounded-xl bg-blush-100">
              <Image src={img.previewUrl} alt="Reference upload preview" fill sizes="120px" className="object-cover" />
              <button
                type="button"
                aria-label="Remove image"
                onClick={() => removeImage(img.id)}
                className="absolute right-1 top-1 rounded-full bg-brown-900/70 p-1 text-white hover:bg-brown-900"
              >
                <X className="h-3.5 w-3.5" />
              </button>
            </li>
          ))}
        </ul>
      )}

      <p className="mt-3 font-body text-xs text-brown-400">
        Reference images are used purely as inspiration — your finished cake may differ
        from the images shown, depending on availability and our designer's interpretation.
      </p>
    </div>
  );
}
