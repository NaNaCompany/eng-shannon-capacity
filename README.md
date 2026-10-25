# 섀넌 채널 용량 계산기

대역폭과 수신 SNR로 대역 제한 AWGN 채널의 섀넌 이론 용량 계산.

- ID: E145
- App: https://nanalab.kr/eng-shannon-capacity/
- Repository: https://github.com/NaNaCompany/eng-shannon-capacity
- Formula: C = B log₂(1 + 10^(SNR_dB/10))

## Model and data

평균 전력 제한을 둔 대역 제한 가산 백색 가우시안 잡음 채널입니다. SNR은 해당 채널 대역 안의 수신 신호 전력과 잡음 전력의 비를 dB로 입력합니다. 이상적인 충분히 긴 부호화를 가정한 한계로, 프로토콜 오버헤드·유한 부호 길이·페이딩·간섭을 포함한 실제 처리량은 아닙니다. 다른 대역폭의 SNR을 그대로 재사용하지 마세요.

Inputs normalize to SI. Repeated-input models support adding/removing actual input rows. Calculations, finite-number checks and physical-domain checks run locally; no external property database or solver API is used.

## Validation

Run node --test tests/*.test.mjs and python scripts/build-locales.py --check. tests/reference.json contains independently computed high-precision default and boundary references. The source notices distinguish original MIT work from citation-only external references.

## Static languages

Korean (existing root), English (`en/`), Spanish (`es/`), Simplified Chinese (`zh/`), Japanese (`ja/`) and German (`de/`). Each page has its own canonical URL, reciprocal hreflang, localized metadata, interface, validation messages and preview image. The language links work without JavaScript. Calculation code is shared and no runtime translation API is used.

Edit `localization/*.json` for text, `src/template.html` for the shared page, and run `python scripts/build-locales.py`. Run `python scripts/build-locales.py --check` and `npm test` before publishing. Decimal commas are accepted in Spanish and German; thousands separators are not supported.
