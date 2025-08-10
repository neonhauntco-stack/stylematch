"use client";

import React, { useRef } from 'react';
import { Button } from '../ui/button';
import { Upload } from 'lucide-react';
import UpgradePremium from '../UpgradePremium';

interface HeroUploadProps {
  onUpload?: (files: FileList) => void;
}

export default function HeroUpload({ onUpload }: HeroUploadProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    inputRef.current?.click();
  };

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    if (event.target.files && onUpload) {
      onUpload(event.target.files);
    }
  };

  return (
    <section className="py-20 text-center">
      <div className="container space-y-6">
        <h1 className="text-4xl font-bold">Find Your Style Match</h1>
        <p className="text-muted-foreground">
          Upload a photo and discover similar fashion pieces at better prices.
        </p>
        <div className="flex justify-center gap-4">
          <Button size="lg" onClick={handleClick}>
            <Upload className="mr-2 h-4 w-4" />
            Upload Image
          </Button>
          <Button size="lg" variant="secondary" asChild>
            <a href="/pricing">Upgrade Premium</a>
          </Button>
          <input
            type="file"
            accept="image/*"
            ref={inputRef}
            onChange={handleChange}
            className="sr-only"
          />
        </div>
      </div>
    </section>
  );
}
