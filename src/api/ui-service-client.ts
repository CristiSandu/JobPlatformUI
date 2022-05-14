/* tslint:disable */
/* eslint-disable */
//----------------------
// <auto-generated>
//     Generated using the NSwag toolchain v13.15.10.0 (NJsonSchema v10.6.10.0 (Newtonsoft.Json v13.0.0.0)) (http://NSwag.org)
//     SourceSHA: 
// </auto-generated>
//----------------------
// ReSharper disable InconsistentNaming

import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

import type dayjs from 'dayjs';

export interface IDropdownClient {
    /**
     * @return Success
     */
    domainsAll(): Promise<DomainModel[]>;
    /**
     * @param body (optional) 
     * @return Success
     */
    domainsPOST(body: AddValuesModelRequest | undefined): Promise<boolean>;
    /**
     * @return Success
     */
    domainsDELETE(id: string): Promise<boolean>;
}

export class DropdownClient implements IDropdownClient {
    private instance: AxiosInstance;
    private baseUrl: string;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;

    constructor(baseUrl?: string, instance?: AxiosInstance) {
        this.instance = instance ? instance : axios.create();
        this.baseUrl = baseUrl !== undefined && baseUrl !== null ? baseUrl : "";
    }

    /**
     * @return Success
     */
    domainsAll(  abortController?: AbortController | undefined): Promise<DomainModel[]> {
        let url_ = this.baseUrl + "/api/Dropdown/Domains";
        url_ = url_.replace(/[?&]$/, "");

        let options_ = <AxiosRequestConfig>{
            method: "GET",
            url: url_,
            headers: {
                "Accept": "text/plain"
            },
            signal: abortController?.signal
        };

        return this.instance.request(options_).catch((_error: any) => {
            if (isAxiosError(_error) && _error.response) {
                return _error.response;
            } else {
                throw _error;
            }
        }).then((_response: AxiosResponse) => {
            return this.processDomainsAll(_response);
        });
    }

