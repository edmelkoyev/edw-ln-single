import axios from 'axios'

export class ItemVewer {
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
      itemsApp: {},
      questionScore: null,
      maxScore: null,
      saveSuccess: null,
      submitSuccess: null
    }

    this._setState = this._setState.bind(this);
    this._loadApiInitObject = this._loadApiInitObject.bind(this);
    this._prepareLandingDomElement = this._prepareLandingDomElement.bind(this);
    this._initLstApp = this._initLstApp.bind(this);

    this._setupSaveButton = this._setupSaveButton.bind(this);
    this._saveProgress = this._saveProgress.bind(this);
    this._setupGetResponsesButton = this._setupGetResponsesButton.bind(this);
    this._getResponses = this._getResponses.bind(this);
    this._setupDisableQuestionButton = this._setupDisableQuestionButton.bind(this);
    this._disableQuestion = this._disableQuestion.bind(this);

    this._loadApiInitObject();
  }

  /**
   * _setState method 
   */
  _setState (props) {
    const newState = Object.assign({}, this.state, props);
    this.state = newState;
    console.info("state changed", this.state);
  }

  _loadApiInitObject() {
    axios.post(this.lnInitApiUrl, this.request)
    .then( (response) => {
      window.console.log(response);
      this._setState({
        lstInitObject: response.data,
        lstInitResponseId: response.data.request.items[0],
        lstInitSessionId: response.data.request.session_id
      });
      this._prepareLandingDomElement(this.state.lstInitResponseId, this.state.lstInitSessionId);
      this._initLstApp();
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
  _initLstApp () {
    let callbacks = {
        readyListener: () => {
            console.log('Learnosity Items API is ready')
            // this.state.itemsApp.on('save:success', this.onItemSaveSuccess, this)
            //todo: wait untill item gets rendered
            this._setupSaveButton();
            this._setupGetResponsesButton();
            this._setupDisableQuestionButton();
        },
        errorListener: (er) => {
            console.log('Error code ', er.code);
            console.log('Error message ', er.message);
            console.log('Error name ', er.name);
            console.log('Error name ', er.title);
        }
    }
    const {lstInitObject} = this.state;
    window.console.log(lstInitObject);
    const itemsApp = window.LearnosityItems.init(lstInitObject, '#learnosity_assess', callbacks);
    this._setState({itemsApp});
  }

  /**
   * _setupSaveButton
   */
  _setupSaveButton (){
    const saveBtn = document.createElement('button')
    saveBtn.type = 'button'
    const t = document.createTextNode("Save");
    saveBtn.appendChild(t); 
    saveBtn.addEventListener("click", this._saveProgress)
    document.getElementById('ctrlPanel').appendChild(saveBtn)
  }

  /**
   * _saveProgress
   */
  _saveProgress () {
    console.log('save attempt')
    const { itemsApp } = this.state
    const saveSettings = {
        success: (responseIds) => {
            console.log('save has been successful: ', responseIds)
            this._setState({saveSuccess: true})
        },
        error: (err) => {
            console.log(err)
            this._setState({saveSuccess: false})
        }
    }

    itemsApp.save(saveSettings);
    //itemsApp.validateQuestions();
    /*
    const submitSettings = {
      success: function (response_ids) {
          // Receives a list of the submitted user responses as [response_id]
          console.log("submit has been successful", response_ids);
      },
      error: function (e) {
          // Receives the event object defined in the Event section
          console.log("submit has failed",e);
      },
      progress: function (e) {
          // Client custom progress event handler
          // e: uses the progress object defined bellow
          // See the Progress Event section for more information on this
          console.log("progress",e);
      }
  };
  
  itemsApp.submit(submitSettings);
  */

  }

  /**
   * _setupSaveButton
   */
  _setupGetResponsesButton (){
    const scoreBtn = document.createElement('button');
    scoreBtn.type = 'button';
    const t = document.createTextNode("Get Responces");
    scoreBtn.appendChild(t); 
    scoreBtn.addEventListener("click", this._getResponses);
    document.getElementById('ctrlPanel').appendChild(scoreBtn);
  }

  /**
   * _getResponses
   */
  _getResponses () {
    console.log('show score');
    const { itemsApp } = this.state;
    const responses = itemsApp.getResponses();
    console.info('LST RESPONSES:', JSON.stringify(responses) );
    const scores = itemsApp.getScores();
    console.info('LST SCORE:', JSON.stringify(scores) );
    // const questions = itemsApp.getQuestions();
    // console.info('LST QUESTIONS:', JSON.stringify(questions) );
  }

  /**
   * _setupSaveButton
   */
  _setupDisableQuestionButton (){
    const scoreBtn = document.createElement('button');
    scoreBtn.type = 'button';
    const t = document.createTextNode("Disable Question");
    scoreBtn.appendChild(t); 
    scoreBtn.addEventListener("click", this._disableQuestion);
    document.getElementById('ctrlPanel').appendChild(scoreBtn);
  }

  /**
   * _getResponses
   */
  _disableQuestion () {
    console.log('disable question');
    const { itemsApp } = this.state;
    //itemsApp.questionsApp().disable();

    const LnQuestion = itemsApp.question('5552b303-fdd6-4a93-8e64-3c7a6a8a1a0a_73f40a4c7add6a54b0feccecef12e28f').getQuestion();
    console.log('LnQuestion:', LnQuestion);

    console.log('max_length1:', LnQuestion.max_length);

    LnQuestion.max_length = 12;

    console.log('max_length2:', LnQuestion.max_length);
    
    // const resp = itemsApp.question('5552b303-fdd6-4a93-8e64-3c7a6a8a1a0a_e6bc77c92959891d3b36bd10fea85429').getQuestion();
    // console.log('questionsApp:', resp);
  }
}
