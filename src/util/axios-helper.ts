import type { AxiosInstance, AxiosRequestConfig } from 'axios';
import axios from 'axios';
import { isNullOrUndefined } from './generic-helpers';
import { StorageUser } from './user';

export class AxiosHelpers {
    public static readonly axiosClient: AxiosInstance = this.createAxiosClient(handleResponseCodes);
    private static readonly authorizationPromise: { promise: Promise<unknown> | null } = { promise: null };

    public static newAxiosClient(errorCallback?: (error: unknown) => void): AxiosInstance {
        return this.createAxiosClient(errorCallback ?? handleResponseCodes);
    }

    private static createAxiosClient(errorHandler?: (error: unknown) => void): AxiosInstance {
        const axiosClient = axios.create({ transformResponse: (response) => response });

        axiosClient.interceptors.request.use(async (config: AxiosRequestConfig) => {
            // If another request already awaits for the refreshUserAuthorization function, wait until that request finishes
            if (!isNullOrUndefined(this.authorizationPromise.promise)) {
                await this.authorizationPromise.promise;
            }

            await this.authorizationPromise.promise;

            if (!isNullOrUndefined(config.headers)) {
                // eslint-disable-next-line no-param-reassign
                config.headers.Authorization = `Bearer ${localStorage.getItem('JWT')}`;
            }

            return config;
        });

        if (errorHandler != null) axiosClient.interceptors.response.use(undefined, errorHandler);

        axios.defaults.headers.head.Authorization = `Bearer ${localStorage.getItem('JWT')}`;

        return axiosClient;
    }
}

function handleResponseCodes(error: unknown): void {
    const typedError = (error as { message: string | null | undefined }) ?? { message: null };

    if (typedError.message?.endsWith != null && (typedError.message.endsWith('401') || typedError.message.endsWith('403'))) {
        console.log("error");
    }
}

