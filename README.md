# react native learn

## Expo-Cli 로 초기 설정하기

### Requirement

- Node.js
- OSX ( lastest )
- Xcode ( lastest ) | iOS
- Android Studio | Android

#### Initialize App

```bash
$ sudo npm install -g expo-cli # deprecated와 error가 몇개 보이지만 실행하는데는 지장없다.
$ expo-cli init { app-name }
# 아래 환경 중 택 1
# [v] blank
# [ ] blank (TypeScript)
# [ ] tabs
# [ ] bare
```

#### Build App | Metro Bundler

- QR 코드로 각자 디바이스에서 접근가능 ( Expo App 설치 필수 )
- 백오피스 ( <http://localhost:19002/> ) 에서 " Run on { Environment } "로 디바이스에서 실행 가능

```bash
expo start
```

![metro bundler](./img/metro-bundler.png)

### IOS Simulator

#### Command Line Tools 버전

```text
xcode -> Preferences > Location > Command Line Tools
* 가장 최선버전 선택
```

#### Simulator 실행

```text
xcode -> Open Developer Tool -> Simulator
```

#### App 실행 ( iOS )

1. 백오피스에서 " Run on iOS simulator " 클릭

<div style="
    width:100%;
    height:300px;
    display: flex;
    align-items: center;
    justify-content: center;">
  <img src="./img/iOS-1.png" width="120" height="250" alt="iOS simulator">
</div>

### Android Simulator

#### SDK Manager

```text
Android Studio > Preference > Apperence & Behavior > System Settings > Android SDKs

- SDK Platforms
[v] Android 10.0 ( lastest )

- SDK Tools
[-] Android SDK Build-Tools 30-rc2
[v] Android Emulator
[v] Android SDK Platform-Tools
[v] Intel x86 Emulator Accelerator (HAXM installer)
```

#### 환경번수 설정

```bash
# /.bash_profile


#------------------------------------------------------------
# Android Simulator
#------------------------------------------------------------
export ANDROID_SDK=/Users/yskim/Library/Android/sdk
export PATH=/Users/yskim/Library/Android/sdk/platform-tools:$PATH
```

#### 즉시 적용

```bash
$ source .bash_profile

# 확인
$ adb
```

#### AVD ( Android Virtual Device ) 실행

- AVD Manager

![Android Virtual Device](./img/sdk_avd-manager.png)

- Environment ( 타겟 환경에 맞게 세팅 )

```text
[v] Pixel 3a

[v] Q ( API 29, Andorid 10.0 )
```

#### App 실행 ( Android )

1. 백오피스에서 " Run on Android device/emulator " 클릭

![Android App](./img/android-1.png)

## React Native 단점

### 반응형 디자인, 컴포넌트

### No or very little cross-platform styling of components

- 직접 스타일링
- third-party 라이브러리 사용

### Only a basic set of pre-build components

- 직접 컴포넌트 빌드
- third-party 라이브러리 사용

### Tools to create responsive designs but no responsiveness out of the box

- OS와 디바이스 사이즈 보면서, 직접 반응형 디자인 생성

### 빠른 변화

### New versions every month

- 매달 새 버전이 나와 새/변경된 API 확인 필요

### Breaking changes do happen

- 새 버전에서 오류/버그 발생할수 있음

### High Dependency on third-party packages that also change

- third-party 라이브러리에 의존도가 높은데, 해당 라이브러리의 내용이 자주 변경된다.

### Bugs / Workarounds required

- 버그를 우회하기 위한 행위가 필요하다.

## Core Component

### There is no CSS

- Inline Styles
- StyleSheet Object ( Preferred )
- ( Written in Javascript )

> CSS Syntax를 가지고 있지만, 오직 "subset of properties" 와 feature들 만 지원된다.

#### iOS keyboard 활성화

```text
- I/O > Keyboard > Toggle Software Keyboard
- command + K
```

## List Components

### View

- 사용하기 직관적
- 화면이 짤림

```javascript
<View>
  {courseGoals.map((goal, index) => (
    <View style={styles.listItem}>
      <Text key={index}>{goal}</Text>
    </View>
  ))}
</View>
```

### ScrollView

- 사용하기 직관적
- 화면이 짤리지 않음
- 하지만 너무 많은 리스트에서는 성능저하가 발생

```javascript
<ScrollView>
  {courseGoals.map((goal, index) => (
    <View style={styles.listItem}>
      <Text key={index}>{goal}</Text>
    </View>
  ))}
</ScrollView>
```

### FlatList

- 화면이 짤리지 않음
- 하지만 너무 많은 리스트에서도 성능저하를 막을수 있음 ( Recycling List )

```javascript
<FlatList>
  {courseGoals.map((goal, index) => (
    <View style={styles.listItem}>
      <Text key={index}>{goal}</Text>
    </View>
  ))}
</FlatList>
```

#### FlatList | Grid 만들기

```javascript
<FlatList
  keyExtractor={(item, index) => {
    return item.id;
  }}
  data={CATEGORIES}
  renderItem={renderGridItem}
  numColumns={2}
/>
```

## Button Component

- style을 직접 지정해줄 수 없다. (inline 이든 StyleSheet 이든 간에..)
- 빈 View로 한번 감싸줘야한다.

### Touchable

#### TouchableOpacity

```javascript
<TouchableOpacity activeOpacity={0.8} />
```

#### TouchableHighlight

#### TouchableWithoutFeedback

### Modal

## Image Component

```javascript
<View style={styles.imageContainer}>
  <Image
    fadeDuration={1000}
    // source={require('../assets/success.png')}
    source={{
      uri: 'https://s3.amazonaws.com/www.explorersweb.com/wp-content/uploads/2021/05/23233000/Summit-Everest-MingmaG.jpg',
    }}
    style={styles.image}
    resizeMode="cover"
  />
</View>
```

![이미지 컴포넌트](./img/image-1.png)

## Debugging

### Console.log

- 가장 기본적인 방법

```javascript
console.log('Rerendering ' + JSON.stringify(courseGoals));
```

#### 현재 Device Info 출력하기

#### expo-device ( expo app )

> https://docs.expo.dev/versions/latest/sdk/device/#devicemodelid

```javascript
import * as Device from 'expo-device';

console.log('Device totalMemory : ' + Device.totalMemory);
console.log('Device modelName : ' + Device.modelName);
```

#### react-native-device-info ( expo app X )

> https://www.npmjs.com/package/react-native-device-info

```javascript
import DeviceInfo from 'react-native-device-info';

console.log('Device ID : ' + DeviceInfo.getUniqueID());
```

### Debug Remote JS

- 브라우저 상에서 디버깅을 할수 있는 기능으로, source를 보면서 breakpoints를 걸 수 있다.

![Debug Remote JS](./img/remote-js-debugger.png)

#### AVD | Debug Remote JS

> cmd + m 에서 Debug Remote JS

#### IOS | Debug Remote JS

> cmd + d 에서 Debug Remote JS

### Reload

#### AVD | Reload

> cmd + m 에서 reload

#### IOS | Reload

> cmd + r 또는 cmd + d 에서 reload

### Resize

#### AVD | Resize

> cmd + ▲ / ▼

#### AVD | Rmove Frame

- [ ] Enable Device Frame

![remove frame](./img/remove-frame-avd.png)

### React Native Debugger

#### intall

```bash
brew install --cask react-native-debugger
```

#### download app

> https://github.com/jhen0409/react-native-debugger/releases
> react-native-debugger_0.12.1_universal.dmg

#### port 지정하기

> cmd + t

#### 사용법

1. 사용하고 있는 Chrome Remote Debug JS 있으면 끄기
2. React Native Debugger 켜고 기다리기
3. cmd + t로 Remote Debug JS 의 포트 입력 ( 나의경우는 19000, 크롬 디버거 띄울때의 포트 )

![React Native Debugger](./img/react-native-debugger.png)

## Syntax

### Hook | useRef

1. 레퍼런스 값은 영속적이다. => 렌더링하더라도 값을 유기하고 있음
2. 레퍼런스 값을 업데이트 해도 리렌더링을 트리거 하지 않는다.

### props.children | 자식 DOM 가져오기

```javascript
const Card = (props) => {
  return (
    <View style={{ ...styles.card, ...props.style }}>{props.children}</View>
  );
};
```

```javascript
<Card style={width: '100%'}>
  <Text>Select a Number</Text>
  <TextInput />
  <View style={styles.buttonContainer}>
    <Button title="YES" onPress={() => {}} />
    <Button title="NO" onPress={() => {}} />
  </View>
</Card>
```

## Style

### Shadow

```javascript
  inputContainer: {
    // flex: 1,
    width: '80%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.26,
    elevation: 8, // for android
    backgroundColor: 'white',
    padding: 20,
  },
```

### Cascade 적용하기

- 상위 부모에서 적용된 스타일이 자식 컴포넌트들에게도 적용된 폭포(Cascade) 방식은 React-Native에서는 Default가 아니다.

#### 1. Atomic 한 컴포넌트에 적용해서 사용하기

- ex) default로 제공해준 Text 컴포넌트를 이용해 BodyText로 랩핑해서 사용

