import {ItemVewer} from './Ln/ItemVewer.js';

const lnInitApiUrl = 'http://localhost:8080/learnosity/wrapper/v1/initItemsApi';
const lnInitApiUrl2 = 'http://localhost:8080/learnosity/wrapper/v1/initItemsApiWithResponses';
/** List of LM Items
 * was_hello_007_dd
 * was_hello_006_essay
 * was_hello_101_dd_partial_match
 * 
 * was_hello_003_essay
 * was_hello_005_dd
 * was_hello_002_dd
 * Cutnell_Chapter_21_Problem_040
 * was_hello_104_sort_list
 * 
 * was_hello_700_geogebra_excercise_free_body_diagram
 * was_hello_701_geogebra_excercise_math
 * was_hello_705_geogebra_sample-dev
 * was_hello_706_ggb_mvpoints-dev
 * was_hello_751_ggb_solution
 * 
 * lref-eqat-022c7136-8ab3-417f-ae05-4bcc8700c8d2-qa
 */

const lnItemProps = {
  "serviceName":"items",
  "referenceId":"was_hello_751_ggb_solution",
  "state": "review", // state: initial, resume, preview, review
  "domain":"edw.wiley.com",
  "maxScore":1,
  "user":{
      "userId":"user000002",
      "email":"edmelkoyevuser000002@wiley.com"
    },
  "sessionId":"5553b505-fdd1-1a11-1e11-5a5a5a5a8620",
  "enableAnswer": true
};
const lnDomElementId = 'lrn001';

const learnosityItemViewer1 = new ItemVewer(lnInitApiUrl, lnItemProps, lnDomElementId);