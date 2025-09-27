function clipPathCorners(cornerSize: string) {
  return `polygon(
    ${cornerSize} 0%, 
    calc(100% - ${cornerSize}) 0%, 
    100% ${cornerSize}, 
    100% calc(100% - ${cornerSize}), 
    calc(100% - ${cornerSize}) 100%, 
    ${cornerSize} 100%, 
    0% calc(100% - ${cornerSize}), 
    0% ${cornerSize}
  )`;
}

export { clipPathCorners };
