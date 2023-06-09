// tslint:disable
/**
 * INDA HR - INtelligent Data Analysis for HR
 *  # Introduction  **INDA (INtelligent Data Analysis)** is an [Intervieweb](https://www.intervieweb.it/hrm/)  AI solution provided as a RESTful API.  The INDA pricing model is *credits-based*, which means that a certain number of credits is associated to each API request. Hence, users have to purchase a certain amount of credits (established according to their needs) which will be reduced  at each API call. INDA accepts and processes a user\'s request only if their credits quota is greater than - or,  at least, equal to - the number of credits required by that request. To obtain further details on the pricing, please visit our [site](https://inda.ai) or contact us.    INDA HR embraces a wide range of functionalities to manage the main elements of a recruitment process:   + [**candidate**](https://api.inda.ai/hr/docs/v2/#tag/Resume-Management) (hereafter also referred to as **resume** or **applicant**), or rather a  person looking for a job;  + [**job advertisement**](https://api.inda.ai/hr/docs/v2/#tag/JobAd-Management) (hereafter also referred to as **job ad**), which is a document   that collects all the main information and details about a job vacancy;  + [**application**](https://api.inda.ai/hr/docs/v2/#tag/Application-Management), that binds candidates to job ads; it is generated whenever a  candidate applies for a job.  Each of them has a specific set of methods that grants users the ability to create, read, update and delete the relative  documents, plus some special features based on AI approaches (such as *document parsing* or *semantic search*). They can be explored in their respective sections.  Data about the listed document types can be enriched by connecting them to other INDA supported entities, such as  [**companies**](https://api.inda.ai/hr/docs/v2/#tag/Company-Management) and [**universities**](https://api.inda.ai/hr/docs/v2/#tag/Universities), so that recruiters may  get a better and more detailed idea on the candidates\' experiences and acquired skills.  All the functionalities mentioned above are meant to help recruiters during the talent acquisition process,  by exploiting the power of AI systems. Among the advantages a recruiter has by using this kind of systems, tackling the bias problem is surely one of the  most relevant. Bias in recruitment is a serious issue that affect both recruiters and candidates, since it may cause wrong hiring  decisions. As we care a lot about this problem, we are constantly working on reduce the bias in original data so that INDA  results may be as fair as possible. As of now, in order to tackle the bias issue, INDA automatically ignores specific fields (such as name, gender, age  and nationality) during the initial processing of each candidate data.  Furthermore, we decided to let users collect data of various types, including personal or sensitive details, but we  do not allow their usage if it is different from statistical purposes; our aim is to discourage recruiters from  focusing on candidates\' personal information, and to put their attention on the candidate\'s skills and abilities.    We want to help recruiters to prevent any kind of bias while searching for the most valuable candidates they really need.    The following documentation is addressed both to developers, in order to provide all technical details for INDA integration, and to managers, to guide them in the exploration of the implementation possibilities.  The host of the API is <span style=\"color:blue\">https<area>://api.inda.ai/hr/v2</span>. We recommend to check the API version and build (displayed near the documentation title). You can contact us at support@intervieweb.it in case of problems, suggestions, or particular needs.  The search panel on the left can be used to navigate through the documentation and provides an overview of the API structure. On the right, you can find (*i*) the url of the method, (*ii*) an example of request body (if present), and (*iii*) an example of response for each response code. Finally, in the central section of each API method, you can find (*i*) a general description of the purpose of the method, (*ii*) details on parameters and request body schema (if present), and (*iii*) details on response schema, error models, and error codes.  
 *
 * The version of the OpenAPI document: 2.0.0
 * Contact: info@intervieweb.it
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import type { Observable } from 'rxjs';
import type { AjaxResponse } from 'rxjs/ajax';
import { BaseAPI, throwIfNullOrUndefined, encodeURI } from '../runtime';
import type { OperationOpts, HttpHeaders, HttpQuery } from '../runtime';
import type {
    ErrorModel,
    FoundJobAdsResponse,
    HTTPValidationError,
    JobAdFullTextSearch,
    JobAdSearchQuery,
} from '../models';

export interface FullTextSearchOnJobadsPOSTRequest {
    indexname: string;
    defaultOperator?: FullTextSearchOnJobadsPOSTDefaultOperatorEnum;
    cache?: boolean;
    cacheTime?: number;
    size?: number;
    offset?: number;
    minScore?: number;
    searchId?: string;
    jobAdFullTextSearch?: JobAdFullTextSearch;
}

export interface SearchApplicationsPOSTRequest {
    indexname: string;
    resumeId: string;
    cacheTime?: number;
    size?: number;
    searchId?: string;
    jobAdSearchQuery?: JobAdSearchQuery;
}

/**
 * no description
 */
