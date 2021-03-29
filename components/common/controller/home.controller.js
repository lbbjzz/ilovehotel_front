import '@/styles/pages/home/home.scss'
import {getCarousel} from "@/api/home";
import hotelClass from '@/components/home/hotel-class'
import roomClass from '@/components/home/room-class'


export default {
  name: "home",
  components: {
    hotelClass,
    roomClass
  },
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
