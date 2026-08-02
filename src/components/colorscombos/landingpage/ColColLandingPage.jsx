import { HeroLabel, HeroTitle, HeroDescription } from "./l1/HeroText";
import FeatureShowcase from "./FeatureShowcase";
import {
  PickColorFeature,
  CopyColorFeature,
  SaveFavoritesFeature,
} from "./FeatureItems";

// --- adjust this to move the feature row up/down ---
// smaller = closer to the hero, larger = further down, negative = pulls it up (overlapping hero)
const FEATURES_TOP_SPACING = "48px";

export default function ColColLandingPage() {
  return (
    <div
      style={{
        fontFamily: "'Inter', -apple-system, sans-serif",
        background: "#000000",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "40px",
        }}
      >
        <div>
          <HeroLabel>Colors Combos pour vos projets</HeroLabel>
          <HeroTitle>
            Everything you need to explore, build, and save color palettes
          </HeroTitle>
          <HeroDescription>
            Explore thousands of color palettes, build your own from scratch,
            and save the combinations you love for later.
          </HeroDescription>

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "16px",
              marginTop: "32px",
            }}
          >
            <div style={{ flex: 1 }}>
              <PickColorFeature />
            </div>
            <div style={{ flex: 1 }}>
              <CopyColorFeature />
            </div>
            <div style={{ flex: 1 }}>
              <SaveFavoritesFeature />
            </div>
          </div>
        </div>

        <div style={{ height: "100%", display: "flex" }}>
          <FeatureShowcase />
        </div>
      </div>
    </div>
  );
}