export class JobAdSearchApi extends BaseAPI {

    /**
     * This is the most common way to search a text document through the job advertisements stored in the index *indexname*.  This function takes as input a list of objects containing the terms you wish to search for, please consider that tokens (individual words) grouped together in the same *QueryTerms* element will be queried separately in an **OR** clause, whereas different *QueryTerms* elements will be joined by an **AND** clause. To put it in words, the query will retrieve documents that match at least one word from each element in *QueryTerms*.  This behaviour can be modified in one of two ways:  + The **default_operator** query parameter, which defaults to OR, can be set to AND in order to only find documents that contain ALL of the tokens in a given *query_terms* element. + The **\"** (double quotes) operator, which can be used to wrap strings made up of multiple tokens in order to find documents that contain those words exactly in the order they are presented (sentence match). Remember to escape double quotes in your JSON inputs with a backslash.  Each *QueryTerms* element can be negated with the parameter **Exclude** set to *true*. This is equivalent to setting it in a **NOT** clause.  It\'s also possible to use wildcards to perform jolly searches, the supported wildcards are:  + \\*: Can be used to match any number of characters in the middle (ad\\*ment) or at the end (doc\\*) of a word. + ?: Can be used to match a single character in any position (?xample).  All queries are case-insensitive and have some amount of fuzziness by default, meaning that typos and character transpositions will be included in the matches. Additionally, filters can be added to form boolean queries on indexed fields. For a comprehensive list and explanation of filters, see the [*Query Filters*](https://api.inda.ai/hr/docs/v2/#tag/Query-Filters) section, the structure is the same.  Query parameters are used to specify the *offset* and *size* of the search. The method uses *cache* = <code style=\'color: #333333; opacity: 0.9\'>true</code> by default, meaning that it will cache automatically each search for *cache_time* seconds. When caching is active, *offset* is ignored; in order to navigate or scroll the entire search response (in chunks of size *size*, as specified in the first search), this method should be used through the *search_id*. When *search_id* is provided, other query parameters are ignored, except *cache_time*.  The use of caching is highly recommended to improve the performances.  Note that a new *search_id* is provided for every scroll. Search IDs are not unique but it is strongly recommended to update the *search_id* at every call of this method with the *SearchID* of the last response. If the *SearchID* is missing or equal to <code style=\'color: #333333; opacity: 0.9\'>null</code>, the scroll has ended.  Beware that the scroll can ONLY go forward in the search cache because it is meant to review large searches.
     * Full-Text Search on JobAds
     */
    fullTextSearchOnJobadsPOST({ indexname, defaultOperator, cache, cacheTime, size, offset, minScore, searchId, jobAdFullTextSearch }: FullTextSearchOnJobadsPOSTRequest): Observable<FoundJobAdsResponse>
    fullTextSearchOnJobadsPOST({ indexname, defaultOperator, cache, cacheTime, size, offset, minScore, searchId, jobAdFullTextSearch }: FullTextSearchOnJobadsPOSTRequest, opts?: OperationOpts): Observable<AjaxResponse<FoundJobAdsResponse>>
    fullTextSearchOnJobadsPOST({ indexname, defaultOperator, cache, cacheTime, size, offset, minScore, searchId, jobAdFullTextSearch }: FullTextSearchOnJobadsPOSTRequest, opts?: OperationOpts): Observable<FoundJobAdsResponse | AjaxResponse<FoundJobAdsResponse>> {
        throwIfNullOrUndefined(indexname, 'indexname', 'fullTextSearchOnJobadsPOST');

        const headers: HttpHeaders = {
            'Content-Type': 'application/json',
            ...(this.configuration.username != null && this.configuration.password != null ? { Authorization: `Basic ${btoa(this.configuration.username + ':' + this.configuration.password)}` } : undefined),
        };

        const query: HttpQuery = {};

        if (defaultOperator != null) { query['default_operator'] = defaultOperator; }
        if (cache != null) { query['cache'] = cache; }
        if (cacheTime != null) { query['cache_time'] = cacheTime; }
        if (size != null) { query['size'] = size; }
        if (offset != null) { query['offset'] = offset; }
        if (minScore != null) { query['min_score'] = minScore; }
        if (searchId != null) { query['search_id'] = searchId; }

        return this.request<FoundJobAdsResponse>({
            url: '/hr/v2/index/{indexname}/jobads/search/full-text/'.replace('{indexname}', encodeURI(indexname)),
            method: 'POST',
            headers,
            query,
            body: jobAdFullTextSearch,
        }, opts?.responseOpts);
    };

