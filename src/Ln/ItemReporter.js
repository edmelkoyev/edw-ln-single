import axios from 'axios'

export class ItemReporter {
  /**
   * constructor
   */
  constructor (lnInitApiUrl, request, elId) {
    this.lnInitApiUrl = lnInitApiUrl;
    this.request = request;
    this.elId = elId;

    this.state = {
      lstInitObject: null,
      lstInitResponseId: null,
      lstInitSessionId: null,
      reportsApp: {},
      questionScore: null,
      maxScore: null,
      saveSuccess: null,
      submitSuccess: null
    }

    this._setState = this._setState.bind(this);
    this._loadReportApiInitObject = this._loadReportApiInitObject.bind(this);
    this._prepareLandingDomElement = this._prepareLandingDomElement.bind(this);
    this._initLstReportApp = this._initLstReportApp.bind(this);

    this._loadReportApiInitObject();
  }

  /**
   * _setState method 
   */
  _setState (props) {
    const newState = Object.assign({}, this.state, props);
    this.state = newState;
    console.info("state changed", this.state);
  }

  _loadReportApiInitObject() {
    axios.post(this.lnInitApiUrl, this.request)
    .then( (response) => {
      window.console.log(response);
      this._setState({
        lstInitObject: response.data,
        lstInitResponseId: 'edwResp001',
        lstInitSessionId: 'edwSessionId'
      });
      this._prepareLandingDomElement(this.state.lstInitResponseId, this.state.lstInitSessionId);
      this._initLstReportApp();
    })
    .catch((error) => {
      console.error(error)
    });
  }

  /**
   * Prepare landing place for question item
   */
  _prepareLandingDomElement (referenceId, sessionId){
    let elm = document.getElementById(this.elId);
    elm.dataset.reference = referenceId
    elm.dataset.sessionId = sessionId
  }

  /**
   * Makes call to Learnosity Items API to initialize app.
   */
  _initLstReportApp () {
    let callbacks = {
        readyListener: () => {
            console.log('Learnosity Reports API is ready')
        },
        errorListener: (e) => {
            console.log('Error Code ', e.code);
            console.log('Error Message ', e.msg);
            console.log('Error Detail ', e.name);
        }
    }
    const {lstInitObject} = this.state;
    const reportsApp = window.LearnosityReports.init(lstInitObject, callbacks);
    this._setState({reportsApp});
  }
}