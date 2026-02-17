import { GenerationConfig, PricingPlan } from "./PlanCard";
export type PlanKey = "silver" | "gold" | "platinum";
export const generationConfig: GenerationConfig = {
  creditsPerImage: 1,
  selectedImages: 10,
  minImages: 10,
  maxImages: 150,
  step: 20,
};

export type FeatureValue = boolean | string | number;

export interface ComparisonFeature {
  id: string;
  label: string;
  values: Record<PlanKey, FeatureValue>;
}

export interface ComparisonSection {
  id: string;
  title: string;
  features: ComparisonFeature[];
}

export const planComparison: ComparisonSection[] = [
  {
    id: "core",
    title: "Core Platform Capabilities",
    features: [
      {
        id: "max_output_resolution",
        label: "Max Output Resolution",
        values: { silver: "HD (up to 1080px)", gold: "2K (up to 2048px)", platinum: "2K (up to 2048px)" },
      },
      {
        id: "upscale_4k",
        label: "4K Upscale",
        values: { silver: false, gold: true, platinum: true },
      },
      {
        id: "regenerations_per_image",
        label: "Regenerations per image",
        values: { silver: 1, gold: 1, platinum: 2 },
      },
      {
        id: "brand_safe_outputs_no_watermark",
        label: "Brand-safe outputs (No watermark)",
        values: { silver: true, gold: true, platinum: true },
      },
      {
        id: "max_upload_file_size",
        label: "Max upload file size",
        values: { silver: "15 MB", gold: "15 MB", platinum: "15 MB" },
      },

    ],
  },
  {
    id: "scale",
    title: "AI Photoshoot & Virtual Try-On",
    features: [
      {
        id: "ai_powered_photoshoot_workflows",
        label: "AI-powered photoshoot workflows",
        values: {
          silver: true,
          gold: true,
          platinum: true,
        },
      },
      {
        id: "unstitched_ai_virtual_try_on",
        label: "Unstitched AI virtual try-on",
        values: { silver: true, gold: true, platinum: true },
      },
      {
        id: "pose_creation_per_photoshoot",
        label: "Pose creation per photoshoot",
        values: { silver: "MAX 2", gold: "MAX 5", platinum: "MAX 8" },
      },
      {
        id: "pose_library",
        label: "Pose library",
        values: { silver: "100+ poses", gold: "100+ poses", platinum: "100+ poses" },
      },
      {
        id: "pre_built_ai_model_support",
        label: "Pre-built AI model support",
        values: { silver: "1000+ models", gold: "1000+ models", platinum: "1000+ models" },
      },
      {
        id: "nationality_diversity",
        label: "Nationality diversity",
        values: { silver: false, gold: "20+ nationalities", platinum: "20+ nationalities" },
      },
      {
        id: "special_categories_support",
        label: "Special categories support (Obese models & Minors)",
        values: { silver: false, gold: true, platinum: true },
      },
      {
        id: "background_library",
        label: "Background library",
        values: { silver: false, gold: "150+ backgrounds", platinum: "150+ backgrounds" },
      },
      {
        id: "jewellery_support",
        label: "Jewellery support",
        values: { silver: false, gold: "100+ styles", platinum: "100+ styles" },
      },
      {
        id: "jewellery_support",
        label: "Jewellery support",
        values: { silver: false, gold: "100+ styles", platinum: "100+ styles" },
      },
      {
        id: "accessories_support",
        label: "Accessories support",
        values: { silver: false, gold: false, platinum: "100+ styles" },
      },
      {
        id: "custom_model_creation",
        label: "Custom model creation",
        values: { silver: false, gold: true, platinum: true },
      },
    ],
  },
  {
    id: "refine",
    title: "Lifestyle Photography & Content",
    features: [
      {
        id: "ready_to_list_ecommerce_images",
        label: "Ready-to-list eCommerce images",
        values: { silver: false, gold: true, platinum: true },
      },
      {
        id: "banner_creation_from_product_images",
        label: "Banner creation from product images",
        values: { silver: false, gold: true, platinum: true },
      },
      {
        id: "content_support_for_ecommerce_affiliation",
        label: "Content support for eCommerce & affiliation",
        values: {
          silver: false,
          gold: true,
          platinum: true,
        },
      },
      {
        id: "platform_ready_crops",
        label: "Platform-ready crops (Amazon, Myntra, Shopify, etc.)",
        values: { silver: false, gold: true, platinum: true },
      },

    ],
  },
  {
    id: "team",
    title: "Ad Studio",
    features: [
      {
        id: "static_ad_creatives_from_product_images",
        label: "Static ad creatives from product images",
        values: {
          silver: false,
          gold: true,
          platinum: true,
        },
      },
      {
        id: "video_ad_creation",
        label: "Video ad creation",
        values: { silver: false, gold: true, platinum: true },
      },
    ],
  },
  {
    id: "support",
    title: "Refinement & Delivery",
    features: [
      {
        id: "photoshoot_turnaround_time",
        label: "Photoshoot turnaround time",
        values: {
          silver: "3 working days",
          gold: "2 working days",
          platinum: "1 working day",
        },
      },
      {
        id: "priority_processing",
        label: "Priority processing",
        values: {
          silver: false,
          gold: true,
          platinum: true,
        },
      },

    ],
  },
  {
    id: "data_access_storage_policy",
    title: "Data Access & Storage Policy",
    features: [
      {
        id: "access_to_previously_generated_data",
        label: "Access to previously generated data",
        values: {
          silver: "7 days",
          gold: "30 days",
          platinum: "90 days",
        },
      },
      {
        id: "max_generated_images_stored_in_gallery",
        label: "Max generated images stored in gallery",
        values: {
          silver: "20 images",
          gold: "100 images",
          platinum: "300 images",
        },
      },
      {
        id: "auto_removal_of_old_generated_images",
        label: "Auto-removal of old generated images",
        values: {
          silver: "After 7 days",
          gold: "After 30 days",
          platinum: "After 90 days",
        },
      },
      {
        id: "storage_limit_notification",
        label: "Storage limit notification",
        values: {
          silver: false,
          gold: true,
          platinum: true,
        },
      },
      {
        id: "manual_storage_cleanup_option",
        label: "Manual storage cleanup option",
        values: {
          silver: false,
          gold: true,
          platinum: true,
        },
      },

    ],
  },
  {
    id: "team_support",
    title: "Team & Support",
    features: [
      {
        id: "included_users",
        label: "Included users",
        values: {
          silver: "1 ",
          gold: "upto 4 ",
          platinum: "upto 10 ",
        },
      },
      {
        id: "early_access_to_new_ai_updates",
        label: "Early access to new AI updates",
        values: {
          silver: false,
          gold: false,
          platinum: true,
        },
      },
      {
        id: "dedicated_support_number",
        label: "Dedicated support number",
        values: {
          silver: false,
          gold: false,
          platinum: true,
        },
      },
      {
        id: "dedicated_account_manager",
        label: "Dedicated account manager",
        values: {
          silver: false,
          gold: false,
          platinum: true,
        },
      },

    ],
  },
];

export const pricingPlans: PricingPlan[] = [
  {
    id: "features",
    name: "Features",
    description: "For early brands and creators. Start with the core tools.",
    price: 49.9,
    currency: "INR",
    creditsIncluded: "Credits Included",
    ctaText: "Purchase Plan",
  },
  {
    id: "silver",
    name: "Silver",
    description: "For early brands and creators. Start with the core tools.",
    price: 49.9,
    currency: "INR",
    creditsIncluded: 10,
    ctaText: "Start Silver",
  },
  {
    id: "gold",
    name: "Gold",
    description: "For growing teams. More assets and custom models.",
    price: 64.9,
    currency: "INR",
    popular: true,
    creditsIncluded: 10,
    highlighted: true,
    ctaText: "Start Gold",
  },
  {
    id: "platinum",
    name: "Platinum",
    description: "For high-velocity teams. Maximum scale and performance.",
    price: 99.9,
    currency: "INR",
    creditsIncluded: 10,
    disabled: true,
    ctaText: "Start Platinum",
  },
];
