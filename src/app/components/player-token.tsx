'use client';

import type { Player } from '@/app/lib/types';
import { cn } from '@/lib/utils';
import { User } from 'lucide-react';

interface PlayerTokenProps {
  player: Player;
  onMouseDown: (e: React.MouseEvent<HTMLDivElement>, player: Player) => void;
  isDragged: boolean;
}

export default function PlayerToken({ player, onMouseDown, isDragged }: PlayerTokenProps) {
  return (
    <div
      key={player.id}
      className={cn(
        'absolute w-16 h-16 rounded-full bg-primary text-primary-foreground flex flex-col items-center justify-center text-center p-1 shadow-lg select-none transition-all duration-200 ease-in-out',
        isDragged ? 'cursor-grabbing shadow-2xl scale-110 z-10' : 'cursor-grab'
      )}
      style={{
        left: `calc(${player.position.x}% - 2rem)`,
        top: `calc(${player.position.y}% - 2rem)`,
      }}
      onMouseDown={(e) => onMouseDown(e, player)}
      title={player.name}
    >
      <User className="w-5 h-5 mb-0.5" />
      <span className="text-xs font-semibold truncate max-w-full">{player.name}</span>
    </div>
  );
}
