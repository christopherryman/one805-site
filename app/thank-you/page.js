export default function ThankYou() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white text-center px-4">
      <div>
        <h1 className="text-3xl font-bold mb-4">
          Thank You for your ticket reservation
        </h1>

        <p className="text-white/70 max-w-md mx-auto">
          Our management will reach out to your email for payment and final ticket purchasing.
          Please keep your email handy.
        </p>
      </div>
    </div>
  );
}