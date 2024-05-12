import type URLInfo from './url'
import type { AxiosHeaders, RawAxiosRequestHeaders } from 'axios'
import type { Stats } from 'node:fs'
import type { ReadEntry } from 'tar'

export default interface GitlyOptions {
  /**
   * Use cache only (default: undefined)
   */
  cache?: boolean
  /**
   * Use both cache and local (default: undefined)
   */
  force?: boolean
  /**
   * Throw an error when fetching (default: undefined)
   */
  throw?: boolean
  /**
   * Set cache directory (default: '~/.gitly')
   */
  temp?: string
  /**
   * Set the host name (default: undefined)
   */
  host?: string
  url?: {
    /**
     * Extend the url filtering method
     * @param info The URLInfo object
     */
    filter?(info: URLInfo): string
  }
  extract?: {
    /**
     * Extend the extract filtering method for the 'tar' library
     */
    filter?(path: string, stat: Stats | ReadEntry): boolean
  }
  /**
   * Set the request headers (default: undefined)
   */
  headers?: RawAxiosRequestHeaders | AxiosHeaders
  /**
   * Set the backend (default: undefined)
   *
   * @example
   * ```markdown
   * 'axios' - default behavior
   * 'git' - use local git installation to clone the repository (allows for cloning private repositories as long as the local git installation has access)
   * ```
   */
  backend?: 'axios' | 'git'
  /**
   * Set git options (default: undefined)
   */
  git?: {
    depth?: number
  }
}
