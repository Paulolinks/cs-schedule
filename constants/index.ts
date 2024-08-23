export const GenderOptions = ["male", "female", "other"];

export const PatientFormDefaultValues = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  birthDate: new Date(Date.now()),
  // gender: "male" as Gender,
  gender: "male",
  address: "",
  occupation: "",
  emergencyContactName: "",
  emergencyContactNumber: "",
  primaryPhysician: "",
  insuranceProvider: "",
  insurancePolicyNumber: "",
  allergies: "",
  currentMedication: "",
  familyMedicalHistory: "",
  pastMedicalHistory: "",
  identificationType: "Birth Certificate",
  identificationNumber: "",
  identificationDocument: [],
  treatmentConsent: false,
  disclosureConsent: false,
  privacyConsent: false,
};

// export const IdentificationTypes = [
//   "Birth Certificate",
//   "Driver's License",
//   "Medical Insurance Card/Policy",
//   "Military ID Card",
//   "National Identity Card",
//   "Passport",
//   "Resident Alien Card (Green Card)",
//   "Social Security Card",
//   "State ID Card",
//   "Student ID Card",
//   "Voter ID Card",
// ];
export const IdentificationTypes = [
  "Paulo Goncalves",
  " Josh Goncalves",
  "Facebook",
  "Web site - coolseasonllc.com",
  "others",
];

export const Doctors = [
  {
    image: "/assets/images/electric.png",
    name: "Central Electric System",
  },
  {
    image: "/assets/images/gas.png",
    name: "Central Gas System",
  },
  {
    image: "/assets/images/1-zone.png",
    name: "Mini-Split 1 zone",
  },
  {
    image: "/assets/images/2-zone.png",
    name: "Mini-Split 2 zone",
  },
  {
    image: "/assets/images/3-zone.png",
    name: "Mini-Split 3 zone",
  },
  {
    image: "/assets/images/4-zone.png",
    name: "Mini-Split 4 or 5 zone",
  },
  {
    image: "/assets/images/package.png",
    name: "Package unit",
  },
];

export const StatusIcon = {
  scheduled: "/assets/icons/check.svg",
  pending: "/assets/icons/pending.svg",
  cancelled: "/assets/icons/cancelled.svg",
};
