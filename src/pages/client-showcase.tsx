"use client";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect, useRef, useCallback } from "react";

// --- Types ---
interface TestimonialImage {
	id: string;
	src: string; // placeholder color
	alt: string;
	label?: string;
}

interface Section {
	id: string;
	label: string;
	title: string;
	subtitle?: string;
	items: TestimonialCard[];
}

interface TestimonialCard {
	id: string;
	images: string[]; // array of placeholder colors (simulate multiple photos)
	testimonial?: {
		time: string;
		title: string;
		text: string;
		author?: string;
	};
	span?: "wide" | "tall" | "normal";
}

// --- Data ---
const SECTIONS: Section[] = [
	{
		id: "ethenic-male",
		label: "Ethenic Male",
		title: "Ethnic Male ",
		items: [
			{
				id: "s1",
				images: [
					"https://ai4fi.s3.amazonaws.com/Visual Portfolio/Male_Ethenic/1/Generated Image February 21, 2026 - 7_38PM.jpeg",
					"https://ai4fi.s3.amazonaws.com/Visual Portfolio/Male_Ethenic/1/Generated Image February 21, 2026 - 7_40PM.jpeg",
					"https://ai4fi.s3.amazonaws.com/Visual Portfolio/Male_Ethenic/1/Generated Image February 21, 2026 - 7_41PM.jpeg",
					"https://ai4fi.s3.amazonaws.com/Visual Portfolio/Male_Ethenic/1/Generated Image February 21, 2026 - 7_42PM.jpeg",
					"https://ai4fi.s3.amazonaws.com/Visual Portfolio/Male_Ethenic/1/Generated Image February 21, 2026 - 7_55PM.jpeg",
					"https://ai4fi.s3.amazonaws.com/Visual Portfolio/Male_Ethenic/1/Generated Image February 21, 2026 - 7_57PM.jpeg",
				],
				span: "tall",
			},
			{
				id: "s2",
				images: [
					"https://ai4fi.s3.amazonaws.com/Visual Portfolio/Male_Ethenic/2/Generated Image February 21, 2026 - 6_57PM.jpeg",
					"https://ai4fi.s3.amazonaws.com/Visual Portfolio/Male_Ethenic/2/Generated Image February 21, 2026 - 7_00PM.jpeg",
					"https://ai4fi.s3.amazonaws.com/Visual Portfolio/Male_Ethenic/2/Generated Image February 21, 2026 - 7_12PM.jpeg",
					"https://ai4fi.s3.amazonaws.com/Visual Portfolio/Male_Ethenic/2/Generated Image February 21, 2026 - 7_14PM.jpeg",
					"https://ai4fi.s3.amazonaws.com/Visual Portfolio/Male_Ethenic/2/Generated Image February 21, 2026 - 7_33PM.jpeg",
				],
				testimonial: {
					time: "Instant",
					title: "Sarah J.",
					text: "The AI virtual try-on is incredibly accurate. I can see how clothes fit my body without ever leaving home. It has redefined how I shop.",
					author: "Sarah J.",
				},
			},
			{
				id: "s3",
				images: [
					"https://ai4fi.s3.amazonaws.com/Visual Portfolio/Male_Ethenic/3/Generated Image February 22, 2026 - 12_20PM.jpeg",
					"https://ai4fi.s3.amazonaws.com/Visual Portfolio/Male_Ethenic/3/Generated Image February 22, 2026 - 12_22PM.jpeg",
					"https://ai4fi.s3.amazonaws.com/Visual Portfolio/Male_Ethenic/3/Generated Image February 22, 2026 - 12_24PM.jpeg",
					"https://ai4fi.s3.amazonaws.com/Visual Portfolio/Male_Ethenic/3/Generated Image February 22, 2026 - 12_26PM.jpeg",
					"https://ai4fi.s3.amazonaws.com/Visual Portfolio/Male_Ethenic/3/Generated Image February 22, 2026 - 12_30PM.jpeg",
				],
				span: "tall",
			},
			{
				id: "s4",
				span: "tall",
				images: [
					"https://ai4fi.s3.amazonaws.com/Visual Portfolio/Male_Ethenic/4/Generated Image February 22, 2026 - 12_35PM.jpeg",
					"https://ai4fi.s3.amazonaws.com/Visual Portfolio/Male_Ethenic/4/Generated Image February 22, 2026 - 12_36PM.jpeg",
					"https://ai4fi.s3.amazonaws.com/Visual Portfolio/Male_Ethenic/4/Generated Image February 22, 2026 - 12_38PM.jpeg",
					"https://ai4fi.s3.amazonaws.com/Visual Portfolio/Male_Ethenic/4/Generated Image February 22, 2026 - 12_50PM.jpeg",
				],
			},
			{
				id: "s5",
				images: [
					"https://ai4fi.s3.amazonaws.com/Visual Portfolio/Male_Ethenic/5/Generated Image February 22, 2026 - 12_56PM.jpeg",
					"https://ai4fi.s3.amazonaws.com/Visual Portfolio/Male_Ethenic/5/Generated Image February 22, 2026 - 12_59PM.jpeg",
					"https://ai4fi.s3.amazonaws.com/Visual Portfolio/Male_Ethenic/5/Generated Image February 22, 2026 - 1_01PM.jpeg",
					"https://ai4fi.s3.amazonaws.com/Visual Portfolio/Male_Ethenic/5/Generated Image February 22, 2026 - 1_03PM.jpeg",
				],
				span: "tall",
			},
			{
				id: "s6",
				images: [
					"https://ai4fi.s3.amazonaws.com/Visual Portfolio/Male_Ethenic/6/Generated Image February 22, 2026 - 1_07PM.jpeg",
					"https://ai4fi.s3.amazonaws.com/Visual Portfolio/Male_Ethenic/6/Generated Image February 22, 2026 - 1_12PM (1).jpeg",
					"https://ai4fi.s3.amazonaws.com/Visual Portfolio/Male_Ethenic/6/Generated Image February 22, 2026 - 1_12PM.jpeg",
					"https://ai4fi.s3.amazonaws.com/Visual Portfolio/Male_Ethenic/6/Generated Image February 22, 2026 - 1_14PM.jpeg",
				],
				span: "tall",
			},
			{
				id: "s7",
				images: [
					"https://ai4fi.s3.amazonaws.com/Visual Portfolio/Male_Ethenic/7/Generated Image February 22, 2026 - 1_24PM.jpeg",
					"https://ai4fi.s3.amazonaws.com/Visual Portfolio/Male_Ethenic/7/Generated Image February 22, 2026 - 1_28PM.jpeg",
					"https://ai4fi.s3.amazonaws.com/Visual Portfolio/Male_Ethenic/7/Generated Image February 22, 2026 - 1_31PM.jpeg",
					"https://ai4fi.s3.amazonaws.com/Visual Portfolio/Male_Ethenic/7/Generated Image February 22, 2026 - 1_36PM.jpeg",
				],
				testimonial: {
					time: "Real-time",
					title: "Style Assist",
					text: "AI4FI's stylist suggests outfits based on my body type and skin tone. It's like having a personal fashion consultant 24/7.",
					author: "Marcus K.",
				},
			},
			{
				id: "s8",
				images: [
					"https://ai4fi.s3.amazonaws.com/Visual Portfolio/Male_Ethenic/8/Gemini_Generated_Image_mfuw6pmfuw6pmfuw.png",
					"https://ai4fi.s3.amazonaws.com/Visual Portfolio/Male_Ethenic/8/Gemini_Generated_Image_pboijcpboijcpboi.png",
					"https://ai4fi.s3.amazonaws.com/Visual Portfolio/Male_Ethenic/8/Gemini_Generated_Image_qimfd9qimfd9qimf.png",
					"https://ai4fi.s3.amazonaws.com/Visual Portfolio/Male_Ethenic/8/Generated Image February 22, 2026 - 1_42PM.jpeg",
				],
				span: "tall",
			},
		],
	},
	{
		id: "ethenic-female",
		label: "Ethenic Female ",
		title: "Ethnic Female",
		items: [
			{
				id: "s1",
				images: [
					"https://ai4fi.s3.amazonaws.com/Visual Portfolio/Male_Casual/1/Generated Image February 22, 2026 - 3_32PM.jpeg",
					"https://ai4fi.s3.amazonaws.com/Visual Portfolio/Male_Casual/1/Generated Image February 22, 2026 - 3_33PM (1).jpeg",
					"https://ai4fi.s3.amazonaws.com/Visual Portfolio/Male_Casual/1/Generated Image February 22, 2026 - 3_33PM.jpeg",
					"https://ai4fi.s3.amazonaws.com/Visual Portfolio/Male_Casual/1/Generated Image February 22, 2026 - 3_34PM.jpeg",
					"https://ai4fi.s3.amazonaws.com/Visual Portfolio/Male_Casual/1/Generated Image February 22, 2026 - 3_36PM.jpeg",
				],
				span: "tall",
			},
			{
				id: "s2",
				images: [
					"https://ai4fi.s3.amazonaws.com/Visual Portfolio/Male_Casual/2/Generated Image February 22, 2026 - 3_37PM.jpeg",
					"https://ai4fi.s3.amazonaws.com/Visual Portfolio/Male_Casual/2/Generated Image February 22, 2026 - 3_38PM (1).jpeg",
					"https://ai4fi.s3.amazonaws.com/Visual Portfolio/Male_Casual/2/Generated Image February 22, 2026 - 3_38PM.jpeg",
					"https://ai4fi.s3.amazonaws.com/Visual Portfolio/Male_Casual/2/Generated Image February 22, 2026 - 3_39PM.jpeg",
					"https://ai4fi.s3.amazonaws.com/Visual Portfolio/Male_Casual/2/Generated Image February 22, 2026 - 3_40PM.jpeg",
				],
				testimonial: {
					time: "Instant",
					title: "Sarah J.",
					text: "The AI virtual try-on is incredibly accurate. I can see how clothes fit my body without ever leaving home. It has redefined how I shop.",
					author: "Sarah J.",
				},
			},
			{
				id: "s3",
				images: [
					"https://ai4fi.s3.amazonaws.com/Visual Portfolio/Male_Casual/3/Generated Image February 22, 2026 - 3_44PM (1).jpeg",
					"https://ai4fi.s3.amazonaws.com/Visual Portfolio/Male_Casual/3/Generated Image February 22, 2026 - 3_44PM.jpeg",
					"https://ai4fi.s3.amazonaws.com/Visual Portfolio/Male_Casual/3/Generated Image February 22, 2026 - 3_46PM.jpeg",
					"https://ai4fi.s3.amazonaws.com/Visual Portfolio/Male_Casual/3/Generated Image February 22, 2026 - 3_47PM.jpeg",
				],
				span: "tall",
			},
			{
				id: "s4",
				span: "tall",
				images: [
					"https://ai4fi.s3.amazonaws.com/Visual Portfolio/Male_Casual/4/Generated Image February 22, 2026 - 3_48PM.jpeg",
					"https://ai4fi.s3.amazonaws.com/Visual Portfolio/Male_Casual/4/Generated Image February 22, 2026 - 3_50PM.jpeg",
					"https://ai4fi.s3.amazonaws.com/Visual Portfolio/Male_Casual/4/Generated Image February 22, 2026 - 3_52PM.jpeg",
					"https://ai4fi.s3.amazonaws.com/Visual Portfolio/Male_Casual/4/Generated Image February 22, 2026 - 3_56PM.jpeg",
					"https://ai4fi.s3.amazonaws.com/Visual Portfolio/Male_Casual/4/Generated Image February 22, 2026 - 4_58PM.jpeg",
				],
			},
			{
				id: "s5",
				images: [
					"https://ai4fi.s3.amazonaws.com/Visual Portfolio/Male_Casual/5/Generated Image February 22, 2026 - 8_00PM.jpeg",
					"https://ai4fi.s3.amazonaws.com/Visual Portfolio/Male_Casual/5/Generated Image February 22, 2026 - 8_01PM.jpeg",
					"https://ai4fi.s3.amazonaws.com/Visual Portfolio/Male_Casual/5/Generated Image February 22, 2026 - 8_02PM.jpeg",
					"https://ai4fi.s3.amazonaws.com/Visual Portfolio/Male_Casual/5/Generated Image February 22, 2026 - 8_03PM.jpeg",
					"https://ai4fi.s3.amazonaws.com/Visual Portfolio/Male_Casual/5/Generated Image February 22, 2026 - 8_05PM.jpeg",
				],
				span: "tall",
			},
			{
				id: "s6",
				images: [
					"https://ai4fi.s3.amazonaws.com/Visual Portfolio/Male_Casual/6/Generated Image February 22, 2026 - 8_05PM.jpeg",
					"https://ai4fi.s3.amazonaws.com/Visual Portfolio/Male_Casual/6/Generated Image February 22, 2026 - 8_07PM.jpeg",
					"https://ai4fi.s3.amazonaws.com/Visual Portfolio/Male_Casual/6/Generated Image February 22, 2026 - 8_08PM.jpeg",
					"https://ai4fi.s3.amazonaws.com/Visual Portfolio/Male_Casual/6/Generated Image February 22, 2026 - 8_10PM (1).jpeg",
					"https://ai4fi.s3.amazonaws.com/Visual Portfolio/Male_Casual/6/Generated Image February 22, 2026 - 8_10PM.jpeg",
				],
				span: "tall",
			},
			{
				id: "s7",
				images: [
					"https://ai4fi.s3.amazonaws.com/Visual Portfolio/Male_Casual/7/Generated Image February 22, 2026 - 8_12PM.jpeg",
					"https://ai4fi.s3.amazonaws.com/Visual Portfolio/Male_Casual/7/Generated Image February 22, 2026 - 8_13PM (1).jpeg",
					"https://ai4fi.s3.amazonaws.com/Visual Portfolio/Male_Casual/7/Generated Image February 22, 2026 - 8_13PM.jpeg",
					"https://ai4fi.s3.amazonaws.com/Visual Portfolio/Male_Casual/7/Generated Image February 22, 2026 - 8_14PM.jpeg",
					"https://ai4fi.s3.amazonaws.com/Visual Portfolio/Male_Casual/7/Generated Image February 22, 2026 - 8_15PM.jpeg",
				],
				testimonial: {
					time: "Real-time",
					title: "Style Assist",
					text: "AI4FI's stylist suggests outfits based on my body type and skin tone. It's like having a personal fashion consultant 24/7.",
					author: "Marcus K.",
				},
			},
			{
				id: "s8",
				images: [
					"https://ai4fi.s3.amazonaws.com/Visual Portfolio/Male_Casual/8/Generated Image February 22, 2026 - 10_02PM.jpeg",
					"https://ai4fi.s3.amazonaws.com/Visual Portfolio/Male_Casual/8/Generated Image February 22, 2026 - 10_03PM (1).jpeg",
					"https://ai4fi.s3.amazonaws.com/Visual Portfolio/Male_Casual/8/Generated Image February 22, 2026 - 10_03PM.jpeg",
					"https://ai4fi.s3.amazonaws.com/Visual Portfolio/Male_Casual/8/Generated Image February 22, 2026 - 10_04PM.jpeg",
					"https://ai4fi.s3.amazonaws.com/Visual Portfolio/Male_Casual/8/Generated Image February 22, 2026 - 10_05PM.jpeg",
					"https://ai4fi.s3.amazonaws.com/Visual Portfolio/Male_Casual/8/Generated Image February 22, 2026 - 10_06PM.jpeg",
				],
				span: "tall",
			},
		],
	},
	{
		id: "casual-male",
		label: "Casual Male",
		title: "Casual Male ",
		items: [
			{
				id: "s1",
				images: [
					"https://ai4fi.s3.amazonaws.com/Visual Portfolio/Male_Casual/1/Generated Image February 22, 2026 - 3_32PM.jpeg",
					"https://ai4fi.s3.amazonaws.com/Visual Portfolio/Male_Casual/1/Generated Image February 22, 2026 - 3_33PM (1).jpeg",
					"https://ai4fi.s3.amazonaws.com/Visual Portfolio/Male_Casual/1/Generated Image February 22, 2026 - 3_33PM.jpeg",
					"https://ai4fi.s3.amazonaws.com/Visual Portfolio/Male_Casual/1/Generated Image February 22, 2026 - 3_34PM.jpeg",
					"https://ai4fi.s3.amazonaws.com/Visual Portfolio/Male_Casual/1/Generated Image February 22, 2026 - 3_36PM.jpeg",
				],
				span: "tall",
			},
			{
				id: "s2",
				images: [
					"https://ai4fi.s3.amazonaws.com/Visual Portfolio/Male_Casual/2/Generated Image February 22, 2026 - 3_37PM.jpeg",
					"https://ai4fi.s3.amazonaws.com/Visual Portfolio/Male_Casual/2/Generated Image February 22, 2026 - 3_38PM (1).jpeg",
					"https://ai4fi.s3.amazonaws.com/Visual Portfolio/Male_Casual/2/Generated Image February 22, 2026 - 3_38PM.jpeg",
					"https://ai4fi.s3.amazonaws.com/Visual Portfolio/Male_Casual/2/Generated Image February 22, 2026 - 3_39PM.jpeg",
					"https://ai4fi.s3.amazonaws.com/Visual Portfolio/Male_Casual/2/Generated Image February 22, 2026 - 3_40PM.jpeg",
				],
				testimonial: {
					time: "Instant",
					title: "Sarah J.",
					text: "The AI virtual try-on is incredibly accurate. I can see how clothes fit my body without ever leaving home. It has redefined how I shop.",
					author: "Sarah J.",
				},
			},
			{
				id: "s3",
				images: [
					"https://ai4fi.s3.amazonaws.com/Visual Portfolio/Male_Casual/3/Generated Image February 22, 2026 - 3_44PM (1).jpeg",
					"https://ai4fi.s3.amazonaws.com/Visual Portfolio/Male_Casual/3/Generated Image February 22, 2026 - 3_44PM.jpeg",
					"https://ai4fi.s3.amazonaws.com/Visual Portfolio/Male_Casual/3/Generated Image February 22, 2026 - 3_46PM.jpeg",
					"https://ai4fi.s3.amazonaws.com/Visual Portfolio/Male_Casual/3/Generated Image February 22, 2026 - 3_47PM.jpeg",
				],
				span: "tall",
			},
			{
				id: "s4",
				span: "tall",
				images: [
					"https://ai4fi.s3.amazonaws.com/Visual Portfolio/Male_Casual/4/Generated Image February 22, 2026 - 3_48PM.jpeg",
					"https://ai4fi.s3.amazonaws.com/Visual Portfolio/Male_Casual/4/Generated Image February 22, 2026 - 3_50PM.jpeg",
					"https://ai4fi.s3.amazonaws.com/Visual Portfolio/Male_Casual/4/Generated Image February 22, 2026 - 3_52PM.jpeg",
					"https://ai4fi.s3.amazonaws.com/Visual Portfolio/Male_Casual/4/Generated Image February 22, 2026 - 3_56PM.jpeg",
					"https://ai4fi.s3.amazonaws.com/Visual Portfolio/Male_Casual/4/Generated Image February 22, 2026 - 4_58PM.jpeg",
				],
			},
			{
				id: "s5",
				images: [
					"https://ai4fi.s3.amazonaws.com/Visual Portfolio/Male_Casual/5/Generated Image February 22, 2026 - 8_00PM.jpeg",
					"https://ai4fi.s3.amazonaws.com/Visual Portfolio/Male_Casual/5/Generated Image February 22, 2026 - 8_01PM.jpeg",
					"https://ai4fi.s3.amazonaws.com/Visual Portfolio/Male_Casual/5/Generated Image February 22, 2026 - 8_02PM.jpeg",
					"https://ai4fi.s3.amazonaws.com/Visual Portfolio/Male_Casual/5/Generated Image February 22, 2026 - 8_03PM.jpeg",
					"https://ai4fi.s3.amazonaws.com/Visual Portfolio/Male_Casual/5/Generated Image February 22, 2026 - 8_05PM.jpeg",
				],
				span: "tall",
			},
			{
				id: "s6",
				images: [
					"https://ai4fi.s3.amazonaws.com/Visual Portfolio/Male_Casual/6/Generated Image February 22, 2026 - 8_05PM.jpeg",
					"https://ai4fi.s3.amazonaws.com/Visual Portfolio/Male_Casual/6/Generated Image February 22, 2026 - 8_07PM.jpeg",
					"https://ai4fi.s3.amazonaws.com/Visual Portfolio/Male_Casual/6/Generated Image February 22, 2026 - 8_08PM.jpeg",
					"https://ai4fi.s3.amazonaws.com/Visual Portfolio/Male_Casual/6/Generated Image February 22, 2026 - 8_10PM (1).jpeg",
					"https://ai4fi.s3.amazonaws.com/Visual Portfolio/Male_Casual/6/Generated Image February 22, 2026 - 8_10PM.jpeg",
				],
				span: "tall",
			},
			{
				id: "s7",
				images: [
					"https://ai4fi.s3.amazonaws.com/Visual Portfolio/Male_Casual/7/Generated Image February 22, 2026 - 8_12PM.jpeg",
					"https://ai4fi.s3.amazonaws.com/Visual Portfolio/Male_Casual/7/Generated Image February 22, 2026 - 8_13PM (1).jpeg",
					"https://ai4fi.s3.amazonaws.com/Visual Portfolio/Male_Casual/7/Generated Image February 22, 2026 - 8_13PM.jpeg",
					"https://ai4fi.s3.amazonaws.com/Visual Portfolio/Male_Casual/7/Generated Image February 22, 2026 - 8_14PM.jpeg",
					"https://ai4fi.s3.amazonaws.com/Visual Portfolio/Male_Casual/7/Generated Image February 22, 2026 - 8_15PM.jpeg",
				],
				testimonial: {
					time: "Real-time",
					title: "Style Assist",
					text: "AI4FI's stylist suggests outfits based on my body type and skin tone. It's like having a personal fashion consultant 24/7.",
					author: "Marcus K.",
				},
			},
			{
				id: "s8",
				images: [
					"https://ai4fi.s3.amazonaws.com/Visual Portfolio/Male_Casual/8/Generated Image February 22, 2026 - 10_02PM.jpeg",
					"https://ai4fi.s3.amazonaws.com/Visual Portfolio/Male_Casual/8/Generated Image February 22, 2026 - 10_03PM (1).jpeg",
					"https://ai4fi.s3.amazonaws.com/Visual Portfolio/Male_Casual/8/Generated Image February 22, 2026 - 10_03PM.jpeg",
					"https://ai4fi.s3.amazonaws.com/Visual Portfolio/Male_Casual/8/Generated Image February 22, 2026 - 10_04PM.jpeg",
					"https://ai4fi.s3.amazonaws.com/Visual Portfolio/Male_Casual/8/Generated Image February 22, 2026 - 10_05PM.jpeg",
					"https://ai4fi.s3.amazonaws.com/Visual Portfolio/Male_Casual/8/Generated Image February 22, 2026 - 10_06PM.jpeg",
				],
				span: "tall",
			},
		],
	},
	{
		id: "casual-female",
		label: "Casual Female",
		title: "Casual Female ",
		items: [
			{
				id: "s1",
				images: [
					"https://ai4fi.s3.amazonaws.com/Visual Portfolio/Female_Casual/1/Generated Image February 22, 2026 - 1_59PM.jpeg",
					"https://ai4fi.s3.amazonaws.com/Visual Portfolio/Female_Casual/1/Generated Image February 22, 2026 - 2_00PM (1).jpeg",
					"https://ai4fi.s3.amazonaws.com/Visual Portfolio/Female_Casual/1/Generated Image February 22, 2026 - 2_00PM.jpeg",
					"https://ai4fi.s3.amazonaws.com/Visual Portfolio/Female_Casual/1/Generated Image February 22, 2026 - 2_01PM.jpeg",
					"https://ai4fi.s3.amazonaws.com/Visual Portfolio/Female_Casual/1/Generated Image February 22, 2026 - 2_02PM.jpeg",
				],
				span: "tall",
			},
			{
				id: "s2",
				images: [
					"https://ai4fi.s3.amazonaws.com/Visual Portfolio/Female_Casual/2/Generated Image February 22, 2026 - 1_47PM (1).jpeg",
					"https://ai4fi.s3.amazonaws.com/Visual Portfolio/Female_Casual/2/Generated Image February 22, 2026 - 1_47PM.jpeg",
					"https://ai4fi.s3.amazonaws.com/Visual Portfolio/Female_Casual/2/Generated Image February 22, 2026 - 1_48PM (1).jpeg",
					"https://ai4fi.s3.amazonaws.com/Visual Portfolio/Female_Casual/2/Generated Image February 22, 2026 - 1_48PM.jpeg",
					"https://ai4fi.s3.amazonaws.com/Visual Portfolio/Female_Casual/2/Generated Image February 22, 2026 - 1_49PM.jpeg",
					"https://ai4fi.s3.amazonaws.com/Visual Portfolio/Female_Casual/2/Generated Image February 22, 2026 - 1_50PM.jpeg",
				],
				testimonial: {
					time: "Instant",
					title: "Sarah J.",
					text: "The AI virtual try-on is incredibly accurate. I can see how clothes fit my body without ever leaving home. It has redefined how I shop.",
					author: "Sarah J.",
				},
			},
			{
				id: "s3",
				images: [
					"https://ai4fi.s3.amazonaws.com/Visual Portfolio/Female_Casual/3/Generated Image February 22, 2026 - 2_03PM.jpeg",
					"https://ai4fi.s3.amazonaws.com/Visual Portfolio/Female_Casual/3/Generated Image February 22, 2026 - 2_04PM (1).jpeg",
					"https://ai4fi.s3.amazonaws.com/Visual Portfolio/Female_Casual/3/Generated Image February 22, 2026 - 2_04PM.jpeg",
					"https://ai4fi.s3.amazonaws.com/Visual Portfolio/Female_Casual/3/Generated Image February 22, 2026 - 2_05PM.jpeg",
					"https://ai4fi.s3.amazonaws.com/Visual Portfolio/Female_Casual/3/Generated Image February 22, 2026 - 2_06PM.jpeg",
				],
				span: "tall",
			},
			{
				id: "s4",
				span: "tall",
				images: [
					"https://ai4fi.s3.amazonaws.com/Visual Portfolio/Female_Casual/4/Generated Image February 22, 2026 - 2_12PM.jpeg",
					"https://ai4fi.s3.amazonaws.com/Visual Portfolio/Female_Casual/4/Generated Image February 22, 2026 - 2_14PM (1).jpeg",
					"https://ai4fi.s3.amazonaws.com/Visual Portfolio/Female_Casual/4/Generated Image February 22, 2026 - 2_14PM.jpeg",
					"https://ai4fi.s3.amazonaws.com/Visual Portfolio/Female_Casual/4/Generated Image February 22, 2026 - 2_17PM.jpeg",
					"https://ai4fi.s3.amazonaws.com/Visual Portfolio/Female_Casual/4/Generated Image February 22, 2026 - 2_20PM.jpeg",
				],
			},
			{
				id: "s5",
				images: [
					"https://ai4fi.s3.amazonaws.com/Visual Portfolio/Female_Casual/5/Generated Image September 13, 2025 - 12_11PM.png",
					"https://ai4fi.s3.amazonaws.com/Visual Portfolio/Female_Casual/5/Generated Image September 13, 2025 - 12_18PM.png",
					"https://ai4fi.s3.amazonaws.com/Visual Portfolio/Female_Casual/5/Generated Image September 13, 2025 - 12_27PM (1).png",
					"https://ai4fi.s3.amazonaws.com/Visual Portfolio/Female_Casual/5/Generated Image September 13, 2025 - 12_27PM (2).png",
					"https://ai4fi.s3.amazonaws.com/Visual Portfolio/Female_Casual/5/Generated Image September 13, 2025 - 12_27PM.png",
					"https://ai4fi.s3.amazonaws.com/Visual Portfolio/Female_Casual/5/WhatsApp Image 2025-07-03 at 17.05.13.jpeg",
				],
				span: "tall",
			},
			{
				id: "s6",
				images: [
					"https://ai4fi.s3.amazonaws.com/Visual Portfolio/Female_Casual/6/WhatsApp Image 2025-07-03 at 16.49.09.jpeg",
					"https://ai4fi.s3.amazonaws.com/Visual Portfolio/Female_Casual/6/unwatermarked_Gemini_Generated_Image_353tu5353tu5353t (1).png",
					"https://ai4fi.s3.amazonaws.com/Visual Portfolio/Female_Casual/6/unwatermarked_Gemini_Generated_Image_mirrrpmirrrpmirr (1).png",
					"https://ai4fi.s3.amazonaws.com/Visual Portfolio/Female_Casual/6/unwatermarked_Gemini_Generated_Image_w9i39mw9i39mw9i3.png",
					"https://ai4fi.s3.amazonaws.com/Visual Portfolio/Female_Casual/6/unwatermarked_Gemini_Generated_Image_yrjdi4yrjdi4yrjd.png",
				],
				span: "tall",
			},
			{
				id: "s7",
				images: [
					"https://ai4fi.s3.amazonaws.com/Visual Portfolio/Female_Casual/7/Generated Image September 13, 2025 - 12_27PM (3) (1).png",
					"https://ai4fi.s3.amazonaws.com/Visual Portfolio/Female_Casual/7/Generated Image September 13, 2025 - 12_30PM (1) (1).png",
					"https://ai4fi.s3.amazonaws.com/Visual Portfolio/Female_Casual/7/Generated Image September 13, 2025 - 12_34PM (2).png",
					"https://ai4fi.s3.amazonaws.com/Visual Portfolio/Female_Casual/7/IMG20250816160923.jpg",
				],
				testimonial: {
					time: "Real-time",
					title: "Style Assist",
					text: "AI4FI's stylist suggests outfits based on my body type and skin tone. It's like having a personal fashion consultant 24/7.",
					author: "Marcus K.",
				},
			},
			{
				id: "s8",
				images: [
					"https://ai4fi.s3.amazonaws.com/Visual Portfolio/Female_Casual/8/Generated Image February 22, 2026 - 2_23PM.jpeg",
					"https://ai4fi.s3.amazonaws.com/Visual Portfolio/Female_Casual/8/Generated Image February 22, 2026 - 2_24PM.jpeg",
					"https://ai4fi.s3.amazonaws.com/Visual Portfolio/Female_Casual/8/Generated Image February 22, 2026 - 2_25PM.jpeg",
					"https://ai4fi.s3.amazonaws.com/Visual Portfolio/Female_Casual/8/Generated Image February 22, 2026 - 2_27PM.jpeg",
				],
				span: "tall",
			},
		],
	},
	{
		id: "plus-size",
		label: "Plus Size",
		title: "Plus Size ",
		items: [
			{
				id: "s1",
				images: [
					"https://ai4fi.s3.amazonaws.com/Visual Portfolio/PlusSize/1/Generated Image February 22, 2026 - 10_08PM (1).jpeg",
					"https://ai4fi.s3.amazonaws.com/Visual Portfolio/PlusSize/1/Generated Image February 22, 2026 - 10_08PM.jpeg",
					"https://ai4fi.s3.amazonaws.com/Visual Portfolio/PlusSize/1/Generated Image February 22, 2026 - 10_09PM.jpeg",
					"https://ai4fi.s3.amazonaws.com/Visual Portfolio/PlusSize/1/Generated Image February 22, 2026 - 10_11PM.jpeg",
				],
				span: "tall",
			},
			{
				id: "s2",
				images: [
					"https://ai4fi.s3.amazonaws.com/Visual Portfolio/PlusSize/2/Generated Image February 22, 2026 - 10_12PM.jpeg",
					"https://ai4fi.s3.amazonaws.com/Visual Portfolio/PlusSize/2/Generated Image February 22, 2026 - 10_13PM.jpeg",
					"https://ai4fi.s3.amazonaws.com/Visual Portfolio/PlusSize/2/Generated Image February 22, 2026 - 10_14PM.jpeg",
					"https://ai4fi.s3.amazonaws.com/Visual Portfolio/PlusSize/2/Generated Image February 22, 2026 - 10_15PM.jpeg",
				],
				testimonial: {
					time: "Instant",
					title: "Sarah J.",
					text: "The AI virtual try-on is incredibly accurate. I can see how clothes fit my body without ever leaving home. It has redefined how I shop.",
					author: "Sarah J.",
				},
			},
			{
				id: "s3",
				images: [
					"https://ai4fi.s3.amazonaws.com/Visual Portfolio/PlusSize/3/Generated Image February 22, 2026 - 10_16PM.jpeg",
					"https://ai4fi.s3.amazonaws.com/Visual Portfolio/PlusSize/3/Generated Image February 22, 2026 - 10_17PM.jpeg",
					"https://ai4fi.s3.amazonaws.com/Visual Portfolio/PlusSize/3/Generated Image February 22, 2026 - 10_18PM.jpeg",
					"https://ai4fi.s3.amazonaws.com/Visual Portfolio/PlusSize/3/Generated Image February 22, 2026 - 10_19PM.jpeg",
				],
				span: "tall",
			},
			{
				id: "s4",
				span: "tall",
				images: [
					"https://ai4fi.s3.amazonaws.com/Visual Portfolio/PlusSize/4/Generated Image February 22, 2026 - 10_21PM (1).jpeg",
					"https://ai4fi.s3.amazonaws.com/Visual Portfolio/PlusSize/4/Generated Image February 22, 2026 - 10_21PM.jpeg",
					"https://ai4fi.s3.amazonaws.com/Visual Portfolio/PlusSize/4/Generated Image February 22, 2026 - 10_23PM.jpeg",
					"https://ai4fi.s3.amazonaws.com/Visual Portfolio/PlusSize/4/Generated Image February 22, 2026 - 10_24PM.jpeg",
					"https://ai4fi.s3.amazonaws.com/Visual Portfolio/PlusSize/4/Generated Image February 22, 2026 - 10_25PM.jpeg",
				],
			},
			{
				id: "s5",
				images: [
					"https://ai4fi.s3.amazonaws.com/Visual Portfolio/PlusSize/5/Generated Image February 22, 2026 - 10_26PM.jpeg",
					"https://ai4fi.s3.amazonaws.com/Visual Portfolio/PlusSize/5/Generated Image February 22, 2026 - 10_28PM.jpeg",
					"https://ai4fi.s3.amazonaws.com/Visual Portfolio/PlusSize/5/Generated Image February 22, 2026 - 10_29PM.jpeg",
					"https://ai4fi.s3.amazonaws.com/Visual Portfolio/PlusSize/5/Generated Image February 22, 2026 - 10_30PM.jpeg",
				],
				span: "tall",
			},
			{
				id: "s6",
				images: [
					"https://ai4fi.s3.amazonaws.com/Visual Portfolio/PlusSize/6/Generated Image February 22, 2026 - 10_45PM.jpeg",
					"https://ai4fi.s3.amazonaws.com/Visual Portfolio/PlusSize/6/Generated Image February 22, 2026 - 10_46PM (1).jpeg",
					"https://ai4fi.s3.amazonaws.com/Visual Portfolio/PlusSize/6/Generated Image February 22, 2026 - 10_46PM.jpeg",
					"https://ai4fi.s3.amazonaws.com/Visual Portfolio/PlusSize/6/Generated Image February 22, 2026 - 11_19PM.jpeg",
				],
				span: "tall",
			},
			{
				id: "s7",
				images: [
					"https://ai4fi.s3.amazonaws.com/Visual Portfolio/PlusSize/7/Generated Image February 22, 2026 - 11_21PM.jpeg",
					"https://ai4fi.s3.amazonaws.com/Visual Portfolio/PlusSize/7/Generated Image February 22, 2026 - 11_22PM.jpeg",
					"https://ai4fi.s3.amazonaws.com/Visual Portfolio/PlusSize/7/Generated Image February 22, 2026 - 11_23PM.jpeg",
					"https://ai4fi.s3.amazonaws.com/Visual Portfolio/PlusSize/7/Generated Image February 22, 2026 - 11_24PM.jpeg",
				],
				testimonial: {
					time: "Real-time",
					title: "Style Assist",
					text: "AI4FI's stylist suggests outfits based on my body type and skin tone. It's like having a personal fashion consultant 24/7.",
					author: "Marcus K.",
				},
			},
			{
				id: "s8",
				images: [
					"https://ai4fi.s3.amazonaws.com/Visual Portfolio/PlusSize/8/Generated Image February 22, 2026 - 11_25PM.jpeg",
					"https://ai4fi.s3.amazonaws.com/Visual Portfolio/PlusSize/8/Generated Image February 22, 2026 - 11_26PM.jpeg",
					"https://ai4fi.s3.amazonaws.com/Visual Portfolio/PlusSize/8/Generated Image February 22, 2026 - 11_27PM (1).jpeg",
					"https://ai4fi.s3.amazonaws.com/Visual Portfolio/PlusSize/8/Generated Image February 22, 2026 - 11_27PM.jpeg",
				],
				span: "tall",
			},
		],
	},
	{
		id: "kids-wear",
		label: "Kids Wear",
		title: "Kids Wear ",
		items: [
			{
				id: "s1",
				images: [
					"https://ai4fi.s3.amazonaws.com/Visual Portfolio/kids/1/Generated Image February 22, 2026 - 11_34PM (1).jpeg",
					"https://ai4fi.s3.amazonaws.com/Visual Portfolio/kids/1/Generated Image February 22, 2026 - 11_34PM.jpeg",
					"https://ai4fi.s3.amazonaws.com/Visual Portfolio/kids/1/Generated Image February 22, 2026 - 11_36PM.jpeg",
					"https://ai4fi.s3.amazonaws.com/Visual Portfolio/kids/1/Generated Image February 22, 2026 - 11_37PM.jpeg",
				],
				span: "tall",
			},
			{
				id: "s2",
				images: [
					"https://ai4fi.s3.amazonaws.com/Visual Portfolio/kids/2/Generated Image February 22, 2026 - 11_45PM.jpeg",
					"https://ai4fi.s3.amazonaws.com/Visual Portfolio/kids/2/Generated Image February 22, 2026 - 11_46PM.jpeg",
					"https://ai4fi.s3.amazonaws.com/Visual Portfolio/kids/2/Generated Image February 22, 2026 - 11_47PM (1).jpeg",
					"https://ai4fi.s3.amazonaws.com/Visual Portfolio/kids/2/Generated Image February 22, 2026 - 11_47PM.jpeg",
				],
				testimonial: {
					time: "Instant",
					title: "Sarah J.",
					text: "The AI virtual try-on is incredibly accurate. I can see how clothes fit my body without ever leaving home. It has redefined how I shop.",
					author: "Sarah J.",
				},
			},
			{
				id: "s3",
				images: [
					"https://ai4fi.s3.amazonaws.com/Visual Portfolio/kids/3/Generated Image February 22, 2026 - 11_38PM.jpeg",
					"https://ai4fi.s3.amazonaws.com/Visual Portfolio/kids/3/Generated Image February 22, 2026 - 11_39PM.jpeg",
					"https://ai4fi.s3.amazonaws.com/Visual Portfolio/kids/3/Generated Image February 22, 2026 - 11_43PM.jpeg",
				],
				span: "tall",
			},
			{
				id: "s4",
				span: "tall",
				images: [
					"https://ai4fi.s3.amazonaws.com/Visual Portfolio/kids/4/Generated Image February 22, 2026 - 11_30PM (1).jpeg",
					"https://ai4fi.s3.amazonaws.com/Visual Portfolio/kids/4/Generated Image February 22, 2026 - 11_30PM.jpeg",
					"https://ai4fi.s3.amazonaws.com/Visual Portfolio/kids/4/Generated Image February 22, 2026 - 11_31PM.jpeg",
					"https://ai4fi.s3.amazonaws.com/Visual Portfolio/kids/4/Generated Image February 22, 2026 - 11_32PM (1).jpeg",
				],
			},
			{
				id: "s5",
				images: [
					"https://ai4fi.s3.amazonaws.com/Visual Portfolio/kids/5/Generated Image February 22, 2026 - 11_49PM (1).jpeg",
					"https://ai4fi.s3.amazonaws.com/Visual Portfolio/kids/5/Generated Image February 22, 2026 - 11_49PM.jpeg",
					"https://ai4fi.s3.amazonaws.com/Visual Portfolio/kids/5/Generated Image February 23, 2026 - 12_15AM (1).jpeg",
					"https://ai4fi.s3.amazonaws.com/Visual Portfolio/kids/5/Generated Image February 23, 2026 - 12_15AM.jpeg",
					"https://ai4fi.s3.amazonaws.com/Visual Portfolio/kids/5/Generated Image February 23, 2026 - 12_17AM.jpeg",
				],
				span: "tall",
			},
			{
				id: "s6",
				images: [
					"https://ai4fi.s3.amazonaws.com/Visual Portfolio/kids/6/Generated Image February 23, 2026 - 12_23AM.jpeg",
					"https://ai4fi.s3.amazonaws.com/Visual Portfolio/kids/6/Generated Image February 23, 2026 - 12_24AM.jpeg",
					"https://ai4fi.s3.amazonaws.com/Visual Portfolio/kids/6/Generated Image February 23, 2026 - 12_28AM (1).jpeg",
					"https://ai4fi.s3.amazonaws.com/Visual Portfolio/kids/6/Generated Image February 23, 2026 - 12_28AM.jpeg",
					"https://ai4fi.s3.amazonaws.com/Visual Portfolio/kids/6/Generated Image February 23, 2026 - 12_32AM.jpeg",
				],
				span: "tall",
			},
			{
				id: "s7",
				images: [
					"https://ai4fi.s3.amazonaws.com/Visual Portfolio/kids/7/Generated Image February 23, 2026 - 12_30AM (1).jpeg",
					"https://ai4fi.s3.amazonaws.com/Visual Portfolio/kids/7/Generated Image February 23, 2026 - 12_30AM.jpeg",
					"https://ai4fi.s3.amazonaws.com/Visual Portfolio/kids/7/Generated Image February 23, 2026 - 12_33AM.jpeg",
					"https://ai4fi.s3.amazonaws.com/Visual Portfolio/kids/7/Generated Image February 23, 2026 - 12_35AM.jpeg",
				],
				testimonial: {
					time: "Real-time",
					title: "Style Assist",
					text: "AI4FI's stylist suggests outfits based on my body type and skin tone. It's like having a personal fashion consultant 24/7.",
					author: "Marcus K.",
				},
			},
			{
				id: "s8",
				images: [
					"https://ai4fi.s3.amazonaws.com/Visual Portfolio/kids/8/Generated Image February 23, 2026 - 12_36AM.jpeg",
					"https://ai4fi.s3.amazonaws.com/Visual Portfolio/kids/8/Generated Image February 23, 2026 - 12_37AM.jpeg",
					"https://ai4fi.s3.amazonaws.com/Visual Portfolio/kids/8/Generated Image February 23, 2026 - 12_39AM.jpeg",
					"https://ai4fi.s3.amazonaws.com/Visual Portfolio/kids/8/Generated Image February 23, 2026 - 12_41AM.jpeg",
				],
				span: "tall",
			},
		],
	},
	{
		id: "lingerie",
		label: "Lingerie",
		title: "Lingerie ",
		items: [
			{
				id: "s1",
				images: [
					"https://ai4fi.s3.amazonaws.com/Visual Portfolio/lingerie/female_model_003.png",
					"https://ai4fi.s3.amazonaws.com/Visual Portfolio/lingerie/female_model_005.png",
				],
				span: "tall",
			},
			{
				id: "s2",
				images: [
					"https://ai4fi.s3.amazonaws.com/Visual Portfolio/lingerie/female_model_009.png",
				],
				testimonial: {
					time: "Instant",
					title: "Sarah J.",
					text: "The AI virtual try-on is incredibly accurate. I can see how clothes fit my body without ever leaving home. It has redefined how I shop.",
					author: "Sarah J.",
				},
			},
			{
				id: "s3",
				images: [
					"https://ai4fi.s3.amazonaws.com/Visual Portfolio/lingerie/female_model_010.png",
				],
				span: "tall",
			},
			{
				id: "s4",
				span: "tall",
				images: [
					"https://ai4fi.s3.amazonaws.com/Visual Portfolio/lingerie/female_model_045.png",
				],
			},
			{
				id: "s5",
				images: [
					"https://ai4fi.s3.amazonaws.com/Visual Portfolio/lingerie/female_model_048.png",
				],
				span: "tall",
			},
			{
				id: "s6",
				images: [
					"https://ai4fi.s3.amazonaws.com/Visual Portfolio/lingerie/male_model_003.png",
					"https://ai4fi.s3.amazonaws.com/Visual Portfolio/lingerie/male_model_010.png",
				],
				span: "tall",
			},
			{
				id: "s7",
				images: [
					"https://ai4fi.s3.amazonaws.com/Visual Portfolio/lingerie/male_model_015.png",
					"https://ai4fi.s3.amazonaws.com/Visual Portfolio/lingerie/male_model_017.png",
				],
				testimonial: {
					time: "Real-time",
					title: "Style Assist",
					text: "AI4FI's stylist suggests outfits based on my body type and skin tone. It's like having a personal fashion consultant 24/7.",
					author: "Marcus K.",
				},
			},
			{
				id: "s8",
				images: [
					"https://ai4fi.s3.amazonaws.com/Visual Portfolio/lingerie/male_model_024.png",
					"https://ai4fi.s3.amazonaws.com/Visual Portfolio/lingerie/male_model_029.png",
				],
				span: "tall",
			},
		],
	},
	{
		id: "4k",
		label: "4k images",
		title: "4k Images ",
		items: [
			{
				id: "s1",
				images: [
					"https://ai4fi.s3.amazonaws.com/Visual Portfolio/4k/4k_kid.jpeg",
				],
				span: "tall",
			},
			{
				id: "s2",
				images: [
					"https://ai4fi.s3.amazonaws.com/Visual Portfolio/4k/4kl_casualjpeg.jpeg",
				],
				testimonial: {
					time: "Instant",
					title: "Sarah J.",
					text: "The AI virtual try-on is incredibly accurate. I can see how clothes fit my body without ever leaving home. It has redefined how I shop.",
					author: "Sarah J.",
				},
			},
			{
				id: "s3",
				images: [
					"https://ai4fi.s3.amazonaws.com/Visual Portfolio/4k/Generated Image February 23, 2026 - 12_17PM.jpeg",
				],
				span: "tall",
			},
			{
				id: "s4",
				span: "tall",
				images: [
					"https://ai4fi.s3.amazonaws.com/Visual Portfolio/4k/Generated Image February 23, 2026 - 12_19PM.jpeg",
				],
			},
			{
				id: "s5",
				images: [
					"https://ai4fi.s3.amazonaws.com/Visual Portfolio/4k/Generated Image February 23, 2026 - 1_09PM.jpeg",
				],
				span: "tall",
			},
			{
				id: "s6",
				images: [], // Placeholder for additional 4k content
				span: "tall",
			},
			{
				id: "s7",
				images: [],
				testimonial: {
					time: "Real-time",
					title: "Style Assist",
					text: "AI4FI's stylist suggests outfits based on my body type and skin tone. It's like having a personal fashion consultant 24/7.",
					author: "Marcus K.",
				},
			},
			{
				id: "s8",
				images: [],
				span: "tall",
			},
		],
	},
];

