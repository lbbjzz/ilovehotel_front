import '/styles/pages/details/carousel-detail.scss'
import ihHeader from "@/components/common/ihheader";
import {getCityDetail} from "@/api/details/carousel-details";
import {getRoomTypeByCityId} from "@/api/home/room-class";

export default {
  name: "carousel-detail",
  components: {
    ihHeader
  },
  data() {
    return {
      cityId: '',
      cityDetails: {},
      releaseY: '',
      releaseM: '',
      releaseD: '',
      content: [],
      cityPush: [],
      image: '',
      name: '',
      roomTypeName: '',
      roomTypeId: ''
    }
  },

  created() {
    this.cityId = this.$route.query.id
    this.getRoomTypeByCityIdM()
    this.getCityDetailM()
  },

  methods: {
    getCityDetailM() {
      getCityDetail(this.cityId).then(res => {
        this.cityDetails = res.data.data
        this.releaseY = res.data.data.releaseTime.substr(0, 4)
        this.releaseM = res.data.data.releaseTime.substr(4, 2)
        this.releaseD = res.data.data.releaseTime.substr(6, 2)
        let half = Math.ceil(res.data.data.content.length / 2);
        this.content.push(res.data.data.content.substr(0, half))
        this.content.push(res.data.data.content.substr(half + 1))
        // console.log(this.content, 'cityDetails')
      })
    },

    getRoomTypeByCityIdM() {
      getRoomTypeByCityId(this.cityId).then(res => {
        // console.log(res, 'cityId')
        this.cityPush = res.data.data
        this.image = res.data.data[0].url[0]
        this.name = res.data.data[0].cityName
        this.roomTypeName = res.data.data[0].roomTypeName
        this.roomTypeId = res.data.data[0].roomTypeId
        // console.log(this.cityPush, 'city')
      })
    },

    toOrder() {
      this.$router.push({
        name: 'details-room-details',
        query: {
          id: this.roomTypeId
        }
      })
    }
  }
}
