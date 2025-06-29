# 📋 React-Native Base App – To-Do List

> **Legend**  
> ✅ Done | 🔄 In progress | ⬜ Not started

---

## 0. Project Bootstrap & Tooling

- ✅ Init project with **react-native 0.79** (Community CLI)
- ✅ Adopt **Atomic Design** folder layout
- ✅ Configure **TypeScript** (`tsconfig.json`)
- ✅ Add **ESLint** + **Prettier**
- 🔄 Add **Husky** pre-commit hook to run lint / type-check

---

## 1. Core Architecture & State Management

- ✅ Install & wire **MobX 6 + mobx-react-lite**
    - ✅ `rootStore`, `themeStore`, `userStore`
- ⬜ Persistence layer → see **Section 4**

---

## 2. Theming (Material 3, react-native-paper v5)

| Task                                                        | Light / Dark   | Custom      |
|-------------------------------------------------------------|----------------|-------------|
| Extend MD3 theme files (`light.ts`, `dark.ts`, `custom.ts`) | ✅              | ⬜           |
| `useAppTheme` hook wrapping `useTheme()`                    | ✅              | ✅           |
| `ThemeProvider` + StatusBar sync                            | ✅              | 🔄 (custom) |
| User-facing toggle(s)                                       | ✅ (light/dark) | ⬜ create UI |

---

## 3. Navigation

- ✅ **React Navigation v7** (bottom-tabs + native-stack)
- ✅ Two stacks (Home, Settings) with icons
- ⬜ Add **deep-linking** (URI scheme / intent-filter)
- ⬜ TS-safe param types

---

## 4. Persistence & Secure Storage

- ✅ Setup **@react-native-async-storage/async-storage**
- ⬜ Hydrate `rootStore` at launch
- ⬜ Throttle-save (`autorun` + `debounce`)
- ⬜ Secure **JWT / refresh token** with **react-native-keychain**
- ⬜ Decide on **migration strategy** for breaking store changes

---

## 5. Authentication Flow

- ⬜ MD3-compliant Login & Sign-up screens
- ⬜ Plug custom icon set (`react-native-vector-icons`)
- ⬜ API wiring → `POST /auth/login`, `POST /auth/register`
- ⬜ Progressive profile completion (email verify, extra fields)
- ⬜ Optional biometric login

---

## 6. Networking / API Layer

- ✅ Choose pattern (**RTK Query**, **axios service + hooks**, **react-query**)
- ✅ Base client with interceptors (JWT, 401 refresh)
- ✅ Reusable `useApi` hook
- ⬜ Generic feedback utility (toast / snackbar / modal) with a `type` prop
- ⬜ Error boundary component

---

## 7. Responsiveness & Device Adaptation

- ⬜ Adopt **react-native-stylex** or `StyleSheet` helpers for spacing scale
- ⬜ Use **`react-native-responsive-dimensions`** or `%`/`vw` units
- ⬜ Tablet / desktop-mode landscape layouts
- ⬜ Test on small-screen (<360dp) & foldables

---

## 8. Constants & Design Tokens

- ✅ `src/lib/constants` for spacing, radii, fontSizes
- 🔄 Replace hard-coded sizes with tokens
- ⬜ Generate tokens from a single source (e.g. Style-Dictionary)

---

## 9. Localization (i18n)

- ✅ Set up **i18next** with JSON language files
- ✅ Language switcher UI (Settings → Language)
- ✅ Persist user choice to Async-Storage
- ⬜ RTL support check (Arabic / Hebrew mock)

---

## 10. Branding & Assets

- ⬜ **Splash-screen** (e.g. npx generate-splash)
- ⬜ **App-icon** generator script (512 × 512 master → all sizes)
- ⬜ Adaptive-icon foreground/background for Android 12+

---

## 11. Backlog / Nice-to-Have

- GitHub Actions workflow → lint, Jest, Android build
- Detox E2E flow for Login
- Android release signing config & Play-Store upload
- **Feature-flag toggle UI** for QA builds
- **react-native-Flipper + perf plugins**
- Sentry crash/error reporting