// --- Hover Image Slideshow Hook ---
function useImageSlideshow(
	images: string[],
	currentIndex: number,
	stop: boolean,
	setCurrentIndex: React.Dispatch<React.SetStateAction<number>>,
) {
	const [opacity, setOpacity] = useState(1);
	const intervalRef = useRef<ReturnType<typeof setTimeout> | null>(null);

	useEffect(() => {
		if (stop || images.length <= 1) return;

		const cycle = () => {
			setOpacity(0);
			setTimeout(() => {
				setCurrentIndex((prev) => (prev + 1) % images.length);
				setOpacity(1);
			}, 1500); // Cross-fade duration
		};

		// Random staggered start between 0-2 seconds to avoid synched "blinking"
		const staggerTimeout = setTimeout(() => {
			intervalRef.current = setInterval(cycle, 2500 + Math.random() * 3000);
		}, Math.random() * 3000);

		return () => {
			clearTimeout(staggerTimeout);
			if (intervalRef.current) clearInterval(intervalRef.current);
		};
	}, [images.length, stop]);

	return { opacity };
}

// --- Image Card Component ---
function ImageCard({ card }: { card: TestimonialCard }) {
	const [stop, setStop] = useState(false);
	const [currentIndex, setCurrentIndex] = useState(0);
	const { opacity } = useImageSlideshow(
		card.images,
		currentIndex,
		stop,
		setCurrentIndex,
	);

	// Purely vertical 'longer' layout system
	// Standard Long vs Mid Long vs Extra Long
	const spanClasses =
		card.span === "wide"
			? "col-span-2 md:col-span-4 lg:col-span-6 row-span-40"
			: "col-span-2 md:col-span-4 lg:col-span-4 row-span-6";

	return (
		<div
			onMouseOver={() => setStop(true)}
			onMouseLeave={() => setStop(false)}
			className={`showcase-card relative group overflow-hidden rounded-xl cursor-pointer group min-h-[240px] md:min-h-[360px] lg:min-h-[400px] ${spanClasses} w-full`}
		>
			<div
				onClick={() => setCurrentIndex(currentIndex > 0 ? currentIndex - 1 : 0)}
				className="absolute group-hover:flex hidden  items-center justify-center z-40 top-1/2 left-2 -translate-y-1/2 min-h-10 min-w-10 rounded-full bg-card hover:bg-card/80 transition-all duration-300 border-border border hover:border-brand"
			>
				<ChevronLeft size={18} />
			</div>
			<div
				onClick={() =>
					setCurrentIndex(
						currentIndex < card.images.length - 1
							? currentIndex + 1
							: card.images.length - 1,
					)
				}
				className=" z-40  group-hover:flex hidden items-center justify-center absolute top-1/2 right-2 -translate-y-1/2 min-h-10 min-w-10 rounded-full bg-card hover:bg-card/80 transition-all duration-300 border-border border hover:border-brand"
			>
				<ChevronRight size={18} />
			</div>

			{/* Image background with auto fade */}
			<div className="absolute inset-0 rounded-xl transition-all duration-1000 bg-muted overflow-hidden">
				<img
					src={card.images[currentIndex]}
					alt=""
					className="w-full h-full object-cover object-top transition-all duration-1000 group-hover:scale-105"
					style={{ opacity }}
				/>
			</div>

			{/* Subtle noise texture overlay */}
			<div
				className="absolute rounded-xl inset-0 opacity-[0.03] pointer-events-none"
				style={{
					backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
				}}
			/>

			{/* Progress indicator for auto-slide (always visible if many images) */}
			{card.images.length > 1 && (
				<div className="absolute bottom-3 right-3 flex gap-1 z-10">
					{card.images.map((_, i) => (
						<div
							key={i}
							className="w-1 h-1 rounded-full transition-all duration-500"
							style={{
								backgroundColor:
									i === currentIndex ? "var(--brand)" : "rgba(255,255,255,0.2)",
								transform: i === currentIndex ? "scale(1.2)" : "scale(1)",
							}}
						/>
					))}
				</div>
			)}

			{/* Subtle bottom gradient */}
			<div
				className="absolute rounded-xl inset-0 opacity-40 group-hover:opacity-60 transition-opacity duration-500"
				style={{
					background:
						"linear-gradient(180deg, transparent 70%, rgba(0,0,0,0.5) 100%)",
				}}
			/>
		</div>
	);
}

