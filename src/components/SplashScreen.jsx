import { EncryptedText } from "@/components/ui/encrypted-text";

export default function SplashScreen() {
  return (
    <div className="fixed inset-0 z-9999 flex items-center justify-center bg-(--bg)">
      <h1 className="text-3xl font-bold md:text-3xl">
        <EncryptedText
          text="Midnight Sphere"
          encryptedClassName="text-[var(--text-muted)]"
          revealedClassName="text-[var(--text)]"
          revealDelayMs={40}
        />
      </h1>
    </div>
  );
}