```javascript
import React from 'react';
import { Text, StyleSheet } from 'react-native';

const BodyText = (props) => {
  return (
    <Text {...props} style={{ ...styles.body, ...props.style }}>
      {props.children}
    </Text>
  );
};

const styles = StyleSheet.create({
  body: {
    fontFamily: 'open-sans',
  },
});

export default BodyText;
```

#### 2. default StyleSheet Object 만들어서 사용하기

```javascript
// constant/default-styles.js
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  bodyText: {
    fontFamily: 'open-sans',
    color: 'red',
  },
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 18,
  },
});
```

## Custom Font 적용하기

### 1. font 파일(.ttf) 다운로드

![폰트 다운로드](./img/font-1.png)

### 2. install expo-font

- 프로젝트 디렉토리에서

```bash
# npm 을 사용 할 수도 있지만 expo관련 라이브러리는 expo로 install하는게 안전하다
# expo 를 이용해도 package.json의 dependencies에는 자동으로 추가 된다.
expo install expo-font
```

### 3. import expo-font

```javascript
import * as Font from 'expo-font';
```

### 4. fetch font

```javascript
const fetchFont = () => {
  // returns Promise Object
  return Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  });
};
```

### 5. font가 로딩 될 때까지 App 로딩 막기

```javascript
const [dataLoaded, setDataLoaded] = useState(false);

if (!dataLoaded) {
  return (
    <AppLoading
      startAsync={fetchFonts}
      onFinish={() => {
        setDataLoaded(true);
      }}
      onError={(err) => {
        console.error(err);
      }}
    />
  );
}
```

