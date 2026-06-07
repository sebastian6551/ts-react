'use client';
import { useState, JSX } from 'react';
import type { MouseEventHandler } from 'react';
import { LazyImage } from '../components/LazyImage';

const random = (): number => Math.floor(Math.random() * 123) + 1;
const generateId = (): string => Math.random().toString(36).slice(2, 11);

export default function Home(): JSX.Element {
  const [images, setImages] = useState<IImageItem[]>([
    { id: generateId(), url: `https://randomfox.ca/images/${random()}.jpg` },
    { id: generateId(), url: `https://randomfox.ca/images/${random()}.jpg` },
    { id: generateId(), url: `https://randomfox.ca/images/${random()}.jpg` },
    { id: generateId(), url: `https://randomfox.ca/images/${random()}.jpg` },
  ]);

  const addNew: MouseEventHandler<HTMLButtonElement> = () => {
    setImages((prevImages) => [
      ...prevImages,
      {
        id: generateId(),
        url: `https://randomfox.ca/images/${random()}.jpg`,
      },
    ]);
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <main className="flex flex-col items-center gap-4">
        <br />
        <h1 className="text-3xl font-bold">Random fox images</h1>
        <button
          className="
            bg-amber-400
            hover:bg-amber-200
            active:bg-amber-600
            text-black
            font-semibold
            px-6
            py-3
            rounded-xl
            shadow-md
            hover:shadow-lg
            transition-all
            duration-200
            cursor-pointer
            select-none"
          onClick={addNew}
        >
          +Add image
        </button>
        {images.map(({ id, url }, index) => (
          <div key={id} className="p-2">
            <LazyImage
              src={url}
              onClick={() => console.log('Here', index + 1)}
              width={400}
              alt="A fox"
              // loading="lazy"
              className="rounded bg-gray-300"
              onLazyLoad={(img) => {
                console.log(`Image #${index + 1} cargada. Nodo:`, img);
              }}
            />
          </div>
        ))}
      </main>
    </div>
  );
}