// --- Testimonial Overlay Card ---
function TestimonialOverlay({ card }: { card: TestimonialCard }) {
	const [stop, setStop] = useState(false);
	const [currentIndex, setCurrentIndex] = useState(0);
	const { opacity } = useImageSlideshow(
		card.images,
		currentIndex,
		stop,
		setCurrentIndex,
	);

	// Testimony cards - wider for text but still strictly vertical/longer
	const spanClasses =
		card.span === "wide"
			? "col-span-2 md:col-span-4 lg:col-span-6 row-span-40"
			: "col-span-2 md:col-span-4 lg:col-span-4 row-span-28";

	return (
		<div
			onMouseOver={() => setStop(true)}
			onMouseLeave={() => setStop(false)}
			className={`showcase-card relative overflow-hidden rounded-xl cursor-pointer group min-h-[280px] md:min-h-[360px] lg:min-h-[400px] ${spanClasses}`}
		>
			{/* BG image with auto fade */}
			<div className="absolute inset-0 transition-all duration-1000 bg-muted overflow-hidden">
				<img
					src={card.images[currentIndex]}
					alt=""
					className="w-full h-full object-cover object-top transition-all duration-700 group-hover:scale-105"
					style={{ opacity }}
				/>
			</div>

			{/* Dark gradient overlay for text readability */}
			<div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent backdrop-blur-[0.5px] group-hover:backdrop-blur-none transition-all duration-500" />

			{/* Content */}
			{card.testimonial && (
				<div className="relative z-10 p-4 sm:p-5 h-full flex flex-col justify-end">
					<div className="transform transition-transform duration-500 group-hover:translate-y-[-5px]">
						<span
							className="text-[8px] sm:text-[9px] font-bold tracking-widest uppercase mb-1 block"
							style={{ color: "var(--brand)" }}
						>
							{card.testimonial.time}
						</span>
						<h4 className="text-white font-bold text-sm sm:text-base mb-1.5 leading-tight">
							{card.testimonial.title}
						</h4>
						<p className="text-gray-200 text-[10px] sm:text-xs italic leading-snug opacity-90 line-clamp-4">
							"{card.testimonial.text}"
						</p>
					</div>
					{card.testimonial.author && (
						<div className="mt-3 pt-3 border-t border-white/10 flex items-center gap-2">
							<div className="w-6 h-6 rounded-full bg-brand/20 flex items-center justify-center text-[8px] text-brand font-bold">
								{card.testimonial.author.charAt(0)}
							</div>
							<span className="text-white/70 text-[10px] sm:text-xs font-medium">
								{card.testimonial.author}
							</span>
						</div>
					)}
				</div>
			)}

			{/* Progress indicator */}
			{card.images.length > 1 && (
				<div className="absolute top-3 right-3 flex gap-1 z-20">
					{card.images.map((_, i) => (
						<div
							key={i}
							className="w-1 h-1 rounded-full transition-all duration-500"
							style={{
								backgroundColor:
									i === currentIndex ? "var(--brand)" : "rgba(255,255,255,0.2)",
								transform: i === currentIndex ? "scale(1.2)" : "scale(1)",
							}}
						/>
					))}
				</div>
			)}
		</div>
	);
}

