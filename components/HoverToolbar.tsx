"use client";

import React, { useState } from 'react';
import { Trash2, Copy, Info } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { cn } from '@/lib/utils';

const HoverToolbar: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={cn(
          "absolute left-0 right-0 -top-[52px] bg-background/95 backdrop-blur-sm p-2 rounded-t-md shadow-md",
          "flex justify-end space-x-2 transition-all duration-300",
          isHovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2 pointer-events-none"
        )}
      >
        <Button variant="ghost" size="icon">
          <Trash2 className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="icon">
          <Copy className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="icon">
          <Info className="h-4 w-4" />
        </Button>
      </div>
      <Card className="w-[300px] h-[300px] flex items-center justify-center">
        <span className="text-muted-foreground">Hover me</span>
      </Card>
    </div>
  );
};

export default HoverToolbar;