// "use server";

// import { ID, InputFile, Query } from "node-appwrite";

// import {
//   BUCKET_ID,
//   DATABASE_ID,
//   ENDPOINT,
//   PATIENT_COLLECTION_ID,
//   PROJECT_ID,
//   databases,
//   storage,
//   users,
// } from "../appwrite.config";
// import { parseStringify } from "../utils";

// // CREATE APPWRITE USER
// export const createUser = async (user: CreateUserParams) => {
//   try {
//     // Create new user -> https://appwrite.io/docs/references/1.5.x/server-nodejs/users#create
//     const newuser = await users.create(
//       ID.unique(),
//       user.email,
//       user.phone,
//       undefined,
//       user.name
//     );

//     return parseStringify(newuser);
//   } catch (error: any) {
//     // Check existing user
//     if (error && error?.code === 409) {
//       const existingUser = await users.list([
//         Query.equal("email", [user.email]),
//       ]);

//       return existingUser.users[0];
//     }
//     console.error("An error occurred while creating a new user:", error);
//   }
// };

// // GET USER
// export const getUser = async (userId: string) => {
//   try {
//     const user = await users.get(userId);

//     return parseStringify(user);
//   } catch (error) {
//     console.error(
//       "An error occurred while retrieving the user details:",
//       error
//     );
//   }
// };

// // REGISTER PATIENT
// export const registerPatient = async ({
//   identificationDocument,
//   ...patient
// }: RegisterUserParams) => {
//   try {
//     // Upload file ->  // https://appwrite.io/docs/references/cloud/client-web/storage#createFile
//     let file;
//     if (identificationDocument) {
//       const inputFile =
//         identificationDocument &&
//         InputFile.fromBlob(
//           identificationDocument?.get("blobFile") as Blob,
//           identificationDocument?.get("fileName") as string
//         );

//       file = await storage.createFile(BUCKET_ID!, ID.unique(), inputFile);
//     }

//     // Create new patient document -> https://appwrite.io/docs/references/cloud/server-nodejs/databases#createDocument
//     const newPatient = await databases.createDocument(
//       DATABASE_ID!,
//       PATIENT_COLLECTION_ID!,
//       ID.unique(),
//       {
//         identificationDocumentId: file?.$id ? file.$id : null,
//         identificationDocumentUrl: file?.$id
//           ? `${ENDPOINT}/storage/buckets/${BUCKET_ID}/files/${file.$id}/view??project=${PROJECT_ID}`
//           : null,
//         ...patient,
//       }
//     );

//     return parseStringify(newPatient);
//   } catch (error) {
//     console.error("An error occurred while creating a new patient:", error);
//   }
// };

// // export const registerPatient = async ({
// //   identificationDocument,
// //   ...patient
// // }: RegisterUserParams) => {
// //   try {
// //     let file;
// //     if (identificationDocument) {
// //       const inputFile =
// //         identificationDocument &&
// //         InputFile.fromBlob(
// //           identificationDocument?.get("blobFile") as Blob,
// //           identificationDocument?.get("fileName") as string
// //         );

// //       file = await storage.createFile(BUCKET_ID!, ID.unique(), inputFile);
// //     }

// //     // Log the patient data
// //     console.log("Patient data before sending:", patient);

// //     const newPatient = await databases.createDocument(
// //       DATABASE_ID!,
// //       PATIENT_COLLECTION_ID!,
// //       ID.unique(),
// //       {
// //         identificationDocumentId: file?.$id ? file.$id : null,
// //         identificationDocumentUrl: file?.$id
// //           ? `${ENDPOINT}/storage/buckets/${BUCKET_ID}/files/${file.$id}/view??project=${PROJECT_ID}`
// //           : null,
// //         ...patient,
// //       }
// //     );

// //     console.log("New patient document created:", newPatient);

// //     return parseStringify(newPatient);
// //   } catch (error) {
// //     console.error("An error occurred while creating a new patient:", error);
// //   }
// // };

// // GET PATIENT
// export const getPatient = async (userId: string) => {
//   try {
//     const patients = await databases.listDocuments(
//       DATABASE_ID!,
//       PATIENT_COLLECTION_ID!,
//       [Query.equal("userId", [userId])]
//     );

