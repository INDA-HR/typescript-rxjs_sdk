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

/**
 * @export
 * @interface OptionalPhoneNumber
 */
export interface OptionalPhoneNumber {
    /**
     * Country code - ISO 3166.
     * @type {string}
     * @memberof OptionalPhoneNumber
     */
    CountryCode?: OptionalPhoneNumberCountryCodeEnum;
    /**
     * Country calling code.
     * @type {string}
     * @memberof OptionalPhoneNumber
     */
    CountryDialling?: string;
    /**
     * Dial number.
     * @type {string}
     * @memberof OptionalPhoneNumber
     */
    DialNumber?: string;
}

/**
 * @export
 * @enum {string}
 */
export enum OptionalPhoneNumberCountryCodeEnum {
    Aw = 'AW',
    Af = 'AF',
    Ao = 'AO',
    Ai = 'AI',
    Ax = 'AX',
    Al = 'AL',
    Ad = 'AD',
    Ae = 'AE',
    Ar = 'AR',
    Am = 'AM',
    As = 'AS',
    Aq = 'AQ',
    Tf = 'TF',
    Ag = 'AG',
    Au = 'AU',
    At = 'AT',
    Az = 'AZ',
    Bi = 'BI',
    Be = 'BE',
    Bj = 'BJ',
    Bq = 'BQ',
    Bf = 'BF',
    Bd = 'BD',
    Bg = 'BG',
    Bh = 'BH',
    Bs = 'BS',
    Ba = 'BA',
    Bl = 'BL',
    By = 'BY',
    Bz = 'BZ',
    Bm = 'BM',
    Bo = 'BO',
    Br = 'BR',
    Bb = 'BB',
    Bn = 'BN',
    Bt = 'BT',
    Bv = 'BV',
    Bw = 'BW',
    Cf = 'CF',
    Ca = 'CA',
    Cc = 'CC',
    Ch = 'CH',
    Cl = 'CL',
    Cn = 'CN',
    Ci = 'CI',
    Cm = 'CM',
    Cd = 'CD',
    Cg = 'CG',
    Ck = 'CK',
    Co = 'CO',
    Km = 'KM',
    Cv = 'CV',
    Cr = 'CR',
    Cu = 'CU',
    Cw = 'CW',
    Cx = 'CX',
    Ky = 'KY',
    Cy = 'CY',
    Cz = 'CZ',
    De = 'DE',
    Dj = 'DJ',
    Dm = 'DM',
    Dk = 'DK',
    Do = 'DO',
    Dz = 'DZ',
    Ec = 'EC',
    Eg = 'EG',
    Er = 'ER',
    Eh = 'EH',
    Es = 'ES',
    Ee = 'EE',
    Et = 'ET',
    Fi = 'FI',
    Fj = 'FJ',
    Fk = 'FK',
    Fr = 'FR',
    Fo = 'FO',
    Fm = 'FM',
    Ga = 'GA',
    Gb = 'GB',
    Ge = 'GE',
    Gg = 'GG',
    Gh = 'GH',
    Gi = 'GI',
    Gn = 'GN',
    Gp = 'GP',
    Gm = 'GM',
    Gw = 'GW',
    Gq = 'GQ',
    Gr = 'GR',
    Gd = 'GD',
    Gl = 'GL',
    Gt = 'GT',
    Gf = 'GF',
    Gu = 'GU',
    Gy = 'GY',
    Hk = 'HK',
    Hm = 'HM',
    Hn = 'HN',
    Hr = 'HR',
    Ht = 'HT',
    Hu = 'HU',
    Id = 'ID',
    Im = 'IM',
    In = 'IN',
    Io = 'IO',
    Ie = 'IE',
    Ir = 'IR',
    Iq = 'IQ',
    Is = 'IS',
    Il = 'IL',
    It = 'IT',
    Jm = 'JM',
    Je = 'JE',
    Jo = 'JO',
    Jp = 'JP',
    Kz = 'KZ',
    Ke = 'KE',
    Kg = 'KG',
    Kh = 'KH',
    Ki = 'KI',
    Kn = 'KN',
    Kr = 'KR',
    Kw = 'KW',
    La = 'LA',
    Lb = 'LB',
    Lr = 'LR',
    Ly = 'LY',
    Lc = 'LC',
    Li = 'LI',
    Lk = 'LK',
    Ls = 'LS',
    Lt = 'LT',
    Lu = 'LU',
    Lv = 'LV',
    Mo = 'MO',
    Mf = 'MF',
    Ma = 'MA',
    Mc = 'MC',
    Md = 'MD',
    Mg = 'MG',
    Mv = 'MV',
    Mx = 'MX',
    Mh = 'MH',
    Mk = 'MK',
    Ml = 'ML',
    Mt = 'MT',
    Mm = 'MM',
    Me = 'ME',
    Mn = 'MN',
    Mp = 'MP',
    Mz = 'MZ',
    Mr = 'MR',
    Ms = 'MS',
    Mq = 'MQ',
    Mu = 'MU',
    Mw = 'MW',
    My = 'MY',
    Yt = 'YT',
    Na = 'NA',
    Nc = 'NC',
    Ne = 'NE',
    Nf = 'NF',
    Ng = 'NG',
    Ni = 'NI',
    Nu = 'NU',
    Nl = 'NL',
    No = 'NO',
    Np = 'NP',
    Nr = 'NR',
    Nz = 'NZ',
    Om = 'OM',
    Pk = 'PK',
    Pa = 'PA',
    Pn = 'PN',
    Pe = 'PE',
    Ph = 'PH',
    Pw = 'PW',
    Pg = 'PG',
    Pl = 'PL',
    Pr = 'PR',
    Kp = 'KP',
    Pt = 'PT',
    Py = 'PY',
    Ps = 'PS',
    Pf = 'PF',
    Qa = 'QA',
    Re = 'RE',
    Ro = 'RO',
    Ru = 'RU',
    Rw = 'RW',
    Sa = 'SA',
    Sd = 'SD',
    Sn = 'SN',
    Sg = 'SG',
    Gs = 'GS',
    Sh = 'SH',
    Sj = 'SJ',
    Sb = 'SB',
    Sl = 'SL',
    Sv = 'SV',
    Sm = 'SM',
    So = 'SO',
    Pm = 'PM',
    Rs = 'RS',
    Ss = 'SS',
    St = 'ST',
    Sr = 'SR',
    Sk = 'SK',
    Si = 'SI',
    Se = 'SE',
    Sz = 'SZ',
    Sx = 'SX',
    Sc = 'SC',
    Sy = 'SY',
    Tc = 'TC',
    Td = 'TD',
    Tg = 'TG',
    Th = 'TH',
    Tj = 'TJ',
    Tk = 'TK',
    Tm = 'TM',
    Tl = 'TL',
    To = 'TO',
    Tt = 'TT',
    Tn = 'TN',
    Tr = 'TR',
    Tv = 'TV',
    Tw = 'TW',
    Tz = 'TZ',
    Ug = 'UG',
    Ua = 'UA',
    Um = 'UM',
    Uy = 'UY',
    Us = 'US',
    Uz = 'UZ',
    Va = 'VA',
    Vc = 'VC',
    Ve = 'VE',
    Vg = 'VG',
    Vi = 'VI',
    Vn = 'VN',
    Vu = 'VU',
    Wf = 'WF',
    Ws = 'WS',
    Ye = 'YE',
    Za = 'ZA',
    Zm = 'ZM',
    Zw = 'ZW'
}

