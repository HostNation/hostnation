export default (props$, push) =>
  props$('onMouseMove', 'onMouseLeave', (onMouseMove, onMouseLeave) => ({
    onMouseMove: undefined,
    onMouseLeave: undefined,
    hoverProps: {
      onMouseMove: e =>
        push({ isHovered: true }) || (onMouseMove && onMouseMove(e)),
      onMouseLeave: e =>
        push({ isHovered: false }) || (onMouseLeave && onMouseLeave(e)),
    },
    isHovered: false,
  }));