// Single source of truth for business details used across the site.
// Change a number / address here and it updates everywhere.
export const SITE = {
  name: "Zero Degree Brewery & Kitchen",
  shortName: "Zero Degree",
  company: "Six Sigma Brew and Hospitality LLP",
  url: "https://www.zerodegreebreweryandkitchen.com",
  description:
    "Craft brews, global cuisine, live music and unforgettable nights at Zero Degree Brewery & Kitchen, Rajarajeshwari Nagar, Bengaluru.",

  phoneDisplay: "+91 99864 66266",
  phoneTel: "+919986466266",
  whatsapp: "919986466266", // wa.me format: country code + number, digits only
  email: "info@zerodegreebreweryandkitchen.com",

  address: {
    line1: "BEML Layout, Rajarajeshwari Nagar",
    city: "Bengaluru",
    state: "Karnataka",
    pincode: "560098",
    country: "IN",
  },
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Zero+Degree+Brewery+%26+Kitchen+Rajarajeshwari+Nagar+Bengaluru",

  hoursDisplay: "12:00 PM – 1:00 AM, all days",
  opens: "12:00",
  closes: "01:00",
};

export const whatsappLink = (text = "") =>
  `https://wa.me/${SITE.whatsapp}${text ? `?text=${encodeURIComponent(text)}` : ""}`;
