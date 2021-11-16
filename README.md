# react-native-learn

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

``` text
[v] Pixel 3a

[v] Q ( API 29, Andorid 10.0 )
```

#### App 실행 ( Android )

1. 백오피스에서 " Run on Android device/emulator " 클릭

![Android App](./img/android-1.png)

