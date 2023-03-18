import React from 'react';
import { useState, useRef, SetStateAction } from 'react';
import AudioRecorder from '../../AudioRecorder';

const App = () => {
  let [recordOption, setRecordOption] = useState('video');
  const toggleRecordOption = (type: SetStateAction<string>) => {
    return () => {
      setRecordOption(type);
    };
  };

  return (
    <div>
      <style jsx global>
        {`
          body {
            padding: 5%;
            min-width: 320px;
            min-height: 100vh;
            display: flex;
            justify-content: center;
          }
          h1 {
            font-weight: 700;
          }
          p {
            margin-bottom: 10px;
          }
          .button-flex {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 10px;
          }
          .audio-controls,
          .video-controls {
            margin-bottom: 20px;
          }
          .audio-player,
          .video-player {
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          .audio-player,
          .video-player,
          .recorded-player {
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          .live-player {
            height: 200px;
            width: 400px;
            border: 1px solid #646cff;
            margin-bottom: 30px;
          }
          .recorded-player video {
            height: 400px;
            width: 800px;
          }
        `}
      </style>
      <h1>AI Recorder</h1>
      <div className="button-flex">
      </div>
      <TextForm></TextForm>
      <div>{<AudioRecorder />}</div>
    </div>
  );
};



function TextForm() {
  const [inputText, setInputText] = useState('');

  function handleChange(event) {
    setInputText(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log('Submitted text: ', inputText);
    // Here you can do something with the submitted text
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Enter some text:
        <input type="text" value={inputText} onChange={handleChange} />
      </label>
      <button type="submit">Submit</button>
      <p>Input text: {inputText}</p>
    </form>
  );
}

export default App;
