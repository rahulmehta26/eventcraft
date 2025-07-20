import { Provider } from 'react-redux'
import EventForm from './components/EventForm'
import EventList from './components/EventList'
import store from './redux/store'
import { FaCalendarDays } from 'react-icons/fa6';

function App() {
  
  return (
 <Provider store={store}>
      <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100 p-4">
        <div className="max-w-6xl mx-auto">
         
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="p-4 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl shadow-xl">
                <FaCalendarDays color='white' size={16}  /> 
              </div>
              <h1 className="text-5xl font-extrabold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                EventCraft
              </h1>
            </div>
            <p className="text-xl text-gray-600 font-medium">
              Craft extraordinary events with intelligent scheduling
            </p>

          </div>

          <EventForm />
          <EventList />

          <div className="text-center mt-12 py-8">
            <p className="text-gray-400 text-sm">
              Made with ❤️ for better event planning
            </p>
          </div>
        </div>
      </div>
    </Provider>
  )
}

export default App
