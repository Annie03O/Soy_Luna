import "../../styles/Header/Hamburger.css"
export const Hamburger = ({isOpen} : {isOpen: boolean}) => {
  return (
    <>
      <section className="hamburger">
        <span className="burger burger1"></span>
        <span className="burger burger2"></span>
        <span className="burger burger3"></span>
      </section>
      <style>{`
      @media (max-width: 767px) {
        .hamburger {
          display: flex;
          position: relative;
          width: 2rem;
          height: 2rem;
          justify-content: space-around;
          flex-flow: column nowrap;
          z-index: 10;
        }
        .burger {
            background-color: #f4e911;
            width: 2rem;
            height: 0.25rem;
            border-radius: 10px;
            transform-origin: 1px;
            transition: all 0.3s linear;
        }
        .burger1 {
          transform: ${isOpen ? 'rotate(45deg)' : 'rotate(0)' };
        }
        .burger2 {
          transform: ${isOpen ? 'translateX(100%)' : 'translateX(0)'};
          opacity: ${isOpen ? 0 : 1}
        }
        .burger3 {
          transform: ${isOpen ? 'rotate(-45deg)' : 'rotate(0)'};
        }
      }
      `}
      </style>
    </>
  )
}