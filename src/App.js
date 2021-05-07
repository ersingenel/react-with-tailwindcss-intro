import './App.css';
import logo from './logo.svg';

function App() {
  return (
    <div>
      <div class="chat-notification">
        <div class="chat-notification-logo-wrapper">
          <img class="chat-notification-logo" src={logo} alt="Teams Logo" />
        </div>
        <div class="chat-notification-content">
          <h4 class="chat-notification-title">Teams</h4>
          <p class="chat-notification-message">You have a new message!</p>
        </div>
      </div>
      <div class="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4 mt-10">
        <div class="flex-shrink-0">
          <img class="h-12 w-12" src={logo} alt="Teams Logo" />
        </div>
        <div>
          <div class="text-xl font-medium text-black">Teams</div>
          <p class="text-gray-500">You have a new message!</p>
        </div>
      </div>
      <button type="button" class="chat-button">
        Teams
      </button>
      <button
        type="button"
        class="bg-blue-500 text-white px-6 py-2 rounded-md flex mx-auto hover:bg-blue-800"
      >
        Teams
      </button>
    </div>
  );
}

export default App;
