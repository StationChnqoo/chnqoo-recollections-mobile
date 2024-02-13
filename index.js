import {createContext, useEffect} from 'react';
import {AppRegistry, Appearance, StatusBar, View} from 'react-native';
import Stacks from './ScreenStacks';
import {name as appName} from './app.json';
import {useStore} from './useStore';

const StoreContext = createContext();

const Application = () => {
  Appearance.setColorScheme('light');
  useEffect(() => {
    return function () {};
  }, []);

  return (
    <StoreContext.Provider value={useStore}>
      <View style={{flex: 1}}>
        {/* <StatusBar translucent={true} /> */}
        <Stacks />
      </View>
    </StoreContext.Provider>
  );
};

AppRegistry.registerComponent(appName, () => Application);
