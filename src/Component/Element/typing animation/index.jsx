import { TypeAnimation } from 'react-type-animation';
 
const TypingAnimation = () => {
  return (
    <TypeAnimation
  sequence={[
    'Front-End Developer', 
    1000, 
    'English Education Student', 
    2000, 
    '', 
    3000, 
  ]}
  wrapper="span"
  cursor={true}
  repeat={Infinity}
  style={{
    fontSize: '1.5em', 
    display: 'inline-block', 
    backgroundColor: '#9C92A3', 
    color: 'black', 
    padding: '10px', 
    borderRadius: '10px', 
    boxShadow: '0px 0px 10px rgba(0,0,0,0.2)'
  }}
/>
  );
};

export default TypingAnimation;


