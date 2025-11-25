"use client";

import { useState } from "react";
import { MessageCircle } from "lucide-react";
import { Modal } from "@/components/ui/Modal";
import { ChatConcierge } from "@/components/booking/ChatConcierge";

export const FloatingChatButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-charcoal text-parchment shadow-lg transition hover:scale-110 hover:shadow-xl"
        aria-label="Open chat"
      >
        <MessageCircle className="h-6 w-6" />
      </button>

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} ariaLabel="Chat with Theos">
        <div className="max-w-3xl w-full">
          <ChatConcierge />
        </div>
      </Modal>
    </>
  );
};

