import { RecruterJobs } from "../api/ui-service-client";

export enum ButtonsType {
    AdminUserButtons = 0,
    AdminJobButtons = 1,
    RecruiterJobButtons = 2,
    DefaultCancel = 3,
    UserJobApplyButton = 4
}

export enum FromEnum {
    FromMainJobs = 0,
    FromUserProfile = 1,
}

export interface PassingDataTo {
    jobId?: string | null;
    employerId?: string | null;
    jobDetail?: RecruterJobs;
    isFrom: FromEnum,
}

export enum UserType {
    Admin = 0,
    Recruiter = 1,
    User = 2,
}