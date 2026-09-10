import React from 'react';
import { tileBackgroundPosition } from '../../utils/slidingPuzzle';

export default function SlidingPuzzleBoard({ tiles, size, image, onTileClick, disabled }) {
  return (
    <div
      className="relative w-full max-w-[420px] mx-auto aspect-square rounded-2xl overflow-hidden border-2 border-gold-400 shadow-heritage bg-navy-900"
      style={{ touchAction: 'manipulation' }}
    >
      <div
        className="grid w-full h-full gap-[2px] p-[2px] bg-navy-900"
        style={{ gridTemplateColumns: `repeat(${size}, 1fr)`, gridTemplateRows: `repeat(${size}, 1fr)` }}
      >
        {tiles.map((value, index) => {
          if (value === 0) {
            return (
              <div
                key={index}
                className="bg-cream-100/20 rounded-sm"
                aria-hidden="true"
              />
            );
          }

          const { x, y } = tileBackgroundPosition(value, size);

          return (
            <button
              key={index}
              type="button"
              disabled={disabled}
              onClick={() => onTileClick(index)}
              className="relative rounded-sm overflow-hidden cursor-pointer hover:brightness-110 active:scale-95 transition-all focus:outline-none focus:ring-2 focus:ring-saffron-400"
              aria-label={`Move tile ${value}`}
              style={{
                backgroundImage: `url(${image})`,
                backgroundSize: `${size * 100}% ${size * 100}%`,
                backgroundPosition: `${x}% ${y}%`
              }}
            >
              <span className="absolute bottom-0.5 right-0.5 w-5 h-5 rounded-md bg-navy-900/70 text-[10px] font-bold text-gold-300 flex items-center justify-center">
                {value}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
