export default function Loading() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center">
      <div className="text-center">
        <div className="mx-auto h-10 w-10 animate-spin rounded-full border-2 border-cream border-t-blush" />
        <p className="mt-4 text-sm text-ink-muted">Loading...</p>
      </div>
    </div>
  );
}
