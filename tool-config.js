export const tool={
  "id": "E145",
  "slug": "eng-shannon-capacity",
  "title": "섀넌 채널 용량 계산기",
  "title_en": "Shannon Channel Capacity Calculator",
  "category": "통신·정보",
  "category_en": "Communications and information",
  "fields": [
    {
      "key": "b",
      "label": "채널 대역폭 B",
      "label_en": "Channel bandwidth B",
      "dimension": "frequency",
      "example": 1000000.0,
      "constraint": "positive",
      "display_unit": "Hz",
      "display_value": "1000000"
    },
    {
      "key": "snr",
      "label": "수신 신호 대 잡음비 SNR",
      "label_en": "Received signal-to-noise ratio SNR",
      "dimension": "decibel",
      "example": 10,
      "constraint": "signed",
      "display_unit": "db",
      "display_value": "10"
    }
  ],
  "result_label": "이론 채널 용량 C",
  "result_label_en": "Theoretical channel capacity C",
  "result_dimension": "dataRate",
  "formula": "C = B log₂(1 + 10^(SNR_dB/10))",
  "purpose": "대역폭과 수신 SNR로 대역 제한 AWGN 채널의 섀넌 이론 용량 계산.",
  "purpose_en": "Calculate the Shannon capacity of a band-limited AWGN channel from bandwidth and received SNR.",
  "assumptions": "평균 전력 제한을 둔 대역 제한 가산 백색 가우시안 잡음 채널입니다. SNR은 해당 채널 대역 안의 수신 신호 전력과 잡음 전력의 비를 dB로 입력합니다. 이상적인 충분히 긴 부호화를 가정한 한계로, 프로토콜 오버헤드·유한 부호 길이·페이딩·간섭을 포함한 실제 처리량은 아닙니다. 다른 대역폭의 SNR을 그대로 재사용하지 마세요.",
  "assumptions_en": "Required: a band-limited additive white Gaussian noise channel under an average-power constraint. Enter the received signal-power to noise-power ratio within that same channel bandwidth in dB. The result is a theoretical coding limit. Excluded: protocol overhead, finite coding length, fading and interference. An SNR measured over a different bandwidth must be adjusted before use.",
  "sources": [
    {
      "label": "MIT OpenCourseWare — 6.451, Chapter 3: Capacity of AWGN channels",
      "url": "https://ocw.mit.edu/courses/6-451-principles-of-digital-communication-ii-spring-2005/bb895c1dee9ce0b39d6846e0aa984981_MIT6_451S05_FullLecNotes.pdf"
    }
  ],
  "condition": "대역 제한 AWGN 모델과 같은 대역의 수신 SNR을 확인했습니다.",
  "condition_en": "I have checked the band-limited AWGN model and the received SNR over the same bandwidth.",
  "output_unit": "Mbps",
  "site": "https://nanalab.kr/eng-shannon-capacity/",
  "repository": "https://github.com/NaNaCompany/eng-shannon-capacity",
  "groups": []
};
