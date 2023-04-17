![alt text](https://inda.ai/wp-content/uploads/2023/04/inda-hr-typescript-rxjs.png)

 # Introduction

**INDA (INtelligent Data Analysis)** is an [Intervieweb](https://www.intervieweb.it/hrm/) 
AI solution provided as a RESTful API.

The INDA pricing model is *credits-based*, which means that a certain number of credits is associated to each API request.
Hence, users have to purchase a certain amount of credits (established according to their needs) which will be reduced 
at each API call. INDA accepts and processes a user's request only if their credits quota is greater than - or, 
at least, equal to - the number of credits required by that request.
To obtain further details on the pricing, please visit our [site](https://inda.ai) or contact us.



INDA HR embraces a wide range of functionalities to manage the main elements of a recruitment process: 
 + [**candidate**](https://api.inda.ai/hr/docs/v2/#tag/Resume-Management) (hereafter also referred to as **resume** or **applicant**), or rather a 
person looking for a job;
 + [**job advertisement**](https://api.inda.ai/hr/docs/v2/#tag/JobAd-Management) (hereafter also referred to as **job ad**), which is a document 
 that collects all the main information and details about a job vacancy;
 + [**application**](https://api.inda.ai/hr/docs/v2/#tag/Application-Management), that binds candidates to job ads; it is generated whenever a 
candidate applies for a job.

Each of them has a specific set of methods that grants users the ability to create, read, update and delete the relative 
documents, plus some special features based on AI approaches (such as *document parsing* or *semantic search*).
They can be explored in their respective sections.

Data about the listed document types can be enriched by connecting them to other INDA supported entities, such as 
[**companies**](https://api.inda.ai/hr/docs/v2/#tag/Company-Management) and [**universities**](https://api.inda.ai/hr/docs/v2/#tag/Universities), so that recruiters may 
get a better and more detailed idea on the candidates' experiences and acquired skills.

All the functionalities mentioned above are meant to help recruiters during the talent acquisition process, 
by exploiting the power of AI systems.
Among the advantages a recruiter has by using this kind of systems, tackling the bias problem is surely one of the 
most relevant.
Bias in recruitment is a serious issue that affect both recruiters and candidates, since it may cause wrong hiring 
decisions.
As we care a lot about this problem, we are constantly working on reduce the bias in original data so that INDA 
results may be as fair as possible.
As of now, in order to tackle the bias issue, INDA automatically ignores specific fields (such as name, gender, age 
and nationality) during the initial processing of each candidate data.

Furthermore, we decided to let users collect data of various types, including personal or sensitive details, but we 
do not allow their usage if it is different from statistical purposes; our aim is to discourage recruiters from 
focusing on candidates' personal information, and to put their attention on the candidate's skills and abilities.  

We want to help recruiters to prevent any kind of bias while searching for the most valuable candidates they really need.



The following documentation is addressed both to developers, in order to provide all technical details for INDA integration,
and to managers, to guide them in the exploration of the implementation possibilities.

The host of the API is <span style="color:blue">https<area>://api.inda.ai/hr/v2</span>.
We recommend to check the API version and build (displayed near the documentation title).
You can contact us at support@intervieweb.it in case of problems, suggestions, or particular needs.


### inda_hr@2.0

This generator creates TypeScript/JavaScript client that utilizes [RxJS](https://rxjs-dev.firebaseapp.com/). The generated Node module can be used in the following environments:

Environment
* Node.js
* Webpack
* Browserify

Language level
* ES5 - you must have a Promises/A+ library installed
* ES6

Module system
* CommonJS
* ES6 module system

It can be used in both TypeScript and JavaScript. In TypeScript, the definition should be automatically resolved via `package.json`. ([Reference](http://www.typescriptlang.org/docs/handbook/typings-for-npm-packages.html))

### Building

To build and compile the typescript sources to javascript use:
```
npm install
npm run build
```

### Publishing

First build the package then run `npm publish`

### Consuming

navigate to the folder of your consuming project and run one of the following commands.

_published:_

```
npm install inda_hr@2.0.0 --save
```

_unPublished (not recommended):_

```
npm install PATH_TO_GENERATED_PACKAGE --save
```

### How to apply middleware

First, add a singleton class that extends the generated `Configuration` class.

```
export class AuthInterceptor extends Configuration {
  private static config: AuthInterceptor;

  private constructor() {
    const middleware: Middleware[] = [
      {
        pre(request: RequestArgs): RequestArgs {
          const token = getAuthToken();

          return {
            ...request,
            headers: {
              ...request.headers,
              Authorization: `Bearer ${token}`,
            },
          };
        },
      },
    ];

    super({ middleware });
  }

  public static get Instance() {
    return AuthInterceptor.config || (AuthInterceptor.config = new this());
  }
}
```

Next, pass it to the generated api controller.

```
const api = new StoreApi(AuthInterceptor.Instance);

```
