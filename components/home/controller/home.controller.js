import '~/styles/pages/home/home.scss'
import {getCarousel, getCityList} from "~/api/home/home";
import hotelClass from '~/components/home/hotel-class'
import roomClass from '~/components/home/room-class'


export default {
  name: "home",
  components: {
    hotelClass,
    roomClass
  },
  data() {
    return {
      cityList: []
    }
  },
  created() {
    this.getCityListM()
  },
  methods: {
    // getCarouselM() {
    //   getCarousel().then(res => {
    //     // console.log(res, 'carousel')
    //     this.imgList = res.data.data
    //   })
    // }

    getCityListM() {
      getCityList().then(res => {
        // console.log(res)
        this.cityList = res.data.data.records
      })
    },

    toDetails(val) {
      // console.log(val, 'id')
      this.$router.push({
        name: 'details-carousel-details',
        query: {
          id: val
        }
      })
    }
  }
}
