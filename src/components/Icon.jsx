import * as icons from 'react-bootstrap-icons';


const Icon = ({ icon, ...props }) => {
  const BootstrapIcon = icons[icon];
  return BootstrapIcon && <BootstrapIcon {...props} />; // Handle potential undefined
};

export default Icon;
