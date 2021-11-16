# react-native-learn

## Expo-Cli 로 초기 설정하기

### Requirement

- Node.js
- OSX ( lastest )
- Xcode ( lastest )

#### Initialize App

```bash
sudo npm install -g expo-cli # deprecated와 error가 몇개 보이지만 실행하는데는 지장없다.
expo-cli init { app-name }
# 아래 환경 중 택 1
# [v] blank
# [ ] blank (TypeScript)
# [ ] tabs
# [ ] bare
```

#### Run App

#### Metro Bundler

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

#### App 실행

1. 백오피스에서 " Run on iOS simulator " 클릭

<div style="
    width:100%;
    height:300px;
    display: flex;
    align-items: center;
    justify-content: center;">
  <img src="./img/iOS-1.png" width="120" height="250" alt="iOS simulator">
</div>
