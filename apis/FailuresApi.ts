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
    HTTPValidationError,
    IndexedDocumentFailuresResponse,
} from '../models';

export interface GetFailuresGETRequest {
    indexname: string;
    importId?: string;
    resumeId?: string;
    jobadId?: string;
    docType?: GetFailuresGETDocTypeEnum;
}

/**
 * no description
 */
export class FailuresApi extends BaseAPI {

    /**
     *  This method returns a list of documents that failed to be uploaded to *indexname*.  Note that the optional query parameters (see the schema below) allow to narrow the search to a specific item or import.  Users may also indicate a *doc_type* of interest, and retrieve just the failed documents of that type.   Allowed values for the *doc_type* parameter are: + <code style=\'color: #333333; opacity: 0.9\'>resume</code> for [resumes](https://api.inda.ai/hr/docs/v2/#tag/Resume-Management); + <code style=\'color: #333333; opacity: 0.9\'>job-ad</code> for [job adverts](https://api.inda.ai/hr/docs/v2/#tag/JobAd-Management); + <code style=\'color: #333333; opacity: 0.9\'>application</code> for [applications](https://api.inda.ai/hr/docs/v2/#tag/Application-Management).  
     * Get Failures
     */
    getFailuresGET({ indexname, importId, resumeId, jobadId, docType }: GetFailuresGETRequest): Observable<IndexedDocumentFailuresResponse>
    getFailuresGET({ indexname, importId, resumeId, jobadId, docType }: GetFailuresGETRequest, opts?: OperationOpts): Observable<AjaxResponse<IndexedDocumentFailuresResponse>>
    getFailuresGET({ indexname, importId, resumeId, jobadId, docType }: GetFailuresGETRequest, opts?: OperationOpts): Observable<IndexedDocumentFailuresResponse | AjaxResponse<IndexedDocumentFailuresResponse>> {
        throwIfNullOrUndefined(indexname, 'indexname', 'getFailuresGET');

        const headers: HttpHeaders = {
            ...(this.configuration.username != null && this.configuration.password != null ? { Authorization: `Basic ${btoa(this.configuration.username + ':' + this.configuration.password)}` } : undefined),
        };

        const query: HttpQuery = {};

        if (importId != null) { query['import_id'] = importId; }
        if (resumeId != null) { query['resume_id'] = resumeId; }
        if (jobadId != null) { query['jobad_id'] = jobadId; }
        if (docType != null) { query['doc_type'] = docType; }

        return this.request<IndexedDocumentFailuresResponse>({
            url: '/hr/v2/index/{indexname}/failures/'.replace('{indexname}', encodeURI(indexname)),
            method: 'GET',
            headers,
            query,
        }, opts?.responseOpts);
    };

}

/**
 * @export
 * @enum {string}
 */
export enum GetFailuresGETDocTypeEnum {
    Resume = 'resume',
    JobAd = 'job-ad',
    Application = 'application'
}