### 6. 적용

- fontFamily

```javascript
  title: {
    fontSize: 20,
    marginVertical: 10,
    fontFamily: 'open-sans-bold',
  },
```

- font 적용 된 모습

![font 적용](./img/font-2.png)

## Navigation

### install

> npm install --save react-navigation

```bash
npm install --save react-navigation

expo install react-native-gesture-handler react-native-reanimated
```

#### StackNavigator

> npm install --save react-navigation-stack

```javascript
import { createStackNavigator } from 'react-navigation-stack';
```

#### TabsNavigator

> npm install --save react-navigation-tabs

```javascript
import { createBottomTabNavigator } from 'react-navigation-tabs';
```

#### DrawerNavigator

> npm install --save react-navigation-drawer

```javascript
import { createDrawerNavigator } from 'react-navigation-drawer';
```

### params 넘기기

```javascript
<TouchableOpacity
  onPress={() => {
    props.navigation.navigate({
      routeName: 'CategoryMeals',
      params: {
        categoryId: itemData.item.id,
      },
    });
  }}
>
```

```javascript
const catId = props.navigation.getParam('categoryId');

const selectedCategory = CATEGORIES.find((cat) => cat.id === catId);
```

### navigationOptions

#### Navigation 에서 선언하기

```javascript
const MealsNavigator = createStackNavigator(
  {
    CategoryMeals: {
      screen: CategoryMealsScreen,
      navigationOptions: {
        headerTintColor: Colors.primaryColor,
      },
    },
    MealDetail: MealDetailScreen,
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor:
          Platform.OS === 'android' ? Colors.primaryColor : 'white',
      },
    },
  }
);
```

#### 화면에서 선언하기

```javascript
// Literal Object
CategoriesScreen.navigationOptions = {
  headerTitle: 'Meal Categories',
  headerStyle: {
    backgroundColor: Colors.primaryColor,
  },
  headerTintColor: 'white',
};

// Functional with navigation Data
CategoryMealsScreen.navigationOptions = (navigationData) => {
  const catId = navigationData.navigation.getParam('categoryId');

  const selectedCategory = CATEGORIES.find((cat) => cat.id === catId);

  return {
    headerTitle: selectedCategory.title,
  };
};
```

![navigation options](./img/nav-header-options.png)

