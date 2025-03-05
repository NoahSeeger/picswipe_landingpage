"use client";
import { useState } from "react";

export default function WaitlistForm() {
  const [message, setMessage] = useState<{
    text: string;
    type: "success" | "error";
  } | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const email = formData.get("email") as string;

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to join waitlist");
      }

      setMessage({ text: "Successfully joined waitlist!", type: "success" });
      form.reset();
    } catch (error) {
      console.error("Error:", error);
      setMessage({
        text:
          error instanceof Error
            ? error.message
            : "Failed to join waitlist. Please try again.",
        type: "error",
      });
    }
  };

  return (
    <div className="space-y-4 w-full max-w-sm px-4">
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Your email"
          className="w-full p-3 bg-gray-900 text-white border border-gray-800 rounded-lg focus:outline-none focus:border-gray-700 text-sm sm:text-base"
          required
        />
        <button
          type="submit"
          className="w-full p-3 mt-3 bg-white text-black rounded-lg hover:bg-gray-100 transition-colors text-sm sm:text-base relative overflow-hidden group"
        >
          <span className="relative z-10 font-bold">Join Waitlist</span>
          <span className="absolute inset-0 bg-gradient-to-r from-white to-gray-100 opacity-0 group-hover:opacity-10 transition-opacity"></span>
        </button>
      </form>

      {message && (
        <div
          className={`p-3 rounded-lg ${
            message.type === "success"
              ? "bg-green-500/10 text-green-500"
              : "bg-red-500/10 text-red-500"
          } text-sm transition-opacity duration-300`}
        >
          {message.text}
        </div>
      )}
    </div>
  );
}
