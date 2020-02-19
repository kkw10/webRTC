# getUserMedia API

## 1. navigator
---

### **1.1 정의**

브라우저의 상태와 신원 정보를 나타낸다.

읽기 전용 속성으로 window 객체를 통해서 접근할 수 있다.

```javascript
window.navigator
```

### **1.2 navigator 프로퍼티**

1. navigator.battery (Read Only)
2. navigator.geolocation (Read Only)
3. `navigator.mediaDevices` (Non Standards)

## 2. mediaDevices
---

카메라나 마이크 및 화면 공유와 같이 연결된 미디어 입력 장치가 있다면, 그에 대한 접근을 도와주는 객체이다.

navigator 객체를 통해서 접근할 수 있으며 싱글톤이다.

```javascript
const mediaDevices = navigator.mediaDevices;
```

```javascript
  MediaDevices = {
    ondevicechange: null
    __proto__: {
      ondevicechange,
      enumerateDevices: ƒ (),
      getSupportedConstraints: ƒ (),
      getUserMedia: ƒ (),
      getDisplayMedia: ƒ (),
      ...
    }
  }
```

## 3. getUserMedia()
---

사용자에게 미디어 장치 사용 권한을 요청하며, 요청 수락시 미디어 트랙을 포함한 `MediaStream` 객체를 반환한다.

```javascript
const stream = await navigator.mediaDevices.getUserMedia(constraints)
```

MediaStream 객체를 성공적으로 받았다면 Promise의 형태로 반환된다.

### **3.1 매개변수 => constraints**

매개변수로 제공할 객체는 요청할 미디어 타입을 지정하며, 각 타입의 세부사항도 지정할 수 있다. (비디오 해상도, 비디오 프레임 등...)

```javascript
const constraints = {
  audio: true, 
  video: true,
}
```

---

## 참조
1. [MediaDevices.getUserMedia() MDN](https://developer.mozilla.org/ko/docs/Web/API/MediaDevices/getUserMedia)