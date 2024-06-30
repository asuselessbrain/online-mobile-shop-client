import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import slider1 from "../../../assets/images/slider/sider1.png"
import slider2 from "../../../assets/images/slider/slider2.png"
import slider3 from "../../../assets/images/slider/slider3.png"
import slider4 from "../../../assets/images/slider/slider4.png"

const Banner = () => {
    const [sliderRef] = useKeenSlider(
        {
          loop: true,
        },
        [
          (slider) => {
            let timeout
            let mouseOver = false
            function clearNextTimeout() {
              clearTimeout(timeout)
            }
            function nextTimeout() {
              clearTimeout(timeout)
              if (mouseOver) return
              timeout = setTimeout(() => {
                slider.next()
              }, 2000)
            }
            slider.on("created", () => {
              slider.container.addEventListener("mouseover", () => {
                mouseOver = true
                clearNextTimeout()
              })
              slider.container.addEventListener("mouseout", () => {
                mouseOver = false
                nextTimeout()
              })
              nextTimeout()
            })
            slider.on("dragStarted", clearNextTimeout)
            slider.on("animationEnded", nextTimeout)
            slider.on("updated", nextTimeout)
          },
        ]
      )
    return (
        <div ref={sliderRef} className="keen-slider">
        <div className="keen-slider__slide number-slide1"><img src={slider2} alt="" /></div>
        <div className="keen-slider__slide number-slide2"><img src={slider3} alt="" /></div>
        <div className="keen-slider__slide number-slide3"><img src={slider1} alt="" /></div>
        <div className="keen-slider__slide number-slide3"><img src={slider4} alt="" /></div>
      </div>
    );
};

export default Banner;