// --- Section Component ---
function TestimonialSection({ section }: { section: Section }) {
	return (
		<div id={section.id} className="mb-10 sm:mb-14 scroll-mt-24">
			{/* Minimalist Section Title */}
			<div className="mb-6 sm:mb-8 border-b border-border/60 pb-4">
				<div className="flex items-center gap-2 mb-1.5">
					<div className="h-px w-4 bg-brand" />
					<p className="text-[8px] sm:text-[9px] tracking-[0.4em] uppercase text-muted-foreground font-bold text-brand">
						COLLECTION
					</p>
				</div>
				<h2 className="text-xl sm:text-2xl lg:text-3xl font-black tracking-tighter text-foreground">
					{section.title}
				</h2>
			</div>

			{/* High-Density 12-Column Grid with Auto-Packing Rows */}
			<div className="grid grid-cols-2 md:grid-cols-8 lg:grid-cols-12 gap-1.5 sm:gap-2 lg:gap-3 grid-flow-dense max-w-full">
				{section.items.map((card) =>
					card.testimonial ? (
						<TestimonialOverlay key={card.id} card={card} />
					) : (
						<ImageCard key={card.id} card={card} />
					),
				)}
			</div>
		</div>
	);
}

// --- Sidebar Component ---
function Sidebar({
	sections,
	activeId,
	onNav,
}: {
	sections: Section[];
	activeId: string;
	onNav: (id: string) => void;
}) {
	return (
		<>
			{/* Desktop Sidebar */}
			<aside className="sticky w-[300px] z-[40] border-r border-border top-[80px] p-8 bottom-0 h-[calc(100vh-80px)] bg-background/50 backdrop-blur-md hidden lg:block">
				<div className="mb-10">
					<p className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-bold mb-1">
						Discovery
					</p>
					<h4 className="text-2xl font-bold text-foreground">
						Our <span className="text-brand-gradient">Showcase</span>
					</h4>
				</div>

				<ul className="space-y-1">
					{sections.map((section) => {
						const isActive = activeId === section.id;
						return (
							<li key={section.id}>
								<button
									onClick={() => onNav(section.id)}
									className="group flex items-center gap-2 w-full text-left py-2 px-0 transition-all duration-300"
								>
									{/* Indicator bar */}
									<span
										className="block h-px transition-all duration-400 shrink-0"
										style={{
											width: isActive ? 32 : 12,
											backgroundColor: isActive
												? "var(--brand)"
												: "var(--border)",
											transitionDuration: "400ms",
										}}
									/>
									<span
										className="text-lg transition-all duration-300"
										style={{
											color: isActive
												? "var(--foreground)"
												: "var(--muted-foreground)",
											fontWeight: isActive ? 700 : 500,
											letterSpacing: isActive ? "0.02em" : "0.05em",
										}}
									>
										{section.label}
									</span>
								</button>
							</li>
						);
					})}
				</ul>
			</aside>

			{/* Mobile/Tablet Tag Grid Nav */}
			<nav className="lg:hidden sticky top-[76px] w-screen z-[40] bg-background  border-b border-border py-4 px-4 sm:px-8">
				<div className="flex items-center text-center w-full justify-between mb-4">
					<div className="w-full">
						<p className="text-[9px]  uppercase tracking-[0.2em] text-muted-foreground font-bold mb-0.5">
							Discovery
						</p>
						<h2 className=" font-bold text-foreground">
							Our <span className="text-brand-gradient">Showcase</span>
						</h2>
					</div>
				</div>

				<div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-1.5">
					{sections.map((section) => {
						const isActive = activeId === section.id;
						return (
							<button
								key={section.id}
								onClick={() => onNav(section.id)}
								className={`text-[8px] sm:text-[9px] font-bold uppercase tracking-wider py-2 px-1 rounded-full border transition-all duration-400 text-center truncate ${
									isActive
										? "bg-brand/10 border-brand text-brand shadow-sm"
										: "bg-muted/10 border-border text-muted-foreground hover:border-muted-foreground/30"
								}`}
							>
								{section.label}
							</button>
						);
					})}
				</div>
			</nav>
		</>
	);
}

