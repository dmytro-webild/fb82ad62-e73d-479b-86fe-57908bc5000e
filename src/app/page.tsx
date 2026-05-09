"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import FeatureCardTwentyFour from '@/components/sections/feature/FeatureCardTwentyFour';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import HeroSplitTestimonial from '@/components/sections/hero/HeroSplitTestimonial';
import MetricCardEleven from '@/components/sections/metrics/MetricCardEleven';
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import PricingCardEight from '@/components/sections/pricing/PricingCardEight';
import TestimonialCardTen from '@/components/sections/testimonial/TestimonialCardTen';
import TextAbout from '@/components/sections/about/TextAbout';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="hover-bubble"
        defaultTextAnimation="reveal-blur"
        borderRadius="pill"
        contentWidth="compact"
        sizing="largeSmallSizeMediumTitles"
        background="circleGradient"
        cardStyle="gradient-radial"
        primaryButtonStyle="radial-glow"
        secondaryButtonStyle="glass"
        headingFontWeight="semibold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingInline
      navItems={[
        {
          name: "System",
          id: "about",
        },
        {
          name: "Daily Quests",
          id: "features",
        },
        {
          name: "Leaderboard",
          id: "metrics",
        },
        {
          name: "Premium",
          id: "pricing",
        },
      ]}
      brandName="Solo Quest"
      button={{
        text: "Login",
        href: "/login",
      }}
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroSplitTestimonial
      background={{
        variant: "plain",
      }}
      title="Rise Above the Ordinary"
      description="The system has initialized. Track your daily life as a series of epic quests. Level up your reality, gain XP, and climb the global rankings."
      testimonials={[
        {
          name: "Jin-Woo L.",
          handle: "@shadow_monarch",
          testimonial: "This system transformed my daily routine into an actual adventure. Leveling up feels addictive.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/man-portrait-with-blue-lights-visual-effects_23-2149419476.jpg?_wi=1",
        },
        {
          name: "Sung-Ah",
          handle: "@mage_c",
          testimonial: "The daily rewards are motivating! The leaderboard competition is fierce.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/man-with-laptop-doing-thumbs-up-gesture_23-2148022748.jpg?_wi=1",
        },
        {
          name: "Jinho Y.",
          handle: "@best_friend",
          testimonial: "Finally, a way to visualize my productivity stats like a real RPG.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/pov-businessman-attending-videocall-meeting-office-using-online-videoconference-talk-consultant-about-financial-strategy-company-employee-chatting-remote-teleconference-close-up_482257-40929.jpg?_wi=1",
        },
        {
          name: "Hae-In C.",
          handle: "@s_rank_healer",
          testimonial: "The interface is so intuitive, it feels like I'm playing a game every single day.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/brunette-girl-giving-thumb-up_23-2147650951.jpg?_wi=1",
        },
        {
          name: "Thomas A.",
          handle: "@tanker_pro",
          testimonial: "The metrics keep me accountable. Never missing a day now.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-man-playing-videogame_23-2149349990.jpg?_wi=1",
        },
      ]}
      buttons={[
        {
          text: "Begin Quest",
          href: "#about",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-vector/collection-futuristic-infographic-elements_52683-16699.jpg"
      mediaAnimation="slide-up"
      avatars={[
        {
          src: "http://img.b2bpic.net/free-vector/futuristic-infographic-template_23-2148446452.jpg",
          alt: "user avatar 1",
        },
        {
          src: "http://img.b2bpic.net/free-vector/futuristic-textbox-callout-titles-scifi-tech-borders-hud-frames_88138-1008.jpg",
          alt: "user avatar 2",
        },
        {
          src: "http://img.b2bpic.net/free-vector/blue-technological-background_1406-11.jpg",
          alt: "user avatar 3",
        },
        {
          src: "http://img.b2bpic.net/free-vector/futuristic-digital-user-interface-dashboard_53876-115874.jpg",
          alt: "user avatar 4",
        },
        {
          src: "http://img.b2bpic.net/free-photo/eye-icon-front-side_187299-45825.jpg",
          alt: "user avatar 5",
        },
      ]}
      marqueeItems={[
        {
          type: "text",
          text: "Level Up Your Life",
        },
        {
          type: "text",
          text: "Daily XP Tracking",
        },
        {
          type: "text",
          text: "Elite Leaderboards",
        },
        {
          type: "text",
          text: "System Rewards",
        },
        {
          type: "text",
          text: "Real-time Alerts",
        },
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <TextAbout
      useInvertedBackground={true}
      title="Your New Reality Awaits"
      buttons={[
        {
          text: "Learn the System",
          href: "#",
        },
      ]}
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardTwentyFour
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={false}
      features={[
        {
          id: "1",
          title: "Daily Quests",
          author: "Automated System",
          description: "Dynamic daily task generation based on your goals.",
          imageSrc: "http://img.b2bpic.net/free-photo/3d-graph-computer-illustration_23-2151884874.jpg",
        },
        {
          id: "2",
          title: "Global Leaderboards",
          author: "Guild Management",
          description: "Compete against players worldwide for the top rank.",
          imageSrc: "http://img.b2bpic.net/free-photo/new-year-2025-neon-wallpaper_23-2151891984.jpg",
        },
        {
          id: "3",
          title: "Real-time Alerts",
          author: "System Admin",
          description: "Never miss a quest deadline with push notifications.",
          imageSrc: "http://img.b2bpic.net/free-photo/3d-render-search-bar-magnifying-glass-icons_107791-15017.jpg",
        },
      ]}
      title="Master Your Quests"
      description="Complete daily tasks to earn XP and rewards, but be careful—the system punishes those who lag behind."
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardEleven
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={true}
      metrics={[
        {
          id: "m1",
          value: "100",
          title: "Max Level",
          description: "Reach the pinnacle of human potential.",
          imageSrc: "http://img.b2bpic.net/free-vector/video-game-elements-collection_23-2150268286.jpg",
        },
        {
          id: "m2",
          value: "500k+",
          title: "Active Players",
          description: "Players currently in the system.",
          imageSrc: "http://img.b2bpic.net/free-photo/digital-led-scoreboard-display_187299-47140.jpg",
        },
        {
          id: "m3",
          value: "94%",
          title: "Daily Completion",
          description: "Rate of quest success.",
          imageSrc: "http://img.b2bpic.net/free-photo/variety-people-multitasking-3d-cartoon-scene_23-2151294543.jpg",
        },
      ]}
      title="System Performance"
      description="Tracking your growth data across the entire Solo Quest network."
    />
  </div>

  <div id="pricing" data-section="pricing">
      <PricingCardEight
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={false}
      plans={[
        {
          id: "free",
          badge: "Base Class",
          price: "$0",
          subtitle: "For early awakeners",
          features: [
            "Daily Quests",
            "Basic Stats",
          ],
          buttons: [
            {
              text: "Free",
              href: "#",
            },
          ],
        },
        {
          id: "premium",
          badge: "S-Rank Status",
          price: "$9.99",
          subtitle: "For power-levelers",
          features: [
            "Double XP Bonus",
            "Elite Leaderboards",
            "Ad-free Experience",
          ],
          buttons: [
            {
              text: "Upgrade",
              href: "#",
            },
          ],
        },
      ]}
      title="Unlock Premium Tiers"
      description="Upgrade your account to gain exclusive benefits and boost your leveling speed."
    />
  </div>

  <div id="testimonial" data-section="testimonial">
      <TestimonialCardTen
      textboxLayout="split"
      useInvertedBackground={true}
      testimonials={[
        {
          id: "t1",
          title: "Amazing UI",
          quote: "The aesthetic is absolutely unmatched.",
          name: "User 1",
          role: "F-Rank",
          imageSrc: "http://img.b2bpic.net/free-photo/man-portrait-with-blue-lights-visual-effects_23-2149419476.jpg?_wi=2",
        },
        {
          id: "t2",
          title: "Best App",
          quote: "I've leveled up so much faster.",
          name: "User 2",
          role: "E-Rank",
          imageSrc: "http://img.b2bpic.net/free-photo/man-with-laptop-doing-thumbs-up-gesture_23-2148022748.jpg?_wi=2",
        },
        {
          id: "t3",
          title: "Highly Recommend",
          quote: "Competitive and fun every day.",
          name: "User 3",
          role: "D-Rank",
          imageSrc: "http://img.b2bpic.net/free-photo/pov-businessman-attending-videocall-meeting-office-using-online-videoconference-talk-consultant-about-financial-strategy-company-employee-chatting-remote-teleconference-close-up_482257-40929.jpg?_wi=2",
        },
        {
          id: "t4",
          title: "Addictive",
          quote: "The daily stakes really work.",
          name: "User 4",
          role: "C-Rank",
          imageSrc: "http://img.b2bpic.net/free-photo/brunette-girl-giving-thumb-up_23-2147650951.jpg?_wi=2",
        },
        {
          id: "t5",
          title: "Top Tier",
          quote: "I feel like a S-Rank player.",
          name: "User 5",
          role: "B-Rank",
          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-man-playing-videogame_23-2149349990.jpg?_wi=2",
        },
      ]}
      title="Voices from the Battlefield"
      description="See what high-ranked players have to say about the Solo Quest experience."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqDouble
      textboxLayout="split"
      useInvertedBackground={false}
      faqs={[
        {
          id: "1",
          title: "What happens if I miss a quest?",
          content: "You will suffer a penalty in your XP progression and character status.",
        },
        {
          id: "2",
          title: "How do I level up?",
          content: "By consistently completing your daily tasks and meeting guild targets.",
        },
        {
          id: "3",
          title: "What is premium?",
          content: "Premium status provides double XP, custom skins, and advanced analytics.",
        },
      ]}
      title="Frequently Asked Questions"
      description="Everything you need to know about the system."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplit
      useInvertedBackground={true}
      background={{
        variant: "plain",
      }}
      tag="Contact Admin"
      title="Send a Dispatch"
      description="Have issues with your system? Send a dispatch to the guild management team."
      imageSrc="http://img.b2bpic.net/free-photo/adventure-seeker-stands-mountain-peak-isolated-chroma-key_482257-119657.jpg"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterLogoEmphasis
      columns={[
        {
          items: [
            {
              label: "System",
              href: "#",
            },
            {
              label: "Support",
              href: "#",
            },
          ],
        },
        {
          items: [
            {
              label: "Privacy",
              href: "#",
            },
            {
              label: "Terms",
              href: "#",
            },
          ],
        },
      ]}
      logoText="Solo Quest"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
