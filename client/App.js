import { Text, View } from 'react-native';
import Navigation from './navigation';
import { store } from './store'
import { Provider } from 'react-redux'
export default function App() {
  console.log("Please commit history")
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
    
  );
};
