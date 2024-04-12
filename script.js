/* This function "renders" some bit of text as audio to the user. */
function renderTTS(text) {
  var synthesis = window.speechSynthesis;

  console.log("Available Voices:");
  var voice = synthesis.getVoices().filter(function (voice) {
    console.log(voice.name + " " + voice.lang);
    return voice.name === 'Google UK English Female';
  })[0];

  // Create an utterance object
  var utterance = new SpeechSynthesisUtterance(text);

  // Set utterance properties
  utterance.voice = voice;
  utterance.pitch = 1;
  utterance.rate = 1;

  const volume = document.getElementById("volume").value;
  utterance.volume = 1 * volume;

  // Speak the utterance
  synthesis.speak(utterance);
}

function encourage() {
  const name = document.getElementById("name").value;
  const encouragement = document.getElementById("encouragement").value;
  const postScript = document.getElementById("post-script").value;

  const message = `Hello ${name}, I have something I would like to tell you. ${encouragement} Have a nice day! ${postScript}`;

  renderTTS(message);
}