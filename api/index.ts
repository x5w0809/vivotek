class ApiSettings {
    private apiPath: string 
    // http://app.sandbox-2024.brandvivotek.com
    private defaultOptions: any = {
      progress: false,
    }
    constructor(apiPath: string) {
      this.apiPath = apiPath
    }
  
    /**
     * api path
     * @returns String
     */
    getApiPath() {
      return this.apiPath
    }
    /**
     * axios options
     * @returns Object
     */
    getDefaultOptions() {
      return this.defaultOptions
    }
  }
  /**
   * normal api call
   */
  export class VivotekApi extends ApiSettings {
    /**
     * @template U responeModel
     * @param {boolean} auth 是否需要檢查登入token
     * @returns {U} Promise
     */
    get<U = any>(auth: boolean = false) {
      const apiPath = this.getApiPath()
      const defaultOptions = this.getDefaultOptions()
      return async (app: { $vivotekApiInAuth: { get: (arg0: { apiPath: string; options: any }) => U | PromiseLike<U> }; $vivotekApi: { $get: (arg0: string, arg1: any) => U | PromiseLike<U> } }, options?: any): Promise<U> => {
        const o = { ...defaultOptions, ...options }
        if (auth) {
          const a = { apiPath, options: o }
          const response: U = await app.$vivotekApiInAuth.get(a)
          return response
        } else {
          const response: U = await app.$vivotekApi.$get(apiPath, o)
          return response
        }
      }
    }
    /**
     * @template T requestModel
     * @template U responeModel
     * @param {boolean} auth 是否需要檢查登入token
     * @returns {U} Promise
     */
    post<T = any, U = any>(auth: boolean = false) {
      const apiPath = this.getApiPath()
      const defaultOptions = this.getDefaultOptions()
      return async (app: { $vivotekApiInAuth: { post: (arg0: { apiPath: string; payload: T; options: any }) => U | PromiseLike<U> }; $vivotekApi: { $post: (arg0: string, arg1: T, arg2: any) => U | PromiseLike<U> } }, payload: T, options?: any): Promise<U> => {
        const o = { ...defaultOptions, ...options }
        if (auth) {
          const a = { apiPath, payload, options: o }
          const response: U = await app.$vivotekApiInAuth.post(a)
          return response
        } else {
          const response: U = await app.$vivotekApi.$post(apiPath, payload, o)
          return response
        }
      }
    }
  }
  