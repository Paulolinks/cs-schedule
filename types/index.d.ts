/* eslint-disable no-unused-vars */

declare type SearchParamProps = {
  params: { [key: string]: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

declare type Gender = "Male" | "Female" | "Other";
declare type Status = "pending" | "scheduled" | "cancelled";

declare interface CreateUserParams {
  name: string;
  email: string;
  phone: string;
}
declare interface User extends CreateUserParams {
  $id: string;
}

// declare interface RegisterUserParams extends CreateUserParams {
//   userId: string;
//   birthDate: Date;
//   gender: Gender;
//   address: string;
//   occupation: string;
//   emergencyContactName: string;
//   emergencyContactNumber: string;
//   primaryPhysician: string;
//   insuranceProvider: string;
//   insurancePolicyNumber: string;
//   allergies: string | undefined;
//   currentMedication: string | undefined;
//   familyMedicalHistory: string | undefined;
//   pastMedicalHistory: string | undefined;
//   identificationType: string | undefined;
//   identificationNumber: string | undefined;
//   identificationDocument: FormData | undefined;
//   privacyConsent: boolean;
// }

declare interface RegisterUserParams extends CreateUserParams {
  userId: string;
  birthDate: Date;
  gender: Gender;
  address?: string; // Optional
  occupation?: string; // Optional
  emergencyContactName?: string; // Optional
  emergencyContactNumber?: string; // Optional
  primaryPhysician: string;
  insuranceProvider?: string; // Optional
  insurancePolicyNumber?: string; // Optional
  allergies?: string; // Optional
  currentMedication?: string; // Optional
  familyMedicalHistory?: string; // Optional
  pastMedicalHistory?: string; // Optional
  identificationType?: string; // Optional
  identificationNumber?: string; // Optional
  identificationDocument?: FormData; // Optional
  privacyConsent?: boolean;
}

declare type CreateAppointmentParams = {
  userId: string;
  patient: string;
  primaryPhysician: string;
  reason: string;
  schedule: Date;
  status: Status;
  note: string | undefined;
};

declare type UpdateAppointmentParams = {
  appointmentId: string;
  userId: string;
  timeZone: string;
  appointment: Appointment;
  type: string;
};
