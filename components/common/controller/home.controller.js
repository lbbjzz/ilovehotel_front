import '@/styles/pages/home/home.scss'
import {getCarousel} from "@/api/home";


export default {
  name: "home",
  data() {
    return {
      imgList: []
    }
  },
  created() {
    this.getCarouselM()
  },
  methods: {
    getCarouselM() {
      getCarousel().then(res => {
        // console.log(res, 'carousel')
        this.imgList = res.data.data
      })
    }
  }
}
