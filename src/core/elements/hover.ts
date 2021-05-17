import st from '../style-transform';
import { useHover } from '../utils';

export default ({ children, style = {} }) => {
  const [isHovered, hoverProps] = useHover();
  return children({
    isHovered,
    hoverProps,
    style: st(style).mergeKeys({ hover: isHovered }),
  });
};
