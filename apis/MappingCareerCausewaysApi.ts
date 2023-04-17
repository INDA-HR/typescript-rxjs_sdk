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
import { BaseAPI, throwIfNullOrUndefined } from '../runtime';
import type { OperationOpts, HttpHeaders, HttpQuery } from '../runtime';
import type {
    CareerTransitionRequest,
    ErrorModel,
    HTTPValidationError,
    OccupationSkillsComparisonRequest,
    OccupationsSkillsComparison,
    TransitionRecommendations,
    Upskilling,
    UpskillingRequest,
    WorkActivityComparison,
    WorkActivityComparisonRequest,
} from '../models';

export interface CareerRecommendationPOSTRequest {
    careerTransitionRequest: CareerTransitionRequest;
    dstLang?: CareerRecommendationPOSTDstLangEnum;
    minScore?: number;
}

export interface OccupationActivitiesComparisonPOSTRequest {
    workActivityComparisonRequest: WorkActivityComparisonRequest;
    dstLang?: OccupationActivitiesComparisonPOSTDstLangEnum;
    minScore?: number;
}

export interface OccupationSkillComparisonPOSTRequest {
    occupationSkillsComparisonRequest: OccupationSkillsComparisonRequest;
    dstLang?: OccupationSkillComparisonPOSTDstLangEnum;
    minScore?: number;
}

export interface UpskillingSimulatorPOSTRequest {
    upskillingRequest: UpskillingRequest;
    dstLang?: UpskillingSimulatorPOSTDstLangEnum;
    minScore?: number;
}

/**
 * no description
 */
export class MappingCareerCausewaysApi extends BaseAPI {

    /**
     * This method provides an ordered list of recommended jobs transition, given an origin occupation. First, the algorithm  calculates the ESCO occupation that best matches the input job title. The ESCO match is provided  only if the match score is higher than `min_score`.  Viability, salary, and automation risk define the transition recommendations, and the user can select them by the *TransitionType* field: - `viable`: the algorithm recommends all similar occupations, ordered by similarity. No other considerations are made. - `desirable`: the algorithm recommends all similar occupations that offer comparable or higher pay levels. - `safe_desirable`: the algorithm recommends the subset of roles that will likely reduce    a worker\'s exposure to automation risk among the `desirable` transition.   - `strictly_safe_desirable`: the algorithm recommends among the `desirable` transition, the subset of roles with    lower automation risk and higher prevalence of bottleneck tasks.
     * Career Recommendation
     */
    careerRecommendationPOST({ careerTransitionRequest, dstLang, minScore }: CareerRecommendationPOSTRequest): Observable<TransitionRecommendations>
    careerRecommendationPOST({ careerTransitionRequest, dstLang, minScore }: CareerRecommendationPOSTRequest, opts?: OperationOpts): Observable<AjaxResponse<TransitionRecommendations>>
    careerRecommendationPOST({ careerTransitionRequest, dstLang, minScore }: CareerRecommendationPOSTRequest, opts?: OperationOpts): Observable<TransitionRecommendations | AjaxResponse<TransitionRecommendations>> {
        throwIfNullOrUndefined(careerTransitionRequest, 'careerTransitionRequest', 'careerRecommendationPOST');

        const headers: HttpHeaders = {
            'Content-Type': 'application/json',
            ...(this.configuration.username != null && this.configuration.password != null ? { Authorization: `Basic ${btoa(this.configuration.username + ':' + this.configuration.password)}` } : undefined),
        };

        const query: HttpQuery = {};

        if (dstLang != null) { query['dst_lang'] = dstLang; }
        if (minScore != null) { query['min_score'] = minScore; }

        return this.request<TransitionRecommendations>({
            url: '/hr/v2/resume/career/occupation/recommendation/',
            method: 'POST',
            headers,
            query,
            body: careerTransitionRequest,
        }, opts?.responseOpts);
    };

