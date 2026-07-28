import useWindowSize from "../Hooks_28-07-2026/useWindowSize";

function WindowSize() {
  const { width, height } = useWindowSize();

  return (
    <div>
      <h2>Window Size</h2>

      <h3>Width : {width}px</h3>

      <h3>Height : {height}px</h3>
    </div>
  );
}

export default WindowSize;