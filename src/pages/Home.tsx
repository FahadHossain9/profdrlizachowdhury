import { HomeHero } from '../components/content/HomeHero';
import { CredentialStrip } from '../components/content/CredentialStrip';
import { TreatmentBento } from '../components/content/TreatmentBento';
import { TrustPillars } from '../components/content/TrustPillars';
import { JourneyPreview } from '../components/content/JourneyPreview';
import { LabTeaser } from '../components/content/LabTeaser';
import { ChamberMap } from '../components/content/ChamberMap';
import { LearningPreview } from '../components/content/LearningPreview';
import { StoryPreview } from '../components/content/StoryPreview';
import { FinalCTA } from '../components/content/FinalCTA';

export default function Home() {
  return (
    <>
      <HomeHero />
      <CredentialStrip />
      <TreatmentBento />
      <TrustPillars />
      <JourneyPreview />
      <LabTeaser />
      <LearningPreview />
      <ChamberMap />
      <StoryPreview />
      <FinalCTA />
    </>
  );
}
