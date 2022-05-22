import { User } from "firebase/auth";
import { Job, RecruterJobs } from "../api/ui-service-client";

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

export const RoutesList = {
    Login: "/",
    Register: "/register",
    RegisterExtended: "/registerExtended",
    UserAdmin: "/manageUsers",
    JobsAdmin: "/manageJobs",
    ProfilePageAdmin: "/profilePageAdmin",
    ProfilePage: "/profilePage",
    HomePage: "/homePage",
    JobPageExtended: "/jobPage",
    AddJobForm: "/addJob",
    Back: -1
}


export interface JobDetailFormModel {
    userData?: User;
    jobData?: Job;
    isFromUpdate: boolean;
}

export const UserTypeConst = {
    Recruiter: "Recruiter",
    Candidate: "Candidate",
}