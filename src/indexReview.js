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
 * 
 * edw_s82_cloze_with_text
 * edw_s82_label_image_with_text
 * edw_s82_dynamic_content_01
 */

const lnItemProps = {
  "serviceName":"items",
  "referenceId":"was_hello_705_geogebra_sample-dev",
  "state": "review", // state: initial, resume, preview, review
  "domain":"edw.wiley.com",
  "maxScore":1,
  "user":{
      "userId":"user000002",
      "email":"edmelkoyevuser000002@wiley.com"
    },
  "sessionId":"5553b505-fdd1-1a11-1e11-5a5a5a5a8301",
  "enableAnswer": false
};
const lnDomElementId = 'lrn001';

const learnosityItemViewer1 = new ItemVewer(lnInitApiUrl, lnItemProps, lnDomElementId);