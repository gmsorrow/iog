import {
  AUTH_TOKEN_NAME,
  FETCH_TIMEOUT_MESSAGE,
  FETCH_TIMEOUT_MS,
  NETWORK_ISSUE_MESSAGES,
} from './constants';

const baseUrl = process.env.REACT_APP_BASE_URL;

export type ApiResponse<Data> = {
  status: number;
  error: boolean;
  data: Data;
  text: Function;
};

export function executeRequest<Data>(url: string, options: { [key: string]: any } = {}, dontExtend?: boolean): Promise<ApiResponse<Data>> {
  let extendedUrl = url;
  const requestMethodType = options?.method || 'GET';

  if (!url.includes('http') && !dontExtend) {
    extendedUrl = `${baseUrl}/${url}`;
  }

  let defaultHeaders = {};
  switch (requestMethodType) {
    case 'GET':
    case 'POST':
    case 'PUT':
    case 'DELETE':
      defaultHeaders = {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      };
      break;
    default:
      defaultHeaders = {};
  }

  const token = localStorage.getItem(AUTH_TOKEN_NAME);

  let extendedOptions = {
    ...options,
    headers: {
      ...options.headers,
      ...defaultHeaders,
    },
  };

  if (token) {
    extendedOptions = {
      ...extendedOptions,
      headers: {
        ...extendedOptions.headers,
        Authorization: `Bearer ${token}`,
      },
    };
  }
  // @ts-ignore
  return requestWithTimeout(extendedUrl, extendedOptions).then(transformResponse);
}

const transformResponse = (response: any) => new Promise(
  (resolve) => parseJSONFromFetch(response)
    .then((json: string) => {
      if (response.status === 401) {
        window.onbeforeunload = () => {};
        // sign out attempt
      }
      return resolve({
        status: response.status,
        error: response.status < 200 || response.status > 299,
        data: json,
      });
    })
);

const parseJSONFromFetch = (response: any) => response.text().then((text: void | string) => {
  let data = null;
  try {
    data = text ? JSON.parse(text) : text;
  } catch (err) {
    data = text;
  }
  return data;
});

const requestWithTimeout = async (url: string, extendedOptions: { [key: string]: any }) => {
  const controller = new AbortController();

  const extendedOptionsWithAbortController = {
    signal: controller.signal,
    timeout: null,
    ...extendedOptions,
  };
  const timeout = extendedOptionsWithAbortController.timeout || FETCH_TIMEOUT_MS;

  let response;

  try {
    response = await Promise.race([fetch(url, extendedOptionsWithAbortController), new Promise((_, reject) => setTimeout(() => {
      reject(new Error(FETCH_TIMEOUT_MESSAGE));
    }, timeout))]);
  } catch (error) {
    if (NETWORK_ISSUE_MESSAGES.includes(error.message)) {
      if (error.message === FETCH_TIMEOUT_MESSAGE) {
        controller.abort();
      }
      throw new Error(error.message);
    }
    throw error;
  }
  return response;
};
