import About from "@/components/about";
import Experience from "@/components/experience";
import Footer from "@/components/footer";
import Overview from "@/components/overview/overview";
import ProfileCover from "@/components/profile/ProfileCover";
import ProfileHeader from "@/components/profile/ProfileHeader";
import Projects from "@/components/projects/projects";
import SocialLinks from "@/components/sociallinks/SocialLinks";
import Techstack from "@/components/techstack";
import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <div className="mx-auto md:max-w-3xl">

      <ProfileCover/>
      <ProfileHeader/>
      <Separator/>

      <Overview/>
      <Separator/>

      <SocialLinks/>
      <Separator/>

      <About/>
      <Separator/>

      <Techstack/>
      <Separator/>

      <Experience/>
      <Separator/>

      <Projects/>

      <Footer/>
      <Separator/>
      {/* <div className="screen-line-before"></div> */}

    </div>
  );
};

function Separator({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative flex h-8 w-full border-x border-edge",
        "before:absolute before:-left-[100vw] before:-z-1 before:h-8 before:w-[200vw]",
        "before:bg-[repeating-linear-gradient(315deg,var(--pattern-foreground)_0,var(--pattern-foreground)_1px,transparent_0,transparent_50%)] before:bg-size-[10px_10px] before:[--pattern-foreground:var(--color-edge)]/56",
        className
      )}
    />
  );
};
