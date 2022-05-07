import { useSpring, animated } from 'react-spring';

export default function MenuIcon({showMenu, setShowMenu}) {

  const props = useSpring({ to: {transform: showMenu ? "scaleX(1) translate(0px, 0px) rotate(42deg)" : "scaleX(1) translate(0px, 0px) rotate(0deg)"}, from: {transform: "scaleX(1) translate(0px, 0px) rotate(0deg)" } })
  const props2 = useSpring({ to: {opacity: showMenu ? 0 : 1}, from: {opacity: 1}})/* ({ to: {transform: "translate(10px, 0px) "}, from: {transform: "translate(0px, 0px) " } }) */
  const props3 = useSpring({ to: {transform: showMenu ?"scaleX(1) translate(-12px, 8px) rotate(-43deg)": "scaleX(1) translate(0px, 0px) rotate(0deg)" }, from: {transform: "scaleX(1) translate(0px, 0px) rotate(0deg)" } })



  return (
      <button className="menu-icon" onClick={() => setShowMenu()}>
        <svg width="30" height="22" className='m-2' >
          <animated.rect style={props} width="30" height="2" rx="2" />
          <animated.rect style={props2} y="8" width="30" height="2" rx="2"/>
          <animated.rect style={props3} y="17" width="30" height="2" rx="2"/>
        </svg>
      </button>

  )
}