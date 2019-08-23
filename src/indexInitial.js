import {ItemVewer} from './Ln/ItemVewer.js';

const lnInitApiUrl = 'http://localhost:8080/learnosity/wrapper/v1/initItemsApi';
const lnInitApiUrl2 = 'http://localhost:8080/learnosity/wrapper/v1/initItemsApiWithResponses';
/** List of LM Items
 * was_hello_006_essay
 * was_hello_003_essay
 * was_hello_005_dd
 * was_hello_002_dd
 * Cutnell_Chapter_21_Problem_040
 * was_hello_104_sort_list
 */

const lnItemProps = {
  "serviceName":"items",
  "referenceId":"was_hello_104_sort_list", // LM Item Ref
  "state": "initial", // state: , resume, preview, review
  "domain":"localhost",
  "maxScore":1,
  "user":{
      "userId":"user000002",
      "email":"edmelkoyevuser000002@wiley.com"
    },
  "sessionId":"5552b303-fdd6-4a93-8e64-3c7a6a8a1a0a"
};
const lnDomElementId = 'lrn001';

const learnosityItemViewer1 = new ItemVewer(lnInitApiUrl, lnItemProps, lnDomElementId);