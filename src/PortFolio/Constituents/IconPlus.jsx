import { ReactComponent as PlusSVG } from './avatar.svg';

const IconPlus = ({ className, style, ...rest }) => {
  return <PlusSVG className={className} style={style} {...rest} />;
};

export default IconPlus;