//     return parseStringify(patients.documents[0]);
//   } catch (error) {
//     console.error(
//       "An error occurred while retrieving the patient details:",
//       error
//     );
//   }
// };

// "use server";

// import { ID, InputFile, Query } from "node-appwrite";

// import {
//   BUCKET_ID,
//   DATABASE_ID,
//   ENDPOINT,
//   PATIENT_COLLECTION_ID,
//   PROJECT_ID,
//   databases,
//   storage,
//   users,
// } from "../appwrite.config";
// import { parseStringify } from "../utils";

// // CREATE APPWRITE USER
// export const createUser = async (user: CreateUserParams) => {
//   try {
//     // Create new user -> https://appwrite.io/docs/references/1.5.x/server-nodejs/users#create
//     const newuser = await users.create(
//       ID.unique(),
//       user.email,
//       user.phone,
//       undefined,
//       user.name
//     );

//     return parseStringify(newuser);
//   } catch (error: any) {
//     // Check existing user
//     if (error && error?.code === 409) {
//       const existingUser = await users.list([
//         Query.equal("email", [user.email]),
//       ]);

//       return existingUser.users[0];
//     }
//     console.error("An error occurred while creating a new user:", error);
//   }
// };

// // GET USER
// export const getUser = async (userId: string) => {
//   try {
//     const user = await users.get(userId);

//     return parseStringify(user);
//   } catch (error) {
//     console.error(
//       "An error occurred while retrieving the user details:",
//       error
//     );
//   }
// };

// // REGISTER PATIENT
// export const registerPatient = async ({
//   identificationDocument,
//   ...patient
// }: RegisterUserParams) => {
//   try {
//     // Upload file ->  // https://appwrite.io/docs/references/cloud/client-web/storage#createFile
//     let file;
//     if (identificationDocument) {
//       const inputFile =
//         identificationDocument &&
//         InputFile.fromBlob(
//           identificationDocument?.get("blobFile") as Blob,
//           identificationDocument?.get("fileName") as string
//         );

//       file = await storage.createFile(BUCKET_ID!, ID.unique(), inputFile);
//     }

//     console.log({
//       identificationDocumentId: file?.$id ? file.$id : null,
//       identificationDocumentUrl: file?.$id
//         ? `${ENDPOINT}/storage/buckets/${BUCKET_ID}/files/${file.$id}/view??project=${PROJECT_ID}`
//         : null,
//       ...patient,
//     });

//     // Create new patient document -> https://appwrite.io/docs/references/cloud/server-nodejs/databases#createDocument
//     const newPatient = await databases.createDocument(
//       DATABASE_ID!,
//       PATIENT_COLLECTION_ID!,
//       ID.unique(),
//       {
//         identificationDocumentId: file?.$id ? file.$id : null,
//         identificationDocumentUrl: file?.$id
//           ? `${ENDPOINT}/storage/buckets/${BUCKET_ID}/files/${file.$id}/view??project=${PROJECT_ID}`
//           : null,
//         ...patient,
//       }
//     );

//     return parseStringify(newPatient);
//   } catch (error) {
//     console.error("An error occurred while creating a new patient:", error);
//   }
// };

// // GET PATIENT
// export const getPatient = async (userId: string) => {
//   try {
//     const patients = await databases.listDocuments(
//       DATABASE_ID!,
//       PATIENT_COLLECTION_ID!,
//       [Query.equal("userId", [userId])]
//     );

//     return parseStringify(patients.documents[0]);
//   } catch (error) {
//     console.error(
//       "An error occurred while retrieving the patient details:",
//       error
//     );
//   }
// };

// AQUI

"use server";

import { ID, InputFile, Query } from "node-appwrite";
import {
  BUCKET_ID,
  DATABASE_ID,
  ENDPOINT,
  PATIENT_COLLECTION_ID,
  PROJECT_ID,
  databases,
  storage,
  users,
} from "../appwrite.config";
import { parseStringify } from "../utils";

// CREATE APPWRITE USER
export const createUser = async (user: CreateUserParams) => {
  try {
    const newuser = await users.create(
      ID.unique(),
      user.email,
      user.phone,
      undefined,
      user.name
    );

    return parseStringify(newuser);
  } catch (error: any) {
    if (error?.code === 409) {
      const existingUser = await users.list([
        Query.equal("email", [user.email]),
      ]);
      return existingUser.users[0];
    }
    console.error("An error occurred while creating a new user:", error);
  }
};

