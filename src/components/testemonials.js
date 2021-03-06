import { gsap, TweenLite, Power3, TimelineLite, TweenMax } from "gsap/all"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(TweenLite, Power3, ScrollTrigger, TimelineLite, TweenMax)

const testimonials = [
  {
    name: "Collection",
    title: "001",
    image: `${require("../images/photo.jpg").default}`,
    quote: "As individual as you.",
  },
  {
    name: "Quality",
    title: "002",
    image: `${require("../images/photo2.jpg").default}`,
    quote: "Dress good, you deserve it",
  },
  {
    name: "Texture",
    title: "003",
    image: `${require("../images/photo3.jpg").default}`,
    quote: "Expect more from your clothes.",
  },
]

let imageList = useRef(null)
let testimonialList = useRef(null)
const imageWidth = 340

const [state, setState] = useState({
  isActive1: true,
  isActive2: false,
  isActive3: false,
})

useEffect(() => {
  TweenLite.to(testimonialList.children[0], 0, {
    opacity: 1,
  })
}, [])

//Image transition
const slideLeft = (index, duration, multiplied = 1) => {
  TweenLite.to(imageList.children[index], duration, {
    x: -imageWidth * multiplied,
    ease: Power3.easeOut,
  })
}

const slideRight = (index, duration, multiplied = 1) => {
  TweenLite.to(imageList.children[index], duration, {
    x: imageWidth * multiplied,
    ease: Power3.easeOut,
  })
}

const scale = (index, duration) => {
  TweenLite.from(imageList.children[index], duration, {
    scale: 1.2,
    ease: Power3.easeOut,
  })
}

//Content transition

const fadeOut = (index, duration) => {
  TweenLite.to(testimonialList.children[index], duration, {
    opacity: 0,
  })
}

const fadeIn = (index, duration) => {
  TweenLite.to(testimonialList.children[index], duration, {
    opacity: 1,
    delay: 1,
  })
}

const nextSlide = () => {
  if (imageList.children[0].classList.contains("active")) {
    setState({ isActive1: false, isActive2: true })
    //Image transition
    slideLeft(0, 1)
    slideLeft(1, 1)
    scale(1, 1)
    slideLeft(2, 1)
    slideLeft(2, 0)
    fadeOut(0, 1)
    fadeIn(1, 1)
  } else if (imageList.children[1].classList.contains("active")) {
    setState({ isActive2: false, isActive3: true })
    //Image transition
    slideRight(0, 1)
    slideLeft(1, 1, 2)
    slideLeft(2, 1, 2)
    scale(2, 1)
    //content transition
    fadeOut(1, 1)
    fadeIn(2, 1)
  } else if (imageList.children[2].classList.contains("active")) {
    setState({ isActive1: true, isActive3: false })
    //Image transition
    slideLeft(2, 1, 3)
    slideLeft(0, 1, 0)
    slideLeft(1, 0, 0)
    scale(0, 1)
    //content transition
    fadeOut(2, 1)
    fadeIn(0, 1)
  }
}

const prevSlide = () => {
  if (imageList.children[0].classList.contains("active")) {
    setState({ isActive1: false, isActive3: true })
    //Image transition
    slideLeft(2, 0, 3)
    slideLeft(2, 1, 2)
    scale(2, 1)
    slideRight(0, 1)
    slideRight(1, 1)
    //content transtion
    fadeOut(0, 1)
    fadeIn(2, 1)
  } else if (imageList.children[1].classList.contains("active")) {
    setState({ isActive2: false, isActive1: true })
    //Image transition
    slideLeft(0, 0)
    slideRight(0, 1, 0)
    slideRight(1, 1, 0)
    slideRight(2, 1, 2)
    scale(0, 1)
    //content transtion
    fadeOut(1, 1)
    fadeIn(0, 1)
  } else if (imageList.children[2].classList.contains("active")) {
    setState({ isActive2: true, isActive3: false })
    slideLeft(2, 1)
    slideLeft(1, 0, 2)
    slideLeft(1, 1)
    scale(1, 1)
    //content transtion
    fadeOut(2, 1)
    fadeIn(1, 1)
  }
}