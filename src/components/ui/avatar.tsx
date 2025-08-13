function Avatar({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="h-12 w-12 shrink-0 overflow-hidden rounded-full ring-2 ring-black/5 dark:ring-white/10">
      <img src={src} alt={alt} className="h-full w-full object-cover" />
    </div>
  );
}

export default Avatar;
