import {ItemVewer} from './Ln/ItemVewer.js';

const lnInitApiUrl = 'http://localhost:8080/learnosity/wrapper/v1/initItemsApi';
const lnInitApiUrl2 = 'http://localhost:8080/learnosity/wrapper/v1/initItemsApiWithResponses';
/** List of LM Items
 * was_item_essay_rt
 * was_hello_007_dd
 * was_hello_006_essay
 * 
 * was_hello_003_essay
 * was_hello_005_dd
 * was_hello_002_dd
 * Cutnell_Chapter_21_Problem_040
 * 
 * was_hello_700_geogebra_excercise_free_body_diagram
 */

const lnItemProps = {
  "serviceName":"items",
  "referenceId":"was_hello_006_essay", //   Cutnell_Chapter_21_Problem_040
  "state": "resume", // state: initial, resume, preview, review
  "domain":"localhost",
  "maxScore":1,
  "user":{
      "userId":"user000002",
      "email":"edmelkoyevuser000002@wiley.com"
    },
  "sessionId":"5553b505-fdd1-1a11-1e11-1c1a1a1a1a3c"
};
const lnDomElementId = 'lrn001';

const learnosityItemViewer1 = new ItemVewer(lnInitApiUrl2, lnItemProps, lnDomElementId);