    /**
     * This method provides a detailed comparison of the principal activities of the origin and destination occupation.  For each activity, the method shows the gap between the two occupations.   The activity comparison is based n the skill ESCO level. It ranges from one to three,  and it is related to the specificity of the activity.
     * Occupation Activities Comparison
     */
    occupationActivitiesComparisonPOST({ workActivityComparisonRequest, dstLang, minScore }: OccupationActivitiesComparisonPOSTRequest): Observable<WorkActivityComparison>
    occupationActivitiesComparisonPOST({ workActivityComparisonRequest, dstLang, minScore }: OccupationActivitiesComparisonPOSTRequest, opts?: OperationOpts): Observable<AjaxResponse<WorkActivityComparison>>
    occupationActivitiesComparisonPOST({ workActivityComparisonRequest, dstLang, minScore }: OccupationActivitiesComparisonPOSTRequest, opts?: OperationOpts): Observable<WorkActivityComparison | AjaxResponse<WorkActivityComparison>> {
        throwIfNullOrUndefined(workActivityComparisonRequest, 'workActivityComparisonRequest', 'occupationActivitiesComparisonPOST');

        const headers: HttpHeaders = {
            'Content-Type': 'application/json',
            ...(this.configuration.username != null && this.configuration.password != null ? { Authorization: `Basic ${btoa(this.configuration.username + ':' + this.configuration.password)}` } : undefined),
        };

        const query: HttpQuery = {};

        if (dstLang != null) { query['dst_lang'] = dstLang; }
        if (minScore != null) { query['min_score'] = minScore; }

        return this.request<WorkActivityComparison>({
            url: '/hr/v2/resume/career/occupation/activities/comparison/',
            method: 'POST',
            headers,
            query,
            body: workActivityComparisonRequest,
        }, opts?.responseOpts);
    };

    /**
     * This method provides a detailed comparison of the skills of the origin and destination occupations.  Such comparison helps compare the skill gaps among the occupations. Each skill of the origin occupation  is mapped to the most similar skill of the destination occupation. The mapping is one to one.   Skills are split in: - `essential`: only the most relevant skills for such occupation are considered according to ESCO Classification; - `optional`: both essential and optional skills are considered according to ESCO Classification.
     * Occupation Skill Comparison
     */
    occupationSkillComparisonPOST({ occupationSkillsComparisonRequest, dstLang, minScore }: OccupationSkillComparisonPOSTRequest): Observable<OccupationsSkillsComparison>
    occupationSkillComparisonPOST({ occupationSkillsComparisonRequest, dstLang, minScore }: OccupationSkillComparisonPOSTRequest, opts?: OperationOpts): Observable<AjaxResponse<OccupationsSkillsComparison>>
    occupationSkillComparisonPOST({ occupationSkillsComparisonRequest, dstLang, minScore }: OccupationSkillComparisonPOSTRequest, opts?: OperationOpts): Observable<OccupationsSkillsComparison | AjaxResponse<OccupationsSkillsComparison>> {
        throwIfNullOrUndefined(occupationSkillsComparisonRequest, 'occupationSkillsComparisonRequest', 'occupationSkillComparisonPOST');

        const headers: HttpHeaders = {
            'Content-Type': 'application/json',
            ...(this.configuration.username != null && this.configuration.password != null ? { Authorization: `Basic ${btoa(this.configuration.username + ':' + this.configuration.password)}` } : undefined),
        };

        const query: HttpQuery = {};

        if (dstLang != null) { query['dst_lang'] = dstLang; }
        if (minScore != null) { query['min_score'] = minScore; }

        return this.request<OccupationsSkillsComparison>({
            url: '/hr/v2/resume/career/occupation/skills/comparison/',
            method: 'POST',
            headers,
            query,
            body: occupationSkillsComparisonRequest,
        }, opts?.responseOpts);
    };

