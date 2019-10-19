export const dotStyleNoActive = {
  height: "15px",
  width: "15px",
  borderRadius: "50%",
  display: "inline-block",
  zIndex: "100",
  cursor: "pointer",
  backgroundColor: "#bbb"
};

export const dotStyleActive = {
  height: "15px",
  width: "15px",
  borderRadius: "50%",
  display: "inline-block",
  zIndex: "100",
  cursor: "pointer",
  backgroundColor: "rgb(17, 233, 255)"
};

export const dotsComponent = {
  display: "inline-flex",
  position: "relative",
  left: "50%",
  transform: "translateX(-50%)",
  paddingBottom: "10px"
};

export const dotHolderStyle = {
  margin: "0 10px 0 10px",
  zIndex: "100"
};

export const arrowLeftHolderStyle = {
  position: "absolute",
  height: "100%",
  zIndex: "10",
  left: "2%"
};

export const arrowRightHolderStyle = {
  position: "absolute",
  height: "100%",
  zIndex: "10",
  right: "2%"
};

export const leftArrowStyle = {
  height: "60px",
  width: "60px",
  position: "relative",
  top: "45%",
  border: "9px solid rgb(220, 220, 220)",
  borderWidth: "0 0 9px 9px",
  cursor: "pointer",
  left: "2%",
  transform: "rotate(45deg)"
};

export const rightArrowStyle = {
  height: "60px",
  width: "60px",
  position: "relative",
  top: "45%",
  border: "9px solid rgb(220, 220, 220)",
  borderWidth: "0 0 9px 9px",
  cursor: "pointer",
  right: "2%",
  transform: "rotate(calc(180deg + 45deg))"
};

export const elementsStyle = {
  display: "flex",
  flexDirection: "row",
  flex: "1 0 100%",
  padding: "20px 60px"
};

export const contentStyle = (speed, currPage) => {
  return {
    display: "flex",
    flexDirection: "row",
    flex: "1 0 100%",
    transition: `all ${speed}ms ease`,
    transform: `translateX(-${currPage * 100}%)`,
    position: "relative"
  };
};

export const progressBar = {
  outerStyle: {
    display: "block",
    position: "absolute",
    backgroundColor: "#2388c3",
    width: "100%",
    height: "10px"
  },
  innerStyle: (progress, speed) => {
    return {
      display: "block",
      position: "relative",
      top: "50%",
      backgroundColor: "#3f51b5",
      transform: `translateY(-50%) translateX(-${progress}%)`,
      transition: `all ${speed}ms ease`
    };
  }
};
