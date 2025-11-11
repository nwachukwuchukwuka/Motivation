// module.exports = function (api) {
//     api.cache(true);
//     return {
//       presets: [
//         ["babel-preset-expo", { jsxImportSource: "nativewind" }],
//         "nativewind/babel",
//       ],
//     };
//   };


module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      ["babel-preset-expo", { jsxImportSource: "nativewind" }],
      "nativewind/babel",
    ],
    plugins: [
      // 👇 ADD THIS LINE AT THE END (must always be last)
      "react-native-reanimated/plugin",
    ],
  };
};