    /**
     * This method is meant to return those job advertisements that the resume of ID *resume_id* have applied to, if they respect the given query.  Users may specify [query filters](https://api.inda.ai/hr/docs/v2/#tag/Query-Filters) to apply on both [Applications](https://api.inda.ai/hr/docs/v2/#tag/Application-Management) and [JobAds](https://api.inda.ai/hr/docs/v2/#tag/JobAd-Management) indexed fields.  Query parameters are used to specify the *cache_time* and *size* of the search. The method will automatically cache each search for *cache_time* seconds. In order to navigate or scroll the entire search response (in chunks of size *size*, as specified in the first search), this method should be used through the *search_id*. When *search_id* is provided, other query parameters are ignored, except *cache_time*.  Note that a new *search_id* is provided for every scroll. Search IDs are not unique but it is strongly recommended to update the *search_id* at every call of this method with the *SearchID* of the last response. If the *SearchID* is missing or equal to <code style=\'color: #333333; opacity: 0.9\'>null</code>, the scroll has ended.  Beware that the scroll can ONLY go forward in the search cache because it is meant to review large searches.
     * Search Applications
     */
    searchApplicationsPOST({ indexname, resumeId, cacheTime, size, searchId, jobAdSearchQuery }: SearchApplicationsPOSTRequest): Observable<FoundJobAdsResponse>
    searchApplicationsPOST({ indexname, resumeId, cacheTime, size, searchId, jobAdSearchQuery }: SearchApplicationsPOSTRequest, opts?: OperationOpts): Observable<AjaxResponse<FoundJobAdsResponse>>
    searchApplicationsPOST({ indexname, resumeId, cacheTime, size, searchId, jobAdSearchQuery }: SearchApplicationsPOSTRequest, opts?: OperationOpts): Observable<FoundJobAdsResponse | AjaxResponse<FoundJobAdsResponse>> {
        throwIfNullOrUndefined(indexname, 'indexname', 'searchApplicationsPOST');
        throwIfNullOrUndefined(resumeId, 'resumeId', 'searchApplicationsPOST');

        const headers: HttpHeaders = {
            'Content-Type': 'application/json',
            ...(this.configuration.username != null && this.configuration.password != null ? { Authorization: `Basic ${btoa(this.configuration.username + ':' + this.configuration.password)}` } : undefined),
        };

        const query: HttpQuery = {};

        if (cacheTime != null) { query['cache_time'] = cacheTime; }
        if (size != null) { query['size'] = size; }
        if (searchId != null) { query['search_id'] = searchId; }

        return this.request<FoundJobAdsResponse>({
            url: '/hr/v2/index/{indexname}/resume/{resume_id}/applications/jobads/search/'.replace('{indexname}', encodeURI(indexname)).replace('{resume_id}', encodeURI(resumeId)),
            method: 'POST',
            headers,
            query,
            body: jobAdSearchQuery,
        }, opts?.responseOpts);
    };

}

/**
 * @export
 * @enum {string}
 */
export enum FullTextSearchOnJobadsPOSTDefaultOperatorEnum {
    And = 'AND',
    Or = 'OR'
}
