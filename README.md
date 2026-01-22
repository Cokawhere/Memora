# Memora 💍

React Native mobile app for discovering and saving occasion decorations (engagements, katb el ketab, birthdays, baby showers, graduations, anniversaries, etc.).

Built with clean code, beautiful UI inspired by Pinterest, and smooth performance .

## Screenshots

<table>
  <tr>
     <td align="center">
      <img src="assets/screens/splash.png" width="300" alt="Login"/>
      <br><sub><b>Splash Screen </b></sub>
    </td>
    <td align="center">
      <img src="assets/screens/home.png" width="300" alt="Home Screen"/>
      <br><sub><b>Home Screen</b></sub>
    </td>
    <td align="center">
      <img src="assets/screens/favpage.png" width="300" alt="Favorites"/>
      <br><sub><b>Favorites</b></sub>
    </td>
  </tr>
  <tr>
    <td align="center">
      <img src="assets/screens/occasionGrid2.png" width="300" alt="Artist Songs"/>
      <br><sub><b> Occasion grid </b></sub>
    </td>
    <td align="center">
      <img src="assets/screens/occasionGrid1.png" width="300" alt="Artist Songs Variant"/>
      <br><sub><b>Occasion grid</b></sub>
    </td>
    <td align="center">
      <img src="assets/screens/productDetails7.png" width="300" alt="Artist Songs Variant"/>
      <br><sub><b>Product details</b></sub>
    </td>
  </tr>
  <tr>
    <td align="center">
      <img src="assets/screens/productDetails2.png" width="300" alt="Artist Songs Variant"/>
      <br><sub><b>Product details</b></sub>
    </td>
    <td align="center">
      <img src="assets/screens/emfavpage.png" width="300" alt="Favorites"/>
      <br><sub><b> Empty Favorites</b></sub>
    </td>
     <td align="center">
      <img src="assets/memora-demo.gif" width="300" alt="Memora Demo GIF"/>
      <br><sub><b> Demo in Action</b></sub>
    </td>
  </tr>
</table>

## Core Features

- Browse occasions with elegant grid cards
- Pinterest-style masonry grid for products per occasion
- Full-screen product details with dynamic image aspect ratio
- Save / unsave favorite decorations (persistent across sessions)
- Smooth navigation & splash screen
- Clean, reusable components & custom hooks

## Tech & Implementation Highlights

| Technology / Pattern                | Description                                                                    | 
| ----------------------------------- | ------------------------------------------------------------------------------ |
| **Expo + Dev Client**               | Built & run using `expo-dev-client` for native modules support                 |          |
| **React Navigation — Native Stack** | `@react-navigation/native-stack` for smooth, native-feeling screen transitions |
| **Custom Hook: useFavorites**       | Manages favorites list + AsyncStorage persistence                              | 
| **AsyncStorage** (local storage)    | Persistent favorites (can be swapped later with MMKV for speed)                | 
| **FlashList (masonry)**             | `@shopify/flash-list` with `masonry={true}` & `numColumns={2}`                 | 
| **Dynamic Image Aspect Ratio**      | `Image.getSize()` + `aspectRatio` style to prevent stretching                  | 
| **Splash Screen**                   | Customized via `expo-splash-screen` + `app.json` config                        | 
| **Consistent Theming**              | Central `colors.js` file + shadow/text effects for elegant UI                  | 
| **Pinterest-inspired Design**       | Rounded corners, overlays, text shadows, masonry layout, big hero images       | 
