# WebRTC의 흐름도

## 1. 사용자 연결
---

일반적으로 각 사용자가 동일한 웹페이지를 방문하는 것으로 연결이 시작된다.

## 2. 시그널링 시작
---

## 3. 후보 찾기
---

## 4. 미디어 세션 협상
---

각 브라우저가 서로 통신할 수 있는 방법을 결정한 후에는 코덱과 해상도, 비트 레이트 등 `교환할 미디어의 타입과 포맷`에 대해서 협상을 해야한다.

### **RTCSessionDescription**

두 피어간의 연결을 협상하는 과정에서 `RTCSessionDescription 객체`를 주고받는 과정이 포함되는데 각각의 description 객체에는 해당 피어가 사용할 수 있는 연결 옵션에 대한 정보가 포함되어 있다.

이 description 객체는 `SDP`에 내장된 `제안/응답 기반의 모델`을 이용해서 협상한다.

### **SDP**

> `SDP` = Session Description Protocol

SDP는 미디어 폼의 콘텐츠 그 자체를 위해서 제공되는 것이 아니라, 통신하는 각 피어간에 미디어 타입과 포맷에 대해서 협상할 수 있는 수단을 제공하기 위한 표준이다.

여기서 `Session`이란 다음과 같이 구성된다.

1. 발신자
2. 수신자
3. 데이터의 흐름

### **JSEP 프로토콜**

그리고 이러한 일련의 과정은 보통 `JSEP 프로토콜`을 사용하여 이루어진다.

> `JSEP` = Javascript Session Establishment Protocol

### **new RTCSessionDescription()**

```javascript
let rtcSessionDescription = new RTCSessionDescription();
```

현재는 지원이 중단된 생성자로 `RTCPeerConnection` 객체의 `setLocalDescription()` 메서드 및 다른 메서드들이 처리하므로 사용자가 `RTCSessionDescription 객체`를 직접 인스턴스화 할 필요가 없어졌다.


## 5. RTCPeerConnection 스트림 시작
---

로컬 컴퓨터와 원격 피어 간의 WebRTC 연결을 담당한다.
원격 피어에 연결하기 위해서 메서드를 제공하고, 연결을 유지하고 연결 상태를 모니터링 하며 더 이상 연결이 필요하지 않을 경우 연결을 종료한다.

### 생성자

```javascript
const rtcPeerConnection = RTCPeerConnection()
```

위의 생성자는 로컬 기기와 원격 피어 간의 연결을 나타내는 RTCPeerConnection 객체를 만들어서 반환한다.

### 프로퍼티와 메서드 정보
[RTCPeerConnection MDN](https://developer.mozilla.org/ko/docs/Web/API/RTCPeerConnection)