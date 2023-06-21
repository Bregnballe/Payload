import { CollectionConfig } from "payload/types";

const Names: CollectionConfig = {
	slug: "names",
	admin: {
		useAsTitle: "name",
	},
	access: {
		read: () => true,
		//Anytone can read
		create: () => true,
		//Anyone can create
	},
	fields: [
		{
			name: "name",
			type: "text",
			label: "Name",
		},
		{
			name: "maleGender",
			type: "checkbox",
			defaultValue: false,
			label: "Male Gender",
		},
		{
			name: "femaleGender",
			type: "checkbox",
			defaultValue: false,
			label: "Female Gender",
		},
		{
			name: "peopleCount",
			type: "number",
			label: "People Count",
		},
		{
			name: "maleCount",
			type: "number",
			label: "Male Count",
		},
		{
			name: "femaleCount",
			type: "number",
			label: "Female Count",
		},
		{
			name: "trendCount",
			type: "number",
			label: "Trend Count",
		},
		{
			name: "maleTrendCount",
			type: "number",
			label: "Male Trend Count",
		},
		{
			name: "femaleTrendCount",
			type: "number",
			label: "Female Trend Count",
		},
	],
	timestamps: true,
};

export default Names;