    /**
     * Learning and getting new skills usually leads to new job opportunities. Given an origin occupation and a list of acquired skills,  this method provides an updated ordered list of recommended jobs transition based on your occupation skills and your acquired skills.  First, the algorithm  calculates the ESCO occupation that best matches the input job title and ESCO skills that best fits the input skills list.  The ESCO match is provided  only if the match score is higher than `min_score`.    Viability, salary, and automation risk define the transition recommendations, and the user can select them by the *TransitionType* field: - `viable`: the algorithm recommends all similar occupations, ordered by similarity. No other considerations are made; - `desirable`: the algorithm recommends all similar occupations that offer comparable or higher pay levels; - `safe_desirable`: the algorithm recommends the subset of roles that will likely reduce     a worker\'s exposure to automation risk among the `desirable` transition;   - `strictly_safe_desirable`: the algorithm recommends among the `desirable` transition, the subset of roles with     lower automation risk and higher prevalence of bottleneck tasks.
     * Upskilling simulator
     */
    upskillingSimulatorPOST({ upskillingRequest, dstLang, minScore }: UpskillingSimulatorPOSTRequest): Observable<Upskilling>
    upskillingSimulatorPOST({ upskillingRequest, dstLang, minScore }: UpskillingSimulatorPOSTRequest, opts?: OperationOpts): Observable<AjaxResponse<Upskilling>>
    upskillingSimulatorPOST({ upskillingRequest, dstLang, minScore }: UpskillingSimulatorPOSTRequest, opts?: OperationOpts): Observable<Upskilling | AjaxResponse<Upskilling>> {
        throwIfNullOrUndefined(upskillingRequest, 'upskillingRequest', 'upskillingSimulatorPOST');

        const headers: HttpHeaders = {
            'Content-Type': 'application/json',
            ...(this.configuration.username != null && this.configuration.password != null ? { Authorization: `Basic ${btoa(this.configuration.username + ':' + this.configuration.password)}` } : undefined),
        };

        const query: HttpQuery = {};

        if (dstLang != null) { query['dst_lang'] = dstLang; }
        if (minScore != null) { query['min_score'] = minScore; }

        return this.request<Upskilling>({
            url: '/hr/v2/resume/career/simulator/upskilling/',
            method: 'POST',
            headers,
            query,
            body: upskillingRequest,
        }, opts?.responseOpts);
    };

}

/**
 * @export
 * @enum {string}
 */
export enum CareerRecommendationPOSTDstLangEnum {
    Bg = 'bg',
    Cs = 'cs',
    Da = 'da',
    De = 'de',
    El = 'el',
    En = 'en',
    Es = 'es',
    Et = 'et',
    Fi = 'fi',
    Fr = 'fr',
    Hr = 'hr',
    Hu = 'hu',
    It = 'it',
    Lt = 'lt',
    Lv = 'lv',
    Nl = 'nl',
    Pl = 'pl',
    Pt = 'pt',
    Ro = 'ro',
    Sk = 'sk',
    Sl = 'sl',
    Sv = 'sv'
}
/**
 * @export
 * @enum {string}
 */
export enum OccupationActivitiesComparisonPOSTDstLangEnum {
    Bg = 'bg',
    Cs = 'cs',
    Da = 'da',
    De = 'de',
    El = 'el',
    En = 'en',
    Es = 'es',
    Et = 'et',
    Fi = 'fi',
    Fr = 'fr',
    Hr = 'hr',
    Hu = 'hu',
    It = 'it',
    Lt = 'lt',
    Lv = 'lv',
    Nl = 'nl',
    Pl = 'pl',
    Pt = 'pt',
    Ro = 'ro',
    Sk = 'sk',
    Sl = 'sl',
    Sv = 'sv'
}
/**
 * @export
 * @enum {string}
 */
export enum OccupationSkillComparisonPOSTDstLangEnum {
    Bg = 'bg',
    Cs = 'cs',
    Da = 'da',
    De = 'de',
    El = 'el',
    En = 'en',
    Es = 'es',
    Et = 'et',
    Fi = 'fi',
    Fr = 'fr',
    Hr = 'hr',
    Hu = 'hu',
    It = 'it',
    Lt = 'lt',
    Lv = 'lv',
    Nl = 'nl',
    Pl = 'pl',
    Pt = 'pt',
    Ro = 'ro',
    Sk = 'sk',
    Sl = 'sl',
    Sv = 'sv'
}
/**
 * @export
 * @enum {string}
 */
export enum UpskillingSimulatorPOSTDstLangEnum {
    Bg = 'bg',
    Cs = 'cs',
    Da = 'da',
    De = 'de',
    El = 'el',
    En = 'en',
    Es = 'es',
    Et = 'et',
    Fi = 'fi',
    Fr = 'fr',
    Hr = 'hr',
    Hu = 'hu',
    It = 'it',
    Lt = 'lt',
    Lv = 'lv',
    Nl = 'nl',
    Pl = 'pl',
    Pt = 'pt',
    Ro = 'ro',
    Sk = 'sk',
    Sl = 'sl',
    Sv = 'sv'
}