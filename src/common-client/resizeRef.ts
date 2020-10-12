import * as throttle from 'lodash.throttle';
import * as elementResizeDetector from 'element-resize-detector';

const resizeDetector =
  typeof document !== 'undefined'
    ? elementResizeDetector({ strategy: 'scroll' })
    : null;

const getSize = (elem, bounds?) => {
  if (!elem) return {};
  if (!bounds) {
    return (({ width, height }) => ({ width, height }))(
      elem.getBoundingClientRect(),
    );
  }
  return (({ top, height, left, width }) => ({ top, height, left, width }))(
    elem.getBoundingClientRect(),
  );
};

export default (onChange, bounds?) => {
  let sizeElem: HTMLElement | null = null;
  const update = throttle(e => {
    if (e === sizeElem) onChange(getSize(e, bounds));
  }, 50);
  onChange(getSize(null, bounds));
  return Object.assign(
    (elem: HTMLElement | null) => {
      if (sizeElem) {
        const temp = sizeElem;
        setTimeout(() => resizeDetector.removeListener(temp, update));
      }
      sizeElem = elem;
      if (sizeElem) resizeDetector.listenTo(sizeElem, update);
    },
    { noCache: true },
  );
};
