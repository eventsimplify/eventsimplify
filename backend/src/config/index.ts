import { IQuestion } from "../interfaces";

export const defaultRegistrationQuestions: IQuestion[] = [
  {
    type: "radio",
    name: "prefix",
    label: "Prefix",
    options: [
      {
        label: "Mr.",
        value: "Mr.",
      },
      {
        label: "Mrs.",
        value: "Mrs.",
      },
      {
        label: "Miss",
        value: "Miss",
      },
      {
        label: "Ms.",
        value: "Ms.",
      },
      {
        label: "Mx.",
        value: "Mx.",
      },
      {
        label: "Dr.",
        value: "Dr.",
      },
      {
        label: "Prof.",
        value: "Prof.",
      },
      {
        label: "Rev.",
        value: "Rev.",
      },
    ],
    included: false,
    required: false,
  },
  {
    type: "radio",
    name: "gender",
    label: "Gender",
    options: [
      {
        label: "Male",
        value: "male",
      },
      {
        label: "Female",
        value: "female",
      },
      {
        label: "Other",
        value: "other",
      },
    ],
    included: false,
    required: false,
  },
  {
    type: "number",
    name: "age",
    label: "Age",
    included: false,
    required: false,
  },
  {
    type: "phone",
    name: "phone",
    label: "Phone number / Mobile number",
    included: false,
    required: false,
  },
  {
    type: "address",
    name: "address",
    label: "Address",
    included: false,
    required: false,
  },
];

export const defaultTypes = [
  {
    label: "Trip or Retreat",
    value: "trip-or-retreat",
  },
  {
    label: "Training or Workshop",
    value: "training-or-workshop",
  },
  {
    label: "Concert or Performance",
    value: "concert-or-performance",
  },
  {
    label: "Conference or Meeting",
    value: "conference-or-meeting",
  },
  {
    label: "Festival or Fair",
    value: "festival-or-fair",
  },
  {
    label: "Game or Competition",
    value: "game-or-competition",
  },
  {
    label: "Meeting or Networking Event",
    value: "meeting-or-networking-event",
  },
  {
    label: "Other",
    value: "other",
  },
  {
    label: "Party or Social Gathering",
    value: "party-or-social-gathering",
  },
  {
    label: "Seminar or Talk",
    value: "seminar-or-talk",
  },
  {
    label: "Tour or Trip",
    value: "tour-or-trip",
  },
  {
    label: "Tournament",
    value: "tournament",
  },
];

export const defaultCategories = [
  {
    label: "Business & Professional",
    value: "business-and-professional",
  },
  {
    label: "Charity & Causes",
    value: "charity-and-causes",
  },
  {
    label: "Community & Culture",
    value: "community-and-culture",
  },
  {
    label: "Family & Education",
    value: "family-and-education",
  },
  {
    label: "Fashion & Beauty",
    value: "fashion-and-beauty",
  },
  {
    label: "Film, Media & Entertainment",
    value: "film-media-and-entertainment",
  },
  {
    label: "Food & Drink",
    value: "food-and-drink",
  },
  {
    label: "Health & Wellness",
    value: "health-and-wellness",
  },
  {
    label: "Hobbies & Special Interest",
    value: "hobbies-and-special-interest",
  },
  {
    label: "Home & Lifestyle",
    value: "home-and-lifestyle",
  },
  {
    label: "Music",
    value: "music",
  },
  {
    label: "Other",
    value: "other",
  },
  {
    label: "Performing & Visual Arts",
    value: "performing-and-visual-arts",
  },
  {
    label: "Religion & Spirituality",
    value: "religion-and-spirituality",
  },
  {
    label: "School Activities",
    value: "school-activities",
  },
  {
    label: "Science & Technology",
    value: "science-and-technology",
  },
  {
    label: "Sports & Fitness",
    value: "sports-and-fitness",
  },
  {
    label: "Travel & Outdoor",
    value: "travel-and-outdoor",
  },
];

export const defaultPermissions = [
  "owner.all",
  "events.create",
  "events.list",
  "events.edit",
  "events.delete",
  "tickets.create",
  "tickets.list",
  "tickets.edit",
  "tickets.delete",
  "orders.list",
  "orders.edit",
  "orders.delete",
  "orders.manual-create",
  "organizations.profile",
  "forms.create",
  "forms.list",
  "forms.edit",
  "forms.delete",
];
