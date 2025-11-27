import { GiveawaySection } from "@/components/sections/GiveawaySection";
import { FloatingChatButton } from "@/components/booking/FloatingChatButton";

export const metadata = {
  title: "Win a Free Wedding at Theos – Bridal Giveaway | Theos Galveston",
  description:
    "Enter to win a FREE Friday or Sunday wedding venue rental at Theos in downtown Galveston. Valid through March 31, 2026. Enter now!",
};

export default function GiveawayPage() {
  return (
    <>
      <GiveawaySection />
      <FloatingChatButton />
    </>
  );
}