#### 부드러운 트랜지션

```javascript
import { enableScreens } from 'react-native-screens';

enableScreens();
```

## Header Buttons

### Header Buttons | install

```bash
npm install --save react-navigation-header-buttons@6
```

### CustomHeaderButton

> 헤더버튼에 아이콘으로 넣고 싶을때 사용

```javascript
const CustomHeaderButton = (props) => {
  return (
    <HeaderButton
      {...props}
      IconComponent={Ionicons}
      iconSize={23}
      color={Platform.OS === 'android' ? 'white' : Colors.primaryColor}
    />
  );
};
```

### CustomHeaderButton | 적용

```javascript
MealDetailScreen.navigationOptions = (navigationData) => {
  const mealId = navigationData.navigation.getParam('mealId');
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);
  return {
    headerTitle: selectedMeal.title,
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title="Favorite"
          iconName="ios-star"
          onPress={() => {
            console.log('Mark a Favorite');
          }}
        />
      </HeaderButtons>
    ),
  };
};
```

![header button](./img/header-button.png)

## Tips

### 숫자만 받기

```javascript
const numberInputHandler = (inputText) => {
  setEnteredValue(inputText.replace(/[^0-9]/g, ''));
};
```

### 다른 곳을 클릭하면 키보드 없애기

```javascript
<TouchableWithoutFeedback
  onPress={() => {
    Keyboard.dismiss();
  }}
>
  ...
</TouchableWithoutFeedback>
```

### NaN 체크

```javascript
chosenNumber !== chosenNumber;

isNaN(chosenNumber);
```

### Alert 띄우기

```javascript
Alert.alert('Invalid number!', 'Number has to be a number between 1 and 99.', [
  { text: 'Okay', style: 'destructive', onPress: resetInputHandler },
]);
```

### 화면 스위칭 하기

```javascript
let content = <StartGameScreen onStartGame={startGameHandler} />;

if (userNumber) {
  content = <GameScreen />;
}
```

### App Loading

```javascript
import { AppLoading } from 'expo';
```

안된다면

```bash
expo install expo-app-loading
```

```javascript
import AppLoading from 'expo-app-loading';
```

### Icons ( @expo/vector-icons )

- icons 목록
  <https://icons.expo.fyi/>

- @expo/vector-icons Documentation
  <https://docs.expo.dev/guides/icons/>

#### 1. Import the icon family

```javascript
import { Ionicons } from '@expo/vector-icons';
```

#### 2. Render the component

```javascript
<Ionicons name="md-add" size={24} color="black" />
```

### 쓸만한 UI Libraries

#### react native paper

<https://callstack.github.io/react-native-paper/>

#### native base

<https://github.com/GeekyAnts/NativeBase>

#### react-native-elements

<https://github.com/react-native-elements/react-native-elements>

### ScrollView | style vs contentContainerStyle

<https://stackoverflow.com/questions/52892304/style-vs-contentcontainerstyle-in-scrollview>

### flex vs flex-grow

<https://stackoverflow.com/questions/35395691/understanding-the-difference-between-the-flex-and-flex-grow-properties>

### Dimentions

- window의 width, height를 알 수 있음.

```javascript
width: Dimensions.get('window').width / 3;
```

- Dimentions를 사용하게 되면 앱시작 초기에만 설정이 되므로
- 화면이 rotate되게 되면 설정이 깨진다.

```javascript
const [buttonWidth, setButtonWidth] = useState(
  Dimensions.get('window').width / 4
);

const updateLayout = () => {
  setButtonWidth(Dimensions.get('window').width / 4);
};

Dimensions.addEventListener('change', updateLayout);
```

### Orientation

> 화면 회전시 자동으로 눞혀지게 만드는 설정

```json
// app.json
"orientation": "default", // portrait - 세로, landscape - 가로
```

- expo에서 화면 돌아가게 만들기

```javascript
import * as ScreenOrientation from 'expo-screen-orientation';

const GameScreen = (props) => {
  ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT);
  ...
}
```

### Platform API

```javascript
backgroundColor: Platform.OS === 'android' ? Colors.primary : 'white',
```

### SafeAreaView

> 자동으로 padding을 생성해줘소 안 눌리는 버튼이 없게끔 도와주는 View

```javascript
return (
  <SafeAreaView style={styles.container}>
    <Header title="Guess a Number" />
    {content}
  </SafeAreaView>
);
```