    protected processDomainsAll(response: AxiosResponse): Promise<DomainModel[]> {
        const status = response?.status;
        if (response == null)
            return Promise.resolve<DomainModel[]>(null as any);
        let _headers: any = {};
        if (response != null && response.headers && typeof response.headers === "object") {
            for (let k in response.headers) {
                if (response.headers.hasOwnProperty(k)) {
                    _headers[k] = response.headers[k];
                }
            }
        }
        if (status === 200) {
            const _responseText = response.data;
            let result200: any = null;
            let resultData200  = _responseText;
            result200 = JSON.parse(resultData200);
            return Promise.resolve<DomainModel[]>(result200);

        } else if (status !== 200 && status !== 204) {
            const _responseText = response.data;
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return Promise.resolve<DomainModel[]>(null as any);
    }

    /**
     * @param body (optional) 
     * @return Success
     */
    domainsPOST(body: AddValuesModelRequest | undefined , abortController?: AbortController | undefined): Promise<boolean> {
        let url_ = this.baseUrl + "/api/Dropdown/Domains";
        url_ = url_.replace(/[?&]$/, "");

        const content_ = JSON.stringify(body);

        let options_ = <AxiosRequestConfig>{
            data: content_,
            method: "POST",
            url: url_,
            headers: {
                "Content-Type": "application/json",
                "Accept": "text/plain"
            },
            signal: abortController?.signal
        };

        return this.instance.request(options_).catch((_error: any) => {
            if (isAxiosError(_error) && _error.response) {
                return _error.response;
            } else {
                throw _error;
            }
        }).then((_response: AxiosResponse) => {
            return this.processDomainsPOST(_response);
        });
    }

    protected processDomainsPOST(response: AxiosResponse): Promise<boolean> {
        const status = response?.status;
        if (response == null)
            return Promise.resolve<boolean>(null as any);
        let _headers: any = {};
        if (response != null && response.headers && typeof response.headers === "object") {
            for (let k in response.headers) {
                if (response.headers.hasOwnProperty(k)) {
                    _headers[k] = response.headers[k];
                }
            }
        }
        if (status === 200) {
            const _responseText = response.data;
            let result200: any = null;
            let resultData200  = _responseText;
            result200 = JSON.parse(resultData200);
            return Promise.resolve<boolean>(result200);

        } else if (status !== 200 && status !== 204) {
            const _responseText = response.data;
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return Promise.resolve<boolean>(null as any);
    }

    /**
     * @return Success
     */
    domainsDELETE(id: string , abortController?: AbortController | undefined): Promise<boolean> {
        let url_ = this.baseUrl + "/api/Dropdown/Domains/{id}";
        if (id === undefined || id === null)
            throw new Error("The parameter 'id' must be defined.");
        url_ = url_.replace("{id}", encodeURIComponent("" + id));
        url_ = url_.replace(/[?&]$/, "");

        let options_ = <AxiosRequestConfig>{
            method: "DELETE",
            url: url_,
            headers: {
                "Accept": "text/plain"
            },
            signal: abortController?.signal
        };

        return this.instance.request(options_).catch((_error: any) => {
            if (isAxiosError(_error) && _error.response) {
                return _error.response;
            } else {
                throw _error;
            }
        }).then((_response: AxiosResponse) => {
            return this.processDomainsDELETE(_response);
        });
    }

    protected processDomainsDELETE(response: AxiosResponse): Promise<boolean> {
        const status = response?.status;
        if (response == null)
            return Promise.resolve<boolean>(null as any);
        let _headers: any = {};
        if (response != null && response.headers && typeof response.headers === "object") {
            for (let k in response.headers) {
                if (response.headers.hasOwnProperty(k)) {
                    _headers[k] = response.headers[k];
                }
            }
        }
        if (status === 200) {
            const _responseText = response.data;
            let result200: any = null;
            let resultData200  = _responseText;
            result200 = JSON.parse(resultData200);
            return Promise.resolve<boolean>(result200);

        } else if (status !== 200 && status !== 204) {
            const _responseText = response.data;
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return Promise.resolve<boolean>(null as any);
    }
}

export interface IJobsClient {
    /**
     * @param body (optional) 
     * @return Success
     */
    getJobs(body: GetJobsModelRequest | undefined): Promise<JobExtendedModel[]>;
    /**
     * @param body (optional) 
     * @return Success
     */
    jobsPOST(body: AddJobsModelRequest | undefined): Promise<boolean>;
    /**
     * @param body (optional) 
     * @return Success
     */
    validateJob(body: ValidateJobModelRequest | undefined): Promise<boolean>;
    /**
     * @param body (optional) 
     * @return Success
     */
    expireJob(body: ExpirationModelRequest | undefined): Promise<boolean>;
    /**
     * @param body (optional) 
     * @return Success
     */
    jobsPUT(id: string, body: UpdateJobsModelRequest | undefined): Promise<boolean>;
}

export class JobsClient implements IJobsClient {
    private instance: AxiosInstance;
    private baseUrl: string;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;

    constructor(baseUrl?: string, instance?: AxiosInstance) {
        this.instance = instance ? instance : axios.create();
        this.baseUrl = baseUrl !== undefined && baseUrl !== null ? baseUrl : "";
    }

    /**
     * @param body (optional) 
     * @return Success
     */
    getJobs(body: GetJobsModelRequest | undefined , abortController?: AbortController | undefined): Promise<JobExtendedModel[]> {
        let url_ = this.baseUrl + "/api/Jobs/GetJobs";
        url_ = url_.replace(/[?&]$/, "");

        const content_ = JSON.stringify(body);

        let options_ = <AxiosRequestConfig>{
            data: content_,
            method: "POST",
            url: url_,
            headers: {
                "Content-Type": "application/json",
                "Accept": "text/plain"
            },
            signal: abortController?.signal
        };

        return this.instance.request(options_).catch((_error: any) => {
            if (isAxiosError(_error) && _error.response) {
                return _error.response;
            } else {
                throw _error;
            }
        }).then((_response: AxiosResponse) => {
            return this.processGetJobs(_response);
        });
    }

    protected processGetJobs(response: AxiosResponse): Promise<JobExtendedModel[]> {
        const status = response?.status;
        if (response == null)
            return Promise.resolve<JobExtendedModel[]>(null as any);
        let _headers: any = {};
        if (response != null && response.headers && typeof response.headers === "object") {
            for (let k in response.headers) {
                if (response.headers.hasOwnProperty(k)) {
                    _headers[k] = response.headers[k];
                }
            }
        }
        if (status === 200) {
            const _responseText = response.data;
            let result200: any = null;
            let resultData200  = _responseText;
            result200 = JSON.parse(resultData200);
            return Promise.resolve<JobExtendedModel[]>(result200);

        } else if (status !== 200 && status !== 204) {
            const _responseText = response.data;
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return Promise.resolve<JobExtendedModel[]>(null as any);
    }

    /**
     * @param body (optional) 
     * @return Success
     */
    jobsPOST(body: AddJobsModelRequest | undefined , abortController?: AbortController | undefined): Promise<boolean> {
        let url_ = this.baseUrl + "/api/Jobs";
        url_ = url_.replace(/[?&]$/, "");

        const content_ = JSON.stringify(body);

        let options_ = <AxiosRequestConfig>{
            data: content_,
            method: "POST",
            url: url_,
            headers: {
                "Content-Type": "application/json",
                "Accept": "text/plain"
            },
            signal: abortController?.signal
        };

        return this.instance.request(options_).catch((_error: any) => {
            if (isAxiosError(_error) && _error.response) {
                return _error.response;
            } else {
                throw _error;
            }
        }).then((_response: AxiosResponse) => {
            return this.processJobsPOST(_response);
        });
    }

    protected processJobsPOST(response: AxiosResponse): Promise<boolean> {
        const status = response?.status;
        if (response == null)
            return Promise.resolve<boolean>(null as any);
        let _headers: any = {};
        if (response != null && response.headers && typeof response.headers === "object") {
            for (let k in response.headers) {
                if (response.headers.hasOwnProperty(k)) {
                    _headers[k] = response.headers[k];
                }
            }
        }
        if (status === 200) {
            const _responseText = response.data;
            let result200: any = null;
            let resultData200  = _responseText;
            result200 = JSON.parse(resultData200);
            return Promise.resolve<boolean>(result200);

        } else if (status !== 200 && status !== 204) {
            const _responseText = response.data;
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return Promise.resolve<boolean>(null as any);
    }

    /**
     * @param body (optional) 
     * @return Success
     */
    validateJob(body: ValidateJobModelRequest | undefined , abortController?: AbortController | undefined): Promise<boolean> {
        let url_ = this.baseUrl + "/api/Jobs/ValidateJob";
        url_ = url_.replace(/[?&]$/, "");

        const content_ = JSON.stringify(body);

        let options_ = <AxiosRequestConfig>{
            data: content_,
            method: "POST",
            url: url_,
            headers: {
                "Content-Type": "application/json",
                "Accept": "text/plain"
            },
            signal: abortController?.signal
        };

        return this.instance.request(options_).catch((_error: any) => {
            if (isAxiosError(_error) && _error.response) {
                return _error.response;
            } else {
                throw _error;
            }
        }).then((_response: AxiosResponse) => {
            return this.processValidateJob(_response);
        });
    }

    protected processValidateJob(response: AxiosResponse): Promise<boolean> {
        const status = response?.status;
        if (response == null)
            return Promise.resolve<boolean>(null as any);
        let _headers: any = {};
        if (response != null && response.headers && typeof response.headers === "object") {
            for (let k in response.headers) {
                if (response.headers.hasOwnProperty(k)) {
                    _headers[k] = response.headers[k];
                }
            }
        }
        if (status === 200) {
            const _responseText = response.data;
            let result200: any = null;
            let resultData200  = _responseText;
            result200 = JSON.parse(resultData200);
            return Promise.resolve<boolean>(result200);

        } else if (status !== 200 && status !== 204) {
            const _responseText = response.data;
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return Promise.resolve<boolean>(null as any);
    }

    /**
     * @param body (optional) 
     * @return Success
     */
    expireJob(body: ExpirationModelRequest | undefined , abortController?: AbortController | undefined): Promise<boolean> {
        let url_ = this.baseUrl + "/api/Jobs/ExpireJob";
        url_ = url_.replace(/[?&]$/, "");

        const content_ = JSON.stringify(body);

        let options_ = <AxiosRequestConfig>{
            data: content_,
            method: "POST",
            url: url_,
            headers: {
                "Content-Type": "application/json",
                "Accept": "text/plain"
            },
            signal: abortController?.signal
        };

        return this.instance.request(options_).catch((_error: any) => {
            if (isAxiosError(_error) && _error.response) {
                return _error.response;
            } else {
                throw _error;
            }
        }).then((_response: AxiosResponse) => {
            return this.processExpireJob(_response);
        });
    }

    protected processExpireJob(response: AxiosResponse): Promise<boolean> {
        const status = response?.status;
        if (response == null)
            return Promise.resolve<boolean>(null as any);
        let _headers: any = {};
        if (response != null && response.headers && typeof response.headers === "object") {
            for (let k in response.headers) {
                if (response.headers.hasOwnProperty(k)) {
                    _headers[k] = response.headers[k];
                }
            }
        }
        if (status === 200) {
            const _responseText = response.data;
            let result200: any = null;
            let resultData200  = _responseText;
            result200 = JSON.parse(resultData200);
            return Promise.resolve<boolean>(result200);

        } else if (status !== 200 && status !== 204) {
            const _responseText = response.data;
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return Promise.resolve<boolean>(null as any);
    }

    /**
     * @param body (optional) 
     * @return Success
     */
    jobsPUT(id: string, body: UpdateJobsModelRequest | undefined , abortController?: AbortController | undefined): Promise<boolean> {
        let url_ = this.baseUrl + "/api/Jobs/{id}";
        if (id === undefined || id === null)
            throw new Error("The parameter 'id' must be defined.");
        url_ = url_.replace("{id}", encodeURIComponent("" + id));
        url_ = url_.replace(/[?&]$/, "");

        const content_ = JSON.stringify(body);

        let options_ = <AxiosRequestConfig>{
            data: content_,
            method: "PUT",
            url: url_,
            headers: {
                "Content-Type": "application/json",
                "Accept": "text/plain"
            },
            signal: abortController?.signal
        };

        return this.instance.request(options_).catch((_error: any) => {
            if (isAxiosError(_error) && _error.response) {
                return _error.response;
            } else {
                throw _error;
            }
        }).then((_response: AxiosResponse) => {
            return this.processJobsPUT(_response);
        });
    }

    protected processJobsPUT(response: AxiosResponse): Promise<boolean> {
        const status = response?.status;
        if (response == null)
            return Promise.resolve<boolean>(null as any);
        let _headers: any = {};
        if (response != null && response.headers && typeof response.headers === "object") {
            for (let k in response.headers) {
                if (response.headers.hasOwnProperty(k)) {
                    _headers[k] = response.headers[k];
                }
            }
        }
        if (status === 200) {
            const _responseText = response.data;
            let result200: any = null;
            let resultData200  = _responseText;
            result200 = JSON.parse(resultData200);
            return Promise.resolve<boolean>(result200);

        } else if (status !== 200 && status !== 204) {
            const _responseText = response.data;
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return Promise.resolve<boolean>(null as any);
    }
}

export interface IUsersClient {
    /**
     * @return Success
     */
    usersAll(userId: string): Promise<User[]>;
    /**
     * @param body (optional) 
     * @return Success
     */
    usersPOST(body: AddUserModelRequest | undefined): Promise<boolean>;
    /**
     * @param body (optional) 
     * @return Success
     */
    usersPUT(id: string, body: UpdateUserModelRequest | undefined): Promise<boolean>;
    /**
     * @return Success
     */
    usersDELETE(id: string): Promise<boolean>;
}

export class UsersClient implements IUsersClient {
    private instance: AxiosInstance;
    private baseUrl: string;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;

    constructor(baseUrl?: string, instance?: AxiosInstance) {
        this.instance = instance ? instance : axios.create();
        this.baseUrl = baseUrl !== undefined && baseUrl !== null ? baseUrl : "";
    }

    /**
     * @return Success
     */
    usersAll(userId: string , abortController?: AbortController | undefined): Promise<User[]> {
        let url_ = this.baseUrl + "/api/Users/{userId}";
        if (userId === undefined || userId === null)
            throw new Error("The parameter 'userId' must be defined.");
        url_ = url_.replace("{userId}", encodeURIComponent("" + userId));
        url_ = url_.replace(/[?&]$/, "");

        let options_ = <AxiosRequestConfig>{
            method: "GET",
            url: url_,
            headers: {
                "Accept": "text/plain"
            },
            signal: abortController?.signal
        };

        return this.instance.request(options_).catch((_error: any) => {
            if (isAxiosError(_error) && _error.response) {
                return _error.response;
            } else {
                throw _error;
            }
        }).then((_response: AxiosResponse) => {
            return this.processUsersAll(_response);
        });
    }

    protected processUsersAll(response: AxiosResponse): Promise<User[]> {
        const status = response?.status;
        if (response == null)
            return Promise.resolve<User[]>(null as any);
        let _headers: any = {};
        if (response != null && response.headers && typeof response.headers === "object") {
            for (let k in response.headers) {
                if (response.headers.hasOwnProperty(k)) {
                    _headers[k] = response.headers[k];
                }
            }
        }
        if (status === 200) {
            const _responseText = response.data;
            let result200: any = null;
            let resultData200  = _responseText;
            result200 = JSON.parse(resultData200);
            return Promise.resolve<User[]>(result200);

        } else if (status !== 200 && status !== 204) {
            const _responseText = response.data;
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return Promise.resolve<User[]>(null as any);
    }

    /**
     * @param body (optional) 
     * @return Success
     */
    usersPOST(body: AddUserModelRequest | undefined , abortController?: AbortController | undefined): Promise<boolean> {
        let url_ = this.baseUrl + "/api/Users";
        url_ = url_.replace(/[?&]$/, "");

        const content_ = JSON.stringify(body);

        let options_ = <AxiosRequestConfig>{
            data: content_,
            method: "POST",
            url: url_,
            headers: {
                "Content-Type": "application/json",
                "Accept": "text/plain"
            },
            signal: abortController?.signal
        };

        return this.instance.request(options_).catch((_error: any) => {
            if (isAxiosError(_error) && _error.response) {
                return _error.response;
            } else {
                throw _error;
            }
        }).then((_response: AxiosResponse) => {
            return this.processUsersPOST(_response);
        });
    }

    protected processUsersPOST(response: AxiosResponse): Promise<boolean> {
        const status = response?.status;
        if (response == null)
            return Promise.resolve<boolean>(null as any);
        let _headers: any = {};
        if (response != null && response.headers && typeof response.headers === "object") {
            for (let k in response.headers) {
                if (response.headers.hasOwnProperty(k)) {
                    _headers[k] = response.headers[k];
                }
            }
        }
        if (status === 200) {
            const _responseText = response.data;
            let result200: any = null;
            let resultData200  = _responseText;
            result200 = JSON.parse(resultData200);
            return Promise.resolve<boolean>(result200);

        } else if (status !== 200 && status !== 204) {
            const _responseText = response.data;
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return Promise.resolve<boolean>(null as any);
    }

    /**
     * @param body (optional) 
     * @return Success
     */
    usersPUT(id: string, body: UpdateUserModelRequest | undefined , abortController?: AbortController | undefined): Promise<boolean> {
        let url_ = this.baseUrl + "/api/Users/{id}";
        if (id === undefined || id === null)
            throw new Error("The parameter 'id' must be defined.");
        url_ = url_.replace("{id}", encodeURIComponent("" + id));
        url_ = url_.replace(/[?&]$/, "");

        const content_ = JSON.stringify(body);

        let options_ = <AxiosRequestConfig>{
            data: content_,
            method: "PUT",
            url: url_,
            headers: {
                "Content-Type": "application/json",
                "Accept": "text/plain"
            },
            signal: abortController?.signal
        };

        return this.instance.request(options_).catch((_error: any) => {
            if (isAxiosError(_error) && _error.response) {
                return _error.response;
            } else {
                throw _error;
            }
        }).then((_response: AxiosResponse) => {
            return this.processUsersPUT(_response);
        });
    }

    protected processUsersPUT(response: AxiosResponse): Promise<boolean> {
        const status = response?.status;
        if (response == null)
            return Promise.resolve<boolean>(null as any);
        let _headers: any = {};
        if (response != null && response.headers && typeof response.headers === "object") {
            for (let k in response.headers) {
                if (response.headers.hasOwnProperty(k)) {
                    _headers[k] = response.headers[k];
                }
            }
        }
        if (status === 200) {
            const _responseText = response.data;
            let result200: any = null;
            let resultData200  = _responseText;
            result200 = JSON.parse(resultData200);
            return Promise.resolve<boolean>(result200);

        } else if (status !== 200 && status !== 204) {
            const _responseText = response.data;
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return Promise.resolve<boolean>(null as any);
    }

    /**
     * @return Success
     */
    usersDELETE(id: string , abortController?: AbortController | undefined): Promise<boolean> {
        let url_ = this.baseUrl + "/api/Users/{id}";
        if (id === undefined || id === null)
            throw new Error("The parameter 'id' must be defined.");
        url_ = url_.replace("{id}", encodeURIComponent("" + id));
        url_ = url_.replace(/[?&]$/, "");

        let options_ = <AxiosRequestConfig>{
            method: "DELETE",
            url: url_,
            headers: {
                "Accept": "text/plain"
            },
            signal: abortController?.signal
        };

        return this.instance.request(options_).catch((_error: any) => {
            if (isAxiosError(_error) && _error.response) {
                return _error.response;
            } else {
                throw _error;
            }
        }).then((_response: AxiosResponse) => {
            return this.processUsersDELETE(_response);
        });
    }

    protected processUsersDELETE(response: AxiosResponse): Promise<boolean> {
        const status = response?.status;
        if (response == null)
            return Promise.resolve<boolean>(null as any);
        let _headers: any = {};
        if (response != null && response.headers && typeof response.headers === "object") {
            for (let k in response.headers) {
                if (response.headers.hasOwnProperty(k)) {
                    _headers[k] = response.headers[k];
                }
            }
        }
        if (status === 200) {
            const _responseText = response.data;
            let result200: any = null;
            let resultData200  = _responseText;
            result200 = JSON.parse(resultData200);
            return Promise.resolve<boolean>(result200);

        } else if (status !== 200 && status !== 204) {
            const _responseText = response.data;
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
        }
        return Promise.resolve<boolean>(null as any);
    }
}

export interface AddJobsModelRequest {
    jobData?: Job;
}

export interface AddUserModelRequest {
    userData?: User;
}

export interface AddValuesModelRequest {
    type?: number;
    value?: string | null;
}

export interface DomainModel {
    readonly documentId?: string | null;
    name?: string | null;
}

export interface ExpirationModelRequest {
    isExpired?: boolean;
    jobId?: string | null;
}

export interface GetJobsModelRequest {
    isRecruter?: boolean;
    isAdmin?: boolean;
    userID?: string | null;
}

export interface Job {
    documentId?: string | null;
    name?: string | null;
    numberEmp?: number;
    address?: string | null;
    description?: string | null;
    domain?: string | null;
    isCheck?: boolean;
    isExpired?: boolean;
    recruterID?: string | null;
    date?: dayjs.Dayjs;
}

export interface JobExtendedModel {
    documentId?: string | null;
    name?: string | null;
    numberEmp?: number;
    address?: string | null;
    description?: string | null;
    domain?: string | null;
    isCheck?: boolean;
    isExpired?: boolean;
    recruterID?: string | null;
    date?: dayjs.Dayjs;
    recruterName?: string | null;
    isMine?: boolean;
}

export interface UpdateJobsModelRequest {
    jobData?: Job;
    jobId?: string | null;
}

export interface UpdateUserModelRequest {
    userData?: User;
    userID?: string | null;
}

export interface User {
    documentId?: string | null;
    age?: number | null;
    description?: string | null;
    description_last_job?: string | null;
    domain?: string | null;
    email?: string | null;
    gender?: string | null;
    last_level_grad?: string | null;
    location?: string | null;
    name?: string | null;
    phone?: string | null;
    type?: string | null;
    isAdmin?: boolean;
}

export interface ValidateJobModelRequest {
    isCheck?: boolean;
    jobId?: string | null;
}

export class ApiException extends Error {
    message: string;
    status: number;
    response: string;
    headers: { [key: string]: any; };
    result: any;

    constructor(message: string, status: number, response: string, headers: { [key: string]: any; }, result: any) {
        super();

        this.message = message;
        this.status = status;
        this.response = response;
        this.headers = headers;
        this.result = result;
    }

    protected isApiException = true;

    static isApiException(obj: any): obj is ApiException {
        return obj.isApiException === true;
    }
}

function throwException(message: string, status: number, response: string, headers: { [key: string]: any; }, result?: any): any {
    if (result !== null && result !== undefined)
        throw result;
    else
        throw new ApiException(message, status, response, headers, null);
}

function isAxiosError(obj: any | undefined): obj is AxiosError {
    return obj && obj.isAxiosError === true;
}