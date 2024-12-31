/** Dependencies */
import axios from 'axios';

/** Props for the api wrappers */
interface ApiWrapperProps {
  /**
   * The api to wrap base url
   */
  baseUrl: string;
  /**
   * The api key of this api
   */
  apiKey: string;
  /**
   * The name of the api
   */
  apiName: string;
  /**
   * The api key field
   * @default 'api_key'
   */
  apiKeyField?: string;
  /**
   * Is the api using bearer auth
   * @default false
   */
  useBearer?: boolean;
}

/** Utility class to add common features to an api */
export class ApiWrapper {
  /** Private information of the wrappers */
  private readonly baseUrl: string;
  private readonly apiKey: string;
  private readonly apiKeyField: string;
  private readonly apiName: string;
  private readonly useBearer: boolean;

  /**
   * Constructor of the wrapper
   * @param options The wrapper options
   */
  constructor(options: ApiWrapperProps) {
    /** Split the options */
    const { apiKey, baseUrl, apiName, apiKeyField = 'api_key', useBearer = false } = options;

    /** Save the options */
    this.apiKey = apiKey;
    this.baseUrl = baseUrl;
    this.apiName = apiName;
    this.apiKeyField = apiKeyField;
    this.useBearer = useBearer;
  }

  /**
   * Make a request to the desired API
   * @param endpoint The api endpoint to reach
   * @param params The parameters to add to the request
   * @returns A new promise resulting the request response
   */
  public async makeRequest<T>(endpoint: string, params: Record<string, any> = {}): Promise<T> {
    try {
      /** Try fetching the api endpoint */
      const response = await axios.get<T>(`${this.baseUrl}/${endpoint}`, {
        params: {
          ...(this.useBearer ? {} : { [this.apiKeyField]: this.apiKey }),
          ...params
        },
        headers: {
          Authorization: this.useBearer ? `Bearer ${this.apiKey}` : undefined
        }
      });

      /** Return the response data */
      return response.data;
    } catch (error: any) {
      throw new Error(
        `${this.apiName} Error: ${error.response?.data?.status_message || error.message}`
      );
    }
  }
}