// GET USER
export const getUser = async (userId: string) => {
  try {
    const user = await users.get(userId);

    return parseStringify(user);
  } catch (error) {
    console.error(
      "An error occurred while retrieving the user details:",
      error
    );
  }
};

// REGISTER PATIENT
export const registerPatient = async ({
  identificationDocument,
  ...patient
}: RegisterUserParams) => {
  try {
    let file;
    if (identificationDocument) {
      const inputFile = InputFile.fromBlob(
        identificationDocument.get("blobFile") as Blob,
        identificationDocument.get("fileName") as string
      );

      file = await storage.createFile(BUCKET_ID!, ID.unique(), inputFile);
    }

    const newPatient = await databases.createDocument(
      DATABASE_ID!,
      PATIENT_COLLECTION_ID!,
      ID.unique(),
      {
        identificationDocumentId: file?.$id ?? null,
        identificationDocumentUrl: file?.$id
          ? `${ENDPOINT}/storage/buckets/${BUCKET_ID}/files/${file.$id}/view?project=${PROJECT_ID}`
          : null,
        ...patient,
      }
    );

    return parseStringify(newPatient);
  } catch (error) {
    console.error("An error occurred while creating a new patient:", error);
  }
};

// export const registerPatient = async ({
//   identificationDocument,
//   ...patient
// }: RegisterUserParams) => {
//   try {
//     let file;
//     let identificationDocumentUrl = null;

//     if (identificationDocument) {
//       const inputFile =
//         identificationDocument &&
//         InputFile.fromBlob(
//           identificationDocument?.get("blobFile") as Blob,
//           identificationDocument?.get("fileName") as string
//         );

//       file = await storage.createFile(BUCKET_ID!, ID.unique(), inputFile);

//       if (file?.$id) {
//         identificationDocumentUrl = `${ENDPOINT}/storage/buckets/${BUCKET_ID}/files/${file.$id}/view??project=${PROJECT_ID}`;
//       } else {
//         throw new Error("File upload failed, missing file ID.");
//       }
//     }

//     console.log({
//       identificationDocumentId: file?.$id || "No file ID",
//       identificationDocumentUrl: identificationDocumentUrl || "No URL",
//       ...patient,
//     });

//     const newPatient = await databases.createDocument(
//       DATABASE_ID!,
//       PATIENT_COLLECTION_ID!,
//       ID.unique(),
//       {
//         // userId: patient.userId,
//         identificationDocumentId: file?.$id,
//         identificationDocumentUrl,
//         ...patient,
//       }
//     );

//     return parseStringify(newPatient);
//   } catch (error) {
//     console.error("An error occurred while creating a new patient:", error);
//     throw error; // Re-throw the error to handle it further up the chain
//   }
// };

// GET PATIENT
// export const getPatient = async (userId: string) => {
//   try {
//     const patients = await databases.listDocuments(
//       DATABASE_ID!,
//       PATIENT_COLLECTION_ID!,
//       [Query.equal("userId", [userId])]
//     );

//     const patientDoc = patients.documents?.[0] ?? null;
//     if (!patientDoc) {
//       console.error("No patient document found for the given userId");
//       return null;
//     }

//     return parseStringify(patientDoc);
//   } catch (error) {
//     console.error(
//       "An error occurred while retrieving the patient details:",
//       error
//     );
//   }
// };

// GET PATIENT
// GET PATIENT
export const getPatient = async (userId: string) => {
  try {
    // Log the userId to verify it's being passed correctly
    console.log("Querying for userId:", userId);

    // Perform the query
    const patients = await databases.listDocuments(
      DATABASE_ID!,
      PATIENT_COLLECTION_ID!,
      [Query.equal("userId", [userId])]
    );

    // Log the query result
    console.log("Query result:", patients.documents);

    // Check if any documents were returned
    if (patients.documents.length === 0) {
      console.error("No patient document found for the given userId");
      return null;
    }

    // Return the first document found
    return parseStringify(patients.documents[0]);
  } catch (error) {
    console.error(
      "An error occurred while retrieving the patient details:",
      error
    );
  }
};
