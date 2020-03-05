const audio = document.querySelector('audio');

const constraints = window.constraints = {
  audio: true,
  video: false,
};

const handleSuccess = (stream) => {
  console.log('----------------');
  console.log(stream);
  console.log('----------------');

  const audioTracks = stream.getAudioTracks();
  console.log('----------------');
  console.log(audioTracks);
  console.log('Got stream with constraints:', constraints);
  console.log('Using audio device: ', audioTracks[0].label);
  console.log('----------------');

  stream.oninactive = () => {
    console.log('Stream ended');
  };

  window.stream = stream;
  audio.srcObject = stream;
};

const handleError = (error) => {
  console.log('navigator.MediaDevice.getUserMedia error: ', error.message, error.name);
};

navigator.mediaDevices
  .getUserMedia(constraints)
  .then(handleSuccess)
  .catch(handleError);