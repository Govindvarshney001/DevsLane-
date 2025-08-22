import React from 'react';
import { connect } from 'react-redux';
import { RootState } from '../store/store';
import { incrementHappy, incrementSad } from '../store/actions';

interface Props {
  happy: number;
  sad: number;
  incrementHappy: () => void;
  incrementSad: () => void;
}

const EmotionTracker: React.FC<Props> = ({ happy, sad, incrementHappy, incrementSad }) => {
  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-lg">
      <div className="space-y-4">
        {/* Count Display */}
        <div className="text-center space-y-2 mb-6">
          <p className="text-lg font-medium text-gray-800">
            You were happy {happy} times
          </p>
          <p className="text-lg font-medium text-gray-800">
            You were sad {sad} times
          </p>
        </div>

        {/* Action Buttons */}
        <div className="space-y-3 pt-4">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-gray-800">Are you happy?</span>
            <button
              onClick={incrementHappy}
              className="bg-red-600 hover:bg-red-700 text-white px-4 py-1 rounded text-sm font-medium transition-colors duration-200"
            >
              YES
            </button>
          </div>
          
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-gray-800">Are you sad?</span>
            <button
              onClick={incrementSad}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-1 rounded text-sm font-medium transition-colors duration-200"
            >
              YES
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state: RootState) => ({
  happy: state.happy,
  sad: state.sad,
});

const mapDispatchToProps = {
  incrementHappy,
  incrementSad,
};

export default connect(mapStateToProps, mapDispatchToProps)(EmotionTracker);