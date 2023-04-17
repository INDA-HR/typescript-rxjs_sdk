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

import type {
    Achievement,
    Award,
    Certification,
    EducationExperience,
    Event,
    FeedbackEducationExperience,
    FeedbackLanguage,
    FeedbackWorkExperience,
    License,
    MilitaryService,
    OptionalResumeJobTitle,
    OptionalResumeSkill,
    Other,
    Patent,
    PersonLocation,
    PersonalInfo,
    ProfileSummary,
    Project,
    Publication,
    Reference,
    ResumeContactInfoContactInfo,
    Text,
    WorkExperience,
} from './';

/**
 * @export
 * @interface FeedbackData
 */
export interface FeedbackData {
    /**
     * @type {OptionalResumeJobTitle}
     * @memberof FeedbackData
     */
    JobTitle?: OptionalResumeJobTitle;
    /**
     * @type {PersonalInfo}
     * @memberof FeedbackData
     */
    PersonalInfo?: PersonalInfo;
    /**
     * @type {ResumeContactInfoContactInfo}
     * @memberof FeedbackData
     */
    ContactInfo?: ResumeContactInfoContactInfo;
    /**
     * @type {PersonLocation}
     * @memberof FeedbackData
     */
    PersonLocation?: PersonLocation;
    /**
     * @type {Text}
     * @memberof FeedbackData
     */
    Headline?: Text;
    /**
     * Candidate\'s education experiences.
     * @type {Array<EducationExperience>}
     * @memberof FeedbackData
     */
    EducationExperiences?: Array<EducationExperience>;
    /**
     * Candidate\'s employment history.
     * @type {Array<WorkExperience>}
     * @memberof FeedbackData
     */
    WorkExperiences?: Array<WorkExperience>;
    /**
     * @type {Text}
     * @memberof FeedbackData
     */
    CoverLetter?: Text;
    /**
     * Candidate\'s references.
     * @type {Array<Reference>}
     * @memberof FeedbackData
     */
    References?: Array<Reference>;
    /**
     * @type {ProfileSummary}
     * @memberof FeedbackData
     */
    ProfileSummary?: ProfileSummary;
    /**
     * Candidate\'s skills.
     * @type {Array<OptionalResumeSkill>}
     * @memberof FeedbackData
     */
    Skills?: Array<OptionalResumeSkill>;
    /**
     * Candidate\'s job titles.
     * @type {Array<OptionalResumeJobTitle>}
     * @memberof FeedbackData
     */
    JobTitles?: Array<OptionalResumeJobTitle>;
    /**
     * @type {Array<FeedbackLanguage>}
     * @memberof FeedbackData
     */
    Languages?: Array<FeedbackLanguage>;
    /**
     * Certifications earned by the candidate.
     * @type {Array<Certification>}
     * @memberof FeedbackData
     */
    Certifications?: Array<Certification>;
    /**
     * Candidate\'s publications, both academic papers and books.
     * @type {Array<Publication>}
     * @memberof FeedbackData
     */
    Publications?: Array<Publication>;
    /**
     * List of the awards won by the candidate.
     * @type {Array<Award>}
     * @memberof FeedbackData
     */
    Awards?: Array<Award>;
    /**
     * Projects the candidate worked or works on.
     * @type {Array<Project>}
     * @memberof FeedbackData
     */
    Projects?: Array<Project>;
    /**
     * Achievements earned by the candidate.
     * @type {Array<Achievement>}
     * @memberof FeedbackData
     */
    Achievements?: Array<Achievement>;
    /**
     * Candidate\'s patents.
     * @type {Array<Patent>}
     * @memberof FeedbackData
     */
    Patents?: Array<Patent>;
    /**
     * List of candidate\'s hobbies and interests.
     * @type {Array<Text>}
     * @memberof FeedbackData
     */
    HobbiesAndInterests?: Array<Text>;
    /**
     * Candidate\'s licenses.
     * @type {Array<License>}
     * @memberof FeedbackData
     */
    Licenses?: Array<License>;
    /**
     * Candidate\'s works as volunteer.
     * @type {Array<Event>}
     * @memberof FeedbackData
     */
    Volunteering?: Array<Event>;
    /**
     * Conferences and seminars that the candidate may have partecipated in.
     * @type {Array<Event>}
     * @memberof FeedbackData
     */
    ConferenceAndSeminars?: Array<Event>;
    /**
     * Candidate\'s military history.
     * @type {Array<MilitaryService>}
     * @memberof FeedbackData
     */
    MilitaryHistory?: Array<MilitaryService>;
    /**
     * Candidate\'s additional information not covered by the previous fields.
     * @type {Array<Other>}
     * @memberof FeedbackData
     */
    Others?: Array<Other>;
    /**
     * @type {Array<FeedbackEducationExperience>}
     * @memberof FeedbackData
     */
    EducationExperience?: Array<FeedbackEducationExperience>;
    /**
     * @type {Array<FeedbackWorkExperience>}
     * @memberof FeedbackData
     */
    WorkExperience?: Array<FeedbackWorkExperience>;
}
