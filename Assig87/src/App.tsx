import React from 'react';
import { Provider } from 'react-redux';
import store from './store/store';
import EmotionTracker from './components/EmotionTracker';

function App() {
  return (
    <Provider store={store}>
      <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
        <div className="w-full max-w-lg">
          <h1 className="text-2xl font-bold text-center text-gray-800 mb-8">
            Emotion Tracker
          </h1>
          <EmotionTracker />
        </div>
      </div>
    </Provider>
  );
}

export default App;