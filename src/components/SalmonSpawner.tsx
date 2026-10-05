import { useRef, useState } from "preact/hooks";

interface SalmonInstance {
  id: number;
  x: number;
  y: number;
  flipped: boolean;
}

const SALMON_SIZE = 200;

function Salmon({ salmon }: { salmon: SalmonInstance }) {
  const [pos, setPos] = useState({ x: salmon.x, y: salmon.y });
  const drag = useRef<{ startX: number; startY: number; baseX: number; baseY: number } | null>(null);

  const onPointerDown = (event: PointerEvent) => {
    event.preventDefault();
    (event.currentTarget as HTMLElement).setPointerCapture(event.pointerId);
    drag.current = {
      startX: event.clientX,
      startY: event.clientY,
      baseX: pos.x,
      baseY: pos.y,
    };
  };

  const onPointerMove = (event: PointerEvent) => {
    if (!drag.current) return;
    setPos({
      x: drag.current.baseX + (event.clientX - drag.current.startX),
      y: drag.current.baseY + (event.clientY - drag.current.startY),
    });
  };

  const onPointerUp = () => {
    drag.current = null;
  };

  return (
    <div
      style={{
        position: "absolute",
        left: 0,
        top: 0,
        transform: `translate(${pos.x}px, ${pos.y}px) ${salmon.flipped ? "scaleX(-1)" : ""}`,
        width: SALMON_SIZE,
        cursor: "move",
        touchAction: "none",
        zIndex: 50,
        pointerEvents: "auto",
      }}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
    >
      <img
        src="/img/salmon-icon.svg"
        alt="Salmon"
        width={SALMON_SIZE}
        height={SALMON_SIZE}
        draggable={false}
        style={{ width: "100%", height: "auto" }}
      />
    </div>
  );
}

export default function SalmonSpawner() {
  const [salmons, setSalmons] = useState<SalmonInstance[]>([]);

  const spawnSalmon = () => {
    const x = Math.random() * Math.max(0, window.innerWidth - SALMON_SIZE);
    const y =
      Math.random() * Math.max(0, window.innerHeight - SALMON_SIZE) +
      window.scrollY;
    setSalmons((prev) => [
      ...prev,
      { id: Date.now() + prev.length, x, y, flipped: Math.random() > 0.5 },
    ]);
  };

  return (
    <>
      <div style={{ position: "absolute", top: 0, left: 0, overflow: "visible", pointerEvents: "none", width: "100%", height: 0 }}>
        {salmons.map((salmon) => (
          <Salmon key={salmon.id} salmon={salmon} />
        ))}
      </div>
      <button
        type="button"
        title="Spawn Salmon"
        onClick={spawnSalmon}
        class="fixed bottom-4 right-4 z-40 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border-none bg-water font-mono text-xl leading-none text-bg shadow-md transition-transform duration-100 hover:scale-110"
      >
        +
      </button>
    </>
  );
}
