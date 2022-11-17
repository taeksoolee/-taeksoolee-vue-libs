module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: { 
          // node: '10'
          browsers: ["last 2 versions", ">= 5% in KR"]
        },
        useBuiltIns: 'usage',
        corejs: 3
      },
    ],
    // '@babel/typescript',
  ],
};