// --- Main Component ---
export default function ClientShowcase() {
	const [activeId, setActiveId] = useState(SECTIONS[0].id);
	const containerRef = useRef<HTMLDivElement>(null);
	const observerRef = useRef<IntersectionObserver | null>(null);

	// Scroll spy
	useEffect(() => {
		const observers: IntersectionObserver[] = [];

		SECTIONS.forEach((section) => {
			const el = document.getElementById(section.id);
			if (!el) return;

			const obs = new IntersectionObserver(
				([entry]) => {
					if (entry.isIntersecting) {
						setActiveId(section.id);
					}
				},
				{ rootMargin: "-40% 0px -50% 0px", threshold: 0 },
			);
			obs.observe(el);
			observers.push(obs);
		});

		return () => observers.forEach((o) => o.disconnect());
	}, []);

	const handleNav = useCallback((id: string) => {
		const el = document.getElementById(id);
		if (el) {
			el.scrollIntoView({ behavior: "smooth", block: "start" });
		}
	}, []);

	return (
		<div className="min-h-screen flex flex-col lg:flex-row items-start bg-background text-foreground transition-colors duration-300 font-sans">
			{/* Custom Styles */}
			<style>{`
        .scroll-mt-20 { scroll-margin-top: 5rem; }
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }

        @keyframes fadeSlide {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .showcase-card {
          transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        
        .showcase-card:hover {
          transform: translateY(-4px);
        }
      `}</style>

			{/* Sidebar (Desktop) and Top Nav (Mobile) */}
			<Sidebar sections={SECTIONS} activeId={activeId} onNav={handleNav} />

			{/* Main content */}
			<div className="flex-1 w-full pt-10 lg:pt-20 pb-20 px-4 sm:px-8 lg:px-12 max-w-[1600px] mx-auto overflow-hidden">
				<div ref={containerRef}>
					{SECTIONS.map((section) => (
						<TestimonialSection key={section.id} section={section} />
					))}
				</div>
			</div>
		</div>
	);
}
